<template>
  <div id="drag">
    <h2>Vue Drag</h2>
    <!-- 左侧预览区域 start-->
    <div id="drag-left">
       <img src="@/assets/guide.jpg" class="guide-img" v-if="list2.length<=0">
      <draggable class="drag-left-wrap" element="div" v-model="list2" :options="leftOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
        <transition-group type="transition" class="list-group" :name="'flip-list'" tag="div">
          <div class="list-group-item"  v-for="(item,index) in list2" :key="index">
          <code>
            <!-- {{item}} -->
          </code>
            <Single v-if="item.type=='single'" v-bind.sync="item"></Single>
            <Multiple v-else-if="item.type=='multiple'" :question-data="item"></Multiple>
            <!-- <single-item v-if="item.type=='single'"></single-item>
            <multiple-item v-else-if="item.type=='multiple'"></multiple-item> -->
          </div>
        </transition-group>
      </draggable>
    </div>
    <!-- 左侧预览区域 end-->
    
    <!-- 右侧浮窗 start-->
    <draggable id="drag-right" element="div" v-model="list" :options="rightOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false"> 
        <transition-group name="no" class="list-group" tag="ul">
          <li v-for="(item,index) in list" :key="index">
            <i class="iconfont icon-danxuan" v-if="item.type=='single'"></i>
            <i class="iconfont icon-duoxuan" v-else-if="item.type=='multiple'"></i>
            <span>{{item.title}}</span>
          </li>
        </transition-group>
    </draggable>
    <!-- 右侧浮窗 end-->
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Drag',
  components: {
    draggable,
    // TypeWrap             : ()=> import('./TypeWrap.vue'),
    // singleItem           : ()=> import('./single.vue'),
    // multipleItem         : ()=> import('./multiple.vue'),
    Single : ()=> import('./Questions/Single.vue'),
    Multiple       : ()=> import('./Questions/Multiple.vue')
  },
  data () {
    return {
      editable:true,  //拖动状态
      isDragging: false,  
      delayedDragging:false,
      // 左、右侧浮窗拖动配置
      rightOptions:{
        animation: 0,
        group: {name:'right',pull:'clone',put:false},
        // disabled: !this.editable,
        ghostClass: 'ghost',
        sort:false,  //禁止排序
      },
      leftOptions:{
          animation: 0,
          group: 'right',
          ghostClass: 'ghost',
          sort:true,
          handle: ".icon-move",
      },
      // 右侧浮窗
      list:[
        //单选
        {
          title    :'单选',
          type     :'single', //题目类型
          required :false,   //此题是否必填
          isEdit   :true,    //默认编辑状态
          choice:[
              {
                title: "单选题AAAAAAA",
                type:"normal",  //标记选项类型（normal:普通选项、other其他选项）
              },
              {
                type:"other" 
              }
          ]
        },
        // 多选
        {
          title    :'多选',
          type     :'multiple', //题目类型
          required :false,   //此题是否必填
          isEdit   :true,
          choice:[
              {
                title: "多选题BBBBBBB",
                type:"normal",  //标记选项类型（normal:普通选项、other其他选项）
              },
              {
                type:"other" 
              }
          ]
        },
       /* {
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
        },*/
      ],
      // 左侧题目显示
      list2:[]
    }
  },
  methods:{
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      // console.log(relatedElement);
      // console.log(draggedElement);
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
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
@import './less/questions.less';

*{margin: 0;padding: 0;}

ul {
  list-style-type: none;
  padding: 0;
}
#drag{
  
  #drag-left{
    position: relative;
    width: 700px;
    .guide-img{
      position: absolute;
      top: 0;
      left: 50%;
      transform:translateX(-50%);
      pointer-events: none;
    }
    .drag-left-wrap{
      width: 100%;
      min-height: 167px;
      .list-group{
        >li.sortable-chosen{
          min-height: 167px;
          border:2px dashed orange;
          list-style: none;
          & > *{display: none;}
        }
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
  .list-group {
    min-height: 20px;
  }
  .list-group-item{
    transition: all 1s;
  }
}

</style>
