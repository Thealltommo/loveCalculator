let firstPerson = prompt("What is the first person's name?");
let secondPerson = prompt("What is the seond person's name?");

let love = Math.random();
love = love * 100 + 1;


if (love > 95){
  alert("You are a " + (Math.floor(love) + "% match and are perfect together!"));
}if(love < 94 && love > 50){
  alert("You are a " + (Math.floor(love) + "% match and should be very happy"));
}else{
  alert("You are a " + (Math.floor(love) + "% match and may not last"));
}
