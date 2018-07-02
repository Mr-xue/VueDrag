<template>
    <div class="single question">
        <!-- 默认展示模块 start -->
        <div class="show_question" v-if="!isEdit">
            <!-- <span @click="isEdit = !isEdit" style="position: absolute;widht:50px;height:50px;border-radius: 50%;top:10px;right:10px;z-index:999;">点击编辑呦</span> -->
            <div class="question_header">
                <i v-if="single.required">*</i>
                <span class="title">{{ single.title }}</span>
            </div>
            <ul class="choice">
                <li v-for="(item,index) in single.choice">
                    <div class="normal" v-if="item.type=='normal'">
                        <i class="iconfont icon-yuanquanweixuanfuben" v-if="answer[0]!=index"></i>
                        <i class="iconfont icon-danxuan" v-else></i>
                        <span class="cho" v-html="item.title"></span>
                    </div>
                    <div class="other" v-else-if="item.type=='other'">
                        <i class="iconfont icon-fangxingweixuanzhong"></i>
                        <span>其他</span>
                        <input type="text" class="other_input" >
                    </div>
                </li>
            </ul>
        </div>
        <!-- 默认展示模块 end -->
        
        <!-- 编辑时展示 start-->
        <div class="edit_question" v-else>
            <!-- <span @click="isEdit = !isEdit" style="position: absolute;widht:50px;height:50px;border-radius: 50%;top:10px;right:10px;z-index:999;">点击编辑呦</span> -->
            <div class="question_header">
                <i v-if="single.required">*</i>
                <input type="text" placeholder="请输入单选题目" class="title" v-model="single.title">
            </div>
            <ul class="choice">
                <draggable
                v-model="single.choice" 
                :options="dragOptions" 
                @start="drag=true" 
                @end="drag=false">
                    <li v-for="(item,index) in single.choice">
                        <div v-if="item.type=='normal'" class="normal" >
                            <i class="iconfont icon-move is_edit drag-icon"></i>
                            <i class="iconfont icon-yuanquanweixuanfuben"></i>
                            <input type="text" placeholder="请输入选项" class="cho" v-model="item.title" @click="inputSelect($event)">
                            <i class="iconfont icon-cuo1 is_edit" 
                            @click="removeChoice(index)" >
                                <div class="remove">移除<i class="triangle"></i></div>
                            </i>
                        </div>
                        <div class="other" v-else-if="item.type=='other'">
                            <i class="iconfont icon-fangxingweixuanzhong"></i>
                            <span>其他</span>
                            <!-- <input type="text" class="other_input" > -->
                            <div class="other_input"></div>
                            <i class="iconfont icon-cuo1 is_edit" 
                            @click="removeChoice(index)" >
                                <div class="remove">移除<i class="triangle"></i></div>
                            </i>
                        </div>
                    </li>
                </draggable>
            </ul>
            <div class="bottom">
                <div class="left">
                    <span class="addCho" @click="addChoice()">添加选项</span>
                    <span :class="single.choice[single.choice.length-1].type=='other'? 'addOther active':'addOther'" @click="addOther">添加其他</span>
                </div>
                <div class="right">
                   <div class="elective" @click="single.required = !single.required">
                        <i class="iconfont icon-fangxingweixuanzhong" v-if="single.required"></i>
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
import draggable from 'vuedraggable'
export default {
    name: 'Single',
    components: {
        draggable,
    },
    data () {
        return {
            single:
            {
                id       :1,        //题目标识
                title    :'单选',
                type     :'single', //题目类型
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
            dragOptions:{
                animation:150,
                group:'question',
                handle:'.drag-icon',
            }
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
            let len = this.single.choice.length;
            let newCho = {
                type:'normal',
                title: "选项"+len, 
            }
            if(this.single.choice[len-1].type!='other'){
                this.single.choice.push(newCho);
            }else{
                this.single.choice.splice(len-1,0,newCho)
            }
        },
        removeChoice (e){
            this.single.choice.splice(e,1)
        },
        addOther (){
            let len = this.single.choice.length;
            if(this.single.choice[len-1].type!='other'){
                let newCho = {
                    type:'other',
                    title: "", 
                }
                this.single.choice.push(newCho);
            }
        },
    },
    mounted() {},
}
</script>
<style lang="less">

</style>
