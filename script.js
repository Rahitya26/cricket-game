var start=false;
var score=0;
var stat="pass";
var cond="alive";
var num=[1,2,3,4,5,6];

//calling function using mouse clicks
$(".btn").click(function(){
  var db=this.textContent;
var usr=Number( this.textContent);
var op=Math.floor(Math.random()*6)+1;
if(cond=="alive")
{
  ani(usr);
}
  else{
    $(".btn").slideUp();
  }
game(usr,op,db);
});


//calling function using keyboard
$(document).keydown(function(e){
  var kn=Math.floor(Math.random()*6)+1;
  var knum=Number(e.key); 
  if(cond=="alive")
  {
    ani(knum);
  }
    else{
      $(".btn").slideUp();
    }
  if(num.includes(knum))    
  {      
    switch(knum)
    {        
      case 1: game(knum,kn,e.key);
        break;
      case 2: game(knum,kn,e.key);
        break;
      case 3: game(knum,kn,e.key);
        break;
      case 4: game(knum,kn,e.key);
        break;
      case 5: game(knum,kn,e.key);
        break;
      case 6: game(knum,kn,e.key);
        break;
    }    
  } 
});


//Main game function
function game(dan,rock,im)
{
    if(cond=="alive")
    {
    if(dan==rock)
    {
      sound("wicket");
      $("h1").text("You are out!! ");
      $(".score").html(" You are out as the choices match <br>Your score was "+score+" Click the reset button to play again");
      $(".res").css("display","block");
      stat="out";
      cond="out";    
    }
    else if(stat=="pass"){
      sound("bat");
      $(".score").text(rock);
      score=score+dan;
     $("h1").text("Keep going!! Score is "+score);
    }
         if(score>=50)
      {
        sound("win");
        $("h1").text("You won!! with a lead of "+(score-50)+" runs");
        $(".score").html("Congrats you won the game <br>Your score was "+score+" Click the reset button to play again");
         $(".res").css("display","block");
        cond="won";
      }
    }
    if(cond=="alive"){
      uimg(im,rock);
    }
    else if(cond=="out")
    {
      $(".u").attr("src","aniwicket.gif");
      $(".c").attr("src","out.gif");
    }
    else if(cond=="won")
    {
      $(".u").attr("src","won.jpg");
      $(".c").attr("src","lost.gif");
    }
}

//function ro play sound
function sound(name)
{
  var aud=new Audio(name+".mp3");
  aud.play();
}

//functiob to set images
function uimg(itag,ctag)
{
  $(".u").attr("src",itag+".png");
  $(".c").attr("src",ctag+".png");
}


//function to animate the button press
function ani(val){
  $("."+val).animate({opacity:0.5},100);
  setTimeout(function(){
    $("."+val).animate({opacity:1},100);
  })
}

$(".res").on("click",function(){
  location.reload();
})