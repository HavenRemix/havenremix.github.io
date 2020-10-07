// JavaScript source code



var Email;
var Name;
var Age;

function ConfirmEnroll()
{
    Email = document.getElementById("EnrollmentInput_Email").value;
    Name = document.getElementById("EnrollmentInput_Name").value;
    Age = document.getElementById("EnrollmentInput_Age").value;

    Email.send({
    Host : "smtp.mailtrap.io",
    Username : "1e560a73c6131f",
    Password : "4dd68f6a95afc4",
    To : '3Shifts@havenremix.tk',
    From : Email,
    Subject : "3 Shifts - Beta Enrollment",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
    message => alert("mail sent successfully")
    );

    alert("ha");
}