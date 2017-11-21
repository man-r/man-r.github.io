$(document).ready(function () {
	
	var questionNumber=0;
	var questionBank=new Array();
	var htmlstage="game1";
	var htmlstage2=new Object;
	var stage="#game1";
	var stage2=new Object;
	var questionLock=false;
	var numberOfQuestions;
	var score=0;

	var questionText = document.createElement('div');
	
	var option1 = document.createElement('div');
	var option2 = document.createElement('div');
	var option3 = document.createElement('div');

	var correct = document.createElement('div');
	var wrong = document.createElement('div');

	questionText.className ="questionText";
	
	
	option1.className = "option";
	option2.className = "option";
	option3.className = "option";

	correct.className = "feedback1";
	wrong.className = "feedback2";

	option1.id = "1";
	option2.id = "2";
	option3.id = "3";


	correct.appendChild(document.createTextNode('CORRECT'));
	wrong.appendChild(document.createTextNode('WRONG'));

	var quizlistvarsion = suarray(shuffle(quizlist), 20);

	for (i=0;i<quizlistvarsion.length;i++) {
		questionBank[i]=new Array;
		questionBank[i][0]=quizlistvarsion[i].question;
		questionBank[i][1]=quizlistvarsion[i].option1;
		questionBank[i][2]=quizlistvarsion[i].option2;
		questionBank[i][3]=quizlistvarsion[i].option3;
	}
	numberOfQuestions=questionBank.length;
	displayQuestion();
	



	function displayQuestion(){
		removeAllChildren(questionText);
		
		var d_question = quizlistvarsion[questionNumber].question;
		questionText.appendChild(document.createTextNode(d_question));
		document.getElementById(htmlstage).appendChild(questionText);

		var d_options = shuffle(quizlistvarsion[questionNumber].options);
		var correctAns = new Array();
		for (var i = 0; i < d_options.length; i++) {
			var option = document.createElement('div');
			option.className = "option";

			option.appendChild(document.createTextNode(d_options[i].text));
			option.addEventListener("click", optionClicked);
			document.getElementById(htmlstage).appendChild(option);

			if (d_options[i].correct) {
				correctAns.push(d_options[i].text);
			}
		}

		function optionClicked(event) {
			
			if (event.target.className == 'option') {
				event.target.className = 'selectedoption'
			} else {
				event.target.className = 'option'
			}

			var x = document.getElementsByClassName('selectedoption');

		 	if (x.length == correctAns.length) {
		 		var correctAnswer = 0;

		 		var i = 0;
		 		var j = 0;
		 		for (i = 0; i < x.length; i++) {
		 			j = 0;
	        		for (j = 0; j < correctAns.length; j++) {
	        			if (correctAns[j] == x[i].innerHTML) {
	        				correctAnswer++;
	        			}
	        		}
	    		}
	    		
	    		
	    		if (correctAnswer == correctAns.length) {
	    			document.getElementById(htmlstage).appendChild(correct);
	    			score++;
					setTimeout(function(){changeQuestion()},1000);
	    		}
	    		else {
	    			document.getElementById(htmlstage).appendChild(wrong);
	    			i = 0;
			 		j = 0;
			 		x = document.getElementsByClassName('option');
		 			for (i = 0; i < x.length; i++) {
			 			j = 0;
		        		for (j = 0; j < correctAns.length; j++) {
		        			if (correctAns[j] == x[i].innerHTML) {
		        				x[i].className ="correctoption";
		        			}
		        		}
		    		}
					setTimeout(function(){changeQuestion()},2000);
	    		}
	    		
		 	}
		}
	}//display question

		
		
		
	function removeAllChildren(node) {
		while (node.hasChildNodes()) {
			node.removeChild(node.lastChild);
		}
	}	
	
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];

			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	function suarray(array, length) {
		if (array.length <= length) {
			return array;
		}
		var result = new Array();
		for (var i = 0; i < length; i++) {
			result.push(array[i]);
		}
		return result;
	}
	
	function changeQuestion(){
		questionNumber++;
		
		if(stage=="#game1"){
			stage2="#game1";
			stage="#game2";
		}
		
		else{
			stage2="#game2";
			stage="#game1";
		}

		if(htmlstage=="game1"){
			htmlstage2="game1";
			htmlstage="game2";
		}
		
		else{
			htmlstage2="game2";
			htmlstage="game1";
		}
		
		if(questionNumber<numberOfQuestions){
			displayQuestion();
		}
		else{
			displayFinalSlide();
		}
		
		 $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
		 $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
	}//change question
		

		
		
	function displayFinalSlide(){
			
		$(stage).append('<div class="questionText">You have finished the quiz! (refresh to get a random 20 questions)<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
		//setTimeout(function(){
		//	location.reload();
		//},5000);
	}//display final slide



});//doc ready
