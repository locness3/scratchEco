var temp=document.createElement("script");temp.src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js";document.getElementsByTagName("head")[0].appendChild(temp);
function connect(){firebase.initializeApp({apiKey:"AIzaSyAy2o-FZGQDiy8orFTCTmJ7b3coUeQaoCc",authDomain:"scratcheco-105a5.firebaseapp.com",databaseURL:"https://scratcheco-105a5.firebaseio.com",projectId:"scratcheco-105a5",storageBucket:"scratcheco-105a5.appspot.com",messagingSenderId:"17817429622"});firebase.database().ref().on("value",function(a){return get=a.val()})}document.head.appendChild(temp);
window.onload=function(){var a=document.createElement("script");a.innerHTML="\n//\u0438\u0441\u043a\u0430\u0442\u044c \u0442\u0435\u0433 [img] [/img] \u0438 \u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c \u0438\u0437 \u043d\u0435\u0433\u043e url \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443\nfunction getUrlImgFromMessege(messege){\nvar m = messege;\nvar i=0;\nvar text = [];\nwhile(m.indexOf('[img]')!=-1){\nvar s=m.indexOf('[img]')+5;\nvar e=m.indexOf('[/img]');\ntext[i] = m.substring(s,e).replace('[img]','');\nvar m=m.replace('[img]','').replace('[/img]','').replace(text,'');\ni++;\n}return text;}\n\nfunction getOffset(el) {\n  const rect = el.getBoundingClientRect();\n  return {\n    left: rect.left + window.scrollX,\n    top: rect.top + window.scrollY\n  };\n}\n\nfunction isElementToProfile(el){\nreturn el.href.split(\"/\").slice(3)[1] == el.innerText;\n}\n\nfunction infoFrameCreate(){\nvar ifr = document.createElement('iframe');\nifr.height = '250px';\nifr.width = '140px';\nifr.id = 'infoFrame';\nifr.style.border = \"none\";\nifr.style = \"position:absolute; z-index: 5000;\"\ndocument.body.appendChild(ifr);\n}\n\nfunction setCordInfoFrame(elem){\ndocument.getElementById(\"infoFrame\").style.left = getOffset(elem).left + 'px';\ndocument.getElementById(\"infoFrame\").style.top = getOffset(elem).top + 'px';\n}\n\nfunction changePlayer(){\n\nif('null' == localStorage.getItem('playerScratch')){\nlocalStorage.setItem('playerScratch', '0');\n}\nplayer = localStorage.getItem('playerScratch');\nif(player != 0){\n    //Create element html\n    var html = '<iframe height=400 width=480 frameborder=\"0\" style=\"position:absolute;top:50%;left:50%;margin:-200px 0 0 -250px;\" '\n        if(player==1){\n            html = html + 'src=https://phosphorus.github.io/embed.html?id=' + idproject + '&turbo=false&full-screen=false></iframe>';\n        }\n        if(player==2){\n            html = html + 'src=https://sulfurous.aau.at/html/app.html?id=' + idproject + '&turbo=false&full-screen=false></iframe>';\n        }\n\n    //Delete the flash player\n    var i = document.getElementsByTagName('object')[0];\n    if(i!=undefined){\n    i.parentNode.removeChild(i);\n    }\n    //Add the phosphorus\n    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {\n        var eleme = 'scratch';\n}else{\n    var eleme = 'scratch-loader';\n}\n    document.getElementById(eleme).innerHTML = html;\n    document.getElementById(eleme).style = '';\n}}\n\nfunction addChangerPlayer(){\nvar html = '<select id=\"selectorPlayer\" style=\"width:100px;\"><option value=\"0\">Original</option><option value=\"1\">Phosphorus</option><option value=\"2\">Surforus</option></select>';\nvar para = document.createElement('div')\npara.innerHTML = html;\nidproject = document.location.href.split(\"/\").slice(3)[1];\ndocument.getElementById('stats').appendChild(para);\nvar val = localStorage.getItem('playerScratch');\ndocument.querySelector('#selectorPlayer [value=\"' + val + '\"]').selected = true;\nchangePlayer();\ndocument.getElementById('selectorPlayer').onchange = function () {\nvar player = document.getElementById('selectorPlayer').selectedIndex;\nlocalStorage.setItem('playerScratch', player);\nif(player!=0){\n    changePlayer();\n}\n}}\n\nfunction getNicknameElementA(elm){\nreturn elm.innerText;\n\nfunction injectAElements(){\nvar elm = document.getElementsByTagName('a');\nvar i = 0;\nwhile(elm.length!=i){\nif(isElementToProfile(elm[i])){\nelm[i].onmouseover = function(){\nvar ifr = document.getElementById(\"infoFrame\");\nifr.src = 'https://simakyr.github.io/scratch-profile-embed/#' + getNicknameElementA(elm[i]);\nsetCordInfoFrame(elm[i]);\nifr.style.display = 'block';\nifr.style.visibility = 'visible';\n}\nelm[i].onmouseout = function(){\nvar ifr = document.getElementById(\"infoFrame\");\nifr.style.display = 'none';\nifr.style.visibility = 'hidden';\n}\n\n}\ni++;\n}}\n\n//\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u0442 \u0432\u0441\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0438\u0445 \u0432 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0435\nfunction makeReadable(){\nvar m = getMesseges();\nvar i=0;\nvar me;\nwhile(i!=m.length){\nme=m[i].substring(m[i].indexOf('\u2601')+1,m[i].replace('\u2601','').indexOf('\u2601')+1);\nif(parseInt(me)==me){\nfirebase.database().ref().on('value', snap => get = snap.val());\nm[i] = get['m'+me];\n}\ni++;\n}\nsetMesseges(m);\n}\n\nfunction addBtnAbout(){\nvar html = '<img onclick=\"openStats()\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAFiQAABYkBbWid+gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGjSURBVEiJ3dW/S5VRGAfwj17vVKQ0hcO17tAvClIbm3SKBgf/gDBwkCZrKReJIgLdnMNosKChKYQgaMnAoZZIyqVAGposbmWh3oZzLvfel/ftvtp18QuHc97z/Pie9z3f53nZYxRa2Iso42j0/d4u4uN4iHVUG8Yn3Eb3/yQfx28s4wpO4ggGcBNfsIbzu0k+hi1cR0eGz0E8wTec3knyEn7hRg7fAp7jDTrzEszhneaLL+IZXuFwwr+MPxjJS7CGa4m9HlSwiVMpMYt4kCd5t6CSCym2Ek5kxN0SxJCJrjgfiPOPhP199PmJcynxFeHSM1G7oK/CZygl7GcFpRzKiC8Jsm1JsIklXErYt6ItK/YiXv6LoBGXBZkea9ibxIxQ0TPoS/hvCG0kFwp4LWi7J+4NY7Rh1KTaL/SlO3mT19CLVXzAUIq9CxPx5BsY3CmBeMrH2MYK7mMWjwQxVOJ6Oz6n1UcunME0nuIFFnBVaHziuioUaHm3JK0wFUk+axZAW3E3knxUf7u2Yy6SvFVXYFvRgflIcm8vCAh1NCH8bvcR/gLcbFO0Hvor8QAAAABJRU5ErkJggg==\">';\ndocument.getElementsByClassName('header-text')[0].getElementsByTagName('h2')[0].innerHTML = a=document.getElementsByClassName('header-text')[0].getElementsByTagName('h2')[0].innerHTML+ html;\n}\n\nfunction makeReadableM(){\nvar m = getMessegesM();\nvar i=0;\nvar me;\nwhile(i!=m.length){\nme=m[i].substring(m[i].indexOf('\u2601')+1,m[i].replace('\u2601','').indexOf('\u2601')+1);\nif(parseInt(me)==me){\nfirebase.database().ref().on('value', snap => get = snap.val());\nm[i] = get['m'+me];\n}\ni++;\n}\nsetMessegesM(m);\n}\n\nfunction sendMessege(m){\ndocument.getElementsByClassName(\"control-group tooltip right\")[0].getElementsByTagName('textarea')[0].value=m;\ndocument.getElementsByClassName(\"control-group\")[1].getElementsByClassName(\"button small\")[0].click();\n}\n\nfunction antiB(i){\nif(i==0){\n//\u0430\u043d\u0442\u0438 \u0431\u0430\u0433 \u0434\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 /messeges/\ndocument.getElementsByClassName(\"button messages-social-loadmore\")[0].setAttribute(\"onclick\",\"makeReadableM();\");\n}\n\nif(i==1){\n//\u0430\u043d\u0442\u0438\u0431\u0430\u0433 \u0434\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\nvar a=document.getElementsByClassName(\"comments\")[0].getElementsByTagName('div');\na[a.length-1].setAttribute(\"onclick\",\"makeReadable();\");\n}}\n\n//\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\n\nfunction getText(){\nreturn document.getElementById('comments').getElementsByTagName('textarea')[0].value\n}\n\n//\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443\nfunction createBtn(){\nif(document.getElementById('btnSend')==null){\nvar para = document.createElement(\"div\");\npara.className = \"button small\";\npara.id = \"btnSend\";\npara.innerHTML = '<a onclick=\"sendCustom()\";>Send with ScratchEco</a>'\ndocument.getElementsByClassName(\"control-group\")[1].appendChild(para);\n}}\n\n//\u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043d\u0438\u043a\u043d\u0435\u0439\u043c \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f\nfunction getNickprofile(){\nreturn document.getElementsByClassName('header-text')[0].getElementsByTagName('h2')[0].innerText\n}\n\n//\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435\nfunction openStats(){\nwindow.open('https://scratchstats.com/#' + getNickprofile());\n}\n\n//\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f(\u0442\u0435\u043a\u0441\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 array)\nfunction getMesseges(){\nvar i=0;\nvar text = [];\nwhile(i!=document.getElementsByClassName(\"comments\")[0].getElementsByTagName('li').length){\ntext[i]=document.getElementsByClassName(\"comments\")[0].getElementsByTagName('li')[i].getElementsByClassName(\"content\")[0].innerHTML;\ni++;\n}return text;}\n//\u0437\u0430\u0434\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442(\u0442\u0435\u043a\u0441\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 array)\nfunction setMesseges(text){\nvar i=0;\nwhile(i!=document.getElementsByClassName(\"comments\")[0].getElementsByTagName('li').length){\ndocument.getElementsByClassName(\"comments\")[0].getElementsByTagName('li')[i].getElementsByClassName(\"content\")[0].innerHTML=text[i];\ni++;\n}}\n//\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u0442 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u043a \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044e \u0433\u0434\u0435 \u043d\u0430\u0434\u043e + \u0443\u0431\u0438\u0440\u0430\u0435\u0442 \u043c\u0443\u0441\u043e\u0440(\u0442\u0435\u0433\u0438)\nfunction tagsScan(){\nvar i=0;\nvar m=getMesseges();\nvar temp;\nvar para;\nwhile(i!=m.length){\nimg = getUrlImgFromMessege(m[i]);\nif(img.length!=0){\ntemp=0;\nwhile(temp!=img.length){\npara = document.createElement(\"img\");\npara.height = '128';\npara.src = img[temp];\nm[i] = m[i].replace('[img]'+img[temp]+'[/img]', '');\nm[i] = m[i]+para.outerHTML;\ntemp++;\n}\n}i++;}setMesseges(m);return m;}\n\n//\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 /messeges/\nfunction getMessegesM(){\nvar i=0;\nvar text = [];\nwhile(i!=document.getElementsByClassName(\"emoji-text mod-comment\").length){\ntext[i]=document.getElementsByClassName(\"emoji-text mod-comment\")[i].innerHTML;\ni++;\n}return text;}\n\n//\u0437\u0430\u0434\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 /messeges/\nfunction setMessegesM(text){\nvar i=0;\nwhile(i!=document.getElementsByClassName(\"emoji-text mod-comment\").length){\ndocument.getElementsByClassName(\"emoji-text mod-comment\")[i].innerHTML=text[i];\ni++;\n}}\n\n//\u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043d\u0438\u043a\u043d\u0435\u0439\u043c \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430\nfunction getCredit(){return document.getElementById('owner').innerHTML;}\n\n//\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043d\u043e\u043f\u043a\u0443 \u0434\u043b\u044f \u0433\u0438\u0444 Trumbnail\nfunction addBtnGif(){\nvar para = document.createElement(\"div\");\npara.className = 'button';\npara.id = 'gifAdd';\npara.setAttribute(onclick,\"alert('ok')\");\npara.height = \"50\";\npara.setAttribute('onclick','gifSet();')\npara.innerHTML = \"<span>GIF Trumbnail</span>\";\ndocument.getElementsByClassName('buttons')[0].appendChild(para);\n}\n\n//\u0433\u0438\u0444 \u043a\u043e\u0434 \u043e\u0442 World_Languages\nfunction gifSet(){\nx=document.createElement(\"script\");x.src=\"//is.gd/thumb2\"; document.getElementsByTagName(\"head\")[0].appendChild(x);\n}\n\n//\u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043d\u0438\u043a\u043d\u0435\u0439\u043c \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0430\u043a\u043a\u0443\u0430\u043d\u0442\u0430\nfunction getNickname(){\nif(document.getElementById('navigation')==null){return document.getElementsByTagName('span')[2].innerText;}\nelse{return document.getElementsByTagName('span')[8].innerText;}}\n\n//\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043d\u043e\u043f\u043a\u0443 \u0435\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e\nfunction addGif(){\n    if(document.getElementById('gifAdd')==null){\nif(getCredit()==getNickname()){addBtnGif();}}\n}\n\n//\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043d\u043e\u043f\u043a\u0443 \u043e\u0431 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0445\nfunction addBtnhelp(){\n    if(document.getElementsByClassName('btnaboutm')[0]==undefined){\nvar a = `<div class='btnaboutm'><img src='https://simakyr.github.io/scratchEco/icons/about.png' height='16px'><div><h5>Help</h5><p>You can use for inject image [img]url to image[/img]</p></div></div>\n<style>.btnaboutm{\nheight:16px;\nwidth:16px;\n}\n.btnaboutm div {\ndisplay:none;\nposition: absolute;\nheight:60px;\nwidth:250px;\nbackground-color:grey;\nbox-shadow: 0 0 10px rgba(0,0,0,0.5);\npadding:10px;\nz-index: 1;\ncolor:white;\ntext-shadow: none;\nborder-radius: 10px;\n    }\n.btnaboutm:hover div {\n    display: inline;\n}\n</style>`;\ndocument.getElementsByClassName('control-group')[1].innerHTML = document.getElementsByClassName('control-group')[1].innerHTML + a;\n    }\n}\n//\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438\nfunction sendCustom(){\nfunction set(key,value){firebase.database().ref().child(key).set(value);}\nset('mL',get['mL']+1);\nset('m'+ get['mL'],getText());\nsendMessege('\u2601'+ get['mL'] +'\u2601');\n}\nrunM();\nfunction runM(){\nurl = document.location.href.split(\"/\").slice(3);\nif(url.includes('users') || url.includes('projects') || url.includes('comments')){\n//antiB(1);\n}\nelse{\n//antiB(0);\nmakeReadableM();\n}\nif(url[0]=='projects'){\naddChangerPlayer();\n}\nif(url.includes('users')){addBtnAbout();}\n\n}\ncarrot=0;\nsetInterval(fixes,1000);\nfunction fixes(){\n    if(url.includes('users') || url.includes('projects') || url.includes('comments')){\nmakeReadable();\ntagsScan();\ncreateBtn();\naddBtnhelp();\ncarrot=getMesseges().lenght;\nif(url.includes('projects')){\naddGif();\nif(url[0]=='projects'){\nif(document.getElementById('selectorPlayer')==null){addChangerPlayer();}\n}\n}\n    }\n    else{\n    makeReadableM()\n    carrot=getMessegesM().lenght;\n    }\n}\n";document.head.appendChild(a)};  
