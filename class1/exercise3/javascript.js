function calculate(){
    var age = 28; 
    var maxAge = 100; 
    var perDay = 3;


    var days = (maxAge-age)*365; 
    var totalSnacks = perDay*days; 
    var sentence = " You will need " + totalSnacks + " snacks to last you to the ripe old age of " + maxAge + "." + " Wow that's alot";
    var sentenceTwo = " You will need " + totalSnacks + " snacks to last you to the ripe old age of " + maxAge + "." + " That seems reasonable" + "."; 
     
    if(totalSnacks > 40000){
        alert(sentence); 
    } else {
        alert(sentenceTwo); 
    } 
}
