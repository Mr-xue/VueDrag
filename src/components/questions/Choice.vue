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
                        <i class="iconfont icon-yuanquanweixuanfuben" v-if="type=='single'"></i>
                        <i class="iconfont icon-fangxingweixuanzhong" v-else-if="type=='multiple'"></i>
                        <span>其他</span>
                        <input type="text" class="other_input">
                    </div>
                </li>
            </ul>
        </div>
        <!-- 默认展示模块 end -->
        <!-- 编辑时展示 start-->
        <div class="edit_question" v-else>
            <div class="question_header">
                <i v-if="required2">*</i>
                <EditTitle v-model='title2' type='title'></EditTitle>
            </div>
            <draggable class="choice" v-model="choices" :options="dragOptions" @start="drag=true" @end="drag=false" element="ul">
                <li v-for="(item,index) in choices">
                    <div v-if="item.type=='normal'" class="normal">
                        <!-- 拖动 -->
                        <i class="iconfont icon-move is_edit drag-icon"></i>
                        <!-- 单选多选 -->
                        <i class="iconfont icon-yuanquanweixuanfuben" v-if="type=='single'"></i>
                        <i class="iconfont icon-fangxingweixuanzhong" v-else-if="type=='multiple'"></i>
                        <div class="cho">
                            <EditTitle v-model='item.title' type='choice'></EditTitle>
                        </div>
                        <!-- 移除 -->
                        <i class="iconfont icon-cuo1 is_edit" @click="removeChoice(index)">
                            <div class="remove">移除<i class="triangle"></i></div>
                        </i>
                    </div>
                    <div class="other" v-else-if="item.type=='other'">
                        <i class="iconfont icon-yuanquanweixuanfuben" v-if="type=='single'"></i>
                        <i class="iconfont icon-fangxingweixuanzhong" v-else-if="type=='multiple'"></i>
                        <span>其他</span>
                        <div class="other_input"></div>
                        <i class="iconfont icon-cuo1 is_edit" @click="removeChoice(index)">
                                        <div class="remove">移除<i class="triangle"></i></div>
                    </i>
                </div>
                </li>
            </draggable>
    <div class="bottom">
        <div class="left">
            <span class="addCho" @click="addChoice($event)">添加选项</span>
            <span :class="choice[choice.length-1].type=='other'? 'addOther active':'addOther'" @click="addOther">添加其他</span>
        </div>
        <div class="right">
            <div class="elective" @click="required2 = !required2">
                <i class="iconfont icon-fangxingweixuanzhong" v-if="required2"></i>
                <i class="iconfont icon-fangxingxuanzhongfill" v-else></i>
                <span>选填</span>
            </div>
            <!-- 删除按钮 -->
            <i class="iconfont icon-shanchu" @click.stop="del(sort)">
                <div class="remove hover-btn">移除<i class="triangle"></i></div>
            </i>
            <!-- 复制按钮 -->
            <i class="iconfont icon-msnui-copy-file" @click.stop="copy(sort)">
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
import draggable from 'vuedraggable'
import {mapMutations} from 'vuex'
export default {
    name: 'Multiple',
    components: {
        draggable,
        EditTitle: () => import ('./EditTitle.vue'), //标题，选项输入框 
    },
    props: {
        title: { type: String },
        type: { type: String },
        required: { type: Boolean },
        isEdit: { type: [Boolean, String] },
        choice: { type: Array },
        sort: { type: [Number, String] },
    },
    data() {
        return {
            title2: this.title,
            choices: this.choice,
            required2: this.required,
            isEmpty: false,
            // editStatue :this.isEdit,
            dragOptions: {
                animation: 150,
                group: 'question',
                handle: '.drag-icon',
            },
        }
    },
    watch: {
        // 监听props,上层组件拖动排序后，更新此组件信息
        title(newv, oldv) {
            this.title2 = newv;
        },
        choice(newv, oldv) {
            this.choices = newv;
        },
        title2(newv, oldv) {
            if (newv.length <= 0) {
                this.isEmpty = true;
            } else {
                this.isEmpty = false;
            }
            this.$emit('update:title', newv)
        },
        required(newv, oldv) {
            this.required2 = newv;
        },
        //更新选项
        choices: {
            handler: function(newv, oldv) {
                this.$emit('update:choice', newv)
            },
            deep: true
        },
        required2(newv, oldv) {
            this.$emit('update:required', newv)
        },
        //编辑状态结束时，选项和题目是否为空
        /*editStatue (newv,oldv){
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
        }*/
    },
    methods: {
        ...mapMutations({
            del  :'delComponent',
            copy :'copyComponent'
        }),
        //添加选项
        addChoice(event) {
            let _this = event.currentTarget;
            let len = this.choices.length;
            let newCho = {
                type: 'normal',
                title: "选项" + parseInt(len + 1),
            }
            if (this.choices[len - 1].type != 'other') {
                this.choices.push(newCho);
            } else {
                this.choices.splice(len - 1, 0, newCho)
            }
            // 新增选项后标记文字全选状态
            this.$nextTick(() => {
                let $last = $(_this).parents('.edit_question').find('.choice li:last').prev();
                let a = $last.find(".input-title");
                $last.addClass('active').siblings().removeClass('active');
                var range = document.createRange();
                range.selectNodeContents($(a)[0]);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            })
        },
        //删除选项
        removeChoice(e) {
            if (this.choices.length < 3) {
                this.$message({
                    message: '请最少保留2个选项',
                    type: 'warning'
                });
                return false;
            }
            this.choices.splice(e, 1)
        },
        //添加其他
        addOther() {
            let len = this.choices.length;
            if (this.choices[len - 1].type != 'other') {
                let newCho = {
                    type: 'other',
                    title: "",
                }
                this.choices.push(newCho);
            }
        },
    },
    mounted() {

    },
}

</script>
