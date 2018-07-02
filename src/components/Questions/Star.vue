<template>
  <div class="star question">
    <!-- 默认展示模块 start -->
    <div class="show_question" v-if="!isEdit" @click="isEdit = !isEdit">
        <div class="question_header">
            <i v-if="star.required">*</i>
            <span class="title">{{ star.title }}</span>
        </div>
        <div class="star-box">
            <div class="single-star">
                <i class="iconfont icon-xingxing1"></i> 
            </div>
            <div class="single-star">
                <i class="iconfont icon-xingxing1"></i> 
            </div>
            <div class="single-star">
                <i class="iconfont icon-xingxing1"></i> 
            </div>
            <div class="single-star">
                <i class="iconfont icon-xingxing1"></i> 
            </div>
            <div class="single-star">
                <i class="iconfont icon-xingxing1"></i> 
            </div>
        </div>
    </div>
    <!-- 默认展示模块 end -->
    <!-- 编辑时展示 start-->
    <div class="edit_question" v-else>
        <div class="question_header">
            <i v-if="star.required">*</i>
            <span class="title">{{ star.title }}</span>
        </div>
        <div class="star-box">
            <div class="single-star">
                <i class="iconfont icon-xingxing1"></i> 
            </div>
            <div class="single-star">
                <i class="iconfont icon-xingxing1"></i> 
            </div>
            <div class="single-star">
                <i class="iconfont icon-xingxing1"></i> 
            </div>
            <div class="single-star">
                <i class="iconfont icon-xingxing1"></i> 
            </div>
            <div class="single-star">
                <i class="iconfont icon-xingxing1"></i> 
            </div>
        </div>
        <div class="bottom">
            <div class="right">
                <div class="elective" @click="star.required = !star.required">
                    <i class="iconfont icon-fangxingweixuanzhong" v-if="star.required"></i>
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
  name: 'Star',
  data() {
    return {
        star:
            {
                id       :1,        //题目标识
                title    :'评分',   //标题
                type     :'star', //题目类型
                sort     :1,        //题目排序
                required :false,   //此题是否必填
            },
        answer: [], //记录答案
        isEdit: false, //是否在编辑状态
    }
  },
  computed: {

  },
  methods: {
    // 输入框点击选中文字
    inputSelect(e) {
      (e.target).select()
    },


  },
  mounted() {},
}

</script>
<style lang="less">


</style>
