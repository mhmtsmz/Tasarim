$(document).ready(function(){
    $("button").eq(1).click(function(){
     
        if($("input")[0].value==""){
            swal({
                title: "Kullanıcı adınızı Giriniz!",
                button: "kapat"
             });
            return false;
         }  
         if($("input")[1].value==""){
            swal({
                title: "Şifrenizi Giriniz!",
                button: "kapat"
             });
            return false;
         }  
        });
        });