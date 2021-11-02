function send() {
    emailjs.send("service_1b7fsmk", "template_vksdp0na") ({
    })
    
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

