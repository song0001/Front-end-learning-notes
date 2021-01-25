;(function(){
    // var  xxxx
    // 避免当前插件和引用的window作用域命名冲突
    // 1. 构建构造函数 初始化
    function Swiper(options){
        this.wrapper = document.querySelector(options.el);
        this.loop = options.loop;
        this.delay = options.delay || 0;
        this.dott = options.dott; 
        // 4. 全局开启
        this.init();

    }
    // 2. 实现具体方法
    Swiper.prototype = {
        init(){
            // 3. 逐个执行事件
            this.initHmtl();
            this.initDotts();
            this.bindEvent();
            this.play();
        },
        initDotts(){

        },
        bindEvent(){

        },
        initHmtl(){

        },
        play(){

        },
        animaion(){

        }
    }
    // 把需要对外暴露的变量 单独指向window对象
    window.BuFanSwiper = Swiper;
})();