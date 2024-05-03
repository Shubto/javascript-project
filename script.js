const button = document.querySelectorAll('.button')
const body = document.querySelector("body")
button.forEach( function(bc) {
     bc.addEventListener('click', function(e){
          if(e.target.className === 'box1 button'){
               body.style.backgroundColor='red'
          }
          if(e.target.className === 'box2 button'){
               body.style.backgroundColor='green'
          }
          if(e.target.className === 'box3 button'){
               body.style.backgroundColor='yellow'
          }
          if(e.target.className === 'box4 button'){
               body.style.backgroundColor='blue'
          }
     });
     
    
});