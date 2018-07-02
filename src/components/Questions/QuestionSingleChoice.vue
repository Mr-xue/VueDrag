<template>
    <div class="single_choice question">
        <!-- 默认展示模块 start -->
        <div class="show_question" v-if="!isEdit" @click="isEdit = !isEdit">
            <div class="question_header">
                <i v-if="singleChoice.required">*</i>
                <span class="title">{{ singleChoice.title }}</span>
            </div>
            <ul class="choice">
                <li v-for="(item,index) in singleChoice.choice">
                    <div class="normal" v-if="item.type=='normal'" @click="changeChoice(index,item.id)">
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
            <div class="question_header">
                <i v-if="singleChoice.required">*</i>
                <input type="text" placeholder="请输入单选题目" class="title" v-model="singleChoice.title">
            </div>
            <ul class="choice">
                <draggable
                v-model="singleChoice.choice" 
                :options="dragOptions" 
                @start="drag=true" 
                @end="drag=false">
                    <li v-for="(item,index) in singleChoice.choice">
                        <div v-if="item.type=='normal'" class="normal" >
                            <i class="iconfont icon-move is_edit dragi"></i>
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
                    <span :class="singleChoice.choice[singleChoice.choice.length-1].type=='other'? 'addOther active':'addOther'" @click="addOther">添加其他</span>
                </div>
                <div class="right">
                   <div class="elective" @click="singleChoice.required = !singleChoice.required">
                        <i class="iconfont icon-fangxingweixuanzhong" v-if="singleChoice.required"></i>
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
    name: 'QuestionSingleChoice',
    components: {
        draggable,
    },
    data () {
        return {
            singleChoice:
            {
                id       :1,        //题目标识
                title    :'单选',
                type     :'single', //题目类型
                sort     :1,        //题目排序
                required :false,   //此题是否必填
                choice:[
                    {
                        title: "AAAAAAAAAAAAAA",
                        type:"normal",  //标记选项类型（normal:普通选项、other其他选项）
                    },
                    {
                        title: "BBBBBBBBBB",
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
                handle:'.dragi'
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
            let len = this.singleChoice.choice.length;
            let newCho = {
                type:'normal',
                title: "选项"+len, 
            }
            if(this.singleChoice.choice[len-1].type!='other'){
                this.singleChoice.choice.push(newCho);
            }else{
                this.singleChoice.choice.splice(len-1,0,newCho)
            }
        },
        removeChoice (e){
            this.singleChoice.choice.splice(e,1)
        },
        addOther (){
            let len = this.singleChoice.choice.length;
            if(this.singleChoice.choice[len-1].type!='other'){
                let newCho = {
                    type:'other',
                    title: "", 
                }
                this.singleChoice.choice.push(newCho);
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
.question{
    width:700px;
    margin:0 auto;
    input{
        outline: none;
    }
    .show_question,
    .edit_question{
        width:100%;
        box-sizing:border-box;
        text-align: left;
        padding:16px 33px 7px 0; 
        margin-bottom:20px;  
        .question_header{
            font-weight:600;
            font-size:14px;
            line-height:32px;
            position:relative;
            display:flex;
            margin-left:33px;
            margin-bottom:10px;
            i{
                width:32px;
                height:32px;
                display:block;
                text-align: center;
                color:#f00;
                line-hieght:32px;
                position:absolute;
                top:0;left:-32px;
            }
            input{
                flex:1;
                height:32px;
                display: block;
                border:none;
                padding:0 10px;
            }
        }
        ul.choice{
            li{
                cursor:pointer;
                min-height:32px;
                font-size:14px;
                line-height:24px;
                padding: 4px 0;
                box-sizing: border-box;
                position:relative;
                padding-left:33px;
                div{
                    display:flex;
                    i.iconfont{
                        display:inline-block;
                        font-size:14px;
                        line-height:32px;
                        color: #666;
                    }
                    i.icon-circleyuanquan{
                        color:#f99;
                    }
                    i.icon-move{
                        position:absolute;
                        top:0;left:0;
                        width:32px;
                        height:32px;
                        text-align: center;
                        line-height:40px !important;
                        display:block;
                        /*background:#f99;*/
                    }
                    .cho{
                        width:300px !important;
                        margin-left:10px;
                        display:block;
                        padding-left:10px;
                        border:none;
                        height:32px;
                        line-height:32px;
                        padding:0 10px;
                        border-bottom:1px solid rgba(0,0,0,0);
                    }
                    i.icon-cuo1{
                        width:32px;
                        height:32px;
                        display: inline-block;
                        text-align: center;
                        line-hieght:32px;
                        color:#da2a13;
                        font-size:16px;
                        position:relative;
                    }
                    i.icon-cuo1:hover{
                        font-size:20px;
                        .remove{
                            display:block;
                        }
                    }
                    .remove{
                        display:none;
                        width:36px;
                        height:24px;
                        background:#666;
                        color:#fff;
                        line-height: 28px;
                        font-size:12px;
                        border-radius: 3px;
                        position:absolute;
                        top:-24px;left:-3px;
                        .triangle {
                            width: 0;
                            height: 0;
                            position:absolute;
                            bottom:-4px;
                            left:50%;
                            margin-left:-5px;
                            border-top: 6px solid #666;
                            border-left: 5px solid transparent;
                            border-right: 5px solid transparent;
                        }  
                    }
                    .is_edit{
                        display:none !important;
                    } 
                }
                
            }
            li:hover{
               .is_edit{
                    display:block !important;
                } 
            }
        }
        .other{
            height:38px;
            padding:6px 0;
            font-size:14px;
            line-height:26px;
            color:#333;
            i.iconfont{
                margin-right:12px;
            }
            span{
                margin-right:10px;
            }
            .other_input{
                width:200px;
                height:24px;
                border:1px solid #f0f0f0;
                padding:0 5px;
            }
            i.icon-cuo1{
                width:32px;
                height:32px;
                display: inline-block;
                text-align: center;
                line-hieght:32px;
                color:#da2a13;
                font-size:16px;
                position:relative;
            }
            i.icon-cuo1:hover{
                font-size:20px;
                .remove{
                    display:block;
                }
            }
            .remove{
                display:none;
                width:36px;
                height:24px;
                background:#666;
                color:#fff;
                line-height: 28px;
                font-size:12px;
                border-radius: 3px;
                position:absolute;
                top:-24px;left:-3px;
                .triangle {
                    width: 0;
                    height: 0;
                    position:absolute;
                    bottom:-4px;
                    left:50%;
                    margin-left:-5px;
                    border-top: 6px solid #666;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                }  
            }
        }
        .bottom{
            width:100%;
            height:50px;
            padding-left:33px;
            box-sizing:border-box;
            margin-top:10px;
            .left{
                height:30px;
                line-height:30px;
                color:#159af1;
                font-size:14px;
                span{
                    margin-right:15px;
                    cursor:pointer;
                }
                span.active{
                    color:#999;
                    cursor:default;
                }
            }
            .right{
                font-size:14px;
                text-align: right;
                i.iconfont{
                    color:#666;
                    margin-left:20px;
                    cursor:pointer;
                }
                i.iconfont:hover{
                    color:#159af1;
                }
                .elective{
                    cursor:pointer;
                    display:inline-block;
                    color:#333;
                    margin-left:15px;
                    i.iconfont{
                        margin-right:3px;
                        color:#333;
                    }
                    i.icon-fangxingxuanzhongfill{
                        color:#159af1;
                    }
                }
                .elective:hover{
                    color:#159af1;
                    i.iconfont{
                        color:#159af1;
                    }
                }
            }
        }
    }
    .show_question{
        width:100%;
        min-height:130px;
        /*background:#ecf5ff;*/
        text-align: left;
        box-sizing: border-box;
        padding:16px 33px 7px 0;   
        margin-bottom:20px;
        .question_header{
             border:none;
        }
        ul{
            li{
                i.icon-danxuan{
                    color:#159af1 !important;
                }
            }
        }

    }
    .show_question:hover{
        background:#ecf5ff;
    }
    .edit_question{
        min-height:200px;
        background:#fff;
        border:2px solid #159af1;
        .question_header{
            border-bottom:1px solid #f0f0f0;
        }
        ul.choice{
            .cho:hover{
                border-bottom:1px solid #f0f0f0;
            }
        }
    }
}
</style>
