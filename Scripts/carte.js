window.addEventListener("load", init);

function init() {
  carteIMG();
}

function carteIMG() {
  document.getElementById("carte").innerHTML = "<img class=\"plan\" width=\"100%\" src=\"../Images/Planfinal.png\" alt=\"Plan\"> <a href=\"#carte\" onclick=\"carteInter()\">Voir la carte interactive >></a>";

}

function carteInter() {
  document.getElementById("carte").innerHTML = "<iframe class=\"plan\" alt=\"carte\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46352.78816192502!2d-1.6103724537648656!3d43.43868715693033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd511485dbe2ddab%3A0x397f12070d065e06!2s64210%20Bidart!5e0!3m2!1sfr!2sfr!4v1603464343650!5m2!1sfr!2sfr\" frameborder=\"2\" style=\"border:0;\" allowfullscreen=\"true\" aria-hidden=\"false\" tabindex=\"0\"></iframe><a href=\"#carte\" onclick=\"carteIMG()\">Voir le plan >> </a>";

}
