function SendMail(){
 var params = {
  Ime: document.getElementById("Ime").value,
  Email: document.getElementById("email").value,
  Poruka: document.getElementById("poruka").value
  }
 emailjs.send("service_1hvea6r","template_j78u7yd", params).then(function (res){
  alert("Uspješno poslano! ");
 })
 .catch(function (error) {
  console.error('Došlo je do greške pri slanju e-pošte:', error);
  alert('Došlo je do greške pri slanju e-pošte. Molimo pokušajte ponovno.');
 });
}