document.addEventListener("DOMContentLoaded", function() {
  let Myform = document.getElementById("Myform");

  Myform.addEventListener("submit", (e) => {
    e.preventDefault();

    let Name = document.getElementById("Name");
    let Surname = document.getElementById("Surname");
    let Email = document.getElementById("Email");

    if (Name.value === "" || Surname.value === "" || Email.value === "") {
      alert("Ensure you input a value in all fields!");
    } else {
      // perform operation with form input
      alert("successfully Login!");
      console.log(
        `Name:${Name.value} Surname:${Surname.value} Email:${Email.value}`
      );

      // Clear input fields
      Name.value = "";
      Surname.value = "";
      Email.value = "";
    }
  });
});
