function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    var resultDiv = document.getElementById('lifetime-supply')
    if(total > 40000){
        resultDiv.innerHTML = "You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!";
    }else{
        resultDiv.innerHTML = "You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable";
    }
}

function studentAverages(){
    var studentAverages = [95, 90, 93, 52, 70, 88];
    var goodAverages = [];
    var badAverages = [];
    var resultDiv = document.getElementById('student-averages');

    var resultParagraph = document.createElement('p');

    for (var i = 0; i < studentAverages.length; i++) {
        if (studentAverages[i] >= 80) {
          goodAverages.push(studentAverages[i]);
        }
        else {
          badAverages.push(studentAverages[i]);
        }
      }
    var result = goodAverages.length + " students have averages greater than or equal to 80 and " + badAverages.length + " have averages below 80."
    var resultText = document.createTextNode(result);
    resultParagraph.appendChild(resultText);
    resultDiv.appendChild(resultParagraph);
}

function myFriends(){
    var friends = [
        {name: 'Santa Claus',
        hair: 'red'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var resultDiv = document.createElement('div');

    var introParagraph = document.createElement('p');
    var introText = document.createTextNode('My friends are:');
    introParagraph.appendChild(introText);
    resultDiv.appendChild(introParagraph)

    for(var i = 0; i < friends.length; i++){
        var resultParagraph = document.createElement('p');
        var resultText = document.createTextNode(describeFriend(friends[i]));
        resultParagraph.appendChild(resultText);
        resultDiv.appendChild(resultParagraph);
    }
    document.body.appendChild(resultDiv);
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}
