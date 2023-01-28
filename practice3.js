// console.clear();
for(let i=100;i>=2;i--){
    // console.log(i);
    if(i%2==0){
        console.log(i);
    }
}
// ------------------------------------------------------

// let n=parseInt(prompt("Enter the number you want to Multiply"));

for(let i=1;i<=10;i++){
// console.log(i);
//    let multiplicationTable= n+" x "+i+" = "+n*i;
    // console.log(multiplicationTable);
}

// ------------------------------------------------------

var players = [
    { name: "Roger Federer", rank: 1 },
    { name: "Rafel Nadal", rank: 2 },
    { name: "Nalbandian", rank: 12 },
    { name: "Andy Murray", rank: 14 },
    { name: "Andy Roddick", rank: 4 },
    { name: "Pete Sampras", rank: 3 },
    { name: "Rod Laver", rank: 190 },
    { name: "Andre Agassi", rank: 11 },
    { name: "Novak Djokovic", rank: 5 },
    { name: "Arthur Ashe", rank: 8 },
];

// for(let i=0;i<players.length;i++){
//     // let player = players[i];
//     // console.log(player);                    // 
//     if(players[i].rank<=10){
//         console.log(players[i].name);
//     }
// }
// for (var i = 0; i < players.length; i++) {
//     if (players[i].rank <= 10) {
//     console.log(players[i].name);
//     }
//     }
for (var i = 0; i < players.length; i++) {
    if (players[i]['rank'] <= 10) {
        console.log(players[i]['name']);
    }
}