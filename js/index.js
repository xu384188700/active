window.onload = function(){
    var content = document.querySelector("#content");
    var cList = document.querySelector("#content .list");
    var cLiNodes = document.querySelectorAll("#content .list > li");
    var head = document.querySelector("#head");
    var nList = document.querySelectorAll("#head .wrap .nav > li");
    var dot = document.querySelectorAll("#content .round > li");


    var now = 0;
    var index = 0;
    var timer = 0;
    var preIndex = 0;




    var animationAttr = [
        {
            inAn:function(){
                //home1入场动画
                var img = document.querySelector("#content .list > .home1 img");
                setTimeout(function(){
                    img.style.opacity = 1;
                },1000)
            },
            outAn:function(){
                //home1出场动画
                var img = document.querySelector("#content .list > .home1 img");
                setTimeout(function(){
                    img.style.opacity = 0;
                },1000)
            }
        },
        {
            inAn:function(){
                var li1 = document.querySelector("#content .list > .home2 .left .pics li:nth-child(1)");
                var li2 = document.querySelector("#content .list > .home2 .left .pics li:nth-child(2)");
                var li3 = document.querySelector("#content .list > .home2 .left .pics li:nth-child(3)");
                var right = document.querySelector("#content .list > .home2 .right");

                setTimeout(function(){
                    li1.style.transform = "translateY(0px)";
                },800);
                setTimeout(function(){
                    li2.style.transform = "translateY(0px)";
                },1000);
                setTimeout(function(){
                    li3.style.transform = "translateY(0px)";
                    right.style.transform = "translateY(0px)";
                },1200);

            },
            outAn:function(){
                var li1 = document.querySelector("#content .list > .home2 .left .pics li:nth-child(1)");
                var li2 = document.querySelector("#content .list > .home2 .left .pics li:nth-child(2)");
                var li3 = document.querySelector("#content .list > .home2 .left .pics li:nth-child(3)");
                var right = document.querySelector("#content .list > .home2 .right");

                setTimeout(function(){
                    li1.style.transform = "translateY(600px)";
                },800);
                setTimeout(function(){
                    li2.style.transform = "translateY(600px)";
                },1000);
                setTimeout(function(){
                    li3.style.transform = "translateY(600px)";
                    right.style.transform = "translateY(-300px)";
                },1200);
            }
        },
        {
            inAn:function(){
                var li2 = document.querySelector("#content .list > .home3 .left li:nth-child(2)");
                var li3 = document.querySelector("#content .list > .home3 .left li:nth-child(3)");
                var right = document.querySelector("#content .list > .home3 .right");

                setTimeout(function(){
                    li2.style.transform = "translateX(0px)";
                    li3.style.transform = "translateX(0px)";
                    right.style.transform = "translateX(0px)";
                },1000)
            },
            outAn:function(){
                var li2 = document.querySelector("#content .list > .home3 .left li:nth-child(2)");
                var li3 = document.querySelector("#content .list > .home3 .left li:nth-child(3)");
                var right = document.querySelector("#content .list > .home3 .right");

                setTimeout(function(){
                    li2.style.transform = "translateX(-279px)";
                    li3.style.transform = "translateX(-558px)";
                    right.style.transform = "translateX(200px)";
                },500)

            }
        },
        {
            inAn:function(){
                var li1 = document.querySelector("#content .list > .home4 .left li:nth-child(1)");
                var li2 = document.querySelector("#content .list > .home4 .left li:nth-child(2)");
                var li3 = document.querySelector("#content .list > .home4 .left li:nth-child(3)");
                var right = document.querySelector("#content .list > .home4 .right");

                li1.style.display = "initial";
                li2.style.display = "initial";
                li3.style.display = "initial";

                li1.style.animation = "move1 2s 0.8s ";
                li2.style.animation = "move2 2s 0.8s ";
                li3.style.animation = "move3 2s 0.8s ";


                setTimeout(function(){
                    li1.style.transform = "translate(0px,0px)";
                    li2.style.transform = "translate(0px,0px)";
                    li3.style.transform = "translate(0px,0px)";
                    right.style.opacity = 1;
                },2000)


            },
            outAn:function(){
                var li1 = document.querySelector("#content .list > .home4 .left li:nth-child(1)");
                var li2 = document.querySelector("#content .list > .home4 .left li:nth-child(2)");
                var li3 = document.querySelector("#content .list > .home4 .left li:nth-child(3)");
                var right = document.querySelector("#content .list > .home4 .right");


                li1.style.display = "none";
                li2.style.display = "none";
                li3.style.display = "none";
                li1.style.transform = "translate(330px,-1000px)";
                li2.style.transform = "translate(0,-1000px)";
                li3.style.transform = "translate(-330px,-1000px)";
                right.style.opacity = 0;
            }
        },
        {
            inAn:function(){
                var li1 = document.querySelector("#content .list > .home5 .left li:nth-child(1)");
                var li2 = document.querySelector("#content .list > .home5 .left li:nth-child(2)");
                var li3 = document.querySelector("#content .list > .home5 .left li:nth-child(3)");
                var right = document.querySelector("#content .list > .home5 .right");

                setTimeout(function(){
                    li1.style.transform = "translate3d(0,0,0) rotateX(0deg)";
                },800)
                setTimeout(function(){
                    li2.style.transform = "translate3d(0,0,0) rotateX(0deg)";
                },1000)
                setTimeout(function(){
                    li3.style.transform = "translate3d(0,0,0) rotateX(0deg)";
                    right.style.opacity = 1;
                },1200)

            },
            outAn:function(){
                var li1 = document.querySelector("#content .list > .home5 .left li:nth-child(1)");
                var li2 = document.querySelector("#content .list > .home5 .left li:nth-child(2)");
                var li3 = document.querySelector("#content .list > .home5 .left li:nth-child(3)");
                var right = document.querySelector("#content .list > .home5 .right");

                setTimeout(function(){
                    li1.style.transform = "translate3d(-1000px,-800px,-500px) rotateX(145deg) ";
                },800)
                setTimeout(function(){
                    li2.style.transform = "translate3d(-1000px,-800px,-500px) rotateX(145deg) ";
                },1000)
                setTimeout(function(){
                    li3.style.transform = "translate3d(-1000px,-800px,-500px) rotateX(145deg) ";
                    right.style.opacity = 0;
                },1200)

            }
        }
    ]

    for(var i=1;i<animationAttr.length;i++){

        animationAttr[i]["outAn"]();

    };






        //鼠标滚轮
    if(content.addEventListener){
        content.addEventListener("DOMMouseScroll",function(ev){
            clearTimeout(timer);
            timer = setTimeout(function(){
                fn(ev);
            },200)
        });
    }

    content.onmousewheel = function(ev){
        clearTimeout(timer);
        timer=setTimeout(function(){
            fn(ev);
        },200)
    };

    function fn(ev){
        ev = ev||event;
        var flag ="";
        if(ev.detail){
            flag = ev.detail>0?"down":"up";
        }else if(ev.wheelDelta){
            flag = ev.wheelDelta<0?"down":"up";
        }

        if((now==0&&flag=="up")||(now==cLiNodes.length-1&&flag=="down")){
            return;
        }
        preIndex =now;

        switch (flag){
            case "up":
                if(now>0){
                    now--;
                }
                move(now);
                break;
            case "down":
                if(now<cLiNodes.length-1){
                    now++;
                }
                move(now);
                break;
        }

        if(ev.preventDefault){
            ev.preventDefault();
        }

        return false;
    }



    //头部导航
    headBind();
    function headBind(){
        for (var i=0;i<nList.length;i++) {
            nList[i].index = i;
            nList[i].onclick = function(){
                preIndex =now;
                move(this.index);
                now = this.index;
            }
        }

        for (var i=0;i<dot.length;i++) {
            dot[i].index = i;
            dot[i].onclick = function(){
                preIndex =now;
                move(this.index);
                now = this.index;
            }
        }
    }
    //同步主导航及侧边导航
    function move(index){
        for(var i=0;i<nList.length;i++){
            nList[i].className = "";
        }
        nList[index].className = "active";

        for(var i=0;i<dot.length;i++){
            dot[i].className = "";
        }
        dot[index].className = "active";

        cList.style.top = -index *(document.documentElement.clientHeight-head.offsetHeight) + "px";

        //出入场逻辑
        if(animationAttr[index]&&animationAttr[index]["inAn"]){
            animationAttr[index]["inAn"]();
        }
        if(animationAttr[preIndex]&&animationAttr[preIndex]["outAn"]){
            animationAttr[preIndex]["outAn"]();
        }
    }

    window.onresize = function (){
        contentBind();

    }
    // console.log(document.documentElement.clientHeight)


    //内容区的高度
    contentBind();
    function contentBind(){
        // content.style.height = (document.documentElement.clientHeight - head.offsetHeight) + "px";
        var height=(document.documentElement.clientHeight - head.offsetHeight);
        content.style.height = height + "px";
        for(var i=0;i<cLiNodes.length;i++){
            cLiNodes[i].style.height = height + "px";

        }
    }
}
