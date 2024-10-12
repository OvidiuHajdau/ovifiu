
    
     var myButton = document.getElementById("myButton");

      myButton.addEventListener("click", chngeH1BackgraudColor);
     

     function changeH1BackgroundColor(){
        var h1Elements = document.querySelectorAll("h1");
        
        for (var i = 0; i < h1Elements.length; i++) {
            h1Elements[i].style.backgroundColor = "yellow"
        }

     }
