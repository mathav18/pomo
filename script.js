let timings={
    Pomodoro:25,
    shortBreak:5,
    longBreak:10
}
let mySound = new Audio('tic-tac-27828.mp3');
mySound.loop = true;
let type="pomodoro";
let r;
let start;
let sound= new Audio('alarm-clock-short-6402.mp3');
let min=25;
let circle=min;
let a="start";
let color="#fa7d7d";
document.getElementById("time").textContent="25:00";
$(document).ready(function(){
    $("#Pomodoro").click(function(){
      type="pomodoro"
      min=timings.Pomodoro;
      circle=min;
      a="stop";
      deg=360;
      mySound.pause();
      sound.pause();
      document.querySelector(".outer").style.backgroundImage="conic-gradient("+color+" "+deg+"deg, #161932 0deg, #161932 0deg, #161932 180deg, #161932 180deg, #161932 270deg, #161932 270deg)"
      document.getElementById("startButton").textContent="start";
      document.getElementById("startButton").setAttribute("onclick","startfun()");
      if(min.toString().length==1) $("#time").text("0"+min+":"+"00");
      else $("#time").text(min+":"+"00");
      $(this).css("background-color", color);
      $(this).addClass("changeColor");
      $("#shortBreak").removeClass("changeColor");
      $("#longBreak").removeClass("changeColor");
      $("#shortBreak").css("background-color", "transparent");
      $("#longBreak").css("background-color", "transparent");
    });
    $("#shortBreak").click(function(){
      type="shortBreak"
      mySound.pause();
      sound.pause();
        min=timings.shortBreak;
        circle=min;
        a="stop";
        if(min.toString().length==1) $("#time").text("0"+min+":"+"00");
        else $("#time").text(min+":"+"00");
        deg=360;
        document.querySelector(".outer").style.backgroundImage="conic-gradient("+color+" "+deg+"deg, #161932 0deg, #161932 0deg, #161932 180deg, #161932 180deg, #161932 270deg, #161932 270deg)"
        document.getElementById("startButton").textContent="start";
        document.getElementById("startButton").setAttribute("onclick","startfun()");
        $(this).css("background-color", color);
        $(this).addClass("changeColor");
        $("#Pomodoro").removeClass("changeColor");
        $("#longBreak").removeClass("changeColor");
        $("#Pomodoro").css("background-color", "transparent");
        $("#longBreak").css("background-color", "transparent");
      });
      $("#longBreak").click(function(){
        type="longBreak"
        min=timings.longBreak;
        circle=min;
        a="stop";
        if(min.toString().length==1) $("#time").text("0"+min+":"+"00");
        else $("#time").text(min+":"+"00");
        deg=360;
        mySound.pause();
        sound.pause();
        document.querySelector(".outer").style.backgroundImage="conic-gradient("+color+" "+deg+"deg, #161932 0deg, #161932 0deg, #161932 180deg, #161932 180deg, #161932 270deg, #161932 270deg)"
        document.getElementById("startButton").textContent="start";
        document.getElementById("startButton").setAttribute("onclick","startfun()");
        $(this).css("background-color", color);
        $(this).addClass("changeColor");
        $("#shortBreak").removeClass("changeColor");
        $("#Pomodoro").removeClass("changeColor");
        $("#Pomodoro").css("background-color", "transparent");
        $("#settingPomodoro").css("background-color", "transparent");
        $("#shortBreak").css("background-color", "transparent");
      });
      $("#setting").click(function(){
        $("#settingBox").css("display", "grid");
      });
      $("#closeMark").click(function(){
        $("#settingBox").css("display", "none");
      });
      $("#red").click(function(){
        $("button").css("backgroundColor","#fa7d7d");
        color="#fa7d7d";
        $(this).children().removeClass("hi");
        $("#blue").children().addClass("hi");
        $("#purple").children().addClass("hi");
        document.querySelector(".Button").setAttribute("onmouseover","this.style.color='#fa7d7d'");
        document.querySelector(".Button").setAttribute("onmouseout","this.style.color='#ffffff'");
      });
      $("#blue").click(function(){
        $("button").css("backgroundColor","#70F3F8");
        color="#70F3F8";
        $(this).children().removeClass("hi");
        $("#red").children().addClass("hi");
        $("#purple").children().addClass("hi");
        document.querySelector(".Button").setAttribute("onmouseover","this.style.color='#70F3F8'");
        document.querySelector(".Button").setAttribute("onmouseout","this.style.color='#ffffff'");
      });
      $("#purple").click(function(){
        $("button").css("backgroundColor","#D881F8");
        color="#D881F8";
        $(this).children().removeClass("hi");
        $("#blue").children().addClass("hi");
        $("#red").children().addClass("hi");
        document.querySelector(".Button").setAttribute("onmouseover","this.style.color='#D881F8'");
        document.querySelector(".Button").setAttribute("onmouseout","this.style.color='#ffffff'");
      });
      $("#fst").click(function(){
        $(this).addClass("fontBoxStyle1");
        $("#sec").removeClass("fontBoxStyle1");
        $("#thi").removeClass("fontBoxStyle1");
      });
      $("#sec").click(function(){
        $(this).addClass("fontBoxStyle1");
        $("#fst").removeClass("fontBoxStyle1");
        $("#thi").removeClass("fontBoxStyle1");
      });
      $("#thi").click(function(){
        $(this).addClass("fontBoxStyle1");
        $("#fst").removeClass("fontBoxStyle1");
        $("#sec").removeClass("fontBoxStyle1");
      });
      $("button").click(function(){
       let r=($("#fontsBox").children("div.fontBoxStyle1"))
       $(".changeColor").css("backgroundColor",color);
       if(r[0].id=="fst"){
        $("body").css("font-family","'Kumbh Sans', sans-serif");
       }
       else if(r[0].id=="sec"){
        $("body").css("font-family","'Roboto Slab', serif");
       }
       else if(r[0].id=="thi"){
        $("body").css("font-family","'Space Mono', monospace");
       }
       document.querySelector(".outer").style.backgroundImage="conic-gradient("+color+" "+deg+"deg, #161932 0deg, #161932 0deg, #161932 180deg, #161932 180deg, #161932 270deg, #161932 270deg)"
        $("#settingBox").css("display", "none");
        
        timings.Pomodoro=document.getElementById("pomoValue").value;
        timings.shortBreak=document.getElementById("shortValue").value;
        timings.longBreak=document.getElementById("longValue").value;
        if(type=="pomodoro")
        {
          min=timings.Pomodoro;
          circle=min;
        }
        else if(type=="shortBreak")
        {
          min=timings.shortBreak;
          circle=min;
        }
        else{
          min=timings.longBreak;
          circle=min;
        }
      });
      
  });
let deg=360;
let pi=0;
function displayer(some){
    if(some==0)
    {
        min=min-1;
        if(min!=0) myTimer();
    }
    let deg1=(360/(circle*60));
    deg=deg-deg1;
    pi+=deg1;
    console.log(pi);
    document.querySelector(".outer").style.backgroundImage="conic-gradient("+color+" "+deg+"deg, #161932 0deg, #161932 0deg, #161932 180deg, #161932 180deg, #161932 270deg, #161932 270deg)"
    if(some<10) some="0"+some;
    let dis=document.getElementById("time");
    if(min.toString().length==1) 
    {
      if(min!=0){
        r=min-1 
      }
      else{
        r=min;
        mySound.pause();
        sound.play();
        document.getElementById("startButton").textContent="restart";
    document.getElementById("startButton").setAttribute("onclick","restartfun()");
      }
        dis.innerText="0"+(r)+":"+some;
    }
    else{
        dis.innerText=min-1+":"+some;
    }    
}
async function sleep(ms){
    return new Promise (res => setTimeout(res,ms));
}
let p=59;
async function myTimer(){
  for(let i=p;i>=0;i--){
    await sleep(1000);
    p=i;
    if(a=="stop"){
      break;
    }
    console.log(59-p);
    displayer(i);
  }
}
function startfun()
{
    myTimer();
    mySound.play();
    a="start";
    document.getElementById("startButton").textContent="pause";
    document.getElementById("startButton").setAttribute("onclick","pausefun()");
    console.log(min);
}
function pausefun()
{
    a="stop";
    mySound.pause();
    document.getElementById("startButton").textContent="start";
    document.getElementById("startButton").setAttribute("onclick","startfun()");
    console.log(min);
}
function restartfun(){
    a="start";
    deg=360;
    let t=min;
    (min.toString().length==1) ?t="0"+min: t;
    document.querySelector(".outer").style.backgroundImage="conic-gradient("+color+" "+deg+"deg, "+color+" 0deg, "+color+" 0deg, "+color+" 180deg, "+color+" 180deg, "+color+" 270deg, "+color+" 270deg)"
    document.getElementById("time").textContent=t+":00";
    document.getElementById("startButton").textContent="start";
    document.getElementById("startButton").setAttribute("onclick","startfun()");
}
function playSound () {
	let ding = new Audio('ding.mp3');
	ding.play();
}