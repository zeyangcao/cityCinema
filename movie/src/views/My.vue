<template>
	<div class="full-page">
		<div class="nav-bar">我的</div>
		<div class="center-box">
			<div class="top-box">
				<template>
					<div class="circle">
						<img src="../assets/img/1000.webp" alt="" class="circle-photo">
					</div>
				</template>
			</div>
			<div class="update-box">
			<div class="order-box"><div>我的订单</div><div class="a1">></div></div>
			<div class="enroll-box"><div>退出登录</div><div class="a2">></div></div>
			</div>
		</div>
		<ul class="tab-bar">
			<li @click="movieSkip"><span class="iconfont icon-dianyingpiaoiocn"></span>影片</li>
			<li @click="cinemaSkip"><span class="iconfont icon-yingyuan"></span>影院</li>
			<li><span class="iconfont icon-jihua"></span>排片</li>
			<li class="selected"><span class="iconfont icon-shouye"></span>我的</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				
			}
		},
		methods:{
			movieSkip(){
				this.$router.replace({
					path:"/IndexMovie"
				});
			},
			cinemaSkip(){
				this.$router.replace({
					path:"/Cinema",
				});
			}
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
	.top-box{
		height: 200px;
		background-image: url("../assets/img/bg.png");
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
	
	}
	.circle{
		border: 2px solid white;
		border-radius: 100% ;
		overflow: hidden;
		width: 75px;
		height: 75px;
	}
	.center-box{
		flex: 1;
		overflow: auto;
		display: flex;
		flex-direction: column;
	}
	.circle-photo{
		width: 100%;
		height: 100%;
	}
	.update-box{
		flex: 1;
		background-color: #F5F5F5;
	}
	.order-box{
		margin-top: 8px;
		height: 40px;
		padding-left: 10px;
		line-height: 40px;
		font-size: 13px;
		font-weight: bold;
		background-color: white;
		display: flex;
		justify-content: space-between;
	}
	.a1{
		display: flex;
		font-size: 20px;
		color: #999999;
	}
	.a2{
		display: flex;
		font-size: 20px;
		color: #999999;
	}
	.enroll-box{
		margin-top: 2px;
		height: 40px;
		font-size: 13px;
		font-weight: bold;
		padding-left: 10px;
		line-height: 40px;
		background-color: white;
		display: flex;
		justify-content: space-between;
	}
</style>