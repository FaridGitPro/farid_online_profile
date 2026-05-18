function sendEmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        message : document.getElementById("message").value,
        subject : document.getElementById("subject").value
    }
    const serviceID = "service_wm1bdy8";
    const templateID = "template_26xtk88";

    emailjs
        .send(serviceID, templateID, parms)
        .then((response)=>{
            document.getElementById("contact-form").reset();
            console.log(response);
            alert("Message sent successfully!");
        })
        .catch((error) => {
            console.log(error)
            alert("Failed to send message. Try again later.");
        });

}