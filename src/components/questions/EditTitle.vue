<template>
    <div class="atitle">
        <div
            :class="isEmpty ? 'input-title title-empty':'input-title'"
            v-html="innerText" 
            :contenteditable="edit === 'no' ? false : true"
            @click="selectText($event)"
            @blur="changeText($event)">
        </div>
        <!-- <div :class="type=='title'? 'empty-msg' : 'empty-msg2'" v-if="isEmpty">请输入内容<i class="triangle"></i></div> -->
    </div>
</template>
<script>
export default {
    name: 'EditTitle',
    props:{
        value: {
          type: String,
          default: '',
        },
        type: {
          type: String,
          default: '',
        },
        // 控制内容是否可以编辑( 值为 no 时不可编辑)
        edit:{
          type:[Boolean,String],
          default:'',
        }
    },
    data () {
        return {
          innerText : this.value,
          isEmpty   : false,
          aClick    : 1,  //点击是否选中选项中文字
        }
    },
    watch:{
        value (newv,oldv){
          this.innerText = newv;
        },
        innerText (newv,oldv){
          /*  if (!this.innerText) {
                this.isEmpty   = true;
            }else{
                this.isEmpty   = false;
            }*/

          /*  if(newv==''){
              if(this.type=='qtitle'){
                this.innerText = '调查问卷名称';
              }else if(this.type=='qdesc'){
                this.innerText = '调查问卷描述';
              }else{
                this.innerText = '请输入选项信息';
              }
            }
            this.$emit('input',this.innerText);*/
        }
    },
    methods:{ 
        changeText(event){
            let _this = event.currentTarget;
            this.innerText = _this.innerHTML;
            if(_this.innerHTML==''){
              if(this.type=='qtitle'){
                this.innerText = '调查问卷名称';
              }else if(this.type=='qdesc'){
                this.innerText = '调查问卷描述';
              }else{
                this.innerText = '请输入选项信息';
              }
            }
            this.$emit('input',this.innerText);
            this.aClick = 1;
        },
        selectText(event) {
            if(this.aClick != 1){ return false}
            this.aClick = 0;
            let _this = event.currentTarget;
            var range = document.createRange();
            range.selectNodeContents(_this);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            // 点击时标记选中状态
            $(event.currentTarget).parents('.normal').parent().addClass('active').siblings().removeClass('active');
        }
    },
    mounted() {
    },
}
</script>
<style  lang="less">
    .atitle{
        width    : 98%;
        height   : 100%;
        position : relative;
        outline  : none;
        border   : none;
        white-space:normal;
        word-break:break-all;
        .input-title{
            display     : block;
            width       : 100%;
            height      : 100%;
            overflow    : auto;
            word-break  : break-all;
            outline     : none;
            user-select : text;
            white-space : pre-wrap;
            text-align  : left;
            box-sizing:border-box;
            /*padding:0 10px;*/
            &[contenteditable=true]{
                user-modify: read-write-plaintext-only;
                -webkit-user-modify: read-write-plaintext-only;
                &:empty:before {
                    content: attr(placeholder);
                    display: block;
                    color: #ccc;
                }
            }
            
        }
       /*  .title-empty{
           border:1px solid #FF9966 !important;
           box-shadow:0px 0px 8px rgba(255,153,102,.75);
           border-radius: 2px;
           transition:.3s all;
       }
       .empty-msg{
           position:absolute;
           top: 42px;
           right: 6px;
           width:150px;
           height: 24px;
           background: #666;
           color: #fff;
           font-size: 12px;
           border-radius: 3px;
           line-height:24px;
           text-align: center;
           i.triangle{
               width: 0;
               height: 0;
               position: absolute;
               top: -5px;
               left: 50%;
               margin-left: -5px;
               border-bottom: 6px solid #666;
               border-left: 5px solid transparent;
               border-right: 5px solid transparent;
           }
       }
       .empty-msg2{
           position:absolute;
           top: 4px;
           right: -110px;
           width:100px;
           height: 24px;
           background: #666;
           color: #fff;
           font-size: 12px;
           border-radius: 3px;
           line-height:24px;
           text-align: center !important;
           z-index:99;
           display:inline-block;
           padding:0 20px;
           box-sizing: border-box;
           i.triangle{
               width: 0;
               height: 0;
               position: absolute;
               top: 6px ;
               left:-6px;
               border-right: 6px solid #666;
               border-top: 5px solid transparent;
               border-bottom: 5px solid transparent;
               z-index:120;
           }
       } */
    }
</style>

