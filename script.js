/*Let add some Javascript to this code to make it interactive and let handle our form*/
 document.getElementById('SignupForm').addEventListener('submit',function(event){
  event.preventDefault();
   

//Let get the elements themeselves
const firstNameInput=document.getElementById('FirstName');
const lastNameInput=document.getElementById('LastName');
const  emailInput=document.getElementById('email');
const passwordInput=document.getElementById('password');


  //Let Get the forms values
  const firstName=document.getElementById('FirstName').value.trim();
  const lastName=document.getElementById('LastName').value.trim();
  const password=document.getElementById('password').value.trim();
  const email=document.getElementById("email").value.trim();
 const inputs=document.querySelectorAll('input');
 const icons=document.querySelectorAll('.icon');
  //Let Style the input
  


  //Let Collect the error spans from our Html
  const error1=document.querySelector('.error1');
  const error2=document.querySelector('.error2');
  const error3=document.querySelector('.error3');
  const error4=document.querySelector('.error4');

  //Let reset all the borders
  [firstNameInput,lastNameInput,emailInput,passwordInput].forEach(input=>{
    input.style.border="2px solid red";
  })

   let hasError=false;
  //Let set conditions validations
  if(!firstName){
   error1.style.display='block';
     icons[0].style.display='block';
     firstNameInput.setAttribute('aria-invalid','true');
   hasError=true;
  }else{
    firstNameInput.style.border="2px solid green";
    error1.style.display='none';
     icons[0].style.display='none';
  }

   if(!lastName){
   error2.style.display='block';
   icons[1].style.display='block';
   lastNameInput.setAttribute('aria-invalid','true');
   hasError=true;
  }else{
    lastNameInput.style.border="2px solid green"
    error2.style.display='none';
     icons[1].style.display='none';
  }

  if(!email || !email.includes('@')){
   error3.style.display='block';
     icons[2].style.display='block';
     emailInput.setAttribute('aria-invalid','true');
   hasError=true
  }else{
    emailInput.style.border="2px solid green";
    error3.style.display='none';
    icons[2].style.display="none";
  }

 if(!password || password.length<8){
    error4.textContent='Password most have at least 8 characters';
   error4.style.display='block';
     icons[3].style.display='block';
     passwordInput.setAttribute('aria-invalid','true');
   hasError=true;
  }
  else{
     passwordInput.style.border="2px solid green";
     error4.style.display='none';
        icons[3].style.display='none';
  }



  if(!hasError){
    alert('form submitted sucessfully');
    document.getElementById('SignupForm').reset();
    
  }

 });