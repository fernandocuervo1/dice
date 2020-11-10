
  var randomNumber1= Math.random();
  randomNumber1 = randomNumber1*6;
  randomNumber1= Math.floor(randomNumber1) +1;

  var stringImage = "images/dice"+randomNumber1+".png";

  document.querySelector("img.img1").setAttribute("src", stringImage);

  var randomNumber2= Math.random();
  randomNumber2 = randomNumber2*6;
  randomNumber2= Math.floor(randomNumber2) +1;

  var stringImage2 = "images/dice"+randomNumber2+".png";

  document.querySelector("img.img2").setAttribute("src", stringImage2);

  if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🚩Player 1 Wins";
  }
  else if (randomNumber2>randomNumber1){
      document.querySelector("h1").innerHTML= "🚩Player 2 Wins";
  }
  else{
      document.querySelector("h1").innerHTML= "Draw";
  }
