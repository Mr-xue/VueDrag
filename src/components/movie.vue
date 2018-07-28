<template>
	<div id="movie">
		<el-input v-model.trim="input" placeholder="请输入内容" class="search"></el-input>
		<el-table
		    :data="movieList"
		    style="width: 100%"
		    border
		    height="300">
		    <el-table-column
		      fixed
		      prop="title"
		      label="电影"
		      width="300">
		    </el-table-column>
		    <el-table-column
		      prop="url"
		      label="地址"
		      >
		      <template slot-scope="scope">
		        <a target="_blank" :href="scope.row.url" >查看</a>
		      </template>
		    </el-table-column>
		 </el-table>
	</div>
</template>
<script>
import movie from '@/assets/data.json'
export default {
	name:'movie',
	data() {
		return {
			initData:movie,
			movieList:movie,
			input:'',
		}
	},
	methods:{
		handleClick(row) {
        console.log(row);
      }
	},
	watch:{
		input (newV){
			this.movieList = this.initData.filter((item,index)=>{
				return item.title.search(newV)!=-1;
			})
		}
	}
}

</script>
<style lang="less">
.search{
	width: 200px;
	margin-bottom: 20px;
}

</style>
