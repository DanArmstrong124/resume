function sendMail(contactForm){
var template_params = {
    "from_name": contactForm.name.value,
    "from_email": contactForm.email.value,
    "project_request": contactForm.projectsummary.value
}

var service_id = "default_service";
var template_id = "danielarmstrong";
emailjs.send(service_id, template_id, template_params);
}