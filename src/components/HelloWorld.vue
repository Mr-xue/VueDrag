<template>
    <div id="drag">
        <h2 @click="send">查看提交数据</h2>
        <!--  {{count}}--{{mergeName}}
   <button @click="xadd">+</button>
   <button @click="reduceAction">-</button> -->
        <div class="q-top">
            <!-- <input type="text" class="q-title" v-model="questionTitle"> -->
            <!-- <input type="text" class="q-desc" v-model="questionDesc"> -->
            <EditTitle v-model='questionTitle' class="q-title" type="qtitle"></EditTitle>
            <EditTitle v-model='questionDesc' class="q-desc" type="qdesc"></EditTitle>
        </div>
        <!-- 问卷描述 -->
        <!-- 左侧预览区域 start-->
        <div id="drag-left">
            <img src="@/assets/guide.jpg" class="guide-img" v-if="list2.length<=0">
            <draggable class="drag-left-wrap" element="div" v-model="list2" :options="leftOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false" @change="listChanged">
                <transition-group type="transition" class="list-group" :name="'flip-list'" tag="div">
                    <div class="list-group-item" v-for="(item,index) in list2" :key="index" @click="changeEdit(index)">
                        <Choice v-if="item.type=='multiple' || item.type=='single'" v-bind.sync="item" @del="delComponent" @copy="copyComponent"></Choice>
                        <Essay v-else-if="item.type=='essay'" v-bind.sync="item" @del="delComponent" @copy="copyComponent"></Essay>
                        <Username v-else-if="item.type=='username' || item.type=='email' || item.type=='mobile'" v-bind.sync="item" @del="delComponent" @copy="copyComponent"></Username>
                        <Sex v-else-if="item.type=='sex'" v-bind.sync="item" @del="delComponent" @copy="copyComponent"></Sex>
                        <Star v-else-if="item.type=='grade'" v-bind.sync="item" @del="delComponent" @copy="copyComponent"></Star>
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

            // 左侧题目显示
            list2: [
                //单选
                {
                    sort: 0,
                    title: '单选',
                    type: 'single', //题目类型
                    required: true, //此题是否必填
                    isEdit: false, //默认编辑状态
                    choice: [{
                            title: "选项1",
                            type: "normal", //标记选项类型（normal:普通选项、other其他选项）
                        },
                        {
                            title: "选项2",
                            type: "normal",
                        }
                    ]
                },
                // 多选
                {
                    sort: 1,
                    title: '多选',
                    type: 'multiple', //题目类型
                    required: true, //此题是否必填
                    isEdit: false,
                    choice: [{
                            title: "选项1",
                            type: "normal", //标记选项类型（normal:普通选项、other其他选项）
                        },
                        {
                            title: "选项2",
                            type: "normal", //标记选项类型（normal:普通选项、other其他选项）
                        },
                    ]
                },
                // 简答
                {
                    sort: 2,
                    title: '问答',
                    type: 'essay', //题目类型(姓名：username，手机：phone，邮箱：email)
                    required: true, //此题是否必填
                    isEdit: false,
                },
                // 姓名
                {
                    sort: 3,
                    title: '姓名',
                    type: 'username', //题目类型(姓名：username，手机：phone，邮箱：email)
                    required: true, //此题是否必填
                    isEdit: false,
                },
                // 手机
                {
                    sort: 4,
                    title: '手机',
                    type: 'mobile', //题目类型(姓名：username，手机：phone，邮箱：email)
                    required: true, //此题是否必填
                    isEdit: false,
                },
                // 邮箱
                {
                    sort: 5,
                    title: '邮箱',
                    type: 'email', //题目类型(姓名：username，手机：phone，邮箱：email)
                    required: true, //此题是否必填
                    isEdit: false,
                },
                // 性别
                {
                    sort: 6,
                    title: '性别',
                    type: 'sex', //题目类型(姓名：username，手机：phone，邮箱：email)
                    required: true, //此题是否必填
                    isEdit: false,
                },
                // 评分
                {
                    sort: 7,
                    title: '评分',
                    type: 'star', //题目类型(姓名：username，手机：phone，邮箱：email)
                    required: true, //此题是否必填
                    isEdit: false,
                },
            ]
        }
    },
    computed: {
        ...mapState(['list']),
    },
    methods: {
        /*   ...mapMutations({ xadd:'add'}),
           ...mapMutations(['reduce']),
           ...mapActions(['addAction','reduceAction']),
         */
        // 复制组件
        copyComponent(copyIndex) {
            let copyEle = this.list2.slice(copyIndex, copyIndex + 1);
            let newObj = this.deepClone(copyEle[0]);
            newObj.isEdit = false;
            this.list2.splice(copyIndex + 1, 0, newObj);
        },
        // 删除组件
        delComponent(deIndex) {
            // 删除组件后，取消编辑状态
            this.list2[deIndex].isEdit = false;
            this.list2.splice(deIndex, 1);

            // 对已有数据sort进行重排
            this.list2.map((item, index) => {
                item.sort = index;
                return item;
            });
        },
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
            /*let element = {}
            for (var key in original) {
              if(original.hasOwnProperty(key)) {
                if(typeof(original[key]) == 'object'){

                }else{
                  element[key] = original[key]
                }
              }
            }
            return element;*/
            let deepObj = this.deepClone(original);
            return deepObj;
        },
        // 监听左侧列表数据变化，重置sort字段(此方法仅能监听到拖动后的数据改变)
        listChanged(e) {
            /*this.list2.map((item,index)=>{
                item.sort = index;
                return item;
            });*/
        },
        onMove({ relatedContext, draggedContext }) {
            const relatedElement = relatedContext.element;
            const draggedElement = draggedContext.element;
            return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        },
        // 控制组件的编辑状态
        changeEdit(t) {
            let _self = this;
            _self.list2.map(function(item, index) {
                if (index == t) {
                    item.isEdit = true;
                } else {
                    item.isEdit = false;
                }
                return item;
            })
        },
        // 发送数据
        send() {
            let obj = {
                title: this.questionTitle,
                desc: this.questionDesc,
                list: this.list2
            }
            this.sendData = Object.assign({}, this.sendData, obj);
            console.log(this.sendData);
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
                this.list2.map((item, index) => {
                    item.sort = index;
                    return item;
                });
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
