let secon= document.getElementById("do")
let secon1= document.getElementById("do1")
let secon2= document.getElementById("do2")
let second= document.getElementById("jimmo")
let colo=["orange","green","red"]
let count= 0
setInterval(()=>{
    secon.innerHTML=count
    secon1.innerHTML=count
    secon2.innerHTML=count
    if (count==30){
        count=0
        }
    count++
    if(count==10){
        secon.style.backgroundColor=colo[0]
        secon1.style.backgroundColor=colo[0]   
        secon2.style.backgroundColor=colo[0]
        second.innerHTML="GET READY TO MOVE" 
        second.style.color=colo[0]   
    }else if(count==20){
        secon.style.backgroundColor=colo[1]
        secon1.style.backgroundColor=colo[1]   
        secon2.style.backgroundColor=colo[1]
        second.innerHTML="START MOVING"
        second.style.color=colo[1]     
    }else if(count==30){
        secon.style.backgroundColor=colo[2]
        secon1.style.backgroundColor=colo[2]   
        secon2.style.backgroundColor=colo[2] 
        second.innerHTML="STOP!!!!!!!!"
        second.style.color=colo[2]    
    }
},1000)