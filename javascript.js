

/*
 var login = anime({
    targets: '#login .el',
    translateX: 250
  });
*/


/***InterfaceAdmin ****/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/*** Storage******/
id = 0;
function Save() {
  //var id = document.getElementById("inputId").value;
  var Nom = document.getElementById("inputLogin").value;
  var Prenom = document.getElementById("inputPrenom").value;
  var Pwd = document.getElementById("inputPassword").value;
  var Email = document.getElementById("inputEmail").value;
  var Adresse = document.getElementById("inputAdresse").value;
  var CIN = document.getElementById("inputCin").value;
  var Tel = document.getElementById("inputTel").value;
  var Societe = document.getElementById("inputSociete").value;






  // Create an object:
  var person = {
    'id': id,
    'lastName': Nom,
    'firstName': Prenom,
    'pwd': Pwd,
    'email': Email,
    'adresse': Adresse,
    'cin': CIN,
    'tel': Tel,
    'societe': Societe



  };


  // Retrieve the object from storage
  var retrievedTab = JSON.parse(localStorage.getItem("tableauAdmin"));
  if (retrievedTab == null) {

    if ((document.getElementById("inputLogin").value == "") || (document.getElementById("inputPrenom").value == "") || (document.getElementById("inputPassword").value == "") || (document.getElementById("inputEmail").value == "") || (document.getElementById("inputAdresse").value == "") || (document.getElementById("inputCin").value == "") || (document.getElementById("inputTel").value == "") || (document.getElementById("inputSociete").value == "")) {

      myFunctionSnackbarEchoué()
    }
    else {
      retrievedTab = [];
      id == id++;

      retrievedTab.push(person);
      localStorage.setItem("tableauAdmin", JSON.stringify(retrievedTab));

      console.log(retrievedTab);
      myFunctionSnackbarReussi()
    }
  }
  if (retrievedTab != null) {


    for (i = 0; i < retrievedTab.length; i++) {
      //Contrôle InputText 
      if ((document.getElementById("inputLogin").value == "") || (document.getElementById("inputPrenom").value == "") || (document.getElementById("inputPassword").value == "") || (document.getElementById("inputEmail").value == "") || (document.getElementById("inputAdresse").value == "") || (document.getElementById("inputCin").value == "") || (document.getElementById("inputTel").value == "") || (document.getElementById("inputSociete").value == "") || (document.getElementById("inputPrenom").value == retrievedTab[i].firstName) || (document.getElementById("inputEmail").value == retrievedTab[i].email) || (document.getElementById("inputCin").value == retrievedTab[i].cin) || (document.getElementById("inputSociete").value == retrievedTab[i].societe)) {
        resultat = 0;




      }
      else {
        resultat = 1;


      }
      a = resultat;
      console.log(a);
    }
    if (a == 1) {
      id == id++;

      retrievedTab.push(person);
      localStorage.setItem("tableauAdmin", JSON.stringify(retrievedTab));
      myFunctionSnackbarReussi();
      var key = retrievedTab[i].societe;
      localStorage.setItem("key", key)
    }
    if (a == 0) {
      console.log('user mawjoud');
      myFunctionSnackbarEchoué()
    }
  }


}


/*****Fonction Sncakbar ******/

// Fonction Snackbar Création Réussie
function myFunctionSnackbarReussi() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

//Fonction Snackbar Création échoué
function myFunctionSnackbarEchoué() {
  var x = document.getElementById("snackbarFailed");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

}

/**fonction de recuperation de passwd */
function recuperer_passwd() {
  var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

  if (!(expressionReguliere.test(document.getElementById("email").value))) {
    document.getElementById("pemail").innerHTML = "adresse email non valide!";
  }
  else {
    sendemail();
  }

}
/**fonction d'envoi d'email */
function sendemail() {
  var email = document.getElementById("email").value;
  var subject = ("nouveau mot de passe");
  var body = ("..");
  location.href = "mailto:" + email + '?subject=' + subject + '&body=' + body + "";
}




/******Se Connecter() As User and Admin*******/
var resultatAdmin ;
var resultatUser ;
function Login() {
  var login = document.getElementById("inputLogin").value;
  var pwd = document.getElementById("inputPassword").value;

  //Retrieve from local storage table
  var retrievedTab = JSON.parse(localStorage.getItem("tableauAdmin")) || [];
  var retrievedTabUser = JSON.parse(localStorage.getItem("tableauUser")) || [];



  //Control Table User and Admin
  if ((retrievedTab == null)) {

  }

  if (retrievedTab != null) {
    if ((document.getElementById("inputLogin").value === "") || (document.getElementById("inputPassword").value === "")) 
    {

      console.log("input missed");

    }
    if ((document.getElementById("inputLogin").value !== "") && (document.getElementById("inputPassword").value !== "")) 
    {
      key = false;

      for (i = 0; i < retrievedTab.length; i++)
       {

        if ((document.getElementById("inputLogin").value == retrievedTab[i].email) && (document.getElementById("inputPassword").value == retrievedTab[i].pwd)) 
        {
          resultatAdmin = 1;
          resultatUser = 0 ;
          key = retrievedTab[i].societe;
          

        }
        
   
        if ((document.getElementById("inputLogin").value != retrievedTab[i].email) && (document.getElementById("inputPassword").value !== retrievedTab[i].pwd)) 
        {
          
          if (retrievedTabUser == null) {

          }
          

          if (retrievedTabUser !== null) 
          {
            for (j = 0; j < retrievedTabUser.length; j++) {
              
              if (((document.getElementById("inputLogin").value == retrievedTabUser[j].email) && (document.getElementById("inputPassword").value == retrievedTabUser[j].pwd))) 
              {
                resultatAdmin = 0 ;
                resultatUser = 1 ;
                key = retrievedTabUser[j].societe;
              }
              if (((document.getElementById("inputLogin").value !== retrievedTabUser[j].email) && (document.getElementById("inputPassword").value !== retrievedTabUser[j].pwd))) 
              {
                resultatAdmin = 0;
                resultatUser = 0 ;
              }
            }

          }


        }
      }
      console.log('resultatAdmin ', resultatAdmin);
      console.log('resultatUser ', resultatUser);

    }
  }
  



  if (resultatAdmin == 1) {
    location.href = 'InterfaceAdmin/Admin.html';
    //Store
    localStorage.setItem("Key", key);
  }
  if (resultatUser == 1) {
    location.href = 'g_consulter_profil.html.html';
    localStorage.setItem("Key", key);
    localStorage.setItem("Key", key);
  }
  if ((resultatAdmin == 0) && (resultatUser == 0)) {
    // myFunctionSnackbarEchoué()
  }

}




/******Afficher Users *******/
function Afficher(){
  
}
