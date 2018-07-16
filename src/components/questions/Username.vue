<template>
    <div class="username question">
        <!-- 默认展示模块 start -->
        <div class="show_question" v-if="!isEdit">
            <div class="question_header">
                <i v-if="required">*</i>
                <span class="title">{{ title }}</span>
            </div>
            <div class="user-name-box">
                <div class="cho">
                    <i class="iconfont icon-icon-person" v-if="type=='username'"></i>
                    <i class="iconfont icon-shouji" v-else-if="type=='mobile'"></i>
                    <i class="iconfont icon-youxiang" v-else-if="type=='email'"></i>
                    <input type="text" class="user-name">
                </div>
            </div>
        </div>
        <!-- 默认展示模块 end -->
        <!-- 编辑时展示 start-->
        <div class="edit_question" v-else>
            <div class="question_header">
                <i v-if="required">*</i>
                <EditTitle  v-model='title2' type='title' edit="no"></EditTitle>
            </div>
            <div class="user-name-box">
                <i class="iconfont icon-icon-person" v-if="type=='username'"></i>
                <i class="iconfont icon-shouji" v-else-if="type=='mobile'"></i>
                <i class="iconfont icon-youxiang" v-else-if="type=='email'"></i>
            </div>
            <div class="bottom">
                <div class="right">
                   <div class="elective" @click="required2 = !required2">
                        <i class="iconfont icon-fangxingweixuanzhong" v-if="required"></i>
                        <i class="iconfont icon-fangxingxuanzhongfill" v-else></i>
                        <span>选填</span>
                    </div>
                    <i class="iconfont icon-shanchu" @click.stop="del">
                       <div class="remove hover-btn">移除<i class="triangle"></i></div>
                    </i>
                    <i class="iconfont icon-move">
                       <div class="remove hover-btn">排序<i class="triangle"></i></div>
                    </i>
                </div>
            </div>
        </div>
        <!-- 编辑时展示 end-->
    </div>
</template>
<script>
export default {
    name: 'username',
    props:{
        title    :{type:String},
        type     :{type:String},
        required :{type:Boolean},
        isEdit   :{type:Boolean},
        sort     :{type:[Number,String]},
    },
    data () {
        return { 
            required2 : this.required,
            title2    : this.title,
            isEmpty   : false,
        }
    },
    components: {
        EditTitle : ()=> import('./EditTitle.vue'), //标题，选项输入框 
    },
    watch:{
        // 更新题目标题
        title2 (newv,oldv){
            if(newv.length<=0){
                this.isEmpty = true;
            }else{
                 this.isEmpty = false;
            }
            this.$emit('update:title', newv)
        },
        required2 (newv,oldv){
            this.$emit('update:required', newv)
        },
        isEdit (newv,oldv){
            let _self = this;
            if(newv==false){
                if(_self.isEmpty==true){
                    _self.$emit('update:isEdit', true)
                    return false;
                }
            }
        }
    },
    methods:{
        // 删除当前组件
        del (){
            this.$emit('del',this.sort)
        },
    },
    mounted() {},
}
</script>
<style lang="less">

</style>
