function sendMail(contactForm) {

    emailjs.send("gmail", "danielarmstrong", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "from_mobile": contactForm.mobile.value,
            "deadline": contactForm.deadline.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                $("#details-sent").removeClass("invisable").addClass("visable");
                $("#up-to-5").removeClass("invisable").addClass("visable");
                setTimeout(location.reload.bind(location), 600);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}