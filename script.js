let Myform = document.getElementById("Myform");

Myform.addEventListener("submit", (e) => {
  e.preventDefault();

  let Name = document.getElementById("Name");
  let Surname = document.getElementById("Surname");
  let Email = document.getElementById("Email");

  if (Name.value == "" || Surname.value == "" || Email.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a Name of ${Name.value} Surname of ${Surname.value} and has Email of ${Email.value}`
    );

    Name.value = "";
    Surname.value = "";
    Email.value = "";
  }
});