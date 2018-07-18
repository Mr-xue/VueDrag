<template>
    <div class="sex question">
        <!-- 默认展示模块 start -->
        <div class="show_question" v-if="!isEdit">
            <div class="question_header">
                <i v-if="required">*</i>
                <span class="title">{{ title }}</span>
            </div>
            <ul class="choice">
               <li>
                    <div class="normal" >
                        <i class="iconfont icon-yuanquanweixuanfuben"></i>
                        <span class="cho">男</span>
                    </div>
                </li>
                <li>
                    <div class="normal" >
                        <i class="iconfont icon-yuanquanweixuanfuben"></i>
                        <span class="cho">女</span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 默认展示模块 end -->
        <!-- 编辑时展示 start-->
        <div class="edit_question" v-else>
            <div class="question_header">
                <i v-if="required">*</i>
                <EditTitle  v-model='title2' type='title' edit="no"></EditTitle>
            </div>
            <ul class="choice">
                <li>
                    <div class="normal" >
                        <i class="iconfont icon-yuanquanweixuanfuben"></i>
                        <span class="cho">男</span>
                    </div>
                </li>
                <li>
                    <div class="normal" >
                        <i class="iconfont icon-yuanquanweixuanfuben"></i>
                        <span class="cho">女</span>
                    </div>
                </li>
            </ul>
            <div class="bottom">
                <div class="right">
                   <div class="elective" @click="required2 = !required2">
                        <i class="iconfont icon-fangxingweixuanzhong" v-if="required"></i>
                        <i class="iconfont icon-fangxingxuanzhongfill" v-else></i>
                        <span>选填</span>
                    </div>
                    <!-- 删除按钮 -->
                    <i class="iconfont icon-shanchu" @click.stop="del">
                       <div class="remove hover-btn">移除<i class="triangle"></i></div>
                    </i>
                    <!-- 复制按钮 -->
                    <i class="iconfont icon-msnui-copy-file" @click.stop="copy">
                        <div class="remove hover-btn">复制<i class="triangle"></i></div>
                    </i>
                    <!-- 拖动按钮 -->
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
    name: 'sex',
    props:{
        title    :{type:String},
        type     :{type:String},
        required :{type:Boolean},
        isEdit   :{type:Boolean},
        choice   :{type:Array},
        sort     :{type:[Number,String]},
    },
    components: {
        EditTitle : ()=> import('./EditTitle.vue'), //标题，选项输入框 
    },
    data () {
        return {
            title2     :this.title,
            choices    :this.choice,
            required2  :this.required,
            isEmpty    :false,
        }
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
        // 复制当前组件
        copy (){
            this.$emit('copy',this.sort)
        },
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
