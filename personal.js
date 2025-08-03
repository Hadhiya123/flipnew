function sendMessage() {
    const name = document.getElementById("name").value;
    const msg = document.getElementById("message").value;
    if (name && msg) {
      alert("Thanks, " + name + "! Your message has been sent.");
    } else {
      alert("Please enter your name and message.");
    }
  }


 