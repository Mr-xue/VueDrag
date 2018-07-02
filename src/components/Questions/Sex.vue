<template>
    <div class="sex question">
        <!-- 默认展示模块 start -->
        <div class="show_question" v-if="!isEdit" @click="isEdit = !isEdit">
            <div class="question_header">
                <i v-if="sex.required">*</i>
                <span class="title">{{ sex.title }}</span>
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
                <i v-if="sex.required">*</i>
                <span class="title">{{ sex.title }}</span>
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
                   <div class="elective" @click="sex.required = !sex.required">
                        <i class="iconfont icon-fangxingweixuanzhong" v-if="sex.required"></i>
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
    data () {
        return {
            sex:
            {
                id       :1,        //题目标识
                title    :'性别',
                type     :'sex', //题目类型
                sort     :1,        //题目排序
                required :false,   //此题是否必填
            },
            answer : [], //记录答案
            isEdit : false, //是否在编辑状态
            
        }
    },
    methods:{
       
    },
    mounted() {},
}
</script>
<style lang="less">

</style>
