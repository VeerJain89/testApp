var args = arguments[0] || {};

function boyClicked(){
	var leftAnimate = Ti.UI.createAnimation({
		left : '0px',
		duration: 1000
	});
	var rightAnimate = Ti.UI.createAnimation({
		left : '100%',
		duration: 1000
	});
	$.genderQuest.visible=false;
	$.boyWindow.animate(leftAnimate);
	$.girlWindow.animate(rightAnimate);
	setTimeout(function(){
		createQuestionPage('boy');
	}, 1000);
}

function girlClicked(){
	var rightAnimate = Ti.UI.createAnimation({
		left : '-50%',
		duration: 1000
	});
	var leftAnimate = Ti.UI.createAnimation({
		right : '100%',
		duration: 1000
	});
	$.genderQuest.visible=false;
	$.girlWindow.animate(rightAnimate);
	$.boyWindow.animate(leftAnimate);
	setTimeout(function(){
		createQuestionPage('girl');
	}, 1000);
}

function createQuestionPage(gender){
	var categoryView = Alloy.createController('categoryView').getView();
	if(gender === 'boy'){
		categoryView.left = 0;
		$.boyWindow.add(categoryView);
	} else{
		categoryView.right = 0;
		$.girlWindow.add(categoryView);
	}
}
