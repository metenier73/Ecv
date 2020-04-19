/*****************************************************************************
 * Chargement de la page
 * ***************************************************************************/ 
 /*window.onload = function() {

  //--- récupération du nom de la page active ---
  var url = (document.location.href).split("/") ;
  var mapage = (url[url.length-1].split("."))[0] ;
                       
  //--- appel de la fonction correspondant à chaque page ---
  switch (mapage) {
    case "pageCentral" : Accueil () ; break ;
    case "SavoirEtre" : SavoirEtre () ; break ;
    case "SavoirFaire" : SavoirFaire () ; break ;
    case "contact" : contact () ; break ;
    case "blog" : blog () ; break ; 
  }

};

 /*function myFunction() {
  var x = document.getElementById('container1');
  if (x.style.display === 'none') {
    x.style.display = 'block';

  } else {
    x.style.display = 'none';
	
  }
};*/


