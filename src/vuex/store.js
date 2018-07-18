import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
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
	},
	mutations: {
		// 题型数据修改方法
		updateList2 (state, payload) {
			state.list2 = payload;
		},
		// 修改组件编辑状态
		editQuestion (state, editIndex) {
			state.list2.map((item, index) => {
				if (index == editIndex) {
					item.isEdit = true;
				} else {
					item.isEdit = false;
				}
			})
		},
		// 删除组件
		delComponent (state, delIndex){
			// 删除组件后，取消编辑状态
            state.list2[delIndex].isEdit = false;
            state.list2.splice(delIndex, 1);
		},
		// 更新数据索引排序
		updateSort (state){
            state.list2.map((item, index) => {
                item.sort = index;
                return item;
            });
		}
	},
	actions: {

	}
})

export default store;
