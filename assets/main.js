const fname = document.querySelector('.inp1');
const lname = document.querySelector('.inp2');
const submit = document.querySelector('.frm');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;

    Email.send({
        SecureToken : "8ac173ba-f976-473f-a6b2-5e827305724f", //add your token here
        To : 'abdulloh50007@gmail.com', 
        From : "abdulloh50007@gmail.com",
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
});