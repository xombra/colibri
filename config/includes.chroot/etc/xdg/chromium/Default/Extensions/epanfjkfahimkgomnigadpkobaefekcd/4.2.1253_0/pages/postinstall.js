!function(){function e(){i.className="mmFadeOut",s&&(s.style.display="none"),r&&(r.style.display="none"),a.className="";var e=[i,s,r,a];setTimeout(function(){for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}},2e3)}var t=window.location.href;if(window.top==window&&t.match(/dntmeFullTour=|dntmeTour=/)){var n="mmPostInstallFlow",i=document.createElement("iframe");i.style.opacity="0";var a=document.createElement("div");a.className="dntmDimPostInstall";var r=null,s=null,o={id:n,scrolling:"no",allowTransparency:"true",frameborder:"0"},l=document.documentElement.clientHeight,c=document.documentElement.clientWidth;if(-1!=t.indexOf("dntmeFullTour")){var d=t.indexOf("dntmeFullTour")+14,u=t.length-d;-1!=t.indexOf("&",d)&&(u=t.indexOf("&",d)-d),o.src=t.substr(d,u)+"?domain="+window.location.host+"&w="+c+"&h="+l,o.top=-l+"px",o.height=l+"px",o.id=n+"Full"}else o.src=t.substr(t.indexOf("dntmeTour")+10)+"?domain="+window.location.host,r=document.createElement("div"),r.id="mmPostInstallArrow",r.style.display="none",s=document.createElement("div"),s.innerHTML="CLOSE &nbsp;x",s.id="mmPostInstallClose",s.style.opacity="0",s.onclick=e;for(var h in o)i.setAttribute(h,o[h]);i.style.width=c+"px",r&&document.documentElement.insertBefore(r,document.documentElement.firstChild),document.documentElement.insertBefore(a,document.documentElement.firstChild),document.documentElement.insertBefore(i,a),s&&(s.style.left=c-80+"px",document.documentElement.insertBefore(s,i)),setTimeout(function(){i.className="mmFadeIn",r&&setTimeout(function(){r.style.display=""},1e3),s&&setTimeout(function(){s.className="show"},3e3)},1e3),window.addEventListener("message",function(t){0==o.src.indexOf(t.origin)&&"close"==t.data&&e()},!1)}}();