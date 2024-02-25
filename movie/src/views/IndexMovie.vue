<template>
	<div class="full-page">
		<div class="mask2" v-show="flag2">
			<div class="bakc">
			<div class="login" @click="MySkip">登录账号</div>
			<div class="cancel" @click="flag2=!flag2">取消</div>
			</div>
		</div>
		<div class="mask" v-show="flag" @click="flag=!flag">
			<div class="img-num">1/1</div>
			<img :src="previewImageURL" alt="" class="photo">
		</div>
		<div class="nav-bar" v-show="!flag">城市影院<span class="iconfont icon-daohanglanmoshi02" @click="islogin()"></span></div>
		<div class="content-box">
			<ul class="movie-type">
				<li :class="{active:movietype==0}" @click="movietype=0">热映</li>
				<li :class="{active:movietype==1}" @click="movietype=1">待映</li>
				<li :class="{active:movietype==2}" @click="movietype=2">经典电影</li>
				<li ><span class="iconfont icon-sousuo"></span></li>
			</ul>
			<div class="best-movie-box">
				<p class="best-movie-title">最受好评的电影</p>
				<ul class="best-movie-list">
					<li v-for="(item,index) in bestMovieList">
						<div class="movie-img-box">
							<img :src="baseURL+item.movie_pc" class="movie-img" alt="">
						<p class="movie-score">观众评分:{{item.movie_score}}</p></div>
						<p class="movie-name">{{item.movie_name}}</p>
					</li>
				</ul>
				<ul class="movie-list-box">
					<li class="movie-item" v-for="(item,index) in movieList" >
						<img :src="baseURL+item.movie_pc" class="movie-img-left" alt="" @click="showImage(baseURL+item.movie_pc)">
						<div class="movie-info-center">
							<div class="movie-name-center">{{item.movie_name}}</div>
							<div class="movie-score-center">
								观众评分: <span>{{item.movie_score}}</span>
							</div>
							<div>主演：{{item.role}}</div>
							<div>上映时间: {{item.publicTime}}</div>
						</div>
						<div class="btn-box-right">
							<button type="button" class="btn-buyticket" @click="InformationSkip(item.id)">购票</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<ul class="tab-bar">
			<li class="selected"><span class="iconfont icon-dianyingpiaoiocn"></span>影片</li>
			<li  @click="cinemaSkip"><span class="iconfont icon-yingyuan"></span>影院</li>
			<li><span class="iconfont icon-jihua"></span>排片</li>
			<li @click="MySkip"><span class="iconfont icon-shouye"></span>我的</li>
		</ul>
	</div>
</template>

<script>
	import router from "@/router";
import axios from "axios";
	export default {
		data() {
			return{
			movietype:0,
			bestMovieList: bestMovieData.data,
			baseURL:"http://www.softeem.xin:9999",
			movieList:[],
			flag:false,
			flag2:false,
			previewImageURL:"",
			}
		},
		methods:{
			getMovieList: async function(){
				//1.准备请求url地址
				var url ="http://www.softeem.xin:9999/movie-info/getListByPage?pageIndex=4";
				//2.使用axios发起请求，ajax的请求是一个异步请求
				var response= await axios.get(url);
				//3.打印结果
				console.log(response.data.data.listData);
				//4.保存需要的数据
				this.movieList = response.data.data.listData;
				//这个时候的movielist就是一个数组，里面有电影信息
			},
			showImage:function(imgURL){
				this.flag=true;
				this.previewImageURL=imgURL;
			},
			islogin:function(){
				this.flag2=true;
			},
			cinemaSkip(){
				this.$router.replace({
					path:"/Cinema",
				});
			},
			MySkip(){
				this.$router.replace({
					path:"/My",
				});
			},
			InformationSkip(movieid){
				this.$router.replace({
					path:"/Information?id="+movieid+" ",
				});
			}
		},
		created:function(){
			this.getMovieList();
		}
	}
</script>

<style lang="scss" scoped>
	.full-page{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.movie-type{
		display: flex;
		font-size: 12px;
		height: 45px;
		border-bottom: 1px solid #E1E1E1;
	}
	.movie-type li{
		padding: 0px 15px;
		display: flex;
		align-items: center;
		color: #666666;
	}
	.movie-type li.active{
		color: black;
		font-weight: bold;
		font-size: 16px;
		position: relative;
	}
	.movie-type li.active::after{
		content: "";
		display: block;
		width: 18px;
		height: 2px;
		background-color: #F7504D;
		position: absolute;
		bottom: 1px;
		left: 0px;
		right: 0px;
		margin: auto;
	}
	.best-movie-box{
		padding: 10px 15px;
	}
	.best-movie-title{
		font-size: 12px;
		color: #333333;
	}
	.best-movie-list{
		margin-top: 10px;
		display: flex;
		/*清除浮动*/
		overflow: auto;
		border-bottom: 4px solid #E1E1E1;
	}
	.best-movie-list li{
		width: 85px;
		/*设置自己不能被压缩*/
		flex-shrink: 0;
	}
	/*排除第一个元素设置margin-left:5px*/
	.best-movie-list li+li{
		margin-left: 5px;
	}
	.movie-img-box{
		height: 114px;
		position: relative;
	}
	.movie-name{
		font-weight: bold;
		font-size: 12px;
		padding: 5px 0px;
		/*文本不换行*/
		white-space: nowrap;
		/*溢出影藏*/
		overflow: hidden;
		/*如果被隐藏，加一个省略号*/
		text-overflow: ellipsis;
	}
	.movie-img{
		width: 100%;
		height: 100%;
	}
	.movie-score{
		color: var(--tagColor);
		font-size: 12px;
		font-weight: bold;
		position: absolute;
		bottom: 2px;
		left: 2px;
	}
	.movie-list-box{
		padding-top: 15px;
	}
	.movie-list-box li+li{
		padding-top: 5px;
	}
	.movie-item{
		display: flex;
	}
	.movie-img-left{
		width: 60px;
		height: 80px;
	}
	.movie-info-center{
		flex: 1;
		font-size: 12px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left:5px;
	}
	.movie-name-center{
		font-weight: bold;
		font-size: 14px;
	}
	.movie-score-center span{
		font-size: 14px;
		font-weight: bold;
		color: var(--tagColor);
	}
	.btn-box-right{
		width: 60px;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn-buyticket{
		width: 45px;
		height: 19px;
		border: none;
		font-size: 12px;
		background-color: var(--primaryColor);
		color: white;
		border-radius: 10px;
		box-shadow: 0px 2px 4px var(--primaryColor);
		cursor: pointer;
		&:hover{
			opacity: 0.85;
		}
		&:active{
			opacity: 1;
		}
	}
	.mask{
		position: fixed;
		background-color: rgba(0, 0, 0,0.8);
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
	}
	.mask2{
		position: fixed;
		background-color: rgba(0, 0, 0,0.8);
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1000;
		display: flex;
		align-items: flex-end;
		flex-direction: column-reverse;
		.bakc{
			background-color:whitesmoke;
			width: 100%;
			border-radius:15px 15px 0 0;
		}
		.cancel{
			width: 100%;
			height: 50px;
			background-color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			&:hover{
				opacity: 0.85;
			}
			&:active{
				opacity: 1;
			}
		}
		.login{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 50px;
			background-color:white;
			border-radius:15px 15px 0 0;
			margin-bottom: 10px;
			cursor: pointer;
			&:hover{
				opacity: 0.85;
			}
			&:active{
				opacity: 1;
			}
		}
	}
	.img-num{
		color: white;
		padding: 10px;
		font-size: 12px;
		display: flex;
		justify-content: center;
		width: 100%;
		position: absolute;
		top: 0px;
	}
	.photo{
		width: 100%;
	}
	.icon-daohanglanmoshi02{
		position: fixed;
		right: 30px;
		font-size: 24px;
		font-weight: lighter;
	}
	.icon-sousuo {
		font-size: 20px;
		color: var(--primaryColor);
		font-weight: bold;
		margin-left: 115px;
	}
</style>