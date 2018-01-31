$(document).ready(function() {
  // use esta configuracion simple para valores por defecto
  //$('div.expandable p').expander();
  // *** O ***
  // configure de la siguiente manera

   // Efecto splash

setTimeout(function() {
  $('#brand').fadeOut(500);
}, 3000);


var config = {
  apiKey: "AIzaSyCn_9-gfdkdYZluOxNWWBGpd8D9POJAjyw",
  authDomain: "net-net-ab9a8.firebaseapp.com",
  databaseURL: "https://net-net-ab9a8.firebaseio.com",
  projectId: "net-net-ab9a8",
  storageBucket: "",
  messagingSenderId: "733149151249"
};
firebase.initializeApp(config);
/*
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
 window.
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

}*/


// Funcion de acceso mediante una cuenta de Google
function siginGoogle() {
  if (!firebase.auth().currentUser) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      // Informacion del usurio resgistrado
      var user = result.user;
      window.location.href = 'views/home.html';
    }).catch(function(error) {
      // Manejo de errores
      var errorCode = error.code;
      var errorMessage = error.message;
      // El correo electrónico utilizado de la cuenta del usuario
      var email = error.email;
      // El firebase.auth.AuthCredential tipo que se utilizado
      var credential = error.credential;
      
      console.log(error);

    });
  } else {
    firebase.auth().signOut();
  }
};
//PRUEBA

function pintarNombreFoto() {
  firebase.auth().onAuthStateChanged(function(user) {
    var $photoProfile = $('#photo');
    var $nameUsers = $('#name');
    var $usersComment = $('.name-comment');
    
      if (user) {
          var displayName = user.displayName;
          var photoURL = user.photoURL;
         
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          
          $photoProfile.attr('src', photoURL);
          $nameUsers.text(displayName);
          $usersComment.text(displayName);
          
      }
  });
}
pintarNombreFoto();










$('#signin').on('click', siginGoogle);

//   $('div p.expandable ').expander({
//   slicePoint: 50, // si eliminamos por defecto es 100 caracteres
//   expandText: '[...]', // por defecto es 'read more...'
//   collapseTimer: 5000, // tiempo de para cerrar la expanción si desea poner 0 para no cerrar
//   userCollapseText: '[^]' // por defecto es 'read less...'
// });


});