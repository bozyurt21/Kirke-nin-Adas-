function sendEmail() {
    let params = {
        "name" : document.getElementById('name').value,
        "email" : document.getElementById('email').value,
        "subject" : document.getElementById('subject').value,
        "message" : document.getElementById('message').value
    }
    emailjs.send("service_ag1eq4j", "template_146dux6", params).then(alert("Mailiniz başarıyla gönderildi 🥳"))
}