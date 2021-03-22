<template>

<footer class="footer nefo-footer">
		<nav class="nefo-navi-links">
			<ul class="nefo-links-bar">
				<li class="nefo-link-title">
					This website
				</li>
			<!--	<li>Privacy Policy</li>-->
				<li><a href="https://github.com/Nefomemes/Portofolio">Source code</a></li>
			</ul>
			<ul class="nefo-links-bar">
				<li class="nefo-link-title">
					Other stuff
				</li>
				<li><a href="https://medium.com/@Nefomemes">Blog</a></li>
				<li>
					<a href="https://nefomemes.instatus.com/">Status page</a> </li>


			</ul>

			<!--	<ul>
						<li class="nefo-link-title">
							My projects
							</li>
							<li>Project Fortress</li>
						</ul> -->
		</nav>


		<div class="nefo-copyright-container">
			<div class="nefo-copyright">

				@2021 Nefomemes. This website is open source and is lisenced under the MIT License.


			</div>
		</div>

		<div class="nefo-footer-links">
			<a href="https://github.com/Nefomemes"><img src="~/assets/icons/github.svg" class="nefo-icons"></a>


  <a href="https://twitter.com/ForTombstone">	<img src="~/assets/icons/twitter.svg" class="nefo-icons"></a>
  	<a href="https://repl.it/@Nefomemes">	<img src="~/assets/icons/replit.svg" class="nefo-icons"></a>
					
			</div>

		
		<style>
				.nefo-footer {
			background-color: #212121;
			color: white;
		
			padding-top: 20px;


			padding-bottom: 40px;
			padding-left: 40px;
			padding-top: 60px;
			padding-right: 40px;
			margin-top: -20px;
			position: relative;
			
		}
		
		
			.nefo-footer	.nefo-navi-links {
			flex-wrap: wrap;
display: flex;  


margin-bottom: 20px;
justify-content: space-between; 
}
 
.nefo-footer .nefo-footer-links{  
display: flex;  

margin-top: 0px;
height: 50px;
width: 150px;
justify-content: space-between;
align-items: center;
margin-top: 40px;


}
 
.nefo-footer .nefo-icons {    
width: 40px;
height: 40px;
color: white;
}
 
.nefo-footer .nefo-discord-icon {
width: 50px;
height: 50px;
}
 
.nefo-footer .nefo-link-title {
font-size: 20px;    
font-weight: bold;      
color: white;
}

.nefo-footer a:link, a:visited {
color: white !important;
}

.nefo-footer .nefo-navi-links ul {
list-style: none;
}

	.nefo-footer nefo-copyright {
		
			width: calc(100% - 90px);
			margin-left: 40px;
			text-align: center;
			}	</style>
		</footer>
</template>