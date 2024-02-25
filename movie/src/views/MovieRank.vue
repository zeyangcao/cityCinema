<template>
	<div>
		<div class="nav-bar"><span class="iconfont icon-fanhui" @click="InformationSkip"></span>电影排片</div>
		
		<div class="ranktop-box">
			<div class="rankleft-box"><img :src="baseURL+movieDetail.movie_pc" alt="" class="photo1"></div>
			<div class="rankcenter-box"><img :src="baseURL+movieDetail.movie_pc" alt="" class="photo2"></div>
			<div class="rankright-box"><img :src="baseURL+movieDetail.movie_pc" alt="" class="photo3"></div>
		</div>
		<div class="brief-box">
			<div class="brief-box1">{{movieDetail.movie_name}}
			<div class="color">
			<span>{{movieDetail.movie_score}}.0分</span>
			</div>
			</div>
			<div class="brief-box2">
				<div>{{movieDetail.duration}}分钟|</div>
				<div>{{movieDetail.tags}}|</div>
				<div>{{role(movieDetail.role)}}</div>
			</div>
		</div>
		<div class="buttom-box1">
			<div class="box1">2023-07-30 08:00:00</div>
			<div class="box2">退,改签</div>
			<div class="box3">￥28.80</div>
			<button class="box4">购票</button>
			</div>
		<div class="buttom-box2">
			<div class="box1">2023-07-30 08:00:00</div>
			<div class="box2">退,改签</div>
			<div class="box3">￥28.80</div>
			<button class="box4">购票</button>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return{
				movieDetail:"",
				mid:this.$route.query.id,
				baseURL:"http://www.softeem.xin:9999",
			}
			},
		methods:{
			InformationSkip(){
				this.$router.replace({
					path:"/Information?id="+this.mid+" ",
				});
			},
			getMovieDetail: async function(){
				//1.准备请求url地址
				var url ="http://www.softeem.xin:9999/movie-info/findById/"+this.mid+" ";
				//2.使用axios发起请求，ajax的请求是一个异步请求
				var response= await axios.get(url);
				//3.打印结果
				console.log(response.data.data);
				//4.保存需要的数据s
				this.movieDetail = response.data.data;
				//这个时候的movielist就是一个数组，里面有电影信息
			},
			role(act){
				//让文字间以逗号的形式隔开
				if(act != null){
					let arr = act.split(" ");
					let result = arr.join(",");
					return result;
				}
			}
		},
		created() {
			this.getMovieDetail();
		}
	}
</script>

<style lang="scss" scoped>
	.icon-fanhui{
		position: fixed;
		left: 10px;
		font-size: 18px;
	}
	.ranktop-box{
		display: flex;
		justify-content: space-around;
		height: 150px;
		background-color: dimgrey;
		.rankleft-box{
			width:90px;
			height: 120px;
			margin-top: 12px;
			.photo1{
				height: 100%;
				width: 100%;
			}
		}
		.rankcenter-box{
			width: 100px;
			height:140px;
			margin-top: 3px;
			.photo2{
				height: 100%;
				width: 100%;
			}
		}
		.rankright-box{
			margin-top: 12px;
			width: 90px;
			height: 120px;
			.photo3{
				height: 100%;
				width: 100%;
			}
		}
	}
	.brief-box{
		display: flex;
		flex-direction:column;
		height: 60px;
		margin-top: 10px;
	}
	.brief-box1{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		font-weight: bold;
		.color{
			font-size: 14px;
			color:coral;
			margin-left: 5px;
		}
	}
	.brief-box2{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		color: gray;
		margin-top: 10px;
	}
	.buttom-box1{
		border-bottom: 1px dotted gray;
		height:50px;
		margin-top: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		overflow: hidden;
	}
	.buttom-box2{
		border-bottom: 1px dotted gray;
		height: 50px;
		font-size: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box1{
		width: 20%;
	}
	.box2{
		width: 40%;
		margin-left: 3px;
	}
	.box3{
		font-size: 16px;
		color: red;
	}
	.box4{
		width: 50px;
		height: 30px;
		border-radius: 15px;
		border: 1px solid red;
		background-color: white;
		color: red;
		font-size: 16px;
		margin-left: 15px;
	}
</style>