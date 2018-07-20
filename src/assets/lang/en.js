export const  message = {
	name  : 'My Name is {name}',
	hello : 'Hello World : )',
	car   : 'car | cars',
	apple : 'no apple | one apple | {count} apples',
}
// 公共模块
export const G = {
	ok          : 'Ok',
	cancel      : 'Cancel',
	telNum      : 'Phone number',
	telErrTip   : 'Please enter the correct cell phone number!',
	hour        : 'hour | hours', //需要配置复数形式
	minute      : 'minute | minutes', //需要配置复数形式
	second      : 'second | seconds', //需要配置复数形式
	loading     : 'Loading',
	loaded      : 'Loaded',
	learnPeople : 'no one is learning | 1 student is learning | {num} students are learning',
	sweet       : 'sweet reminder',
	close       : 'close',
	takeup      : 'take up',
	more        : 'more',
	viewMore    : 'View more',
	home        : 'Home',
	course      : 'Course',
	me          : 'My learning',
	noData      : 'No data',
	learningNum : 'Learning {num},Completed {finishNum}',
	appName     : 'DingLearning',
	sucess      : 'sucess',
	error       : 'error',
	thumbsucess : 'Praise success',
	thumberr    : 'Cancel the point of praise',
	logout      : 'Logout',
	back        :'Back',
	hint        :'Tip',
	credit      :'Credit | Credits',
	ranking     :'Ranking',
	day         :'day | day | days',
	people      :'people',
	search      :'search',
	learning    :'learning',
	finished    :'finished',
}
// ===================薛崇伟 start================================
//个人必修
export const selfRequired = {
	title       :'Personal required courses',
	doing       : 'Learning',
	newLearn    :'Latest learn',
	endSort     :'Sort by deadline',
	newSort     :'Sort courses by addition date',
	lastSort    :'Latest learn',
	finished    :'Finished',
	learnFinish :'DDL: {time}',
	achieve     :'Achieve',
	ddl         :'DDL:',
	noddl       :'No cut-off time',
}
//=====首页======
export const index={
	startLv        :"Open your journey of learning",
	title          : 'Home page',
	navBtn1        : 'Assignments',
	navBtn2        : 'My elective courses',
	navBtn4        : 'Points Ranking',
	myCourse       : 'My courses',
	lastTime       : 'DDL',
	lastLearn      : 'Learning history:',
	myExam         : 'My exams',
	examTime       : 'Exam time' ,
	newCourse      : 'New courses',
	selectCourse   : 'add',
	notask         : 'No assignments now, go and select your courses!',
	progress       : 'Achieve {progress}%',
	examMsg        : 'No exam subject',
	courseMsg      : 'No course',
	sign           : 'Check In',
	signsucess     : 'Signed Successfully! You have signed in for {num} consecutive days, get {points} points',
	signsucess2    : 'Signed Successfully! You have signed in for {num} consecutive days',
	enter          : 'Enter',
	allRequired    : 'Corporate requirements',
	learningPeople : 'Who is learning',
	indexGuide     : 'Administrator can manage courses and assign study assignments at "backstage management-online learning management" on a PC terminal (required for all employees, department required or indivisual required)',
	see            : 'View now',
	newFun         : 'Discover new features',
}
// ===================薛崇伟 end================================


// ===================崔琳娜 start================================
// 線下培訓
export const train={
	admin:"I am administrator",
	title:'Offline training',
	title2:'Offline training management',
	status:'Status：',
	signIn:'Have signed-up',
	signUp:'Have signed-in',
	nosignUp:'Have not signed-in',
	all:'All',
	end:'Finished',
	trainTime:'Training time',
	trainPlace:'Training location',
	trainTeacher:'Lecturer',
	noTop:'No limits for sign-up',
	surplus:'Remaining position',
	full:'Capacity full',
	wantSign:'I want to sign up',
	cancelSign:'Cancel sign-up',
	assesment:'Analyzed',
	noassesment:'Un-analyzed',
	coursedata:'Course information',
	point:'Integral',
	coursedes:'Course introduction',
	courseout:'Course outline',
	materials:'Reference material',
	eval:'Training evaluation',
	finished:'Completed',
	certificate:'Certificate',
	obtain:'Received',
	nobtain:'Unreceived',
	nobtaincer:'Certificate unreceived',
	tip:'Congratulation on finishing training,please evaluate lecturer with stars',
	submit:'Submit',
	sucess:'Successful sign-up',
	sucess2:'Successful evaluation',
	unstart:'Has not started',
	learning:'Learning',
	pleaseholder:'Please enter your search',
	edit:'Edit',
	statistics:'Statistics',
	code:'Sign-in QR code',
	signstatistics:'Statistics for sign-up and sign-in',
	examstatistics:'Examination Statistics',
	assestatistics:'Evaluation statistics',
	certistatistics:'Certificate statistics',
	totalScore:"Course's overall score：",
	assesmentTime:'Time of evaluation',
	getTime:'Time of receive',
	writeTime:'Enter start date and end date',
	startTime:'Start date',
	startTime2:'Start time',
	endTime:'End date',
	remind:'Reminder of classes for students',
	no:'None',
	start:'Training start time',
	five:'5 minutes in advance',
	fifth:'15 minutes in advance',
	thirty:'30 minutes in advance',
	onehour:'1 hours in advance',
	oneday:'1 days in advance',
	save:'Preservation',
	delete:'Close',
	takepartin:'Participated',
	notakepartin:'Not-participated',
	signMethods:'Sign-up methods',
	required:'Assign',
	optional:'Open sign-up',
	codefailed:'QR code is expired',
	loadcode:'Click here to refresh QR code',
	savecode:'Press and hold to save sign-in QR code',
	trainingSign:'Training sign-in',
	editsucess:"Edit successful",
	signIntime:'Sign-up time',
	signUptime:'Sign-in time',
	reason:'Reasons for sign-in cancellation',
	examtime:'Submit time',
	students:'Student statistics',
	trainDetail:'Page of training details',
	signSucss:'Sign-in successfully',
	nosigntip1:"You have not signed-up yet, can not begin study",
	nosigntip2:"You have not signed-in yet, can not participate exams",
	nosigntip3:"You have not signed-in yet, can not participate evaluations",
	nosigntip4:"You have evaluated, can not evaluate twice",
	cancelSucess:'Cancel sign-up successful',
	noedit:'Can not edit',
	closeSucess:'Close successful',
	reTip:'This list can only display off-line training marked as "published", to manage "not published" and "closed" off-line training please go to background management at a PC terminal',
	trainover:'The training has come to an end',
	nobao:'Not enrolment',
	nobegin:'Not beginning',
	pleasecommon:'Please assess',
	waitAssement:'waiting for evaluation',
	seeBigPic:'click to view large picture',
	started:"training has started,you have not signed-up",
	toast:'training end time cannot be smaller than training start time',
	started2:"on site sign-in is allowed without signing-up",
	nostart:"training has not started, cannot conduct evaluation",
	noadmin:"not authorized to participate",
	canceled:"sign-in is cancelled due to some issues",
	lengthPlace:"name of the location of training cannot exceed 50 words",
	pointNum:"please enter number for points",
	pointNum2:"Please enter a positive integer",
	pointNum3:"Incorrect integral input",
	timeshore:"training end time cannot be smaller than training start time",
	timeshore2:"training start time cannot be smaller than the current time",
	timeshore3:"Class reminding cannot be smaller than the current time",
	sucesscancel:"sign-in is successfully cancelled",
	signCanceled:"sign-in has been cancelled",
	certificateCancel:"Have been cancelled",
	deleted:'The training under this line has been closed or deleted',
	dingMes:'The administrator invites you to participate in the offline training assessment',
}
// 報表下載頁面
export const reportFile={
	fileName:'file name',
	fileTime:'File generation time',
	filedown:'Please download it to the PC side',
}
// 学习地图
export const learnMap={
	title         :'study map',
	stage         :'<span>0</span> study phase in total | <span>1</span> study phase in total | <span>{num}</span> study phases in total',
	coursenum     :'0 course | 1 course | {coursenum} courses',
	examnum       :'0 exam | 1 exam | {examnum} exams',
	num           :'{coursenum} courses,{examnum} exams',
	cycle         :'study cycle: 0 day | study cycle: 1 day | study cycle: {num} days',
	mapdes        :'map instruction',
	hello         :'Hello,{name}',
	welcome       :"Welcome to open learning map.",
	please        :'<span>{stage}</span> phases in total, please finish in <span>{cycle}</span> days',
	please2       :'<span>{stage}</span> phases in total,No time limit',
	start         :'enable map',
	pass          :'passed',
	learnnum      :'you have studied for {day} days, surpassed {num}% of people',
	ddl           :'DDL:',
	noddl         :'havenot start studying,currently no due date.',
	learning      :'learning',
	started       :"map is enabled",
	finished      :'Completed',
	phase         :'Phase {num}',
	exam          :'exam',
	examTime      :'Exam time',
	course        :'online courses',
	progress      :'The current progress has been completed {progress}%',
	startlearn    :'Start learning',
	continuelearn :'Continue to learn',
	finishlearn   :'Have finished learning',
	startexam     :'Start Exam',
	examagin      :'Try again',
	exampass      :'Passed',
	examnopass    :'Failed',
	examreview    :'Exam result',
	backmap       :'Return to study map',
	pleaseopen    :'Please enable',
	pleaseorder   :'Please study in order',
	closed        :"The learning map has been closed",
	mapGuide      :'Administrator can create study map at "backstage management-study map management" on a PC terminal (new employees will be assigned automatically)',
}
//课程页
export const courseDetail={
	title:'Course details',
	courses:'Courses',
	people:'no student learning | one student is learning | {number} students are learning',//复数形式
	students:'completed/assigned:{num1}/{total1},completed/Elective:{num2}/{total2}',
	course:'Course list',
	communication:'Group',
	delete:'delete',
	introduce:'Course details',
	studentsList:'Students',
	// see:'Check',
	see:'',
	elective:'elective',
	required:'required',
	category:'Category',
	tag:'Tag',
	points:'Points',
	intruduction:'Intruduction',
	comment:'comment',
	common:'write',
	reply:'reply',
	replytip:'Please enter the content to reply.',
	zan:'thumb',
	tip:'Congratulations on your completion of the course. Please evaluate the course with stars. Your feedback will help to improve the content continuously.',
	place:'Please enter your rating.',
	submit:'Submit',
	notsubmit:'No comment',
	score:'score',
	join:'joinLearn',
	join2:'Learning progress can be recorded after learning',
	joined:'Have joined the study',
	jointip:'Hint: please join before learning',
	successJoin:'Join the learning success',
	lecture:'Lecture {num}',
	totalPoint:'{num} integral can be obtained',
	noClass:'No courseware',
	tip4:'you can communicate after learning',
	thumbsucess:'Praise success',
	thumberr:'Cancel the point of praise',
	nocertificate:'This course is not completed yet. You have not obtained the certificate.',
	nocertificate1:'The certificate has been cancelled by the administrator',
	certificate:'certificate',
	nostudents:'No students',
	credit:'credit',
	totalcredit:'Access to {num} credits',
	pleasecommon:'Please use the stars to evaluate',
}
// 写评论
export const writeComment={
	title:'Write comments',
	placeholder:'Please enter your comments',
	placeholder2:'I also say a few words',
	publish:'publish',
	sucess:'Add communication success',
	please:'Please enter the communication content',
}
export const replyComment={
	title:'Comment reply',
}
  
//课程播放页
export const coursePlay={
	poem1:['Pay tribute to the lifelong learners!','Knowledge in the brain is better than money in the hands','Learning is to accumulate steadily, better.','Learning, learning, relearning','Among any three people walking, I will find something to learn for sure','What is important is not the quantity of knowledge,but the quality of knowledge','learning and active','Thanks to the days of learning,let me grow up quietly','Learning is a bridge between dreamand reality','To be a learning self','learning to change the fate,to strive for the future',"don't want to jump a thousand miles,just want to move one step a day",'Repetition is the mother of learning','knoeledge is power','Do not make excuses for failure,only to find a chance for success','Wisdom is out of diligence,and genius is to accumulate','defeat others,first to defeat oneself','There is no question, no question, no question','Make way for the sea, and the Mt. Hengshan can be moved.','Opportunity only favors those who have prepared','Time is like a sponge in the water, as long as we are willing to squeeze, there are always some','Time abandons the time, and time abandons him'],
	tab:'Reminder',
	tab4:"Add successful",
	tab5:'Congratulations on your acquisition of a certificate',
	see:'see',
	true:'true',
	cancel:'cancel',
	speed1:'1.0X speed play ',
	speed2:'1.25X speed play',
	speed3:'1.5X speed play',
	close:'close',
	courseList:'courseList',
	speed:'Speed play',
	speedTxt:'Speed play',
	tip1:'To accurately grasp the progress of learning, pls do not fast froward the progress back for the first learning.',
	tip2:'Click "play " to enter the full screen,and click "exit full screen" to return to current page',
	tab1:'Congratulations!  You have completed this lesson',
	tab2:'Congratulations!  You have completed this lesson. [the next lesson: {title}]',
	class:'Courseware {num}: {title}',
	alert1:'The video file is being converted, and you can see it later',
	leastTime:'<i class="icon iconfont icon-icontishi"></i>The least reading time is <span>{time}</span>',
	time:'Timing：',
	learning:'learning',
	click:'Click ’Complete’',
	finished:'finished',
	lose:'Document conversion failed',
	wifi:'You are currently in a non-WIFI network state. Do yo want to continue to browse?',
	order:'Please learn in order',
	joinsucess:'Join the learning success',
	nolast:'This is the first section',
	clock:'Not unlock',
	nonext:'This is the last section',
	joinsucess:'Join the learning success',
	joinerr:'Join the failure of learning',
	noRepeat:'Cannot like repeatedly',
	noCai :'You haved liked and cannot dislike',
	noRepeatCai:'Cannot dislike repeatedly',
	noZan   :'You have disliked and cannot like',
	limit :'Play with different speed is only available under iOS, Andriod will be available later, stay tuned',
	deleted:'the course has been closed or deleted',
}

//所有成员
export const allStudents={
	allStudents:'All students',
	num:'no one | 1 student | {num} students',
	total:' learning (<span>{number}</span>)',
	uncompleted:'Uncompleted',
	completed:'Completed',
	finished:'completed ({num})',
	unfinished:'all completed | uncompleted (1)| uncompleted ({num})'
}
//交流群
export const communication={
	title:'Communication group',
	join:' Join communication group',
	code:'Group QR code',
	tap:'Scan QR code to join the group',
	nocode:'Course communication group hasn’t been created, request for a group',
	back:' Go back',
	request:'Request for a group',
	students:'Who requested',
	sucess:'requests success',
	deletesucess:'Delete success',
}
//选课中心
export const elective={
	title:'Courses center',
	learningNum:'no one is learning | 1 student is learning | {num} students are learning ',
	checkAllcourse:'Look at all the courses',
}
//=====选课中心======
export const courseCenter={
	myCourse      : 'My courses',
	more          : 'more',
	learningNum   : 'Learning {num},Completed {finishNum}',
	courseNoData  : 'There is no course in this category. Please contact the administrator',
	inputVal      : 'Please enter the search content',
	allCourses	  :'Look at all the courses',
	courseGuide   :'Administrator can create courses and build your own courses base at "backstage management-online learning management" on a PC terminal ',
}
//我的课程
export const myCourse={
	title:'My courses',
	task:'Assignments',
	optional:'My elective courses',
	learning:'learning',
	finished:'finished',
	cancel:'cancel',
	progress:'Achieve <span>{progress}</span>',
	learningNum:'no one is learning | 1 student is learning | {num} students are learning ',
	all:'all',
	delete:'delete',
	search:'Please enter the search content',
	total:'Total：<span>{num}</span>',
	more:'Look at more courses',
	deptrequired:'Department required',
	userrequired:'Personal compulsory',
	deletecourse:'Deleting the course',
	allrequired  :'All staff required',
}
//个人中心
export const mine={
	title:'Mine',
	design:'Management star',
	integral:'Points：<span>{num}</span>',
	ranking:'ranking：<span>{num}</span>',
	learn:'My courses',
	exam:'My exams',
	certificate:'My certificate',
	skin:'Background',
	language:'Multilingual',
	Upgrade:'Upgrade Announcement',
}
// h换肤
export const changeSkin={
	title:'Background',
	use:'using',
	orange:'orange',
	blue:'Business blue',
	cyan:'Cyan',
	green:'Mint green',
	chinaRed:'Chinese red',
	red:'Watermelon Red',
	purple:'Violet',
	bluePurple:'Bluish violet',
	black:'black',

}
// 多语言
export const language={
	title:'Multilingual',
	zh:'Simplified Chinese',
	tw:'Traditional Chinese',
	trandational2:'Traditional Chinese (Hong Kong)',
	en:'English',
	japan:'Japanese',

}
// 积分排行
export const integralRanking={
	title:'Points Ranking',
	ctitle:'Credits Ranking',
	integral:'My Points:',
	rank:'Ranking:',
	credit:'My Credits:',
	norank:'No ranking',
}
// 我的证书
export const certificateDetail={
	title:'My Certificate',
	save:'save',
	send:'Email it',
	name:'DingLearning',
	fromexam:'Obtained by exams',
	fromhand:'Issue manually',
	fromcourse:'Obtained by courses',
	fromtraining:'Obtained by training',
	from:'Source:',
	noGain:"You haven't got a certificate yet",
	tab:'You have not completed the course, so you have not received the certificate',
	tip:'Hint: long press can save certificate',
}

// ===================崔琳娜 end================================


// ===================李璐 start================================

//===========  考试  ===========
//考试列表
export const examList={
	title        :'Exam List',
	notCompleted :'Uncompleted',
	isCompleted  :'Completed',
	testTime     :'Exam time:',
	diAgain      :'Try again',
	testResult   :'Exam result',
	goToStudy    :'Learn now',
	notBegin     :'Not started',
	examNotBegin :'This exam hasn’t started yet.',
	startExam    :'Start Exam',
	continueExam :'Continue Exam',
	passed       :'Passed',
	failed       :'Failed',
	notAllowed   :'Not Allowed',
	mon          :'-',
	day          :' ',
	all          :'All',
	noTime       :'Test at Any Time',
	search       :'search',
	examGuide    :'Administrator can release exams at "backstage management-exam management" on a PC terminal',
}
//考试详情
export const examDes={
	title       : 'Exam',
	testTime    : 'Exam time',
	duration    : 'Duration',
	maxScore    : 'Total marks',
	passScore   : 'Passing mark',
	description : 'Exam introduction',
	enterExam   : 'Enter',
	inHand      : 'Read in',
	notBegin    : 'Not started',
	isEnd       : 'Expired',
	viewResult  : 'Exam result',
	noPartake   : 'Not Allowed',
	desMsg1     : '<span>Reminding:</span> You can only answer the question after the exam starts and shall not take exam when time’s up.',
	desMsg2     : '<div> Hand in automatically when time’s up.</div>',
	beforeExam  : 'Exam will be started after:',
	hour        : ' h',
	min         : '<b>1</b> min | <b>{num}</b> mins',
	sec         : ' s',
	integral    : 'Integral',
	credit      : 'Credit',
	maxAttempt  : 'Test times',
	closedMsg   : 'Exam is closed',
	deletedMsg  : 'Exam is deleted',
}
//开始考试
export const startExam={
	title 			   :'Exam',
	msgTitle           :'Message',
	timeOutMsg         :"Time's up, please hand in your paper",
	unlimited          :'Unlimited',
	unlimitedTime      :'Unlimited Time', 
	noAnswerMsg        :'Still have one question to answer (or did not click the "confirm" button), are you sure to hand in paper? | Still have {num} questions to answer (or did not click the "confirm" button), are you sure to hand in paper?',  //需要配置复数形式
	noAnswerMsg2       :'Still have one question to answer (or did not click the "confirm" button),  cannot submit, please continue answering? | Still have {num} questions to answer (or did not click the "confirm" button),  cannot submit, please continue answering.',  //需要配置复数形式
	submitMsg          :'Are you sure to hand in your paper？',
	submit             :'Hand in',
	cancel             :'cancel',
	submission         :'Handing in',
	prohibitMsg        :'Haven’t answered yet (Or Haven’t confirmed the answer yet), you can’t hand in paper.',
	fontSize           :'Font size',
	preventionCheatMsg :'You have left once,more than {maxNum} will hand in automatically | You have left twice,more than {maxNum} will hand in automatically | You have left{num} times,more than {maxNum} will hand in automatically',  
	preventionCheatMax :'You have left once , more than {maxNum} will hand in automatically | You have left twice, more than {maxNum} will hand in automatically | You have left {num}times, more than {maxNum} will hand in automatically',
	nextDoitMsg        :'Do you want to save the answer in case to complete the exam next time?',
	nextDoitMsgBtn1    :'Save',
	nextDoitMsgBtn2    :'Not save',
	noReturnMsg        :'You can’t exit the exam, please complete the exam or hand in paper now.',
	noReturnMsgBtn1    :'Complete the exam',
	noReturnMsgBtn2    :'Hand in paper immediately',
}
//题目
export const question={
	singleChoice    :'Single choices',
	choice          :'Multiple answers',
	uncertainChoice :'Multiple answers',
	determine       :'True or False',
	fill            :'Fill-ins',
	essay           :'Short answers',
	placeholder     :'Write your answers here',
	placeholder2    :'A{num}',
	confirmAnswer   :'Confirm',
	analysis        :'Analysis of answer',
	correct         :'【Answers】',
	userAnswer      :'【You’ve  chosen】',
	teacherSay      :'Teacher’s comment',
	fills           :'A{num}',
	points          :'Score: {num}',
	noAnswer        :'No Answer',
	noAnswerMsg     :'Please select the answer',
	noAnswerMsg1    :'Please fill in the answer',
	answerMsg       :'Multi-choice questions, indefinitely selected questions, blank-filled questions and short answer questions, you need to click the [confirm answer] button to save the answer after completing the answer',
}
//字号调节
export const changeFont={
	big     :'big',
	middle  :'middle',
	small   :'small',
	confirm :'Enter',
}
//考试结果
export const examResult={
	title        :'Exam Result',
	score        :'Score',
	usedTime     :'Used time',
	accuracy     :'Accuracy',
	examAnalysis :'Answers',
	certificate  :'Certificate',
	doAgain      :'Try again',
	times        :'Times',
	reviewingMsg :'The paper is marking, please wait a moment.',
	studyMsg     :'Learn now',
	logo         :'DingLearning',
	testPaper    :'Exam',
	score2        :'Score',
	totalScore   :'Total score',

}
//考试预览
export const examPreview={
	preview:'Previewing',
}
//考试解析 
export const examAnalysis={
	title  :'Exam Analysis',
}

//=========== 闯关赛开始 ===========
//闯关赛列表
export const competitionList={
	title        :'Contest',
	notCompleted :'Racing/fighting',
	passed       :'Breakthrough successfully',
	isEnd        :'Expired',
	attemptNum   :'{num} people participated | {num} person participated', 
	passedNum    :'The {num} rank',  
	notBegin     :'Stay tuned',
	single       :'Single player breakthrough',
	twosome      :'Duo player breakthrough',
	pkGuide      :'Administrator can create interesting PK competitions at "backstage management-exam management-PK competition management" on a PC terminal ',
}
//关卡列表
export const competitionLevel={
	title          :'Contest',
	answerAnalysis :'Answer analyze',
	introduce      :'Breakthrough tips',
	shareMsg       :'You must light up one star to PK with others',
	shareMsg2      :'You must light up one star to PK with others',
	closeMsg       :'The game has been closed',
	endMsg         :'The game has expired',
	notBeginMsg    :'The game did not start',
}
//闯关赛详情
export const competitionInto={
	title           :'Contest',
	pointsHtml      :'<b>{num}</b>points',
	questions       :'<b>{num}</b> questions',
	questionNum     :'Number of questions',
	points          :'{num}points',
	passScore       :'Passed', //分数
	passScore2      :'Score to pass',
	lastResults     :'Result of the previous',
	startAnswer     :'Start answering quesitons',
	doAgain         :'Again',
	competitionMsg  :'After passing this challenge the first star will be lit',
	competitionMsg2 :'After passing this challenge the a star will be lit',
	showOff         :'Show-off',
	challengeList   :'Challenge list',
	keyWorld        :'Please enter your search here',
	challenge       :'Challenge',
	rankings        :'Challenge ranking',
	stareChallenge  :'Start challenge',
	finishChallenge :'You have finished the chllenge',
	challengeMsg    :'A star will be lit after passing a challenge regardless win or loose',
	challengeMsg2   :'A star will be lit after passing and win a challenge',
	alertMsg        :'Currently no one can PK, can use a one-off mode',
	alertBtn1       :'Keep waiting',
	alertBtn2       :'Start',
}
//开始闯关
export const competition={
	title        : 'Contest',
	questionNum  : 'Question <span>{num}</span> ',
	lastQuestion : 'Last question',
	noOpponent   : 'No competitors',
}
//闯关结果
export const competitionResult={
	title       :'Contest',
	nextBtn     :'Enter the next round',
	continueBtn :'Continue challenging',
	showOffBtn  :'Show-off scores',
	rankingBtn  :'Look-up ranking',
	resultMsg   :'This round is complete, congratulation to the next round!',
	resultMsg2  :'Get deystroyed, but I want to fight again',
	resultMsg3  :'',
	shareMsg    :'I scored {num} points at the breadthrough, come and challenge if you are not impressed',
	passedBtn   :'Passed',  //没有翻译
}


//这里没有翻译
//闯关结果排行
export const competitionRanking={
	title    :'Contest',
	winRate  :'win rate',
	msgTitle :'Customs Secrets',
	msg1     :'1.total score is the sum of pointts of all star level in each checkpoint(if both challenge and score failed, it will not be counted in the total score)',
	msg1     :'2.win rate: times of successful challenges/times of challenges',
	msgShare :'Participation is only supported by mobile terminals, please open the link in DingTalk mobile app',

}
//考试导航
export const examBox={
	exam :'Exam in process',
	pk   :'Contest',
}
//=========== 闯关赛结束 ===========
// ===================李璐 end================================


