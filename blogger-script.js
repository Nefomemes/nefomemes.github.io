function getTheme() {
 return (() => {
 var io = (document.cookie || "").split(";").find(i =>; i.split("=")[0] === "nefomemesTheme");
 if (io) return io.split(";")[1];
			return;
		})() || "dark";
	}         

	function triggerTheme() {

      

      

      

      

      if(getTheme().toLowerCase() === "light"){

      document.getElementById("dark-theme").rel = "stylesheet";
      document.getElementById("light-theme").rel = "ignored";

	} else {

      document.getElementById("dark-theme").rel = "stylesheet";
      document.getElementById("light-theme").rel = "ignored";

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

	
