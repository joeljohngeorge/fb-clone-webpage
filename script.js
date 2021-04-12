//validation code
$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:20
            },
            sname:{
               required:true,
                minlength:4,
                maxlength:20
            },
            emailaddress:{
            
            email:true},
        
        password:{
            minlength:8,
            maxlength:16,
           required:true
        }
       
       
        },
        messages:{
            fname:{required:"Required"},
            sname:{required:"Required"},
            emailaddress:{required:"Required"},
            password:{required:"Required"}
        }
    })
})