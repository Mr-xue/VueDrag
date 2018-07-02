<template>
    <div class="username question">
        <!-- 默认展示模块 start -->
        <div class="show_question" v-if="!isEdit" @click="isEdit = !isEdit">
            <div class="question_header">
                <i v-if="question.required">*</i>
                <span class="title">{{ question.title }}</span>
            </div>
            <div class="user-name-box">
                <div class="cho">
                    <i class="iconfont icon-icon-person" v-if="question.type=='username'"></i>
                    <i class="iconfont icon-shouji" v-else-if="question.type=='mobile'"></i>
                    <i class="iconfont icon-youxiang" v-else-if="question.type=='email'"></i>
                    <input type="text" class="user-name">
                </div>
            </div>
        </div>
        <!-- 默认展示模块 end -->
        <!-- 编辑时展示 start-->
        <div class="edit_question" v-else>
            <div class="question_header">
                <i v-if="question.required">*</i>
                <span class="title">{{ question.title }}</span>
            </div>
            <div class="user-name-box">
                <i class="iconfont icon-icon-person" v-if="question.type=='username'"></i>
                <i class="iconfont icon-shouji" v-else-if="question.type=='mobile'"></i>
                <i class="iconfont icon-youxiang" v-else-if="question.type=='email'"></i>
            </div>
            <div class="bottom">
                <div class="right">
                   <div class="elective" @click="question.required = !question.required">
                        <i class="iconfont icon-fangxingweixuanzhong" v-if="question.required"></i>
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
            question:
            {
                id       :1,          //题目标识
                title    :'姓名', 
                type     :'username', //题目类型 username  mobile email
                sort     :1,          //题目排序
                required :false,      //此题是否必填
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
