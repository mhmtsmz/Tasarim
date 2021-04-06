$(document).ready(function () {
   $("a").eq(8).click(function () {

      if ($("input")[0].value == "") {
         swal({
            title: "Adınızı Giriniz!",
            button: "kapat"
         });
         return false;
      }
      else if ($("input")[1].value == "") {
         swal({
            title: "Soyadınızı Giriniz!",
            button: "kapat"
         });
         return false;
      }
      else if ($("input")[2].value == "") {
         swal({
            title: "Kullanıcı adınızı Giriniz!",
            button: "kapat"
         });
         return false;
      }
      else if ($("input")[3].value == "") {
         swal({
            title: "Mail adresinizi giriniz!",
            button: "kapat"
         });
         return false;
      }
      else if ($("input")[4].value == "") {
         swal({
            title: "Şifrenizi Giriniz!",
            button: "kapat"
         });
         return false;
      }
      else if ($("input")[5].value == "") {
         swal({
            title: "Şifrenizi tekrarlayınız!",
            button: "kapat"
         });
         return false;
      }
      else {
         swal({
            title: "Başarıyla üye oldunuz!",
            text: "Lütfen üye girişi yapın.",
            icon: "success",
            button: "Kapat",
         });
         return false;
      }

   });
});

