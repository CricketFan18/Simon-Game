var buttonColors=["red","blue","green","yellow"],gamePattern=[],userClickedPattern=[],level=0,started=!1;function nextSequence(){userClickedPattern=[],level++,$("h1").text("Level "+level);var e=buttonColors[Math.floor(4*Math.random())];gamePattern.push(e),$("#"+e).fadeOut(75).fadeIn(75),playSound(e)}function playSound(e){new Audio("./sounds/"+e+".mp3").play()}function animatePress(e){$("#"+e).addClass("pressed"),setTimeout(function(){$("#"+e).removeClass("pressed")},75)}function checkAnswer(e){userClickedPattern[e]===gamePattern[e]?userClickedPattern.length===gamePattern.length&&setTimeout(function(){nextSequence()},1e3):(new Audio("./sounds/wrong.mp3").play(),$("body").addClass("game-over"),setTimeout(function(){$("body").removeClass("game-over")},200),$("h1").text("Game Over, Press Any Key to Restart"),startover())}function startover(){level=0,gamePattern=[],started=!1}$(document).keydown(function(){started||($("#level-title").text("Level "+level),nextSequence(),started=!0)}),$(".btn").click(function(e){var t=e.currentTarget.id;userClickedPattern.push(t),playSound(t),animatePress(t),checkAnswer(userClickedPattern.length-1)});
