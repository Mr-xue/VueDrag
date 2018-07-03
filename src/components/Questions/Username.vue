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
                <input type="text" placeholder="请输入简答题目" :class="isEmpty ? 'title input-title title-empty':'title input-title'"  v-model="title2">
                <div class="empty-msg" v-if="isEmpty">请输入题目<i class="triangle"></i></div>
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
    name: 'username',
    props:{
        title    :{type:String},
        type     :{type:String},
        required :{type:Boolean},
        isEdit   :{type:Boolean},
    },
    data () {
        return { 
            required2 : this.required,
            title2    : this.title,
            isEmpty   : false,
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
