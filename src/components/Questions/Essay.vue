<template>
    <div class="essay question">
        <!-- 默认展示模块 start -->
        <div class="show_question" v-if="!isEdit" @click="isEdit = !isEdit">
            <div class="question_header">
                <i v-if="essay.required">*</i>
                <span class="title">{{ essay.title }}</span>
            </div>
            <div class="input-box">
                <textarea class="essay-input"></textarea>
            </div>
            
        </div>
        <!-- 默认展示模块 end -->
        
        <!-- 编辑时展示 start-->
        <div class="edit_question" v-else>
            <div class="question_header">
                <i v-if="essay.required">*</i>
                <input type="text" placeholder="请输入单选题目" class="title" v-model="essay.title">
            </div>
           <div class="input-box"></div>
            <div class="bottom">
                <div class="right">
                   <div class="elective" @click="essay.required = !essay.required">
                        <i class="iconfont icon-fangxingweixuanzhong" v-if="essay.required"></i>
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
    name: 'Essay',
    data () {
        return {
            essay:
            {
                id       :1,        //题目标识
                title    :'简答',
                type     :'essay', //题目类型
                sort     :1,        //题目排序
                required :false,   //此题是否必填
                choice:[
                    {
                        title: "选项1",
                        type:"normal",  //标记选项类型（normal:普通选项、other其他选项）
                    },
                    {
                        title: "选项2",
                        type:"normal",  //标记选项类型（normal:普通选项、other其他选项）
                    },
                    {
                        title: "",
                        type:"other" 
                    }
                ]
            },
            answer : [], //记录答案
            isEdit : false, //是否在编辑状态
        }
    },
    computed:{

    },
    methods:{
        // 输入框点击选中文字
        inputSelect (e){
            (e.target).select()
        },
        addChoice (){
            let len = this.essay.choice.length;
            let newCho = {
                type:'normal',
                title: "选项"+len, 
            }
            if(this.essay.choice[len-1].type!='other'){
                this.essay.choice.push(newCho);
            }else{
                this.essay.choice.splice(len-1,0,newCho)
            }
        },
        removeChoice (e){
            this.essay.choice.splice(e,1)
        },
        addOther (){
            let len = this.essay.choice.length;
            if(this.essay.choice[len-1].type!='other'){
                let newCho = {
                    type:'other',
                    title: "", 
                }
                this.essay.choice.push(newCho);
            }
        },
        changeChoice(index,id){
            let ans = [];
            ans.push(index);
            this.answer = ans;
            // this.$emit('answerVal', [this.answer, id, index]);
        },
    },
    mounted() {},
}
</script>
<style lang="less">

</style>
