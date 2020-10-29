import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')  // to get These ID go to this Pannel-> https://dashboard.emailjs.com/sign-in  
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}
export default sendEmail;

// follow Guide for testing => https://www.emailjs.com/docs/user-guide/connecting-email-services/