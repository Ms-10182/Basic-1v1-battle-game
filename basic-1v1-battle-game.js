// Created by @Ms-10182
// this game works on console of browser.

const piper ={
    name:"Piper",
    power:11,
    HP:4800,
    movementSpeed:"normal",
    damage:3400,
};

const belle ={
    name:"Belle",
    power:11,
    HP:5200,
    movementSpeed:"normal",
    damage:2080,
};

const brock ={
    name:"Brock",
    power:11,
    HP:4800,
    movementSpeed:"normal",
    damage:2320,
};
console.log(piper);
console.log(belle);
console.log(brock);

let player1Choice = prompt("choose player 1:\n1)piper\n2)belle\n3)brock");
let player2Choice = prompt("choose player 2:\n1)piper\n2)belle\n3)brock");

let player_1;
let player_2;
if(player1Choice==1){
    player_1 = {...piper};
}
else if(player1Choice==2){
    player_1 =  {...belle};
}
else{
    player_1 = {...brock};
}

if(player2Choice==1){
    player_2 = {...piper};
}
else if(player2Choice==2){
    player_2 =  {...belle};
}
else{
    player_2 = {...brock};
}

while(player_1.HP>0 && player_2.HP>0){
    console.log(`${player_1.name} has ${player_1.HP} HP and ${player_2.name} has ${player_2.HP} HP`);
    player_1.HP-=player_2.damage;
    player_2.HP-=player_1.damage;
}

if(player_1.HP>0){
    alert(`${player_1.name} won with ${player_1.HP} HP`);
}
else if(player_2.HP>0){
    
    alert(`${player_2.name} won with ${player_2.HP} HP`);
}
else{
    alert("It's a draw");
}
