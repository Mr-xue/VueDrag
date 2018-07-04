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
                <input type="text" placeholder="性别" :class="isEmpty ? 'title input-title title-empty':'title input-title'" v-model="title2">
                <div class="empty-msg" v-if="isEmpty">请输入题目<i class="triangle"></i></div>
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
                   <i class="iconfont icon-shanchu"></i>
                   <!-- <i class="iconfont icon-msnui-copy-file"></i> -->
                   <i class="iconfont icon-move"></i>
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
        
    },
    mounted() {},
}
</script>
<style lang="less">

</style>
