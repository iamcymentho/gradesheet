                   
                   function gradesheet1() {


					    		var user_score = document.getElementById('input1').value;
					    	     var grade = "";


					    	if (user_score >= 70 && user_score <= 100) {

					    		grade = 'A';
					    		

					    	}else if(user_score >= 60 && user_score <= 69){

					    		grade = 'B';

					    	}else if(user_score >= 50 && user_score <= 59){


					    		grade = 'C';

					    	}else if(user_score > 45 && user_score <= 50){


					    		grade = 'D';	


					    	}else if(user_score >= 40 && user_score <= 45){


					    		grade = 'E';	

					    	}else{

					    		grade = 'F';
					    	}


					    	var myresult = document.getElementById('result1');

					    
					    	myresult.value =  grade;
					    	}




                          
                   function gradesheet2() {


					    		var user_score2 = document.getElementById('input2').value;
					    	     var grade = "";


					    	if (user_score2 >= 70 && user_score2 <= 100) {

					    		grade = 'A';
					    		

					    	}else if(user_score2 >= 60 && user_score2 <= 69){

					    		grade = 'B';

					    	}else if(user_score2 >= 50 && user_score2 <= 59){


					    		grade = 'C';

					    	}else if(user_score2 > 45 && user_score2 <= 50){


					    		grade = 'D';	


					    	}else if(user_score2 >= 40 && user_score2 <= 45){


					    		grade = 'E';	

					    	}else{

					    		grade = 'F';
					    	}


					    	var myresult = document.getElementById('result2');

					    
					    	myresult.value =  grade;

					    	myresult.style.backgroundColor = 'white';



					    	}



					    	function gradesheet3() {


					    		var user_score3 = document.getElementById('input3').value;
					    	     var grade = "";


					    	if (user_score3 >= 70 && user_score3 <= 100) {

					    		grade = 'A';
					    		

					    	}else if(user_score3 >= 60 && user_score3 <= 69){

					    		grade = 'B';

					    	}else if(user_score3 >= 50 && user_score3 <= 59){


					    		grade = 'C';

					    	}else if(user_score3 > 45 && user_score3 <= 50){


					    		grade = 'D';	


					    	}else if(user_score3 >= 40 && user_score3 <= 45){


					    		grade = 'E';	

					    	}else{

					    		grade = 'F';
					    	}


					    	var myresult = document.getElementById('result3');

					    
					    	myresult.value =  grade;



					    	}




					    	function gradesheet4() {


					    		var user_score4 = document.getElementById('input4').value;
					    	     var grade = "";


					    	if (user_score4 >= 70 && user_score4 <= 100) {

					    		grade = 'A';
					    		

					    	}else if(user_score4 >= 60 && user_score4 <= 69){

					    		grade = 'B';

					    	}else if(user_score4 >= 50 && user_score4 <= 59){


					    		grade = 'C';

					    	}else if(user_score4 > 45 && user_score4 <= 50){


					    		grade = 'D';	


					    	}else if(user_score4 >= 40 && user_score4 <= 45){


					    		grade = 'E';	

					    	}else{

					    		grade = 'F';
					    	}


					    	var myresult = document.getElementById('result4');

					    
					    	myresult.value =  grade;



					    	}


					    	function gradesheet5() {


					    		var user_score5 = document.getElementById('input5').value;
					    	     var grade = "";


					    	if (user_score5 >= 70 && user_score5 <= 100) {

					    		grade = 'A';
					    		

					    	}else if(user_score5 >= 60 && user_score5 <= 69){

					    		grade = 'B';

					    	}else if(user_score5 >= 50 && user_score5 <= 59){


					    		grade = 'C';

					    	}else if(user_score5 > 45 && user_score5 <= 50){


					    		grade = 'D';	


					    	}else if(user_score5 >= 40 && user_score5 <= 45){


					    		grade = 'E';	

					    	}else{

					    		grade = 'F';
					    	}


					    	var myresult = document.getElementById('result5');

					    
					    	myresult.value =  grade;



					    	}



					    	function display() {


					    		var user_score = document.getElementById('input1').value;

					    		var user_score2 = document.getElementById('input2').value;

					    		var user_score3 = document.getElementById('input3').value;

					    		var user_score4 = document.getElementById('input4').value;

					    		var user_score5 = document.getElementById('input5').value;


					    		var addition =parseInt(user_score)+ parseInt (user_score2) +
					    		 parseInt(user_score3) + parseInt(user_score4) + parseInt(user_score5);


					    		 var average = addition / 5;



					    	
					    		var mybutton = document.getElementById('getresult');


					    		mybutton.innerHTML = '<h3>TOTAL</h3> =' + addition;

					    		mybutton.style.marginLeft = '200px';


					    		 



					    		 // if (average < 50.0) {

					    		 // 	mybutton.innerHTML = '' 'You disappointed your teacher';
					    		 // }


					    		// var mybutton1 = document.getElementById('getresult1');

					    		// mybutton.innerHTML = '<h3>AVERAGE</h3> =' + average;






					    


					    		// mybutton1.innerHTML = `Remarks : You dissappointed your teacher.`

					    		                   
					    	}




					    	function average() {

					    		var user_score = document.getElementById('input1').value;

					    		var user_score2 = document.getElementById('input2').value;

					    		var user_score3 = document.getElementById('input3').value;

					    		var user_score4 = document.getElementById('input4').value;

					    		var user_score5 = document.getElementById('input5').value;


					    		var addition =parseInt(user_score)+ parseInt (user_score2) +
					    		 parseInt(user_score3) + parseInt(user_score4) + parseInt(user_score5);


					    		 var average = addition / 5;



					    		 var mybutton = document.getElementById('average');


					    		mybutton.innerHTML = '<h3>AVERAGE</h3> =' + average;

					    		mybutton.style.marginLeft = '200px';

					    	}



					    	function remarks() {

					    		var user_score = document.getElementById('input1').value;

					    		var user_score2 = document.getElementById('input2').value;

					    		var user_score3 = document.getElementById('input3').value;

					    		var user_score4 = document.getElementById('input4').value;

					    		var user_score5 = document.getElementById('input5').value;


					    		var addition =parseInt(user_score)+ parseInt (user_score2) +
					    		 parseInt(user_score3) + parseInt(user_score4) + parseInt(user_score5);


					    		 var average = addition / 5;



					    		 var myremarks = document.getElementById('remarks');


					    		 if (average == 35.0 ) {


					    		    myremarks.innerHTML = '<h3>REMARKS :</h3>  <b>You dissappointed your teacher</b> ' + 
				 '<span class="iconify" data-icon="emojione:sad-but-relieved-face" data-width="100" data-height="100" style="margin-left:100px;"></span>'


				 							myremarks.style.marginLeft = '200px';


					    		 }else if (average > 35.0 && average <= 50.0) {


					    		 	 myremarks.innerHTML = '<h3>REMARKS :</h3>  <b>Put in more efforts</b> ' + 
				 '<span class="iconify" data-icon="emojione:sad-but-relieved-face" data-width="100" data-height="100" style="margin-left:100px;"></span>'


				 							myremarks.style.marginLeft = '200px';

					    		 }else if (average > 50.0 && average <= 74.0) {


					    		 	myremarks.innerHTML = '<h3>REMARKS :</h3>  <b>Good job! There\'s always room for improvement</b> ' + 
				 '<span class="iconify" data-icon="system-uicons:face-happy" style="color: green;" data-width="100" data-height="100" style="margin-left:100px;"></span>'


				 							myremarks.style.marginLeft = '200px';

					    		 }else if (average > 74.0 && average <= 100.0) {

        
                                  myremarks.innerHTML = '<h3>REMARKS :</h3>  <b>Great!! You should be proud of yourself</b> ' + 
				 '<span class="iconify" data-icon="noto:thumbs-up-medium-skin-tone" style="color: green;" data-width="100" data-height="100" style="margin-left:100px;"></span>'


				                    myremarks.style.marginLeft = '200px';

					    		 }else{


					    		 	myremarks.innerHTML = '<h3>REMARKS :</h3>  <b>You failed woefully. You are compelled to repeat this academic year</b> ' + 
				              '<span class="iconify" data-icon="typcn:warning" style="color: red;" data-width="100" data-height="100"></span>'


				                    myremarks.style.marginLeft = '200px';
					    		 }


					    		

					    





					    		
					    	}






