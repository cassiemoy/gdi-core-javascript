function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    if(total > 40000){
        alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    }else{
        alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
    } 
}

function studentAverages() {
    var allAverages = [95, 90, 93, 52, 70, 88];
    var goodAverages = [];
    var badAverages = [];
    for (var i = 0; i < allAverages.length; i++) {
        if (allAverages[i] >= 80) {
            goodAverages.push(allAverages[i]);
        }
        else {
            badAverages.push(allAverages[i]);
        }
    }
    var sentence = goodAverages.length + " students have averages above 80 and " + badAverages.length + " students have averages below 80.";
    
    alert(sentence);
}

function myFriends(){
    var friends = [
        {name: 'Santa Claus',
        hair: 'white'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var results = "My friends: ";
    for(var i = 0; i < friends.length; i++){
        results += describeFriend(friends[i]);
    }
    alert(results);
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}