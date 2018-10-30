

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
  var retrievedTab = JSON.parse(localStorage.getItem("tableau"));
  if (retrievedTab == null) {

if((document.getElementById("inputLogin").value == "")||(document.getElementById("inputPrenom").value == "")||(document.getElementById("inputPassword").value == "")||(document.getElementById("inputEmail").value == "")||( document.getElementById("inputAdresse").value == "")||(document.getElementById("inputCin").value == "")||(document.getElementById("inputTel").value == "")||(document.getElementById("inputSociete").value =="")){

  myFunctionSnackbarEchoué()
}
    else{
    retrievedTab = [];
    id == id++;

    retrievedTab.push(person);
    localStorage.setItem("tableau", JSON.stringify(retrievedTab));

    console.log(retrievedTab);
    myFunctionSnackbarReussi() 
    }
  }
  if (retrievedTab != null) {


    for (i = 0; i < retrievedTab.length; i++) {
      //Contrôle InputText 
      if ( (document.getElementById("inputLogin").value == "")||(document.getElementById("inputPrenom").value == "")||(document.getElementById("inputPassword").value == "")||(document.getElementById("inputEmail").value == "")||( document.getElementById("inputAdresse").value == "")||(document.getElementById("inputCin").value == "")||(document.getElementById("inputTel").value == "")||(document.getElementById("inputSociete").value =="")||(document.getElementById("inputPrenom").value == retrievedTab[i].firstName) || (document.getElementById("inputEmail").value == retrievedTab[i].email) || (document.getElementById("inputCin").value == retrievedTab[i].cin) || (document.getElementById("inputSociete").value == retrievedTab[i].societe)) {
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
      localStorage.setItem("tableau", JSON.stringify(retrievedTab));
      myFunctionSnackbarReussi() 
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
function myFunctionSnackbarEchoué(){
  var x = document.getElementById("snackbarFailed");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show","");},3000);

}

/**fonction de recuperation de passwd */
function recuperer_passwd()
{
    var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

    if (!(expressionReguliere.test(document.getElementById("email").value)))
  {  
      document.getElementById("pemail").innerHTML="adresse email non valide!";
}
  else
  {
sendemail();
}

}
/**fonction d'envoi d'email */
function sendemail()
              {
                  var email = document.getElementById("email").value;
                  var subject = ("nouveau mot de passe");
                  var body = ("..");
                   location.href="mailto:" + email + '?subject=' +subject+ '&body=' +body+ "" ;
              }
