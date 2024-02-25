<template>
	<div class="full-page">
		<div class="nav-bar">影院</div>
		<div class="content-box">
			<ul class="cinema-box">
				<div class="cinema-li-box" v-for="(item,index) in movieList">
					<li class="movie-theatre-box"  >
						<div class="movie-hall-box">{{item.hall_name}}</div>
						<div class="movie-address-box">{{item.address}}</div>
						<div class="label-box">
							<div class="movie-tags-box" v-for="label in item.tags.split(',')"><span>{{label}}</span></div>
						</div>
					</li>
				</div>
				<div class="shuaxin-box">
					<span class="iconfont icon-shuaxin"></span>
				</div>
			</ul>
		</div>
		<ul class="tab-bar">
			<li @click="movieSkip"><span class="iconfont icon-dianyingpiaoiocn"></span>影片</li>
			<li class="selected"><span class="iconfont icon-yingyuan"></span>影院</li>
			<li><span class="iconfont icon-jihua"></span>排片</li>
			<li @click="MySkip"><span class="iconfont icon-shouye"></span>我的</li>
		</ul>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return{
				movieList:[],
			}
		},
		methods:{
				getMovieList: async function(){
				//1.准备请求url地址
				var url ="http://www.softeem.xin:9999/hall-info/getListByPage?pageIndex=1";
							//2.使用axios发起请求，ajax的请求是一个异步请求
				var response= await axios.get(url);
							//3.打印结果
				console.log(response.data.data.listData);
				//4.保存需要的数据
				this.movieList = response.data.data.listData;
				//这个时候的movielist就是一个数组，里面有电影信息
				},
				movieSkip(){
					this.$router.replace({
						path:"/IndexMovie",
					});
				},
				MySkip(){
					this.$router.replace({
						path:"/My",
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
	.cinema-box{
		padding-top: 5px;
	}
	.cinema-li-box{
		display: flex;
		flex-direction: column;
	}
	.movie-theatre-box{
		width: 345px;
		height: 80px;
		padding-left: 15px;
		border-bottom: 1px solid #E1E1E1;
	}
	.movie-hall-box{
		font-size:16px;
		font-weight: bold;
	}
	.movie-address-box{
		margin-top: 5px;
		font-size:11px;
		font-weight: bold;
	}
	.label-box{
		display: flex;
		margin-top: 10px;
	}
	.movie-tags-box:nth-child(odd){
		border: 2px solid #FF9E21;
		color: #FF9E21;
		font-size: 10px;
		font-weight: bold;
		margin: 0px 0px;
	}
	.movie-tags-box:nth-child(even){
		border: 2px solid #01BB84;
		color: #01BB84;
		font-size: 10px;
		font-weight: bold;
		margin: 0px 5px;
	}
	.shuaxin-box{
		border: 2px solid #E1E1E1;
		width: 30px;
		height: 30px;
		position: fixed;
		right: 30px;
		bottom: 130px;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color:#01BB84;
		box-shadow: 0px 0px 15px 5px #F7504D;
	}
	.icon-shuaxin{
		font-size: 25px;
		color: white;
	}
</style>