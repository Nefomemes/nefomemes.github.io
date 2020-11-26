This is the source code for [nefomemes.instatus.com](https://nefomemes.instatus.com). 

## Custom CSS

```css
#top-wave {

background-image: url("https://nefomemes.github.io/index.svg");

background-repeat: no-repeat;

background-size: contain;

width: 100vw ;

margin-left: -12.7vw;

background-color: white;

height: 25vw;

}

#bottom-wave {

background-image: url("https://nefomemes.github.io/index-bottom.svg");

background-repeat: no-repeat;	background-size: contain;

width: 100vw;

background-color: white;

height: 25vw;

}

#footer {

margin-top: -20px;

height: 25vh;	

background-color: #0D4FF8;

position: relative; 

}

#navi-links {

display: flex;	

position: absolute;	

width: calc(100vw - 80px);

margin-left: 40px;

justify-content: space-between; 

}

#footer-links{	

display: flex;	

position: absolute;

margin-top: 0px;

height: 50px;

width: 150px;

justify-content: space-between;

align-items: center;

bottom: 40px;

left: 40px;

}

.icons {	

width: 40px;

height: 40px;

}

#discord-icon {

width: 50px;

height: 50px;

}

.link-title {

font-size: 20px;	

font-weight: bold;		

color: white;

}

.link-bar li a{

color: white;

}

.link-bar {

list-style: none;

}

a[href="https://instatus.com"]{

display: none;

}
```

## Below header

```html
<div id="top-wave"></div>
```

## Below footer

```html 
<div id="bottom-wave"></div>

 <footer id="footer">

 

  <nav id="navi-links">	  <ul class="link-bar">

  <li class="link-title">This site</li>

  <li><a href="/incidents/">All incidents</a></li>
   <li><a href="https://nefomemes.github.io/status-source/">Source code</a></li>
  <li><a href="https://instatus.com/">Powered by Instatus</a></li>  </ul>

  <ul class="link-bar"> 

  <li class="link-title">Other stuff</li>

  <li><a href="https://nefomemes.blogspot.com/">Blog</a></li>

  <li><a href="https://nefomemes.github.io/">Website</a></li>

  </ul>	

  <ul class="link-bar">		

  <li class="link-title">My stuff</li>		

  <li><a href="https://github.com/Nefomemes/Kylebot">Kylebot</a></li>

  </ul>

  </nav> 	

  

  <nav id="footer-links"> 	
<a href="https://github.com/Nefomemes"><img src="github.svg" class="icons"></a>
   <a><img src="discord.svg" class="icons" id="discord-icon"></a>
   <a href="https://guilded.gg/Nefomemes"><img src="guilded.svg" class="icons"></a>
<a href="https://reddit.com/u/NF-MIP"><img src="https://nefomemes.github.io/reddit.svg" id="reddit-logo" class="icons" ></a> 

<a href="https://twitter.com/ForTombstone">	<img src="https://nefomemes.github.io/twitter.svg" class="icons"></a> 

<a href="https://repl.it/@Nefomemes">	<img src="https://nefomemes.github.io/replit.svg" class="icons"></a> 	</nav>

 </footer>
```
