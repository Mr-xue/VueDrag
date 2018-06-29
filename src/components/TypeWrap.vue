<template>
  <div class="type-wrap">
    <single-item v-if="listShow.type=='single'"></single-item>
    <multiple-item v-else-if="listShow.type=='multiple'"></multiple-item>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import singleItem from './single.vue'
import multipleItem from './multiple.vue'
export default {
  name: 'Drag',
  props:{
    listShow:Object,
  },
  data () {
    return {
     
    }
  },
  components: {
    singleItem,
    multipleItem
  },

}
</script>
<style>
	#multiple{
		padding: 20px 0;
	}
</style>