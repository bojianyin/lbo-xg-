class bz{
	constructor(json){
		this.btnShow=json.active.show;
		this.prev=json.active.prev;
		this.next=json.active.next;
		this.type=json.type;
		this.imgs=json.image;
		this.ctrl=json.el;
		this.w=json.size["width"];
		this.h=json.size["width"];
		this.x=$(json.el).get(0).offsetWidth/this.w;
		this.y=$(json.el).get(0).offsetHeight/this.h;
		this.sort=1;
		this.zidx=300;
		this.speed=json.speed;
		this.create();
		this.checkBtn();
		(!this.btnShow)?setTimeout(()=>this.show(),this.speed):null;
	}
	create(){
		this.zidx--;
		for(var i=0;i<this.x;i++){
			for(var b=0;b<this.y;b++){
				var div=document.createElement("div");
				div.style.width=this.w+"px";
				div.style.height=this.h+"px";
				div.style.position="absolute";
				div.style.left=i*this.w+"px";
				div.style.top=b*this.h+"px";
				div.style.background="url("+this.imgs[this.sort-1]+") no-repeat"
				div.style.backgroundSize="500px 300px" 
				div.style.backgroundPositionX=-i*this.w+"px";
				div.style.backgroundPositionY=-b*this.h+"px";
				div.style.zIndex=this.zidx;
				div.style.transition="2s"
				$(this.ctrl).append(div);
			}
		}
	}
	rad(startNumber, endNumber){
		var choice = endNumber - startNumber + 1;
	    return Math.floor(Math.random() * choice + startNumber)
	}
	show(){
		(!this.btnShow)?(this.sort>=this.imgs.length?this.sort=1:(this.sort++)):null;
		this.moves();
		this.create();
		(!this.btnShow)?setTimeout(()=>this.show(),this.speed):null;
	}
	moves(){
		$(this.ctrl+">div").each((index,el)=>{
			switch(this.type){
				case 1:
					$(el).css({
						"transform":"perspective(600px) translateZ(200px)"
						,"opacity":"0"
						,"transformStyle":"preserve-3d"
					})
					break;
				case 2:
					$(el).css({
						"transform":"perspective(600px) rotateY(180deg)"
						,"opacity":"0"
						,"transformStyle":"preserve-3d"
					})
					break;
				case 3:
					$(el).css({
						"transform":"perspective(600px) rotateX(180deg)"
						,"opacity":"0"
						,"transformStyle":"preserve-3d"
					})
					break;
				case 4:
					$(el).css({
						"transform":"perspective(600px) rotate(360deg)"
						,"opacity":"0"
						,"transformStyle":"preserve-3d"
						,"transformOrigin":"center"
					})
					break;
				case 5:
					$(el).css({
						"transform":"perspective(600px) translateX("+this.rad(-300,300)+"px) translateY("+this.rad(-150,150)+"px) translateZ("+this.rad(-200,200)+"px) scale("+this.rad(1,2)+") rotateX("+this.rad(-100,100)+"deg) rotateY("+this.rad(-100,100)+"deg)"
						,"opacity":"0"
						,"transformStyle":"preserve-3d"
					})
					break;
				case 6:
					$(el).css({
						"border":"2px solid #fff"
						,"opacity":"0"
						,"transformStyle":"preserve-3d"
					})
					break;
			}
			el.addEventListener("transitionend",function(){
				$(this).remove()
			})
		})
	}
	checkBtn(){
		if(!this.btnShow){
			$(this.prev).hide();
			$(this.next).hide();
		}else{
			$(this.prev).click(()=>{
				this.sort<=1?this.sort=this.imgs.length:(this.sort--);
				this.show();
			});
			$(this.next).click(()=>{
				this.sort>=this.imgs.length?this.sort=1:(this.sort++);
				this.show();
			});
		}
	}
	
}

