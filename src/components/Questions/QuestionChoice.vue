<template>
    <div class="single_choice question">
        <div class="show_question">
            <div class="question_header">
                <i>*</i>
                <!-- <span class="seq">Q1:</span>  -->
                <span class="title">多选</span>
            </div>
            <ul class="choice">
                <li>
                    <i class="iconfont icon-yuanquanweixuanfuben"></i>
                    <span class="cho">哈哈哈哈</span>
                </li>
                <li>
                    <i class="iconfont icon-circleyuanquan"></i>
                    <span class="cho">哈哈哈哈</span>
                </li>
                <li>
                    <i class="iconfont icon-yuanquanweixuanfuben"></i>
                    <span class="cho">哈哈哈哈</span>
                </li>
            </ul>
        </div>
        <div class="edit_question">
            <div class="question_header">
                <i>*</i>
                <!-- <span class="seq">Q1:</span> -->
                <input type="text" placeholder="请输入单选题目" class="title">
            </div>
            <ul class="choice">
                <draggable
                v-model="singleChoice.choice" 
                :options="{animation:300,group:'people'}" 
                @start="drag=true" 
                @end="drag=false">
                    <li v-for="(item,index) in singleChoice.choice">
                        <i class="iconfont icon-tuodong is_edit "></i>
                        <i class="iconfont icon-yuanquanweixuanfuben"></i>
                        <input type="text" placeholder="请输入选项" class="cho" v-model="item.title">
                        <i class="iconfont icon-cuo1 is_edit" 
                        @click="removeChoice(index)" >
                            <div class="remove">移除<i class="triangle"></i></div>
                        </i>
                    </li>
                </draggable>
            </ul>
            <div class="other" v-if="singleChoice.hasOther">
                <i class="iconfont icon-fangxingweixuanzhong"></i>
                <span>其他</span>
                <input type="text" class="other_input">
                <i class="iconfont icon-cuo1 is_edit" 
                @click="removeChoice('other')" >
                    <div class="remove">移除<i class="triangle"></i></div>
                </i>
            </div>
            <div class="bottom">
                <div class="left">
                    <span class="addCho" @click="addChoice()">添加选项</span>
                    <span :class="singleChoice.hasOther? 'addOther active':'addOther'" @click="addOther">添加其他</span>
                </div>
                <div class="right">
                   <div class="elective">
                        <i class="iconfont icon-fangxingweixuanzhong"></i>
                        <span>选填</span>
                    </div>
                   <i class="iconfont icon-shanchu"></i>
                   <!-- <i class="iconfont icon-msnui-copy-file"></i> -->
                   <i class="iconfont icon-tuodong"></i>
                </div>
            </div>
        </div>
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
            myArray:[1,2,3,4,5,6],
            singleChoice:
            {
                id:'1',
                seq:'1',
                title:'这里是题目哈哈哈哈哈',
                hasOther:false,
                type:'single_choice',
                choice:[
                    {
                        title: "AAAAAAAAAAAAAA", 
                    },
                    {
                        title: "BBBBBBBBBBBBBBBB", 
                    },
                    {
                        title: "CCCCCCCCCCCCCCCCCCC", 
                    }
                ]
            },
            
        }
    },
    computed:{

    },
    methods:{
        addChoice (){
            let newCho = {
                isEdit:true,
                title: "", 
            }
            this.singleChoice.choice.push(newCho);
        },
        removeChoice (e){
            if(e != 'other'){
                this.singleChoice.choice.splice(e,1)
            }else{
                this.singleChoice.hasOther = false;
            }
            
        },
        addOther (){
             this.singleChoice.hasOther = true;
        },

    },
    watch: {

    }
}
</script>
<style lang="less">
.question{
    width:700px;
    margin:0 auto;
    input{
        outline: none;
    }
    .show_question{
        width:100%;
        min-height:130px;
        /*background:#ecf5ff;*/
        text-align: left;
        box-sizing: border-box;
        padding:16px 33px 7px;   
        margin-bottom:20px;
        .question_header{
            font-weight:600;
            font-size:14px;
            line-height:32px;
            position:relative;
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
            span.seq{
                margin-right:5px;
            }
        }
        ul.choice{
            li{
                min-height:32px;
                font-size:14px;
                line-height:24px;
                padding: 4px 0;
                display:flex;
                box-sizing: border-box;
                cursor:pointer;
                i.iconfont{
                    display:inline-block;
                    font-size:14px;
                    line-height:28px;
                    color: #666;
                }
                i.icon-circleyuanquan{
                    color:#f99;
                }
                .cho{
                    flex:1;
                    display:block;
                    padding-left:10px;
                }
            }
        }
    }
    .edit_question{
        width:100%;
        min-height:200px;
        background:#fff;
        border:2px solid #159af1;
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
            border-bottom:1px solid #f0f0f0;
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
                display:flex;
                box-sizing: border-box;
                position:relative;
                padding-left:33px;
                i.iconfont{
                    display:inline-block;
                    font-size:14px;
                    line-height:32px;
                    color: #666;
                }
                i.icon-circleyuanquan{
                    color:#f99;
                }
                i.icon-tuodong{
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
                .cho:hover{
                    border-bottom:1px solid #f0f0f0;
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
            input{
                width:200px;
                height:24px;
                border:1px solid #f0f0f0;
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
                }
                span.active{
                    color:#999;
                }
            }
            .right{
                font-size:14px;
                text-align: right;
                padding-right:10px;
                i.iconfont{
                    color:#666;
                    margin-right:20px;
                }
                .elective{
                    display:inline-block;
                    color:#333;
                    margin-right:15px;
                    i.iconfont{
                        margin-right:3px;
                        color:#333;
                    }
                }
            }
        }
    }
}
</style>
