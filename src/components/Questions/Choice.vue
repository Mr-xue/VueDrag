<template>
    <div class="multiple question">
        <!-- 默认展示模块 start -->
        <div class="show_question" v-if="!isEdit">
            <div class="question_header">
                <i v-if="required2">*</i>
                <span class="title">{{ title }}</span>
            </div>
            <ul class="choice">
                <li v-for="(item,index) in choice">
                    <div class="normal" v-if="item.type=='normal'">
                        <i class="iconfont icon-yuanquanweixuanfuben" v-if="type=='single'"></i>
                        <i class="iconfont icon-fangxingweixuanzhong" v-else-if="type=='multiple'"></i>
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
                <i v-if="required2">*</i>
                <!-- <textarea placeholder="请输入单选题目" :class="isEmpty ? 'title input-title title-empty':'title input-title'" v-model="title2"></textarea> -->
                <input type="text" placeholder="请输入单选题目" :class="isEmpty ? 'title input-title title-empty':'title input-title'" v-model="title2">
                <div class="empty-msg" v-if="isEmpty">请输入题目<i class="triangle"></i></div>
            </div>
            <ul class="choice">
                <draggable
                v-model="choices" 
                :options="dragOptions" 
                @start="drag=true" 
                @end="drag=false">
                    <li v-for="(item,index) in choices">
                        <div v-if="item.type=='normal'" class="normal" >
                            <i class="iconfont icon-move is_edit drag-icon"></i>
                            <i class="iconfont icon-yuanquanweixuanfuben" v-if="type=='single'"></i>
                            <i class="iconfont icon-fangxingweixuanzhong" v-else-if="type=='multiple'"></i>
                            <input type="text" placeholder="请输入选项" :class="item.isEmpty==1 ? 'cho cho-empty' :'cho'" v-model="item.title" @focus="item.isEmpty=0">
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
                    <span :class="choice[choice.length-1].type=='other'? 'addOther active':'addOther'" @click="addOther">添加其他</span>
                </div>
                <div class="right">
                   <div class="elective" @click="required2 = !required2">
                        <i class="iconfont icon-fangxingweixuanzhong" v-if="!required2"></i>
                        <i class="iconfont icon-fangxingxuanzhongfill" v-else></i>
                        <span>选填</span>
                    </div>
                   <i class="iconfont icon-shanchu">
                       <div class="remove hover-btn">移除<i class="triangle"></i></div>
                   </i>
                   <!-- <i class="iconfont icon-msnui-copy-file"></i> -->
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
import draggable from 'vuedraggable'
export default {
    name: 'Multiple',
    components: {
        draggable,
    },
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
            dragOptions:{
                animation:150,
                group:'question',
                handle:'.drag-icon',
            }
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
        choices: {
            handler: function (newv,oldv) {
                this.$emit('update:choice', newv)
            },
            deep: true
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
                _self.choices.map(function(item,index){
                    if(item.title==''){
                        _self.choices[index].isEmpty=1;
                        _self.$emit('update:isEdit', true)
                        return false;
                    }
                })
            }
        }
    },
    methods:{
        addChoice (){
            let len = this.choice.length;
            let newCho = {
                type:'normal',
                title: "选项"+len, 
            }
            if(this.choice[len-1].type!='other'){
                this.choice.push(newCho);
            }else{
                this.choice.splice(len-1,0,newCho)
            }
        },
        removeChoice (e){
            if(this.choices.length<3){
                alert('请最少保留2个选项');
                return false;
            }
            this.choices.splice(e,1)
            this.$forceUpdate();
        },
        addOther (){
            let len = this.choice.length;
            if(this.choice[len-1].type!='other'){
                let newCho = {
                    type:'other',
                    title: "", 
                }
                this.choice.push(newCho);
            }
        },
    },
    mounted() { },
}
</script>
<style lang="less">

</style>
