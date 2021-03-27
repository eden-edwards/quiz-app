var points= sessionStorage.getItem("points");

var head_result=document.getElementById("result-header");
var body_result=document.getElementById("result-body");

if(points>4){
head_result.innerHTML="That’s nice! You’ve got "+points+" out of 6 right";
body_result.innerHTML="You worked hard and it paid off! Nice work figuring out these tough questions, you earned it buddy!";
}else{
head_result.innerHTML="Oops! You’ve got only "+points+" out of 6 right";
body_result.innerHTML="Marvel have created more Avengers than even the geekiest of geeks could remember, but that doesn’t mean you shouldn’t try.";
}

function reset(){
location.href="index.html";
}