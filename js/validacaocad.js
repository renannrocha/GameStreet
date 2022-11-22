$(document).ready(function(){
    $("#formCad").validate({
        rules:{
            nome:{
                required: true,
                minlength:3
            },
            email:{
                email: true,
                required: true
            },
            senha:{
                minlength:3,
                maxlength:10
            },
            confSenha:{
                equalTo:'#senha'
            }
        }
    })
});
