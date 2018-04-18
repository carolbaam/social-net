$(document).ready(function() {
  

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

//pintar nombre de perfil y foto

function pintarNombreFoto() {
  firebase.auth().onAuthStateChanged(function(user) {
    var $photoProfile = $('#photo');
    var $nameUsers = $('#name');
    var $usersComment = $('.users-comment');
    
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




});