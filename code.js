
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let ul1 = document.getElementById('ul1');
let ul2 = document.getElementById('ul2');
let ul3 = document.getElementById('ul3');

btn1.onclick= function () {
    if (btn1.outerText=="Ver más"){       
       ul1.style.display = 'block'; 
       btn1.innerText="Ver menos"      
    }else{
        ul1.style.display = 'none'; 
        btn1.innerText="Ver más"    
    }
}


btn2.onclick= function () {
    if (btn2.outerText=="Ver más"){       
        ul2.style.display = 'block'; 
        btn2.innerText="Ver menos"      
     }else{
         ul2.style.display = 'none'; 
         btn2.innerText="Ver más"    
     }  
}


btn3.onclick= function () {
    if (btn3.outerText=="Ver más"){       
        ul3.style.display = 'block'; 
        btn3.innerText="Ver menos"      
     }else{
         ul3.style.display = 'none'; 
         btn3.innerText="Ver más"    
     }   
}