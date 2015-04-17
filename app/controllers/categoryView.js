var questionFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'ques.json');
var contents = JSON.parse(questionFile.read());

function init(){
	getQuestions("ques_compatibility");
	getQuestions("ques_personality");
	getQuestions("ques_behavioural");
	getQuestions("ques_physical");
	$.scrollable_cat_view.setCurrentPage(0);
}

function getQuestions(formType){
	var questionsArray = contents.mresponse[formType];
	var categoryForm = Alloy.createController("categoryForm", {formType: formType, questionsArray: questionsArray});
	$.scrollable_cat_view.addView(categoryForm.getView());
}

$.leftButton.addEventListener('click', function(){
	$.scrollable_cat_view.moveNext();
});

$.rightButton.addEventListener('click', function(){
	$.scrollable_cat_view.movePrevious();
});

init();
