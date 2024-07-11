//SignIN input fields
let signIn = document.forms.SignIn
let signInPassWord = signIn.new_password
let passwordConfirm = signIn.current_password
let signInUsername = signIn.email



let password = signInPassWord.value
let username = signInUsername.value

// incomplete password error message creation
let passWordError = document.createElement('p')
//error for password not being the same as confirm password
let passWordConfirmError = document.createElement('p')
let pageChange = function(){window.location.assign("./login.html");}

console.log(passwordConfirm)

//regex for password, 8-16 characters containing a number, 1 uppercase letter, 1 lowercase letter and 1 special character
let passwordTest = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm
let testResult =  passwordTest.test(signInPassWord.value)
signInPassWord.addEventListener('input',(e)=>{
 let passwordTestResult =  passwordTest.test(signInPassWord.value)
 if(passwordTestResult == false){
    signInPassWord.style.backgroundColor = 'pink'
    signInPassWord.style.border = '2px solid red'
  //adds incomplete password error message to the DOM 
signIn.append(passWordError)
passWordError.innerText = 'Password must be 8-16 characters containing [0-9], 1 uppercase letter, 1 lowercase letter and 1 special chracter'
passWordError.style.textAlign = 'center'
passWordError.style.color = 'white'

}
   else if (passwordTestResult == true){
    signInPassWord.style.backgroundColor =''
    signInPassWord.style.border = ''
   passWordError.remove()
   
   }
   e.stopPropagation()
 }

)

passwordConfirm.addEventListener('input',(e)=>{
    if(passwordConfirm.value !== signInPassWord.value){
         passwordConfirm.style.backgroundColor = 'pink'
    passwordConfirm.style.border = '2px solid red'
    signIn.append(passWordConfirmError)
passWordConfirmError.innerText = 'The passwords do not match'
passWordConfirmError.style.textAlign = 'center'
passWordConfirmError.style.color = 'white'
    }
else if(passwordConfirm.value == signInPassWord.value){
    passwordConfirm.style.backgroundColor = ''
    passwordConfirm.style.border = ''
    passWordConfirmError.remove()
}
e.stopPropagation()


})




signIn.addEventListener('submit',(e)=>{
e.preventDefault()

if( signInPassWord.value == passwordConfirm.value && testResult == true){
   
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    e.stopPropagation()
    pageChange()
   
   


}
})


