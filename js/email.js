function sendEmail() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !number || !message || !subject) {
        alert("Please fill in all fields.");
        return;
    }
    else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    else {
        let parms = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            number: document.getElementById("number").value,
            message: document.getElementById("message").value,
            subject: document.getElementById("subject").value,
        }

        const serviceID = "service_wm1bdy8";
        const templateID = "template_26xtk88";

        emailjs
            .send(serviceID, templateID, parms)
            .then((response) => {
                document.getElementById("contact-form").reset();
                console.log(response);
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.log(error)
                alert("Failed to send message. Try again later.");
            });

    }


}