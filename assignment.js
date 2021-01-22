// 1

function kilometerToMeter(kilometer){
    if(kilometer > 0){
        var meter = kilometer * 1000;
    }
    else {
        console.log("Input can't be negative number")
    }
    return meter;
}
var result = kilometerToMeter(3);
console.log(result);

// 2

function budgetCalculator(watch, phone, laptop){
    if(phone < 0 || phone < 0 || laptop < 0){
        console.log("Input can't be negative number");
    }
    else{
        var totalProductCost = (watch * 50) + (phone * 100) + (laptop * 500);
    }
    return totalProductCost;
}
var result = budgetCalculator(3,2,5);
console.log(result);

// 3

function hotelCost(day){
    if(day <= 10){
        var totalCost = day * 100;
    }
    else if( day > 10 && day <=20){
        totalCost = (day - 10) * 1000 +  80;
    }
    else if(day > 20){
        totalCost = (day - 20) * 1800 + 50;
    }
    else{
        console.log("Input can't be negative number");
    }
    return totalCost;
}
var result = hotelCost(9);
console.log(result);

//  4 

function megaFriend(friends) {
    var longestCharacter = "";
  
    friends.forEach(function(character) {
      if(character.length > longestCharacter.length) {
        longestCharacter = character;
      }
    });
  
    return longestCharacter;
  }
  
  var character = megaFriend(["Rafsan", "Rezowan", "Bappy", "Ashadd"]);
  console.log(character);