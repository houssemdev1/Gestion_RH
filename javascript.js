

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
<<<<<<< HEAD


/**fonction d'ajout utilisateur */
function add_user()

{
  /**inputs de formulaire ajout employe */
  var id_user = document.getElementById("inputid").value;
  var image=document.getElementById("img").value;
  var nom_user = document.getElementById("inputnom_user").value;
  var Prenom_user = document.getElementById("inputprenom_user").value;
  var Email_user = document.getElementById("inputEmail_user").value;
  var Pwd_user = document.getElementById("inputpwd_user").value;
  var CIN_user = document.getElementById("inputCin_user").value;
  var date_nais = document.getElementById("inputdatenais").value;
  var Adresse_user = document.getElementById("inputadresse_user").value;
  var Tel_user = document.getElementById("inputtel_user").value;
  var Societe = document.getElementById("inputSociete_user").value;
  var salaire = document.getElementById("inpusalaire").value;
  var congé = document.getElementById("inputconge").value;
  
  var employe = {
    'id': id_user,
    'img':image,
    'lastname': nom_user,
    'firstname': Prenom_user,
    'datenais':date_nais,
    'pwd': Pwd_user,
    'email': Email_user,
    'CIN': CIN_user,
    'adresse': Adresse_user,
    'tel': Tel_user,
    'societe': Societe,
'salaire':salaire,
'congé':congé

  };
  /**tableau des employes */
  var userTab = [];

  
  if(localStorage.length>0)
 {
   userTab=JSON.parse(localStorage.getItem("tabemploye"));
  userTab.push(employe); 
  localStorage.setItem("tabemploye",JSON.stringify(userTab));
 }
 else{
  userTab.push(employe); 
  localStorage.setItem("tabemploye",JSON.stringify(userTab));

}
alert("c bon");

}




/**fonction affichage de profil employe */

function user_profil()
{
  
  var i;
  var profil = "<tr class=\"first\"></tr><tr><b>Email/ID</b><br></tr><tr><b>Prenom</b><br></tr><tr><b>Nom</b><br></tr><tr><b>Date De Naissance</b><br></tr></tr> \n";
  document.getElementById("profil").innerHTML = profil;
  /**valeur de recupertion de de l'email de l'utilisateur connecté */
  var l=JSON.parse(localStorage.getItem("objlogin"));
  var res=JSON.parse(localStorage.getItem("tabemploye"));
  
  for(i=0;i<res.length;i++)
  {
   
    if(res[i].email==l)
  {
  
   profil = "<tr class=\"first\"></tr><tr>"+res[i].img+"</tr><tr><td><b>Email/ID:</b></td><td>"+res[i].id+"</td></tr><tr><td><b>Nom:</b></td><td>"+res[i].lastname+"</td></tr><tr><td><b>Prenom:</b></td><td>"+res[i].firstname+"</td></tr><tr><td><b>Date de naissance:</b></td><td>"+res[i].datenais+"</td></tr><tr><td><b>Mot de passe:</b></td><td>"+res[i].pwd+"</td></tr><tr><td><b>CIN:</b></td><td>"+res[i].CIN+"</td></tr><tr><td><b>Adresse:</b></td><td>"+res[i].adresse+"</td></tr><tr><td><b>Tel:</b></td><td>"+res[i].tel+"</td></tr><tr><td><b>Societe:</b></td><td>"+res[i].societe+"</td></tr><tr><td><b>Salaire:</b></td><td>"+res[i].salaire+"</td></tr><tr><td><b>Congé:</b></td><td>"+res[i].congé+"</td></tr> \n";
 
   document.getElementById("profil").innerHTML = profil;
}
}
}
/***fonction authentifier */
function authentifier_user() {
    var i;
    /*variable de recuperation de l'adresse email user*/
 var vlogin=document.getElementById("login");
 /*variable de recuperation du tableau de localstorage*/
 var  val=JSON.parse(localStorage.getItem("tabemploye"));
    for(i=0;i<val.length;i++)
  {
    if(val[i].email==vlogin)
    {
        se_connecter();
        return 1;
    }
     else 
     { 
         alert("utilisateur  introuvable");
     }



  }
}
/*fonction se connecter*/
function se_connecter()
{
  /**variable de recuperation adrsse email dans localstorage */
  
var log=document.getElementById("login").value;
var retrievedTabUser = JSON.parse(localStorage.getItem("tabemploye"));

localStorage.setItem("objlogin",JSON.stringify(log));

    location.href="InterfaceEmploye/g_consulter_profil.html";
    user_profil();
    
    
}
/*tester la validation de l'email*/
function validation()
         {
            var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

            if (!(expressionReguliere.test(document.getElementById("email").value)))
          {  document.getElementById("pemail").innerHTML="adresse email non valide!";

        }
        else if(document.getElementById("password").value==""){
            document.getElementById("ppassword").innerHTML="verifiez votre mot de passe!";

         }
          else{
       authentifier_user();
      
        }
        
    /* document.getElementById("i").addEventListener("click",function(eve){eve.preventDefault()})  ; */  
         }
        
        /**fonction de deconnexion */
        function deconnecter()
        {
localStorage.removeItem("objlogin");
localStorage.removeItem("key");

location.href="../login.html";

        }
=======
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

<<<<<<< HEAD



/******Afficher Users *******/
function Afficher(){
  
}
=======
>>>>>>> d6c0e3dcbbc404fbb85788311eacf3bec2c9be0e
>>>>>>> d11b6fc2736e653ca8dc5c8fe53041abe1bea89c
