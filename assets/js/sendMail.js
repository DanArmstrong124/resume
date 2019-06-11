function sendMail(contactForm) {

    emailjs.send("gmail", "danielarmstrong", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "from_mobile": contactForm.mobile.value,
            "deadline": contactForm.deadline.value,
            "project_request": contactForm.projectsummary.value,
            "discount": contactForm.discount.value,
            "find": contactForm.find.value
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

function sendMailFeedback(contactFormFeedback) {

    emailjs.send("default_service", "template_KJuK8WhN", {
            "from_name": contactFormFeedback.name.value,
            "from_email": contactFormFeedback.email.value,
            "feedbackprojectname": contactFormFeedback.feedbackprojectname.value,
            "from_mobile": contactFormFeedback.mobile.value,
            "whatdidyoulike": contactFormFeedback.whatdidyoulike.value,
            "whatdidntyoulike": contactFormFeedback.whatdidntyoulike.value,
            "whatshouldiadd": contactFormFeedback.whatshouldiadd.value,
            "whatshouldiremove": contactFormFeedback.whatshouldiremove.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                $("#details-sent2").removeClass("invisable").addClass("visable");
                $("#up-to-52").removeClass("invisable").addClass("visable");
                setTimeout(location.reload.bind(location), 600);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}