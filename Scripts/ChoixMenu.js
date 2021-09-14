
let saison;

window.addEventListener("load", init);

function init() {
//  let saison = QuelleSaison();
  AfficheMenu();
}

function AfficheMenu() {
  if (QuelleSaison()==0) {
    MenuEte();
  } else {
    MenuHiver();
  }
}
function MenuHiver() {
  document.getElementById("menu").innerHTML = "<div><div class=\"bulleMenu\" onclick=\"SwitchMenu()\"><img title=\"Cliquez ici pour afficher la carte d'été\"src=\"../Icones/info.png\" width=\"55px\" alt=\"Voir le menu d'été.\"/></div> <h1> ~ Carte d\'hiver ~ <br /> <span style=\"font-size: 15px; font-style: italic;color: black;\">~ du 22/09 au 19/03 ~</span></h1> <h2> Entrées : </h2> <p id=\"entree\"></p> <h2> Plats : </h2> <p id=\"plats\"></p> <h2> Desserts : </h2> <p id=\"dessert\"></p> </div>";
  document.getElementById("entree").innerHTML = "<ul><li>Ravioli aux crevettes et à l'encre de seiche - 30€</li><li>Velouté de potimarron aux moules - 28€</li><li>Huitres pochées guacamole citronelle et son sorbet pomme vodka citron - 32€</li><li>Foie gras de canard des Landes, kiwi, pistaches -30€</li><li>Légumes d'hiver et parmesan à la bettrave - 25€</li></ul>";
  document.getElementById("plats").innerHTML = "<ul><li><a href=\"#PlatsSignatures\">Filet de rouget-barbet à la sauce champagne **</a> - 58€</li><li><a href=\"#PlatsSignatures\">Noix de Saint-Jacques déglacées au Jurançon sur son lit de mache **</a> - 50€</li><li><a href=\"#PlatsSignatures\">Entrecôte picarde à base de Maroilles **</a> - 45€</li><li>Caille fermière marinée façon bécasse, foie gras rôti aux graines, duo de mousseline coing et panais - 60€</li><li>Epaule confite d'agneau des Pyrénées, celerirosotto, jus d'agneau corsé - 52€</li><li>Seiches à la plancha et son embeurré de pomme de terre aux champignons - 50€</li><li>Rascasse aux fenouils confits au miel d'orange - 55€</li></ul>";
  document.getElementById("dessert").innerHTML = "<ul><li>Mousse glacée au caramel au beurre salé - 20€</li><li>Roses de pommes aux four -18€</li><li>Millefeuille de Gavottes à la vanille - 25€</li><li>Vacherin à l'ananas mangue pommme et citron vert - 22€</li><li>Sablé à la farine de chataigne crémeux de marrons glacés et sorbet aux agrumes - 18€</li></ul>";

}

function MenuEte() {
  document.getElementById("menu").innerHTML = "<div><div class=\"bulleMenu\" onclick=\"SwitchMenu()\"><img title=\"Cliquez ici pour afficher la carte d'hiver\"src=\"../Icones/info.png\" width=\"55px\" alt=\"Voir le menu d'hiver.\"/></div> <h1> ~ Carte d\'été ~ <br /><span style=\"font-size: 15px; font-style: italic;color: black;\">~ du 20/03 au 21/09 ~</span> </h1><h2> Entrées : </h2> <p id=\"entree\"></p> <h2> Plats : </h2> <p id=\"plats\"></p> <h2> Desserts : </h2> <p id=\"dessert\"></p> </div>";
  document.getElementById("entree").innerHTML = "<ul><li>Duo d'asperges et vinaigrette aux agrumes - 18€</li><li>Raviole de homard aux fines herbes, bouillon aux senteurs de safran - 32€</li><li>Escargots de Bourgone - 28€</li><li>Saint-Jacques crues aux brocolis - 25€</li><li>Oeuf de poule et courgettes au thé fumé - 20€</li></ul>";
  document.getElementById("plats").innerHTML = "<ul><li><a href=\"#PlatsSignatures\">Filet de rouget-barbet à la sauce champagne **</a> - 58€</li><li><a href=\"#PlatsSignatures\">Noix de Saint-Jacques déglacées au Jurançon sur son lit de mache **</a> - 50€</li><li><a href=\"#PlatsSignatures\">Entrecôte picarde à base de Maroilles **</a> - 45€</li><li>Papillotes de saumon au sirop d'érables et ses aubergines grillées - 45€</li><li>Rôti de saumon, chèvre frais et citron confis et sa farandole de salade - 45€</li><li>Carré d'agneau de lait des Pyrénnées rôti aux herbes, jus aux aromates et gratin dauphinois - 60€</li><li>Filet de canette, sauce aux épices et poellée de légumes - 50€</li></ul>";
  document.getElementById("dessert").innerHTML = "<ul><li>Tarte aux fraises déstructurée - 20€</li><li>Cheesecake à la patate douce violette - 23€</li><li>Chocolat Mekonga, cumin et citron confit - 25€</li><li>Tarte fine aux agrumes crème épaisse - 18€</li><li>Profiteroles au café et noix de pécan, sauce au chocolat chaud - 20€</li></ul>";
}

function QuelleSaison() {
  var currentDate = new Date();
  let month = currentDate.getMonth();
  let day = currentDate.getDate();
  if (month>=2 && month<=8) {
    if (day<20 && month==2) {
      return 1; //Hiver
    } else {
      if (day>21 && month==8) {
        return 1; //Hiver
      }
      else {
        return 0;
      }
    }
  }
  else {
    return 1;
  }
/*
  if (month<=8 && month>=2) {
    return 0; //Ete
  } else {
    return 1; //Hiver
  }*/
}

function SwitchMenu() {
  if (saison==0) {
    saison = 1;
    MenuHiver();
  }
  else {
    saison = 0;
    MenuEte();
  }
}
