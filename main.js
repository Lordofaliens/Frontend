(function() {
    var rng = document.getElementById('seek');
    var text = document.getElementById('text');  
    
    rng.addEventListener("input", function() {            
        text.style.fontSize = rng.value + 'px'           
      });
})();