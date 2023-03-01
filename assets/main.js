const frm = document.querySelector('.frm')
const inp1 = document.querySelector('.inp1')
const inp2 = document.querySelector('.inp2')
const inp3 = document.querySelector('.inp3')
const inp4 = document.querySelector('.inp4')
const loading = document.querySelector('.loader')
loading.style.display = 'none'

const body = document.querySelector('body')

const from = 'abdulloh50007@gmail.com'
const emailBody = `<strong>From ${from}</strong> <br/>
<b>Name: ${inp1.value}</b> <br/>
<b>Number: ${inp3.value}</b> <br/>
<p>Sms: ${inp4.value}</p> <br/>
`

inp1.addEventListener('keyup', (e) => {
  if(e.target.value.length < 5){
    inp1.style.borderBottomColor = 'red'
  }else{
    inp1.style.borderBottomColor = 'blue'
  }
})

frm.addEventListener('submit', (e) => {
  Mail()
  e.preventDefault()
})

function Mail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "abdulloh50007@gmail.com",
    Password : "D1F934CC9A44327037D2FB13FE1EB0717534",
    To : inp2.value,
    From : "abdulloh50007@gmail.com",
    Subject : 'Test',
    Body : emailBody,
  }).then(
    message => alert(message)
  );
  setTimeout(() => {
    frm.style.display = 'none'
    loading.style.display = 'block'
    body.style.backgroundColor = '#000'
  }, 2000);

  setTimeout(() => {
    frm.style.display = 'flex'
    loading.style.display = 'none'
    body.style.backgroundColor = '#fff'
    frm.reset()
  }, 4000);
}

