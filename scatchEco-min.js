var temp=document.createElement("script");temp.src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js";document.getElementsByTagName("head")[0].appendChild(temp);function connect(){firebase.initializeApp({apiKey:"AIzaSyAy2o-FZGQDiy8orFTCTmJ7b3coUeQaoCc",authDomain:"scratcheco-105a5.firebaseapp.com",databaseURL:"https://scratcheco-105a5.firebaseio.com",projectId:"scratcheco-105a5",storageBucket:"scratcheco-105a5.appspot.com",messagingSenderId:"17817429622"});fireHere()}document.head.appendChild(temp);
var injectAbout="<div class='btnaboutm'><img src='https://simakyr.github.io/scratchEco/icons/about.png' height='16px'><div><h5>Help</h5><p>You can use for inject image [img]url to image[/img]</p></div></div>\n<style>.btnaboutm{\nheight:16px;\nwidth:16px;\n}\n.btnaboutm div {\ndisplay:none;\nposition: absolute;\nheight:60px;\nwidth:250px;\nbackground-color:grey;\nbox-shadow: 0 0 10px rgba(0,0,0,0.5);\npadding:10px;\nz-index: 1;\ncolor:white;\ntext-shadow: none;\nborder-radius: 10px;\n    }\n.btnaboutm:hover div {\n    display: inline;\n}\n</style>";
function fireHere(){firebase.database().ref().on("value",function(b){return get=b.val()})}function getUrlImgFromMessege(b){for(var c=0,d=[];-1!=b.indexOf("[img]");){var e=b.indexOf("[img]")+5,f=b.indexOf("[/img]");d[c]=b.substring(e,f).replace("[img]","");b=b.replace("[img]","").replace("[/img]","").replace(d,"");c++}return d}function getOffset(b){b=b.getBoundingClientRect();return{left:b.left+window.scrollX,top:b.top+window.scrollY}}
function isElementToProfile(b){return b.href.split("/").slice(3)[1]==b.innerText}function infoFrameCreate(){var b=document.createElement("iframe");b.height="250px";b.width="140px";b.id="infoFrame";b.style.border="none";b.style="position:absolute; z-index: 5000;";document.body.appendChild(b)}function setCordInfoFrame(b){document.getElementById("infoFrame").style.left=getOffset(b).left+"px";document.getElementById("infoFrame").style.top=getOffset(b).top+"px"}
function changePlayer(){"null"==localStorage.getItem("playerScratch")&&localStorage.setItem("playerScratch","0");player=localStorage.getItem("playerScratch");if(0!=player){var b='<iframe height=400 width=480 frameborder="0" style="position:absolute;top:50%;left:50%;margin:-200px 0 0 -250px;" ';1==player&&(b=b+"src=https://phosphorus.github.io/embed.html?id="+idproject+"&turbo=false&full-screen=false></iframe>");2==player&&(b=b+"src=https://sulfurous.aau.at/html/app.html?id="+idproject+"&turbo=false&full-screen=false></iframe>");
var c=document.getElementsByTagName("object")[0];void 0!=c&&c.parentNode.removeChild(c);c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"scratch":"scratch-loader";document.getElementById(c).innerHTML=b;document.getElementById(c).style=""}}
function addChangerPlayer(){var b=document.createElement("div");b.innerHTML='<select id="selectorPlayer" style="width:100px;"><option value="0">Original</option><option value="1">Phosphorus</option><option value="2">Surforus</option></select>';idproject=document.location.href.split("/").slice(3)[1];document.getElementById("stats").appendChild(b);b=localStorage.getItem("playerScratch");document.querySelector('#selectorPlayer [value="'+b+'"]').selected=!0;changePlayer();document.getElementById("selectorPlayer").onchange=
function(){var b=document.getElementById("selectorPlayer").selectedIndex;localStorage.setItem("playerScratch",b);0!=b&&changePlayer()}}function getNicknameElementA(b){return b.innerText}
function injectAElements(){for(var b=document.getElementsByTagName("a"),c=0;b.length!=c;)isElementToProfile(b[c])&&(b[c].onmouseover=function(){var d=document.getElementById("infoFrame");d.src="https://simakyr.github.io/scratch-profile-embed/#"+getNicknameElementA(b[c]);setCordInfoFrame(b[c]);d.style.display="block";d.style.visibility="visible"},b[c].onmouseout=function(){var b=document.getElementById("infoFrame");b.style.display="none";b.style.visibility="hidden"}),c++}
function makeReadable(){for(var b=getMesseges(),c=0,d;c!=b.length;)d=b[c].substring(b[c].indexOf("\u2601")+1,b[c].replace("\u2601","").indexOf("\u2601")+1),parseInt(d)==d&&(b[c]=get["m"+d]),c++;setMesseges(b)}
function addBtnAbout(){document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerHTML=a=document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerHTML+'<img onclick="openStats()" src="https://raw.githubusercontent.com/SimaKyr/scratchEco/master/icons/aboutUser.png">'}
function makeReadableM(){for(var b=getMessegesM(),c=0,d;c!=b.length;)d=b[c].substring(b[c].indexOf("\u2601")+1,b[c].replace("\u2601","").indexOf("\u2601")+1),parseInt(d)==d&&(b[c]=get["m"+d]),c++;setMessegesM(b)}function sendMessege(b){document.getElementsByClassName("control-group tooltip right")[0].getElementsByTagName("textarea")[0].value=b;document.getElementsByClassName("control-group")[1].getElementsByClassName("button small")[0].click()}
function antiB(b){0==b&&document.getElementsByClassName("button messages-social-loadmore")[0].setAttribute("onclick","makeReadableM();");1==b&&(b=document.getElementsByClassName("comments")[0].getElementsByTagName("div"),b[b.length-1].setAttribute("onclick","makeReadable();"))}function getText(){return document.getElementById("comments").getElementsByTagName("textarea")[0].value}
function createBtn(){if(null==document.getElementById("btnSend")){var b=document.createElement("div");b.className="button small";b.id="btnSend";b.innerHTML='<a onclick="sendCustom()";>Send with ScratchEco</a>';document.getElementsByClassName("control-group")[1].appendChild(b)}}function getNickprofile(){return document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerText}function openStats(){window.open("https://scratchstats.com/#"+getNickprofile())}
function getMesseges(){for(var b=0,c=[];b!=document.getElementsByClassName("comments")[0].getElementsByTagName("li").length;)c[b]=document.getElementsByClassName("comments")[0].getElementsByTagName("li")[b].getElementsByClassName("content")[0].innerHTML,b++;return c}
function setMesseges(b){for(var c=0;c!=document.getElementsByClassName("comments")[0].getElementsByTagName("li").length;)document.getElementsByClassName("comments")[0].getElementsByTagName("li")[c].getElementsByClassName("content")[0].innerHTML=b[c],c++}
function tagsScan(){for(var b=0,c=getMesseges(),d,e;b!=c.length;){img=getUrlImgFromMessege(c[b]);if(0!=img.length)for(d=0;d!=img.length;)e=document.createElement("img"),e.height="128",e.src=img[d],c[b]=c[b].replace("[img]"+img[d]+"[/img]",""),c[b]+=e.outerHTML,d++;b++}setMesseges(c);return c}function getMessegesM(){for(var b=0,c=[];b!=document.getElementsByClassName("emoji-text mod-comment").length;)c[b]=document.getElementsByClassName("emoji-text mod-comment")[b].innerHTML,b++;return c}
function setMessegesM(b){for(var c=0;c!=document.getElementsByClassName("emoji-text mod-comment").length;)document.getElementsByClassName("emoji-text mod-comment")[c].innerHTML=b[c],c++}function getCredit(){return document.getElementById("owner").innerHTML}
function addBtnGif(){var b=document.createElement("div");b.className="button";b.id="gifAdd";b.setAttribute(onclick,"alert('ok')");b.height="50";b.setAttribute("onclick","gifSet();");b.innerHTML="<span>GIF Trumbnail</span>";document.getElementsByClassName("buttons")[0].appendChild(b)}function gifSet(){x=document.createElement("script");x.src="//is.gd/thumb2";document.getElementsByTagName("head")[0].appendChild(x)}
function getNickname(){return null==document.getElementById("navigation")?document.getElementsByTagName("span")[2].innerText:document.getElementsByTagName("span")[8].innerText}function addGif(){null==document.getElementById("gifAdd")&&getCredit()==getNickname()&&addBtnGif()}
function addBtnhelp(){if(void 0==document.getElementsByClassName("btnaboutm")[0]){var b=injectAbout;document.getElementsByClassName("control-group")[1].innerHTML=document.getElementsByClassName("control-group")[1].innerHTML+b}}function sendCustom(){var b=get.mL+1;firebase.database().ref().child("mL").set(b);b="m"+get.mL;var c=getText();firebase.database().ref().child(b).set(c);sendMessege("\u2601"+get.mL+"\u2601")}
function runM(){url=document.location.href.split("/").slice(3);url.includes("users")||url.includes("projects")||url.includes("comments")||makeReadableM();"projects"==url[0]&&addChangerPlayer();url.includes("users")&&addBtnAbout()}
function fixes(){"undefined"!=typeof get&&"undefined"!=typeof set||fireHere();url.includes("users")||url.includes("projects")||url.includes("comments")?(makeReadable(),tagsScan(),createBtn(),addBtnhelp(),carrot=getMesseges().lenght,url.includes("projects")&&(addGif(),"projects"==url[0]&&null==document.getElementById("selectorPlayer")&&addChangerPlayer())):(makeReadableM(),carrot=getMessegesM().lenght)}window.onload=function(){carrot=0;runM();setInterval(fixes,1E3)};
