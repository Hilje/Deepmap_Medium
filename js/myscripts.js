
		// show/hide instructions// 		
		
		function openInstructions(){
			$('#instructions').css('visibility', 'visible');
			$('#button50').css('visibility', 'visible');
			$('#button5').css('visibility', 'hidden');
		}
				
		function hideInstructions(){
			$('#instructions').css('visibility', 'hidden');
			$('#button50').css('visibility', 'hidden');
			$('#button5').css('visibility', 'visible');
		}
	
		// personal layer//
		function hoverPersonal(){
			$('#hoverpersonal').css('visibility', 'visible');
		}
		function hoverPersonal2(){
			$('#hoverpersonal').css('visibility', 'hidden');
		}
		function openPersonal(){
			$('#clickpersonal').css('visibility', 'visible');
			$('#button10').css('visibility', 'visible');
			$('#clickart').css('visibility', 'hidden')
			$('#clickhistory').css('visibility', 'hidden')
			$('#clickwww').css('visibility', 'hidden')
			$('#button1').css('visibility', 'hidden');
			$('#button2').css('visibility', 'hidden');
			$('#button3').css('visibility', 'hidden');
			$('#button4').css('visibility', 'hidden');
			$('#button7').css('visibility', 'visible');
			$('#button8').css('visibility', 'visible');
			$('#button9').css('visibility', 'visible');
			$('#button11').css('visibility', 'visible');
			$('#crosroad').css('visibility', 'visible');
		}
				
		function hidePersonal(){
			$('#clickpersonal').css('visibility', 'hidden')
			$('#button1').css('visibility', 'visible');
			$('#button2').css('visibility', 'visible');
			$('#button3').css('visibility', 'visible');
			$('#button4').css('visibility', 'visible');
			$('#button7').css('visibility', 'hidden');
			$('#button8').css('visibility', 'hidden');
			$('#button9').css('visibility', 'hidden');
			$('#button10').css('visibility', 'hidden');
			$('#button11').css('visibility', 'hidden');
			$('#button70').css('visibility', 'hidden');
			$('#button12').css('visibility', 'hidden');
			$('#crosroad').css('visibility', 'hidden');
			$('#vuurpijl').css('visibility', 'hidden');
			$('#vogel').css('visibility', 'hidden');
			$('#tattoo').css('visibility', 'hidden');
			$('#dance').css('visibility', 'hidden');
			$('#balkon').css('visibility', 'hidden');
			$('#bel').css('visibility', 'hidden');
			$('#wagen').css('visibility', 'hidden');
		
			
		}
		
			//crosroad sound//

			function PlaySound(soundobj) {
    			var thissound=document.getElementById(soundobj);
    			thissound.play();
			}

			function StopSound(soundobj) {
    			var thissound=document.getElementById(soundobj);
    			thissound.pause();
    			thissound.currentTime = 0;
			}



	//explore balkon//

	function openBalkon(){
		$('#balkon').css('visibility', 'visible');
		$('#vogel').css('visibility', 'hidden');
		$('#tattoo').css('visibility', 'hidden');
		$('#wagen').css('visibility', 'hidden');
		$('#crosroad').css('visibility', 'hidden');
		$('#button7').css('visibility', 'hidden');
		$('#button8').css('visibility', 'hidden');
		$('#button9').css('visibility', 'hidden');
		$('#button11').css('visibility', 'hidden');
		$('#button12').css('visibility', 'hidden');
		$('#button70').css('visibility', 'visible');
	}


	//explore personal//

	function openVogel(){
		$('#vogel').css('visibility', 'visible');
		$('#balkon').css('visibility', 'hidden');
		$('#dance').css('visibility', 'hidden');
		$('#tattoo').css('visibility', 'hidden');
		$('#wagen').css('visibility', 'hidden');
		$('#button7').css('visibility', 'hidden');
		$('#button8').css('visibility', 'hidden');
		$('#button9').css('visibility', 'hidden');
		$('#button11').css('visibility', 'hidden');
		$('#button12').css('visibility', 'hidden');
		$('#button13').css('visibility', 'visible');
		$('#crosroad').css('visibility', 'hidden');
		$('#button70').css('visibility', 'visible');
	}

function openGuys(){
		$('#guys').css('visibility', 'visible');
		$('#button13').css('visibility', 'hidden');
	}

	function hideGuys(){
		$('#guys').css('visibility', 'hidden');
		$('#button13').css('visibility', 'visible');
	}



	function openTattoo(){
		$('#balkon').css('visibility', 'hidden');
		$('#dance').css('visibility', 'hidden');
		$('#tattoo').css('visibility', 'visible');
		$('#vogel').css('visibility', 'hidden');
		$('#wagen').css('visibility', 'hidden');
		$('#crosroad').css('visibility', 'hidden');
		$('#button7').css('visibility', 'hidden');
		$('#button8').css('visibility', 'hidden');
		$('#button9').css('visibility', 'hidden');
		$('#button11').css('visibility', 'hidden');
		$('#button12').css('visibility', 'hidden');
		$('#button70').css('visibility', 'visible');
	}
	

	function openWagen(){
		$('#balkon').css('visibility', 'hidden');
		$('#tattoo').css('visibility', 'hidden');
		$('#vogel').css('visibility', 'hidden');
		$('#dance').css('visibility', 'hidden');
		$('#wagen').css('visibility', 'visible');
		$('#crosroad').css('visibility', 'hidden');
		$('#button70').css('visibility', 'visible');
		$('#button7').css('visibility', 'hidden');
		$('#button8').css('visibility', 'hidden');
		$('#button9').css('visibility', 'hidden');
		$('#button11').css('visibility', 'hidden');
		$('#button12').css('visibility', 'hidden');
	}

	function openVuurpijl(){
			$('#balkon').css('visibility', 'hidden');
			$('#tattoo').css('visibility', 'hidden');
			$('#vogel').css('visibility', 'hidden');
			$('#dance').css('visibility', 'hidden');
			$('#wagen').css('visibility', 'hidden');
			$('#crosroad').css('visibility', 'hidden');
			$('#button70').css('visibility', 'visible');
			$('#vuurpijl').css('visibility', 'visible');
			$('#button7').css('visibility', 'hidden');
			$('#button8').css('visibility', 'hidden');
			$('#button9').css('visibility', 'hidden');
			$('#button11').css('visibility', 'hidden');
			$('#button12').css('visibility', 'visible');
		}
	function openBel(){
			$('#bel').css('visibility', 'visible');
			$('#button70').css('visibility', 'visible');
			$('#vuurpijl').css('visibility', 'hidden');
			$('#button12').css('visibility', 'hidden');
		}



	function openDance(){
			$('#tattoo').css('visibility', 'hidden');
			$('#balkon').css('visibility', 'hidden');
			$('#vogel').css('visibility', 'hidden');
			$('#button7').css('visibility', 'hidden');
			$('#button8').css('visibility', 'hidden');
			$('#button9').css('visibility', 'hidden');
			$('#button11').css('visibility', 'hidden');
			$('#wagen').css('visibility', 'hidden');
			$('#crosroad').css('visibility', 'hidden');
			$('#button70').css('visibility', 'visible');
			$('#dance').css('visibility', 'visible');
		}

		function hoverDance(){
		$('#hoverdance').css('visibility', 'visible');
	}
	function hoverDance2(){
		$('#hoverdance').css('visibility', 'hidden');
	}



	function hideAll(){
		$('#vuurpijl').css('visibility', 'hidden');
		$('#guys').css('visibility', 'hidden');
		$('#vogel').css('visibility', 'hidden');
		$('#tattoo').css('visibility', 'hidden');
		$('#dance').css('visibility', 'hidden');
		$('#balkon').css('visibility', 'hidden');
		$('#bel').css('visibility', 'hidden');
		$('#wagen').css('visibility', 'hidden');
		$('#button70').css('visibility', 'hidden');
		$('#crosroad').css('visibility', 'visible');
		$('#button7').css('visibility', 'visible');
		$('#button8').css('visibility', 'visible');
		$('#button9').css('visibility', 'visible');
		$('#button11').css('visibility', 'visible');
		$('#button12').css('visibility', 'hidden');
		$('#button13').css('visibility', 'hidden');
	}


	//History layer//

	function hoverHistory(){
		$('#hoverhistory').css('visibility', 'visible');
		$('#crosroad').css('visibility', 'hidden');
	}
	function hoverHistory2(){
		$('#hoverhistory').css('visibility', 'hidden');
		$('#crosroad').css('visibility', 'hidden');
	}

		// show/hide History layer// 		
		function openHistory(){
			$('#clickhistory').css('visibility', 'visible');
			$('#button20').css('visibility', 'visible');
			$('#button1').css('visibility', 'hidden');
			$('#button2').css('visibility', 'hidden');
			$('#button3').css('visibility', 'hidden');
			$('#button4').css('visibility', 'hidden');
			$('#clickart').css('visibility', 'hidden')
			$('#clickpersonal').css('visibility', 'hidden')
			$('#clickwww').css('visibility', 'hidden')
		}
				
		function hideHistory(){
			$('#clickhistory').css('visibility', 'hidden')
			$('#button20').css('visibility', 'hidden');
			$('#button1').css('visibility', 'visible');
			$('#button2').css('visibility', 'visible');
			$('#button3').css('visibility', 'visible');
			$('#button4').css('visibility', 'visible');
			
		}

		//Art layer
		
		function hoverArt(){
 			$('#hoverart').css('visibility', 'visible');
			}

		function hoverArt2(){
			$('#hoverart').css('visibility', 'hidden');
			}
		
		function openArt(){
			$('#clickart').css('visibility', 'visible');
			$('#button30').css('visibility', 'visible');
			$('#button6').css('visibility', 'visible');
			$('#button1').css('visibility', 'hidden');
			$('#button2').css('visibility', 'hidden');
			$('#button3').css('visibility', 'hidden');
			$('#button4').css('visibility', 'hidden');
			$('#clickhistory').css('visibility', 'hidden')
			$('#clickpersonal').css('visibility', 'hidden')
			$('#clickwww').css('visibility', 'hidden')
		}
				
		function hideArt(){
			$('#clickart').css('visibility', 'hidden')
			$('#button30').css('visibility', 'hidden');
			$('#button6').css('visibility', 'hidden');
			$('#button60').css('visibility', 'hidden');
			$('#button1').css('visibility', 'visible');
			$('#button2').css('visibility', 'visible');
			$('#button3').css('visibility', 'visible');
			$('#button4').css('visibility', 'visible');
			$('#button100').css('visibility', 'hidden');
			$('#grafitti').css('visibility', 'hidden');
			$('#ESFP').css('visibility', 'hidden')
			
		}

				// show/hide grafitti// 
				function openGraffiti(){
					$('#graffiti').css('visibility', 'visible');
					$('#button6').css('visibility', 'hidden');
					$('#button60').css('visibility', 'visible');
					$('#button100').css('visibility', 'visible');
					$('#button101').css('visibility', 'visible');
				}
			
				function hideGraffiti(){
					$('#graffiti').css('visibility', 'hidden')
					$('#button100').css('visibility', 'hidden');
					$('#button6').css('visibility', 'visible');
					$('#button60').css('visibility', 'hidden');
					$('#ESFP').css('visibility', 'hidden');
					$('#verf').css('visibility', 'hidden');
				}
	
				// show/hide ESFP// 		
	
				function openESFP(){
					$('#ESFP').css('visibility', 'visible');
					$('#verf').css('visibility', 'hidden')
					$('#button100').css('visibility', 'hidden');
					$('#button101').css('visibility', 'hidden');
				}
			
				function hideESFP(){
					$('#ESFP').css('visibility', 'hidden')
					$('#button100').css('visibility', 'visible');
					$('#button101').css('visibility', 'visible');

				}
	
				// show/hide verfbrigade// 		
	
				function openVerf(){
					$('#verf').css('visibility', 'visible');
					$('#ESFP').css('visibility', 'hidden')
					$('#button100').css('visibility', 'hidden');
					$('#button101').css('visibility', 'hidden');
				}
			
				function hideVerf(){
					$('#verf').css('visibility', 'hidden')
					$('#button101').css('visibility', 'visible');
					$('#button100').css('visibility', 'visible');
		

				}

		//www layer
		function hoverAds(){
			$('#hoverwww').css('visibility', 'visible');
			}
		function hoverAds2(){
			$('#hoverwww').css('visibility', 'hidden');
			}
			
		function openAds(){
		$('#clickwww').css('visibility', 'visible');
		$('#button40').css('visibility', 'visible');
			$('#button1').css('visibility', 'hidden');
			$('#button2').css('visibility', 'hidden');
			$('#button3').css('visibility', 'hidden');
			$('#button4').css('visibility', 'hidden');
		}

		function hideAds(){
		$('#clickwww').css('visibility', 'hidden');
		$('#button40').css('visibility', 'hidden');
		$('#button1').css('visibility', 'visible');
			$('#button2').css('visibility', 'visible');
			$('#button3').css('visibility', 'visible');
			$('#button4').css('visibility', 'visible');
		}
		
