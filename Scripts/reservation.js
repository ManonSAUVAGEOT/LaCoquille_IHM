

window.addEventListener("load", init);

function init() {
  document.getElementById('choixHeureM').style.display='none';
  document.getElementById('choixHeureS').style.display='none';
}

function AfficheSelectM() {
  console.log("Affiche le déroulant midi");
  document.getElementById('choixHeureM').style.display='block';
  document.getElementById('choixHeureS').style.display='none';
}
function AfficheSelectS() {
  console.log("Affiche le déroulant soir");
  document.getElementById('choixHeureS').style.display='block';
  document.getElementById('choixHeureM').style.display='none';

}

function test() {


}
