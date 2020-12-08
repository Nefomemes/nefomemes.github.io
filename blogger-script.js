	function getTheme() {

		return (() =&gt; {

			var io = (document.cookie || &#39;&#39;).split(&#39;;&#39;).find(i =&gt; i.split(&#39;=&#39;)[0] === &#39;nefomemesTheme&#39;);

			if (io) return io.split(&#39;=&#39;)[1];

			return;

		})() || &#39;dark&#39;;

	}

      

      

	function triggerTheme() {

      

      

      

      

      

      if(getTheme().toLowerCase() === &#39;light&#39;){

      document.getElementById(&quot;dark-theme&quot;).type = &quot;text/plain&quot;;

	} else {

      document.getElementById(&quot;dark-theme&quot;).type = &quot;text/css&quot;;

      }

      

      document.getElementById(&#39;change-theme-button&#39;).textContent = `Switch to ${(() =&gt; { var setting = getTheme(); switch(setting){case &#39;light&#39;: return &#39;dark&#39;; default: return &#39;light&#39;; }})()} mode`;

      

      

      }

      

function changeTheme() {

      if(getTheme().toLowerCase() === &quot;light&quot;){

      document.cookie = &#39;nefomemesTheme=dark&#39;;

      } else {

      document.cookie = &#39;nefomemesTheme=light&#39;;

      }

    

triggerTheme();

      

   }

      

      triggerTheme();

	
