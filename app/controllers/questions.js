var tableData, options = [];
var questionFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'ques.json');
var contents = JSON.parse(questionFile.read());

function fillTable(options) {
	tableData = [];
	for (var i = 0; i < options.length; i++) {
		tableData.push(getTableRow(options[i]));
	}
	$.optionsTableView.setData(tableData);
};

function getTableRow(text) {
	var row = Ti.UI.createTableViewRow({
		selectedBackgroundColor : "#E1E1E1",
		backgroundColor : "#F0F0F0"
	});
	var rowView = Ti.UI.createView({
		layout : 'horizontal',
		left : "5%", //20
		right : '5%',
		top : '2dp',
		bottom : '4dp'
	});
	var leftImage = Ti.UI.createImageView({
		image : '/images/DeselectOption@2x.png',
		width : '5%',
		tag : 'image',
		top : '3dp',
	});

	rowView.add(leftImage);

	var optionText = Ti.UI.createLabel({
		left : '3%',
		width : '90%',
		top : '1dp',
		bottom : '2dp',
		text : text,
		font : {
			fontSize : '10sp',
		},
		color : 'black'
	});

	if (parseInt(Titanium.Platform.version) < 4) {
		row.add(optionText);
		row.leftImage = 'images/DeselectOption@2x.png';
		row.title = text;
	} else {
		rowView.add(optionText);
		row.add(rowView);
	}
	return row;
};

//fillTable(options);
function startWithFirstQuestion() {
	Ti.API.info('data ' + JSON.stringify(contents));
	var question = contents.mresponse.ques_compatibility[0];
	//questionLable.setText(question.QUESTION);
	//leftHeaderText.setText(L('question') + (parseInt(currentQuestion) + 1) + '/' + jsonData.GetQuestionsetByLevelResult.length);
	var options = [];
	for (var i = 0; i < question.options.length; i++) {
		options.push(question.options[i]);
	}
	//options.push(contents.mresponse.question[0].options[i]);
	//options.push(question.OPTION2);
	//options.push(question.OPTION3);
	//options.push(question.OPTION4);
	fillTable(options);
	//questionView.questionNumber = 0;
	//Ti.App.Properties.setInt('QuestionIndx',0)
}

startWithFirstQuestion();

$.optionsTableView.addEventListener('click', function(e) {
	for (var i = 0; i < tableData.length; i++) {
		if (i == e.index) {
			// optionSelected[currentQuestion] = Number(e.index) + 1;
			if (parseInt(Titanium.Platform.version) < 4) {
				tableData[i].backgroundColor = "#E1E1E1";
				tableData[i].leftImage = '/images/SelectOption@2x.png';
			} else {
				tableData[i].backgroundColor = "#E1E1E1";
				tableData[i].children[0].children[0].image = '/images/SelectOption@2x.png';
			}
		} else {
			//alert('hello1')
			if (parseInt(Titanium.Platform.version) < 4) {
				tableData[i].backgroundColor = "#F0F0F0";
				tableData[i].leftImage = '/images/DeselectOption@2x.png';
			} else {
				tableData[i].backgroundColor = "#F0F0F0";
				tableData[i].children[0].children[0].image = '/images/DeselectOption@2x.png';
			}
		}
	};
}); 