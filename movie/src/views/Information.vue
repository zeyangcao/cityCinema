<template>
	<div>
		<div class="nav-bar"><span class="iconfont icon-fanhui" @click="movieSkip"></span>电影详细信息</div>
		
		
		
		<div class="centre-box" :style="{'backgroundImage':'url('+baseURL+movieDetail.movie_pc+')'}"></div>
			<div><img :src="baseURL+movieDetail.movie_pc" alt="" class="left-box"></div>
			
			
			<div class="right-box">
				<div class="name-box">{{movieDetail.movie_name}}</div>
				<div><span class="font">{{movieDetail.movie_score}}</span>分</div>
				<div>{{movieDetail.tags}}</div>
				<div>{{movieDetail.duration}}</div>
				<div>{{movieDetail.publicTime}}</div>
			</div>
		<div class="under-box" @click="rankSkip(movieDetail.id)">特惠购票</div>
		<div class="text-box">{{movieDetail.movie_desc}}</div>
	</div>
</template>

<script>
	import axios from "axios";
	import VueRouter from "vue-router";
	export default {
		data() {
			return{
				movieDetail:"",
				mid: this.$route.query.id,
				baseURL:"http://www.softeem.xin:9999",
			}
		},
		methods:{
			movieSkip(){
				this.$router.replace({
					path:"/IndexMovie",
				});
			},
			rankSkip(rankid){
				this.$router.replace({
					path:"/MovieRank?id="+rankid+" ",
				});
			},
			getMovieDetail: async function(){
				//1.准备请求url地址
				var url ="http://www.softeem.xin:9999/movie-info/findById/"+this.mid+" ";
				//2.使用axios发起请求，ajax的请求是一个异步请求
				var response= await axios.get(url);
				//3.打印结果
				console.log(response.data.data);
				//4.保存需要的数据
				this.movieDetail = response.data.data;
				//这个时候的movielist就是一个数组，里面有电影信息
			},
		},
		created() {
			this.getMovieDetail();
		}
	}
</script>

<style lang="scss" scoped>
	.centre-box{
		display: flex;
		height: 150px;
		background-size: cover;
		background-repeat: no-repeat;
		-webkit-backdrop-filter: blur(5px);
		filter: blur(20px);
		z-index: -1;
		position: relative;
	}
	.left-box{
		width: 85px;
		height: 130px;
		margin-top: -135px;
		margin-left: 10px;
		position: absolute;
	}
	.right-box{
		display: flex;
		height: 130px;
		flex-direction:column;
		justify-content: space-between;
		border: none;
		margin-left: 110px;
		margin-top: -135px;
		margin-bottom: 10px;
		font-size: 12px;
		color: white;
		position: absolute;
	}
	.name-box{
		font-size: 18px;
		color:white;
	}
	.font{
		font-size: 14px;
		color: orange;
	}
	.score-box{
		border: 1px solid black;
	}
	.under-box{
		border-radius: 5px;
		border: none;
		display: flex;
		justify-content:center;
		align-items: center;
		height: 40px;
		margin-top: 80px;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 18px;
		color: white;
		background-color: #F7504D;
		cursor: pointer;
		&:hover{
			opacity: 0.85;
		}
		&:active{
			opacity: 1;
		}
	}
	.text-box{
		height: 120px;
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 10px;
		font-size: 12px;
		text-indent: 2em;
		position: relative;
		line-height: 2em;
		height: 6em;
		overflow: hidden;
	}
	.text-box::after{
		content: "...";
		font-weight: bold;
		position: absolute;
		bottom:0;
		right: 0;
		padding: 0 -20px 1px 45px;
	}
	.icon-fanhui{
		position: fixed;
		left: 10px;
		font-size: 18px;
	}
</style>