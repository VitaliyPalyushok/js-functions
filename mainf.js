	var totalWinSum = 0;
	var maxNumberOfRow = 5;
	var firstRound10 = 10;
	var firstRound5 = 5;
	var firstRound2 = 2;
	var firstRound0 = 0;

	while ( confirm ( "Would you like to play the game?" ) ) {
		alert ( "Let\'s start" );
		play();
	}

	if( totalWinSum==0 ){
		alert( 'You didn\'t win the billion' );
	}	else{

			alert( "YOUR FINAL PRIZE IS: " + totalWinSum + " $" );
	}


	function play() { 
		
		var tries = 3;
		var enteredNumber = Math.round( Math.random() * 5 ); 
		

		for ( var i = 0; i < 3; i++ ) {

			alert( "You have: " + tries + " tries" );

			//alert( enteredNumber ); //для правильного введення

			var userNumber = prompt( "Choose the number from 0 to " + maxNumberOfRow, "");
			
			var isUserNumberCorrect = userNumber == enteredNumber; 

				
			if(isUserNumberCorrect) {
				
				if (tries == 3) {

					totalWinSum += firstRound10;
					maxNumberOfRow *= 2;

					alert( "You won " + firstRound10 + "$" );

					alert( "Your balance is: " + totalWinSum + " $" );

					firstRound10 *= 3;
					break;

				}	else if ( tries == 2 ) {

						totalWinSum += firstRound5;
						maxNumberOfRow *= 2;

						alert( "You won " + firstRound5 + "$" );

						alert( "You have" + totalWinSum + " $" );
						
						firstRound5 *= 3;
						break;

				}	else if (tries==1){
				
						totalWinSum += firstRound2;
						maxNumberOfRow*=2;

						alert( "You won " + firstRound2 + "$" );

						alert( "You have" + totalWinSum + " $" );

						firstRound2 *= 3;
						break;

				}	else {

					alert( "you lost one try" );
				
				}

			}

			tries--;

			if ( tries == 0 ) {
				
				totalWinSum += firstRound0;

				alert( "You won " + firstRound0 + " $" );

				alert( "You have" + totalWinSum + " $" );

				break;
			}
		}
	}