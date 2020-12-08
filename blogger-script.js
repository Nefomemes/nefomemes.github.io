function getTheme() {
 return (() => {
 var io = (document.cookie || "").split(";").find(i =>; i.split("=")[0] === "nefomemesTheme");
 if (io) return io.split(";")[1];
			return;
		})() || "dark";
	}         

	function triggerTheme() {

      

      

      

      

      if(getTheme().toLowerCase() === "light"){

      document.getElementById("dark-theme").type = "text/plain";

	} else {

      document.getElementById("dark-theme").type = "text/css";

      }

      

      document.getElementById("change-theme-button").textContent = `Switch to ${(() =>; { var setting = getTheme(); switch(setting){case &#39;light&#39;: return &#39;dark&#39;; default: return &#39;light&#39;; }})()} mode`;

      

      

      }
			      function changeTheme() {

      if(getTheme().toLowerCase() === "light"){

      document.cookie = &#39;nefomemesTheme=dark&#39;;

      } else {

      document.cookie = &#39;nefomemesTheme=light&#39;;

      }

    

triggerTheme();

      

   }

      

      triggerTheme();

	
