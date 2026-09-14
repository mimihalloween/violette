const conversations={serena:[["day", "JEUDI 10 OCTOBRE", null], ["them", "Vi, tu peux me rejoindre ce soir ?", "20:13"], ["me", "Oui, où ça ?", "20:15"], ["them", "Chez moi ? Ou même juste dehors, comme tu veux.", "20:16"], ["me", "Tu m'inquiètes 😭", "20:16"], ["them", "J'ai un truc important à te dire.", "20:17"], ["me", "Maintenant tu vas évidemment pas me laisser tranquille jusqu'à ce que tu me dises.", "20:18"], ["them", "Non 😂 mais viens. J'ai besoin de te le dire en face.", "20:19"], ["day", "VENDREDI 11 OCTOBRE", null], ["me", "Bon. J'ai attendu toute la journée. Tu me racontes ?", "18:42"], ["them", "Pas encore. Je préfère te le dire en face.", "18:50"], ["me", "Tu sais que tu peux tout me dire hein.", "18:51"], ["them", "Je sais ❤️", "18:52"], ["them", "Et j'ai peur de tout gâcher si je te le dis mal.", "18:53"], ["me", "Alors dis-le simplement.", "18:54"], ["them", "Je vais essayer.", "18:55"], ["day", "DIMANCHE 13 OCTOBRE", null], ["them", "Tu fais quoi cette semaine ?", "11:07"], ["me", "Lundi danse, mardi rien, mercredi je bosse. Pourquoi ?", "11:12"], ["them", "Parce que j'aimerais vraiment qu'on se voie.", "11:14"], ["me", "Tu me stresses de plus en plus 😂", "11:15"], ["them", "Je sais. Mais j'arrive pas à le dire correctement.", "11:17"], ["me", "Commence juste par le début.", "11:18"], ["them", "D'accord.", "11:20"], ["them", "Je ne t'ai pas tout dit la première fois.", "11:21"], ["me", "A propos de quoi ?", "11:21"], ["them", "De ce qu'il s'est passé ces derniers mois.", "11:22"], ["me", "Tu commences à me faire peur là.", "11:23"], ["them", "Je savais que si je t'en parlais, tu me poserais cent questions.", "11:24"], ["me", "Bah oui. Je suis ta meilleure amie, c'est un peu mon travail 😂", "11:24"], ["them", "Et c'est justement pour ça que je ne voulais pas te le dire.", "11:25"], ["me", "Tu avais peur que je te juge ?", "11:26"], ["them", "Un peu.", "11:26"], ["them", "Et surtout, je ne voulais pas que tu le regardes différemment si tu apprenais qui c'était.", "11:27"], ["me", "Qui ça ?", "11:27"], ["them", "L'homme avec qui j'ai été pendant un moment.", "11:28"], ["me", "Attends. Tu avais vraiment une relation avec quelqu'un ?", "11:29"], ["them", "Oui.", "11:29"], ["me", "Et tu ne m'en as jamais parlé ?", "11:30"], ["them", "Je voulais que ça reste entre nous.", "11:31"], ["me", "Entre toi et lui ?", "11:31"], ["them", "Oui.", "11:32"], ["me", "Et c'était sérieux ?", "11:32"], ["them", "Assez pour que je ne sache plus quoi faire maintenant.", "11:33"], ["me", "Pourquoi maintenant ?", "11:34"], ["them", "Parce que je suis enceinte.", "11:35"], ["me", "Serena…", "11:35"], ["them", "Et je ne sais pas qui est le père.", "11:36"], ["me", "Tu veux dire que tu ne sais pas lequel d'eux ?", "11:36"], ["them", "Je ne sais pas.", "11:37"], ["me", "Alors tu sais au moins qui sont les possibilités.", "11:37"], ["them", "Oui.", "11:38"], ["me", "C'est qui ?", "11:38"], ["them", "Je ne peux pas te le dire.", "11:39"], ["me", "Pourquoi ? Tu peux me faire confiance.", "11:39"], ["them", "Je sais. Mais ce n'est pas seulement mon secret.", "11:40"], ["me", "Tu le connais, moi ?", "11:41"], ["them", "Peut-être.", "11:41"], ["me", "Serena, donne-moi au moins un indice.", "11:42"], ["them", "Je t'en ai déjà trop dit.", "11:42"], ["me", "Pourquoi tu refuses de me dire son nom ?", "11:43"], ["them", "Parce que je ne veux pas que tu le regardes différemment. Et je ne veux pas que ça sorte.", "11:44"], ["me", "Il sera là à Halloween ?", "11:45"], ["them", "Je n'ai jamais dit le contraire.", "11:45"], ["me", "Donc oui.", "11:46"], ["them", "Je dois vraiment arrêter d'en parler.", "11:46"], ["me", "Tu vas me rendre folle.", "11:47"], ["them", "Désolée ❤️", "11:47"]],logan:[]};
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
