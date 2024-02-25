import Vue from "vue";
import VueRouter from "vue-router";
import IndexMovie from "../views/IndexMovie.vue";
import Cinema from "../views/Cinema.vue";
import My from "../views/My.vue";
import Information from "../views/Information.vue";
import MovieRank from "../views/MovieRank.vue";
Vue.use(VueRouter)
const router = new VueRouter ({
	mode:"hash",
	routes:[
		{
			path:"/",
			redirect:{
				path:"/IndexMovie"
			}
		},
		{
			path:"/IndexMovie",
			component:IndexMovie,
		},{
			path:"/Cinema",
			component:Cinema
		},{
			path:"/My",
			component:My
		},{
			path:"/Information",
			component:Information
		},{
			path:"/MovieRank",
			component:MovieRank
		},
	]
});
export default router
