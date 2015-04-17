var args = arguments[0] || {};

var questionsArray = args.questionsArray;
var forms = {"ques_compatibility":"Compatibility","ques_personality":"Personality","ques_behavioural":"Behavior","ques_physical":"Physical Relationship"};
$.categoryTitle.text = forms[args.formType];


for(var i=0;i<questionsArray.length;i++){
	var questionView = Alloy.createController("questionView",{questionData:questionsArray[i]});
	$.catView.add(questionView.getView());
}