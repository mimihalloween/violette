const conversations={serena:[["day", "JEUDI 10 OCTOBRE", null], ["them", "Vi, tu peux me rejoindre ce soir ?", "20:13"], ["me", "Oui, où ça ?", "20:15"], ["them", "Chez moi ? Ou même juste dehors, comme tu veux.", "20:16"], ["me", "Tu m'inquiètes 😭", "20:16"], ["them", "J'ai un truc important à te dire.", "20:17"], ["me", "Maintenant tu vas évidemment pas me laisser tranquille jusqu'à ce que tu me dises.", "20:18"], ["them", "Non 😂 mais viens. J'ai besoin de te le dire en face.", "20:19"], ["day", "VENDREDI 11 OCTOBRE", null], ["me", "Bon. J'ai attendu toute la journée. Tu me racontes ?", "18:42"], ["them", "Pas encore. Je préfère te le dire en face.", "18:50"], ["me", "Tu sais que tu peux tout me dire hein.", "18:51"], ["them", "Je sais ❤️", "18:52"], ["them", "J'ai juste peur de te le dire et que tout change.", "18:53"], ["me", "Ça concerne qui ?", "18:54"], ["them", "Je te raconterai.", "18:55"], ["day", "DIMANCHE 13 OCTOBRE", null], ["them", "Tu fais quoi cette semaine ?", "11:07"], ["me", "Lundi danse, mardi rien, mercredi je bosse. Pourquoi ?", "11:12"], ["them", "Parce que j'aimerais vraiment qu'on se voie.", "11:14"], ["me", "Tu me stresses de plus en plus 😂", "11:15"], ["them", "Je sais. Mais j'arrive pas à le dire correctement.", "11:17"], ["me", "Commence juste par le début.", "11:18"], ["them", "D'accord.", "11:20"], ["them", "Je ne t'ai pas tout dit la première fois.", "11:21"], ["me", "A propos de quoi ?", "11:21"], ["them", "D'une personne avec qui j'ai eu quelque chose.", "11:22"], ["me", "Quelque chose comment ?", "11:23"], ["them", "Une relation. Cachée.", "11:24"], ["me", "Tu ne m'en as jamais parlé.", "11:24"], ["them", "Je voulais que ça reste entre nous.", "11:25"], ["me", "Pourquoi ?", "11:26"], ["them", "Parce que je ne voulais pas que tu le regardes différemment si tu apprenais qui c'était.", "11:27"], ["me", "Tu avais peur que je le connaisse ?", "11:28"], ["them", "Oui.", "11:28"], ["me", "Et tu me le dis maintenant ?", "11:29"], ["them", "Parce que je suis enceinte.", "11:30"], ["me", "Serena…", "11:30"], ["them", "Et le père, je le connais.", "11:31"], ["me", "Alors pourquoi tu me caches son nom ?", "11:32"], ["them", "Parce que je ne veux pas que ça sorte de cette conversation.", "11:33"], ["me", "Tu sais donc que c'est lui ?", "11:34"], ["them", "Oui.", "11:34"], ["me", "Et c'est lui avec qui tu avais cette relation cachée ?", "11:35"], ["them", "Oui.", "11:35"], ["me", "C'est qui ?", "11:36"], ["them", "Je ne peux pas te le dire.", "11:37"], ["me", "Tu peux me faire confiance.", "11:37"], ["them", "Je sais. Mais ce n'est pas seulement mon secret.", "11:38"], ["me", "Je le connais ?", "11:39"], ["them", "Oui.", "11:39"], ["me", "Serena, s'il te plaît.", "11:40"], ["them", "Je ne veux pas que tu le regardes différemment.", "11:41"], ["me", "Donne-moi au moins un indice.", "11:41"], ["them", "Je l'ai déjà dit à demi-mot.", "11:42"], ["me", "Il sera là à Halloween ?", "11:43"], ["them", "Je n'ai jamais dit le contraire.", "11:43"], ["me", "Donc oui.", "11:44"], ["them", "Je dois vraiment arrêter d'en parler.", "11:44"], ["me", "Tu vas me rendre folle.", "11:45"], ["them", "Désolée ❤️", "11:45"]],logan:[]};
const chat=document.getElementById("chat");
function esc(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function renderMessages(arr){
 chat.innerHTML="";
 for(const m of arr){
  if(m[0]==="day"){const d=document.createElement("div");d.className="day";d.textContent=m[1];chat.appendChild(d);continue;}
  const row=document.createElement("div");row.className="row "+m[0];
  row.innerHTML='<div><div class="bubble">'+esc(m[1])+'</div><div class="meta">'+m[2]+'</div></div>';
  chat.appendChild(row);
 }
}
function openChat(name){
 document.getElementById("inboxView").classList.remove("active");
 document.getElementById("chatView").classList.add("active");
 const serena=name==="serena";
 document.getElementById("chatName").textContent=serena?"Serena":"Logan";
 const avatar=document.getElementById("chatAvatar");
 avatar.textContent=serena?"S":"L";
 avatar.className="avatar "+(serena?"serena":"logan");
 document.getElementById("chatStatus").textContent=serena?"Actif(ve) il y a 1 h":"Actif(ve) hier";
 renderMessages(conversations[name]);
 setTimeout(()=>window.scrollTo(0,document.body.scrollHeight),20);
}
function closeChat(){document.getElementById("chatView").classList.remove("active");document.getElementById("inboxView").classList.add("active");}
window.openChat=openChat;window.closeChat=closeChat;
