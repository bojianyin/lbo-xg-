$(function(){
	new bz({
		el:".bg"
		,image:["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/timg.jpg"]
		,size:{
			"width":50
			,"height":50
		}
		,autoPlay:3000
		,speed:"2s"
		,type:5
		,active:{
			show:true
			,prev:".prev"
			,next:".next"
		}
	})
	
})
