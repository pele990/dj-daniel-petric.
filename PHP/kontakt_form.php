<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ime = $_POST["ime"];
    $email = $_POST["email"];
    $poruka = $_POST["poruka"];
    
    // Postavljanje e-pošte
    $primatelj = "petricdanijel.1471997@gmail.com";
    $naslov = "Nova poruka s web stranice";
    $poruka_emaila = "Ime: $ime\n";
    $poruka_emaila .= "Email: $email\n";
    $poruka_emaila .= "Poruka:\n$poruka";
    
    // Slanje e-pošte
    mail($primatelj, $naslov, $poruka_emaila);

    // Preusmjeravanje na zahvalnu stranicu
    header("Location: hvala.html");
    exit;
}
?>
