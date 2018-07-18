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
	},
	getters: {

	},
	mutations: {

	},
	actions: {

	}
})

export default store;
