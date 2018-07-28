<template>
    <div id="drag">
        <h2 @click="send">查看提交数据</h2>
        <div class="q-top">
            <EditTitle v-model='questionTitle' class="q-title" type="qtitle"></EditTitle>
            <EditTitle v-model='questionDesc' class="q-desc" type="qdesc"></EditTitle>
        </div>
        <!-- 问卷描述 -->
        <!-- 左侧预览区域 start-->
        <div id="drag-left">
            <img src="@/assets/guide.jpg" class="guide-img" v-if="list2.length<=0">
            <draggable class="drag-left-wrap" element="div" v-model="list2" :options="leftOptions" @start="isDragging=true" @end="isDragging=false" @change="listChanged">
                <transition-group type="transition" class="list-group" :name="'flip-list'" tag="div">
                    <div class="list-group-item" v-for="(item,index) in list2" :key="index" @click="editQuestion(index)">
                        <!-- 单选多选 -->
                        <Choice v-if="item.type=='multiple' || item.type=='single'" v-bind.sync="item"></Choice>
                        <!-- 简答 -->
                        <Essay v-else-if="item.type=='essay'" v-bind.sync="item"></Essay>
                        <!-- 用户名、性别、评分 -->
                        <Username v-else-if="item.type=='username' || item.type=='email' || item.type=='mobile'" v-bind.sync="item"></Username>
                        <Sex v-else-if="item.type=='sex'" v-bind.sync="item"></Sex>
                        <Star v-else-if="item.type=='grade'" v-bind.sync="item"></Star>
                    </div>
                </transition-group>
            </draggable>
        </div>
        <!-- 左侧预览区域 end-->
        <!-- 右侧浮窗 start-->
        <draggable id="drag-right" element="div" v-model="list" :options="rightOptions" :clone="clone" @start="isDragging=true" @end="isDragging=false">
            <transition-group name="no" class="list-group" tag="ul">
                <li v-for="(item,index) in list" :key="index">
                    <i class="iconfont icon-danxuan" v-if="item.type=='single'"></i>
                    <i class="iconfont icon-duoxuan" v-else-if="item.type=='multiple'"></i>
                    <i class="iconfont icon-wenda" v-else-if="item.type=='essay'"></i>
                    <i class="iconfont icon-xingxing1" v-else-if="item.type=='grade'"></i>
                    <i class="iconfont icon-icon-person" v-else-if="item.type=='username'"></i>
                    <i class="iconfont icon-ico-sex" v-else-if="item.type=='sex'"></i>
                    <i class="iconfont icon-shouji" v-else-if="item.type=='mobile'"></i>
                    <i class="iconfont icon-youxiang" v-else-if="item.type=='email'"></i>
                    <span>{{item.title}}</span>
                </li>
            </transition-group>
        </draggable>
        <!-- 右侧浮窗 end-->
    </div>
</template>
<script>
import draggable from 'vuedraggable'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Drag',
    components: {
        draggable,
        Choice: () =>
            import ('./questions/Choice.vue'), //单选和多选 
        Essay: () =>
            import ('./questions/Essay.vue'), //简答 
        Username: () =>
            import ('./questions/Username.vue'), //姓名 
        Sex: () =>
            import ('./questions/Sex.vue'), //性别 
        Star: () =>
            import ('./questions/Star.vue'), //评分 
        EditTitle: () =>
            import ('./questions/EditTitle.vue'), //标题，选项输入框 
    },
    data() {
        return {
            editable: true, //拖动状态
            isDragging: false,
            delayedDragging: false,
            questionTitle: '调查问卷名称',
            questionDesc: '调查问卷描述',
            sendData: {}, //提交数据
            // 左、右侧浮窗拖动配置
            rightOptions: {
                animation: 0,
                group: { name: 'right', pull: 'clone', put: false },
                ghostClass: 'ghost',
                sort: false, //禁止排序
            },
            leftOptions: {
                animation: 0,
                group: 'right',
                ghostClass: 'ghost',
                sort: true,
                handle: ".icon-move",
            },
            debounce:null, 
        }
    },
    computed: {
        /**
         * list:右侧源数据
         * send：是否进行数据提交
         */
        ceshi (){
            let a = this.$store.state.ceshi;

            // return this.$i18n.t(a)
            return a
        },
        ...mapState(['list', 'sendState']),
        // 左侧创建数据
        list2: {
            get() {
                let test = this.$store.state.list2;
                test.map((item,index)=>{
                    this.langChange(item);
                    if(item.hasOwnProperty('choice')){
                        item.choice.map((item,index)=>{
                            this.langChange(item);
                        })
                    }
                    
                })
                return test
            },
            set(value) {
                this.updateList2(value);
            }
        }
    },
    methods: {
        langChange (item){
            if(item.title.substr(0,11) == '-soketrans-'){
                let lang = item.title.substr(11);
                item.title = this.$i18n.t(lang)
            }
            return item;
        },
        /**
         * mutation方法说明：
         *  updateList2：更新数据方法
         *  editQuestion：修改组件的编辑状态
         *  delComponent：删除组件
         *  updateSort：更新列表排序
         *  copyComponent：复制组件
         *  
         */
        ...mapMutations([
            'updateList2',
            'editQuestion',
            'delComponent',
            'updateSort',
            'copyComponent',
            'addList2'
        ]),
        // 深克隆方法
        deepClone(obj) {
            let newObj = obj instanceof Array ? [] : {};
            for (let i in obj) {
                if (obj.hasOwnProperty(i)) {
                    newObj[i] = typeof obj[i] == 'object' ? this.deepClone(obj[i]) : obj[i];
                }
            }
            return newObj;
        },
        // 深度克隆对象
        clone(original) {
            let deepObj = this.deepClone(original);
            return deepObj;
        },
        // 监听左侧列表数据变化，重置sort字段(此方法仅能监听到拖动后的数据改变)
        listChanged(e) {
            // this.editQuestion(e.newIndex);
            console.log(e);
            let addId = {
                moke:e.added.element,
                newIndex:e.added.newIndex
            }
            this.addList2(addId)
        },
        // 发送数据
        send() {
            clearTimeout(this.debounce);
            this.debounce = setTimeout(()=>{
                let obj = {
                    title: this.questionTitle,
                    desc: this.questionDesc,
                    list: this.list2
                }
                this.sendData = Object.assign({}, this.sendData, obj);
                console.log('发送数据');
            },500)
        }
    },
    watch: {
        isDragging(newValue) {
            if (newValue) {
                this.delayedDragging = true
                return
            }
            this.$nextTick(() => {
                this.delayedDragging = false
            })
        },
        list2: {
            handler(newv, oldv) {
                console.log('list2数据更新');
                // 每次数据更新发送数据
                // 题目编辑状态发生改变时，不进行数据更新请求及索引重排
                if (this.sendState) {
                    //更新索引
                    this.updateSort();
                    // this.send();
                    this.send();
                }
            },
            deep: true
        },
    },
    mounted() {
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import './less/questions.less';






















/*上线删除 start*/

* {
    margin: 0;
    padding: 0;
}

ul {
    list-style-type: none;
    padding: 0;
}






















/*上线删除 end*/

#drag {
    .q-top {
        padding: 20px 0;
        width: 700px;
        margin: 0 auto;
        .q-title,
        .q-desc {
            .input-title {
                color: #222;
                font-weight: bold;
                text-align: center;
                box-sizing: border-box;
                &:hover {
                    border-bottom: 1px solid #f0f0f0;
                }
            }
        }
        .q-title {
            .input-title {
                height: 38px;
                line-height: 37px;
                font-size: 20px;
            }
        }
        .q-desc {
            margin-top: 5px;
            .input-title {
                height: 25px;
                line-height: 24px;
                font-size: 14px;
                text-align: center;
            }
        }
    }

    #drag-left {
        position: relative;
        width: 700px;
        .guide-img {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            pointer-events: none;
        }
        .drag-left-wrap {
            width: 100%;
            min-height: 167px;
            .list-group {
                >li.sortable-chosen {
                    min-height: 167px;
                    border: 2px dashed orange;
                    list-style: none;
                    &>* {
                        display: none;
                    }
                }
            }
        }

        /*test code*/
        outline:1px dashed orange;
        margin: 0 auto;
    }
    #drag-right {
        position: fixed;
        top: 229px;
        right: 23px;
        width: 125px;
        background-color: #fff;
        box-shadow: 0 0 5px 3px rgba(162, 162, 162, 0.1);

        >ul {
            li {
                width: 100%;
                height: 50px;
                line-height: 50px;
                text-align: center;
                cursor: pointer;
                transition: background-color .3s;
                &:hover {
                    background-color: #ECF5FF;
                }
            }
        }
    }
    /* .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }  */
    .ghost {
        opacity: .5;
        background: #C8EBFB;
    }
    .list-group {
        min-height: 20px;
    }
    .list-group-item {
        transition: transform .3s;
    }
}

</style>
