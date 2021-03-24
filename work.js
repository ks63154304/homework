
let display = true
let display2 = true
let pagehead = true

$('.listicon').click(function(){
   if(display){
     $(".sidelist").animate({width:'200px',opacity:"1"})
     $(".listtext").fadeIn(100);
     $(this).css('transform','rotate(90deg)')
     display = 0
   }else{
     $(this).css('transform','rotate(0deg)')
     $(".sidelist").animate({width:'0px',opacity:"0"})
     $(".listtext").fadeOut(100);
     display = 1
   }
})
$('.p2').click(function(){
   if(display2){
     $(".register").animate({width:'100%',opacity:"1"})
     $(".container").animate({width:'500px',opacity:"1"})
     $(".wide").fadeIn("fast");
     $(".wide2").fadeIn("fast");
     display2 = 0
     pagehead = 1
   }
})
$('.p1').click(function(){
   if(display2==0&pagehead){
     $(".register").animate({width:'0%',opacity:"1"})
     $(".wide").fadeOut("fast");
     $(".wide2").fadeOut("fast");
     $(".container").animate({width:'0px',opacity:"0"})
     display2 = 1
     pagehead = 0
   }
})



