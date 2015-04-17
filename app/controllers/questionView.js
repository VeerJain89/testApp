var args = arguments[0] || {};
var options = args.questionData.options;

$.questionText.text = args.questionData.question_text;

for(var i=0;i<options.length;i++){
	var option = Ti.UI.createView({
		layout: "horizontal",
		height: Titanium.UI.SIZE,
		width: Titanium.UI.SIZE
	});
	
	var radioButton = Ti.UI.createImageView({
		backgroundColor: "black",
		height:15,
		width:15
	});
	
	var optionText = Ti.UI.createLabel({
		text: options[i].text
	});
	
	option.add(radioButton);
	option.add(optionText);
	
	$.optionsView.add(option);
}
