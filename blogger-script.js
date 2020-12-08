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

      

      document.getElementById("change-theme-button").textContent = `Switch to ${(() =>; { var setting = getTheme(); switch(setting){case "light": return "dark"; default: return "light"; }})()} mode`;

      

      

      }
			      function changeTheme() {

      if(getTheme().toLowerCase() === "light"){

      document.cookie = "nefomemesTheme=dark";

      } else {

      document.cookie = "nefomemesTheme=light";

      }

    

triggerTheme();

      

   }

      

      triggerTheme();

	
