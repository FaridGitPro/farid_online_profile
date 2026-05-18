function sendEmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        message : document.getElementById("message").value,
        subject : document.getElementById("subject").value
    }

    emailjs.send("service_wm1bdy8","template_26xtk88",parms).then(alert("Message sent successfully!"))

}