const fortunes = [{ fortune:"YES, BUT DON'T BLAME ME WHEN IT BACKFIRES.",
                    color:"white"
                  },
                  { fortune:"NO. NOT EVEN IN YOUR WILDEST DREAMS.",
                    color:"red"
                  },
                  { fortune:"MAYBE... BUT ONLY IF YOU'RE READY TO RISK IT ALL.",
                    color:"orange"
                  },
                  { fortune:"YES... BUT IT'S GOING TO GET MESSY.",
                    color:"white"
                  },
                  { fortune:"NO. UNLESS YOU ARE INTO BAD DECISIONS.",
                    color:"red"
                  },
                  { fortune:"MAYBE, BUT ITS A LONG SHOT, LIKE REALLY LONG.",
                    color:"orange"
                  },
                  { fortune:"YES, BUT DON'T GET COCKY; IT'S A THIN LINE BETWEEN LUCK AND DISASTER.",
                    color:"white"
                  },
                  { fortune:"NO... YOU'RE BETTER OFF NOT KNOWING WHY.",
                    color:"red"
                  }]

    const fortuneBtn = document.getElementById('get-fortune');

    

    fortuneBtn.addEventListener('click', function() {
            const randIndex = Math.floor(Math.random() * 8);

            const randFortune = fortunes[randIndex].fortune; 
            const randColor = fortunes[randIndex].color;

            document.getElementById("click-for-fortune").innerHTML = randFortune;
            document.getElementById("click-for-fortune").style.color = randColor;
            document.getElementById("main-text-1").style.color = "transparent";
            document.getElementById("fortune-text").style.color = "transparent";
            document.getElementById("main-text-line").style.color = "transparent";
            fortuneBtn.style.display = "none";

            setTimeout(function() {
                fortuneBtn.style.display = "block"; 
                document.getElementById("click-for-fortune").innerHTML = "ASK A QUESTION AND LET THE <br> EIGHT BALL DECIDE YOUR FATE...";
                document.getElementById("click-for-fortune").style.color = "black";
                document.getElementById("main-text-1").style.color = "black";
                document.getElementById("fortune-text").style.color = "black";
                document.getElementById("main-text-line").style.color = "black";
            }, 3000);

    });