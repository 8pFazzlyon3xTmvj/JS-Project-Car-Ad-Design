noStroke();


var adWord = "2018 Tesla for Sale!"; 
var carModel ="Model T1! Metallic Blue!";
var carFeatures ="V8 Engine, Bose Stereo Sound, Sun-Roof!";

var tireSize =30;

var x = 10;

fill(252, 13, 13);
textSize(30);
text(adWord, 10, 30);

fill(107, 107, 110);
textSize(20);
text(carModel, 10, 70);

textSize(15);
text(carFeatures, 10, 110);


draw = function() {
    
    background(26, 23, 23);
    
    fill(247, 64, 8);
    textSize(30);
    text(adWord, 80, 30);

    fill(148, 148, 232);
    textSize(20);
    text(carModel, 110, 70);
    
    fill(252, 247, 252);

    textSize(19);
    text(carFeatures, 20, 110);
   
    //car body
    
    fill(13, 77, 227);
    rect(x, 215, 129, 50, 40);
    
    //car tires
    
    fill(242, 234, 234);
    ellipse(x+30, 260, tireSize, tireSize);
    ellipse(x+100, 260, tireSize, tireSize);
    

    x = x +15;
    

    
};

