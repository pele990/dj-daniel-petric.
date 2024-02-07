document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_1hvea6r', 'template_j78u7yd', this)
        .then(function(response) {
            console.log('Email je uspješno poslan!', response.status, response.text);
            alert('Vaša poruka je uspješno poslana!');
        }, function(error) {
            console.log('Greška pri slanju emaila:', error);
            alert('Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovno.');
        });
});
