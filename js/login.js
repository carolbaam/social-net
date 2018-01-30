var config = {
  apiKey: "AIzaSyCn_9-gfdkdYZluOxNWWBGpd8D9POJAjyw",
  authDomain: "net-net-ab9a8.firebaseapp.com",
  databaseURL: "https://net-net-ab9a8.firebaseio.com",
  projectId: "net-net-ab9a8",
  storageBucket: "",
  messagingSenderId: "733149151249"
};
firebase.initializeApp(config);

$("#login").click(function () {
 authGoogle();

});

function authGoogle () {
 var provider = new firebase.auth.GoogleAuthProvider();
 authentication(provider);
}

function authentication(provider) {
 firebase.auth().signInWithPopup(provider)
 .then(function(result) {
 // This gives you a Google Access Token. You can use it to access the Google API.
 var token = result.credential.accessToken;
 console.log(token);
 // The signed-in user info.
 var user = result.user;
 console.log(user);
})
.catch(function(error) {
 // Handle Errors here.
 
 var errorCode = error.code;
 console.log(errorCode);
 var errorMessage = error.message;
 console.log(errorMessage);
 // The email of the user's account used.
 var email = error.email;
 // The firebase.auth.AuthCredential type that was used.
 var credential = error.credential;
 console.log(credential);
 // ...
});

}
