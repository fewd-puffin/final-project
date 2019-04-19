
$(document).ready(function(){

$(".yellow").on("click", toggleyellow);
$(".red").on("click", toggleRed);
$(".blue").on("click", toggleBlue);
$(".green").on("click", toggleGreen);

function toggleyellow(){
$("#yellowText").toggle();}

function toggleRed(){
$("#redText").toggle();}

function toggleBlue(){
$("#blueText").toggle();}

function toggleGreen(){
$("#greenText").toggle();}
    
    
});