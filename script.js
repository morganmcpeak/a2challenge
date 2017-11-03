var user = {
    email: "coolguy@gmail.com",
    password: "ILoveCoffee",
    name: "Grant Chirpus"
};

function checkLogin() {
    document.getElementById("form");
   if (document.getElementById("email").value === "coolguy@gmail.com" && document.getElementById("password").value === "ILoveCoffee") {
       document.getElementById("form").style.visibility = "hidden";
   } else {
       alert("WRONG");
   }   
};