const video = document.getElementById("myVideo");
video.addEventListener("timeupdate", function() {
    if (this.currentTime >= 19) { // Change '10' to the desired time in seconds
      this.pause();
      this.currentTime = 0;
      this.play();
    }
  });

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }


  function handleSubmit(event) {
    event.preventDefault(); 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    var subject = 'Contact Form Submission';
    var body = 'Name: ' + name + '\n';
    body += 'Email: ' + email + '\n';
    body += 'Message: ' + message;
    
    // Construct the mailto URL
    var mailtoUrl = 'mailto:rey.austine.echavez@accenture.com';
    mailtoUrl += '?subject=' + encodeURIComponent(subject);
    mailtoUrl += '&body=' + encodeURIComponent(body);
    window.open(mailtoUrl);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }

  document.getElementById('contact-form').addEventListener('submit', handleSubmit);




