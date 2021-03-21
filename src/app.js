window.app = Vue.createApp({
data(){
return {
  	loading: false,
      template: null,
      error: null,
      info: null
}
}
	,
	  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route,
      () => {
	      
        this.fetchData()
        
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
  async fetchData() {
	
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
    try {
if(window.location.pathname === "/"){
const home = await axios.get("/raw/home.template.html");

this.template = home.data;


} else {
const notFoundPage = await axios.get("/raw/404.template.html");

this.template = notFoundPage.data;
}


var info = await axios.get("/info.json");


var collection =	Object.entries(info.data.stacks.collection);

 for(let [name, value] of collection) {
	
	
 
var obj =	{...value, id: name};

if(!obj.icon){
	try {
var img = await axios.get(`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${obj.id}.svg`);
} catch {
	
}
}
info.data.stacks.collection[obj.id] = obj;	
	
};

function addStack(thing){
 info.data.stacks[thing] = info.data.stacks[thing].map((i) => {
 	return info.data.stacks.collection[i];
 })
}

addStack('master'); addStack('learn');


	this.info = info.data;
	
	
    } catch (e) {
	    this.error = e;
    }
    
    this.loading = false;

  },
}
})

app.mount("#content-container")