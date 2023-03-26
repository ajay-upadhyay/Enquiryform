function submit() {
  let a = document.getElementsByTagName("input")[0].value;
  let b = document.getElementsByTagName("input")[1].value;
  let c = document.getElementsByTagName("input")[2].value;
  let d = document.getElementsByTagName("input")[3].value;
  if (a == "" || b == "" || c == "" || d == "") {
    document.getElementsByTagName("button")[0].style.display = "none";
    setInterval(function () {
      document.getElementsByTagName("button")[0].style.display = "block";
    }, 5000);
  }
}

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "realajay01010@gmail.com",
    Password: "realajay77",
    To: "realajay01010@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
