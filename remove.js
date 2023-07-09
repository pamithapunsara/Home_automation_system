var firebaseConfig = {
    apiKey: "AIzaSyBsgTu-OYIlNB_9UWFLJccZdcDTqx4t_2k",
    authDomain: "multi-buttons.firebaseapp.com",
    databaseURL: "https://multi-buttons-default-rtdb.firebaseio.com",
    projectId: "multi-buttons",
    storageBucket: "multi-buttons.appspot.com",
    messagingSenderId: "408836785888",
    appId: "1:408836785888:web:6c880875031de17c4cf285",
    measurementId: "G-MW2FTJC9DR"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  $(document).ready(function(){
	var database = firebase.database();
	var Led1Status;
	var Led2Status;
	var Led3Status;
	var Led4Status;
	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		Led2Status = snap.val().Led2Status;
		Led3Status = snap.val().Led3Status;
		Led4Status = snap.val().Led4Status;

		if(Led1Status == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
			let bulb1 = document.getElementById('b1'); 
			bulb1.classList.add('on');

		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
			let bulb1 = document.getElementById('b1');
			bulb1.classList.remove('on');
			

        }


        if(Led2Status == "1"){
            document.getElementById("unact2").style.display = "none";
            document.getElementById("act2").style.display = "block";
			let bulb2= document.getElementById('b2'); 
			bulb2.classList.add('on');

        }else{
            document.getElementById("act2").style.display = "none";
            document.getElementById("unact2").style.display = "block";
			let bulb2= document.getElementById('b2');
			bulb2.classList.remove('on');
        }


        if(Led3Status == "1"){
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";
			let bulb3= document.getElementById('b3');
			bulb3.classList.add('on');

        }else{
            document.getElementById("act3").style.display = "none";
            document.getElementById("unact3").style.display = "block";
			let bulb3= document.getElementById('b3');
			bulb3.classList.remove('on');
        }


        if(Led4Status == "1"){
            document.getElementById("unact4").style.display = "none";
            document.getElementById("act4").style.display = "block";
			let bulb4= document.getElementById('b4');
			bulb4.classList.add('on');
			
        }else{
            document.getElementById("act4").style.display = "none";
            document.getElementById("unact4").style.display = "block";
			let bulb4= document.getElementById('b4');
			bulb4.classList.remove('on');
        }

    });






    //for Led1...........................
    //The $ function is typically used in jQuery to select elements based on CSS selectors.
    $(".toggle-btn1").click(function(){           // The provided function will be executed when the element(s) is clicked.The $ function is typically used in jQuery to select elements based on CSS selectors.
		var firebaseRef = firebase.database().ref().child("Led1Status");  //This line creates a Firebase database reference to the "Led1Status" location in the database

		if(Led1Status == "1"){  

            let bulb1 = document.getElementById('b1'); //The querySelector() method returns the first element that matches a CSS selector. This line selects the first element in the document with the class "btn" and assigns it to the variable btn
			bulb1.classList.remove('on');		

			firebaseRef.set("0");  // These lines update the value of the "Led1Status" location in the Firebase database. The set() function is used to set the value to "0" or "1" depending on the current value of Led1Status.
			Led1Status = "0";  

		} else {


			let bulb1 = document.getElementById('b1'); 
			let audio = document.querySelector('#audio');
			bulb1.classList.add('on');
			audio.play();


			firebaseRef.set("1");
			Led1Status = "1";   
		}

		/*as summary, when the "toggle-btn" element is clicked, the code checks the current value of Led1Status. If it's "1",
		 it updates the Firebase database to "0" and updates Led1Status to "0". If it's "0", it updates the Firebase database to "1" and updates Led1Status to "1". */
	})





    //for Led2.................................
    $(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref().child("Led2Status");
		if(Led2Status == "1"){

            let bulb2 = document.getElementById('b2'); //The querySelector() method returns the first element that matches a CSS selector. This line selects the first element in the document with the class "btn" and assigns it to the variable btn
			bulb2.classList.remove('on');	

			firebaseRef.set("0");
			Led2Status = "0";
		} else {

            let bulb2 = document.getElementById('b2');
			let audio = document.querySelector('#audio');
			bulb2.classList.add('on');
			audio.play();

			firebaseRef.set("1");
			Led2Status = "1";
		}
	})





    //for Led3..................................
    $(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref().child("Led3Status");
		if(Led3Status == "1"){

            let bulb2 = document.getElementById('b3'); //The querySelector() method returns the first element that matches a CSS selector. This line selects the first element in the document with the class "btn" and assigns it to the variable btn
			bulb2.classList.remove('on');

			firebaseRef.set("0");
			Led3Status = "0";
		} else {

            let bulb2 = document.getElementById('b3');
			let audio = document.querySelector('#audio');
			bulb2.classList.add('on');
			audio.play();

			firebaseRef.set("1");
			Led3Status = "1";
		}
	})




    //for Led4......................................
    $(".toggle-btn4").click(function(){
        var firebaseRef = firebase.database().ref().child("Led4Status");
        if(Led4Status == "1"){

            let bulb2 = document.getElementById('b4'); //The querySelector() method returns the first element that matches a CSS selector. This line selects the first element in the document with the class "btn" and assigns it to the variable btn
			bulb2.classList.remove('on');

            firebaseRef.set("0");
            Led4Status = "0";
        }else{

            let bulb2 = document.getElementById('b4');
			let audio = document.querySelector('#audio');
			bulb2.classList.add('on');
			audio.play();

            firebaseRef.set("1");
            Led4Status = "1";
        }
    })

    
});