<template>
  <div id="drag">
    <h2>Vue Drag</h2>
    <!-- 左侧预览区域 start-->
    <div id="drag-left">
      <draggable class="drag-left-wrap" element="div" v-model="list2" :options="leftOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
        <img src="@/assets/guide.jpg" class="guide-img" v-if="list2.length<=0">
       
        <!-- <transition-group type="transition" :name="'flip-list'" tag="div"> -->
          <type-wrap :list='item' v-for="(item,index) in list2" :key="index"></type-wrap>
        <!-- </transition-group> -->
      </draggable>
    </div>
    <!-- 左侧预览区域 end-->
    
    <!-- 右侧浮窗 start-->
    <draggable id="drag-right" element="div" v-model="list" :options="rightOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false"> 
        <transition-group name="no" class="list-group" tag="ul">
          <li v-for="item in list" :key="item.order">
            <i class="iconfont icon-danxuan" v-if="item.type=='single'"></i>
            <i class="iconfont icon-duoxuan" v-else-if="item.type=='multiple'"></i>
            <span>{{item.name}}</span>
          </li>
        </transition-group>
    </draggable>
    <!-- 右侧浮窗 end-->
  </div>
</template>

<script>
import draggable from 'vuedraggable'
// import sortable from 'sortablejs'
import TypeWrap from './TypeWrap.vue'
import singleItem from './single.vue'
import multipleItem from './multiple.vue'
export default {
  name: 'Drag',
  components: {
    draggable,
    singleItem,
    multipleItem,
    TypeWrap
  },
  data () {
    return {
      editable:true,  //拖动状态
      isDragging: false,  
      delayedDragging:false,
      // 右侧浮窗
      list:[
        {
          "name": "单选",
          "type": "single",
          "order": 1,
          "fixed": false
        },
        {
          "name": "多选",
          "type": "multiple",
          "order": 2,
          "fixed": false
        },
      ],
      // 左侧题目显示
      list2:[]
    }
  },
  computed:{
    // 右侧浮窗拖动配置
    rightOptions () {
      return  {
        animation: 0,
        group: {name:'right',pull:'clone',put:false},
        disabled: !this.editable,
        ghostClass: 'ghost',
        sort:false,  //禁止排序
      };
    },
    leftOptions () {
      return  { 
        animation: 0,
        group: 'right',
        disabled: !this.editable,
        ghostClass: 'ghost',
        sort:true,
        // handle: ".my-handle",
      };
    },
  },
  methods:{
    onMove ({relatedContext, draggedContext}) {
      /*const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      console.log(relatedElement);
      console.log(draggedElement);
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed*/
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue){
        this.delayedDragging= true
        return
      }
      this.$nextTick( () =>{
           this.delayedDragging =false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
*{margin: 0;padding: 0;}

ul {
  list-style-type: none;
  padding: 0;
}
#drag{
  
  #drag-left{
    position: relative;
    width: 700px;
    padding: 100px 0;
    .guide-img{
      margin-top: 120px;
    }
    .drag-left-wrap{
      width: 100%;
      li.sortable-chosen{
        height: 200px;
        border:2px dashed orange;
        list-style: none;
        & > *{display: none;}
      }
    }

    /*test code*/
    outline:1px dashed orange;
    margin: 0 auto;
  }
  #drag-right{
    position: fixed;
    top: 229px;
    right: 23px;
    width: 125px;
    background-color: #fff;
    box-shadow:0 0 5px 3px rgba(162, 162, 162, 0.1);

    > ul{
      li{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        transition:background-color .3s;
        &:hover{
          background-color: #ECF5FF;
        }
      }
    }
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  } 
  .ghost {
    opacity: .5;
    background: #C8EBFB;
  }
  
}
</style>
