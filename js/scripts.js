/*!
* Start Bootstrap - Landing Page v6.0.5 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


var numberphone = document.getElementById('numberphone');
var message = document.getElementById('message');

       function generateurl() {
        var modal = document.getElementById("exampleModal");

        if (numberphone.value === '') {
            location.reload();
            
        }else if(numberphone.value != '' && message.value != ''){
            var  link = "https://wa.me/"+numberphone.value+"?text="+message.value ;
            // document.getElementById("linkhere").innerHTML += link;
            document.getElementById("myId").value =link;

            console.log(document.getElementById("myId").value );
         

        }else{
            var  link = "https://wa.me/"+numberphone.value;

            // document.getElementById("linkhere").innerHTML += link;
            document.getElementById("myId").value =link;
        }

   
           
       }

       function myFunction() {
        var copyText = document.getElementById("myId");
        var modal = document.getElementById("closemod");
        var copied = document.getElementById("copied");
    
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);

        copied.style.display="block";
    
        // setTimeout(() => { alert('*** Copied ***') }, 1000);
        
        // modal.click();

      
      }


      