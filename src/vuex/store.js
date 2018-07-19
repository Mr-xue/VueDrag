import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// 需要集中处理的数据
const state = {
	sendState:true,
	questionTitle:'调查问卷名称',
	questionDesc:'调查问卷描述',
	// 右侧浮窗(源数据)
	list: [
		//单选
		{
			title: '单选',
			type: 'single', //题目类型
			required: true, //此题是否必填
			isEdit: false, //默认编辑状态
			choice: [{
					title: "选项1",
					type: "normal", //标记选项类型（normal:普通选项、other其他选项）
				},
				{
					title: "选项2",
					type: "normal", //标记选项类型（normal:普通选项、other其他选项）
				},
			]
		},
		// 多选
		{
			title: '多选',
			type: 'multiple',
			required: true,
			isEdit: false,
			choice: [{
					title: "选项1",
					type: "normal",
				},
				{
					title: "选项2",
					type: "normal",
				},
			]
		},
		{
			title: '问答',
			type: 'essay',
			isEdit: false,
			required: true,
		},
		{
			title: '评分',
			type: 'grade',
			isEdit: false,
			required: true,
		},
		{
			title: '姓名',
			type: 'username',
			isEdit: false,
			required: true,
		},
		{
			title: '性别',
			type: 'sex',
			isEdit: false,
			required: true,
		},
		{
			title: '手机',
			type: 'mobile',
			isEdit: false,
			required: true,
		},
		{
			title: '邮箱',
			type: 'email',
			isEdit: false,
			required: true,
		},
	],
	// 左侧题目显示
	list2: [
		//单选
		{
			sort: 0,
			title: '单选',
			type: 'single', //题目类型
			required: true, //此题是否必填
			isEdit: false, //默认编辑状态
			choice: [{
					title: "选项1",
					type: "normal", //标记选项类型（normal:普通选项、other其他选项）
				},
				{
					title: "选项2",
					type: "normal",
				}
			]
		},
	]
}
// 修改数据的方法（仅包含同步方法）
const mutations = {
	addList2(state,payload){
		state.list2.splice(payload.newIndex,1,payload.moke)
	},
	// 列表数据更新
	updateList2(state, payload) {
		state.list2 = payload;
		state.sendState = true;
	},
	// 修改组件编辑状态
	editQuestion(state, editIndex) {
		state.sendState = false;
		state.list2.map((item, index) => {
			if (index == editIndex) {
				item.isEdit = true;
			} else {
				item.isEdit = false;
			}
		})
	},
	// 删除组件数据
	delComponent(state, delIndex) {
		state.list2[delIndex].isEdit = false;
		state.list2.splice(delIndex, 1);
		state.sendState = true;
	},
	// 数据列表索引重排
	updateSort(state) {
		state.list2.map((item, index) => {
			item.sort = index;
			return item;
		});
		state.sendState = true;
	},
	// 复制组件
	copyComponent(state,copyIndex) {
		let copyEle = state.list2.slice(copyIndex, copyIndex + 1);
		// 深克隆方法
		let deepClone = (obj)=>{
			let newObj = obj instanceof Array ? [] : {};
			for(let key in obj){
				if(obj.hasOwnProperty(key)){
					newObj[key] = typeof obj[key] == 'object' ? deepClone(obj[key]) : obj[key];
				}
			}
			return newObj;
		}
		let newObj = deepClone(copyEle[0]);
		newObj.isEdit = false;
		state.list2.splice(copyIndex + 1, 0, newObj);
		state.sendState = true;
	}
}

export default new Vuex.Store({
	state,
	mutations
})
