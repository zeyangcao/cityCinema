<template>
	<div id="App">
		<router-view></router-view>
	</div>
</template>

<script>
	
</script>

<style>
	@import url("https://at.alicdn.com/t/c/font_4026705_lio67kta8cq.css");
	* {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	#App{
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.nav-bar{
		background-color: #F7504D;
		height: 45px;
		font-size: 18px;
		font-weight: bold;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content-box{
		flex: 1;
		overflow: auto;
	}
	.tab-bar{
		height: 55px;
		display: flex;
		justify-content: space-around;
		box-shadow: 0px -5px 15px 5px #E1E1E1;
	}
	.tab-bar li {
		width: 55px;
		height: 55px;
		/* 弹性盒子 */
		display: flex;
		/* 主轴(水平)居中 */
		justify-content: center;
		/* 副轴(垂直)居中 */
		align-items: center;
		font-size: 12px;
		color: #333333;
		flex-direction: column;
		cursor: pointer;
		&:hover{
			opacity: 0.85;
		}
		&:active{
			opacity: 1;
		}
	}
	.tab-bar li.selected {
		color: var(--primaryColor);
		font-weight: 26px;
	}
	.tab-bar li .iconfont{
		font-size: 20px;
	}
	:root {
		/* CSS的变量定义只需要在属性前面添加两个横线--就可以了 */
		--primaryColor: #F7504D;
		--tagColor:#FF9E21
	}
	/* 去掉滚动条 */
	::-webkit-scrollbar{
		display: none;
	}
</style>
