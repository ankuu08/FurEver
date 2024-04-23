  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth,signInWithEmailAndPassword,onAuthStateChanged ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDeXr9pwkIABylPiLoSrDk0l985mfIPYdI",
    authDomain: "loginfurever.firebaseapp.com",
    projectId: "loginfurever",
    storageBucket: "loginfurever.appspot.com",
    messagingSenderId: "827508353838",
    appId: "1:827508353838:web:e985b07cfb7104424ea8bf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  // onAuthStateChanged(auth,(user)=>{
  //   if(user){
  //       // window.location.replace("https://ankuu08.github.io/landingpage/");
  //   }else{
  //       alert("bad");
  //       console.log("Bad");
  //   }
  // })
  function loginuser(){
    const email=document.querySelector(".loge").value;
    const password=document.querySelector(".logp").value;
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(auth,email,password).then((usercredential)=>{
        console.log(usercredential.user.uid);
        if(usercredential.user.uid!=""){
          window.location.assign("https://ankuu08.github.io/landingpage/");
        }
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Wrong email or password")
    });
  }
let btn=document.querySelector(".sign");
let target=document.querySelector(".signup");
let target1=document.querySelector(".login");
let btn1=document.querySelector(".sign1");
let btn2=document.querySelector(".log");
let target3=document.querySelector(".submit")
let btn3=document.querySelector("#l");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    target.classList.remove("hum");
    target1.classList.add("hum");
})
function err(){
  try{
    console.log(usercredential.user.uid);
  }catch{
    alert("wrong email or password.")
  }
}
btn1.addEventListener("click",(e)=>{
    e.preventDefault();
    const email=document.querySelector(".signe").value;
    const password=document.querySelector(".signp").value;
    console.log(email);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("creating account");
    // ...
    target.classList.add("hum");
    target3.classList.remove("hu");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("password should contain 6 characters.")
  });
    
})
btn2.addEventListener("click",(e)=>{
    e.preventDefault();
    loginuser();
    // setTimeout(err,1200);
})
btn3.addEventListener("click",(e)=>{
    e.preventDefault();
    target3.classList.add("hu");
    target1.classList.remove("hum");
})