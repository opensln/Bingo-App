
		//      - - - - -Prevent zoom in to input box when user selects input box- - - - -

		var scale = 'scale(1)';
		document.body.style.webkitTransform = scale; // Chrome, Opera, Safari
		document.body.style.msTransform = scale; // IE 9
		document.body.style.transform = scale;

		//		- - - - - - -Checking that the input is a number between 20 and 90- - - - - -

		function checkvalidInput() {

		    var userInput = document.getElementById("userRange").value;

		    if (isNaN(userInput) || userInput < 20 || userInput > 90) {
		        //alert("Enter a number beteen 20 and 90");
		        document.getElementById("showInitialArray").innerHTML = "Enter a number beteen 20 and 90"; //for iphone users
		        //submitOK = "false";

		    } else {
		        main();
		    }
		}

		//		- - - - - Main- - - - -

		function main() {

		    //--Begin IFFE--

		    var gameArray = (function () {

		        var setGameArray = [];

		        var ChosenRange = document.getElementById("userRange").value;

		        //				alert("The chosen range is " + ChosenRange);

		        for (var i = 1; i <= ChosenRange; i++) {

		            setGameArray.push(i); // Number 1 has been pushed into Array slot Zero!! and so on.

		        }

		        document.getElementById("showInitialArray").innerHTML = "This game is using " + setGameArray.length + " Bingo Balls.";

		        //	alert("SetGameArray Array is now containing " + setGameArray.length);

                //disable the confirmBtn button
                document.getElementById("confirmBtn").onclick = function() {
                    //alert("You have already confirmed the balls for this game");
                }
                
		        return setGameArray;
		    }()); //The Array is now set an returned to the variable gameArray variable          

		    //--End IFFE--

		    var IA = gameArray;

		    document.getElementById("bingoBallDiv").addEventListener("click", function () {
		        generateRandom(IA);
		        infoTrailDiv();
		    });

		    function generateRandom(IA) {

		        var randomNumber = Math.random();
		        		//alert(randomNumber + " has been generated");
		        var NewrandomNumber = randomNumber * IA.length;
		        		//alert(randomNumber +  " x " + IA.length +"  (The BingoArray.length)"+ "=" + NewrandomNumber);
		        //	roundDownNumber();
		        //		
		        //		function roundDownNumber() {
		        var RoundedRandomNumber = Math.floor(NewrandomNumber);
		        		//alert("The item at index "  + RoundedRandomNumber + " is " + IA[RoundedRandomNumber]);
		        //		}
		        //		
		        document.getElementById("CurrentcalledNumber").innerHTML = IA[RoundedRandomNumber] + "<audio autoplay><source src='./sounds/db" + IA[RoundedRandomNumber] + ".mp3' type='audio/mp3'></audio>";

		        document.getElementById("calledNumber").innerHTML += IA[RoundedRandomNumber] + "! ";

		        //	    alert(IA);

		        var removed = IA.splice(RoundedRandomNumber, 1);
		        //alert("ball " + removed + " has been removed");
		        //alert("IA.length is now " + IA.length);
		        //				ZerolengthChecker();
		        //
		        //				function ZerolengthChecker() {
		        if (IA.length == 0) {

		            stateNoBallsRemaining();

		            document.getElementById("bingoBallDiv").addEventListener("click", function () {

		                gameOver();
		            });
		        } else {
		            document.getElementById("infoTrail").innerHTML += "<br>The new length of the array is . " + IA.length;

		            //////		alert("The new length of the array is " + BingoArray.length);

		            var text = "Here are the remaining numbers: ";

		            document.getElementById("RemainingNumbers").innerHTML = text;

		            for (var i = 0; i < IA.length; i++) {

		                document.getElementById("RemainingNumbers").innerHTML += IA[i] + ", ";
		            }

		            document.getElementById("newAmountOfItems").innerHTML = "<br>The Array now has " + IA.length + " items in it. <br>";
		            ////		showArray(lesserBingoArray);
		        }
		        //				} //Zero Legth Checker ends here
		    } // generateRandom ends here
		}

		function clearCalledNumberDiv() {
		    //			
		    document.getElementById("calledNumber").innerHTML = "";
		}

		function infoTrailDiv() {

		    document.getElementById("infoTrail").innerHTML = "";
		}

		function gameOver() {
		    document.getElementById("CurrentcalledNumber").style = "font-size:2rem; line-height:2rem; padding-top: 20px;";
		    document.getElementById("CurrentcalledNumber").innerHTML = "<p onclick='newGame()'>Click for<br>New Game</p>";

		    document.getElementById("calledNumber").innerHTML = "No More Balls! <br> Click the red circle to play again!";

		}

		function stateNoBallsRemaining() {
		    document.getElementById("RemainingNumbers").innerHTML = "No Balls remaining!";

		}

		function newGame() {
		    javascript: location.reload(true);
		}

		//		document.getElementById("showLatestArray").innerHTML = "The udArray funtion has " + udArray() + " in it";
