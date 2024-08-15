const target = document.getElementById('target');
    function moveTarget() {
        const maxWidth =200;
        const maxHeight = 200;
    
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
    
        target.style.left = randomX + 'px';
        target.style.top = randomY + 'px';
  
        }
    
        target.addEventListener('mouseenter', function() {
            moveTarget();
        });
        yes.addEventListener('click',()=>{
          alert("I'm Not Your Friend😫😥🙄")
        })