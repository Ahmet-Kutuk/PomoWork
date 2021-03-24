let second=60;
let minute=25;
const pomodoroTimer = () => {
  
    document.querySelector("#time").innerText=minute+":"+second;
    second=second-1;
    
    if(second==0)
    {
        minute--;
        second=60;
        if(minute<0)
        {
            minute=0;
            second=0;
           
        }
        else{
            minute=minute;
        }
       
    }
    if (second<0)
    {
        second=0;
        document.querySelector("#start-pomo").classList.remove("d-none");
        document.querySelector(".stopbutton").classList.add("d-none");
      
    }
    if(second<10)
    {
        document.querySelector("#time").innertext=minute+":0"+second;
    }
    if(minute<10)
    {
        document.querySelector("#time").innerText="0"+minute+":"+second;
    }
 
   
    
}

var countDown = function(){
   
let ınterval= setInterval(function a(){pomodoroTimer();},1000);
   check=true;
   let button = document.querySelector("#start-pomo");
   button.classList.add("d-none");
   let buton = document.createElement("button");
   buton.classList.add("btn");
   buton.classList.add("btn-dark");
   buton.classList.add("btn-lg");
   buton.classList.add("px-5");
   buton.classList.add("py-3");
   buton.innerHTML="STOP";
   buton.classList.add("stopbutton");
   document.querySelector("#buttondiv").appendChild(buton);
  buton.addEventListener("click", () => {
      clearInterval(ınterval);
      button.classList.remove("d-none");
      buton.classList.add("d-none");
  });

}
document.querySelector("#start-pomo").addEventListener("click",countDown);

document.querySelector("#addtask").onclick = () => {
    document.querySelector("#addform").classList.remove("d-none");
}

const cancel = () => {
    document.querySelector("#addform").classList.add("d-none");
}
document.querySelector("#cancel").onclick = () => {
    cancel();
}

let i =0;
const save = () => {
    let task = document.querySelector("#task");
    let taskelement = document.createElement("div");
    taskelement.innerText=task.value;
    taskelement.classList.add("li");
    i=i+1;
    let div = "  <div id='id' class='col-12 mt-2 bg-light d-grid gap-2>"+
    "<div class='bg-light shadow fs-5 fw-bold list-unstyled text-start'>"+
        "<div class='row'>"+
            "<div class='col-1'>"+
                "<i id='veri' class='bi bi-check2-circle'></i>"+
           "</div>"+
           "<div class='col-md-5 text-danger my-auto fs-4  text-center now '>"+ 
            taskelement.innerHTML;
           " </div>"+
           "<div class='col-md-6 text-danger my-auto fs-4  text-end '>"+ 
           "<button class='btn btn-danger'><i class='bi bi-three-dots-vertical'></i></button>"+
           " </div>"+
       "</div>"+
    "</div>"
    
    let htmlelement = document.createElement("div");
    htmlelement.innerHTML=div;
    document.querySelector(".taskdiv").appendChild(htmlelement);
    document.querySelector("#addform").classList.add("d-none");
   
}

document.querySelector("#save").onclick = () => {
    save();
}

