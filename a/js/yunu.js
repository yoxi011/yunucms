"use strict";!function(n,a,t,i){var e={rem:function(){var n=t.getElementsByTagName("html")[0],i=function(){var a=t.documentElement.clientWidth;n.style.fontSize=a<=750?"50px":"100px"};return i(),a.onresize=i,this},nav:function(){var a=n("#wap_nav");return n("#wap_nav_btn").on("click",function(t){t.stopPropagation(),a.addClass("in"),n("#wapnav_mask").fadeIn()}),n("#wapnav_mask").on("click",function(){a.removeClass("in"),n(this).fadeOut()}),a.on("click",function(n){n.stopPropagation()}).find("a.close").on("click",function(){a.removeClass("in")}),a.find("li").each(function(){var a=n(this);a.children("a").next("ul").children("li").length&&a.addClass("mult").children("a").attr("href","javascript:;").click(function(t){var i=n(this);a.hasClass("active")?a.removeClass("active").children("ul").slideUp():(t.preventDefault(),i.attr("href",i.attr("data-href")),a.addClass("active").children("ul").slideDown())})}),this}};n(function(){e.rem().nav()}),a.script=e}(jQuery,window,document),function(n,a,t,i){a.yunu={loadMore:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){n.ajax({url:a.url,type:a.type,data:a.data,dataType:"jsonp",beforeSend:function(n){a.beforeSend(n),a.btn.attr("disabled",!0)}}).done(function(n,t,i){a.done(n,t,i),(!n.data.length||!a.data.limit||n.data.length<a.data.limit)&&a.btn.replaceWith(a.load_more_none)}).fail(function(n,t,i){a.fail(n,t,i)}).always(function(n,t,i){a.always(n,t,i),a.key=!0,a.btn.attr("disabled",!1)})};(a=n.extend(!0,{key:!0,url:"",type:"POST",btn:n("#load_more_btn"),box:n("#list>ul"),data:{pages:1,limit:5},beforeSend:function(){},done:function(){},fail:function(){},always:function(){},load_icon:!0,load_icon_class:"",loading:n('<div class="la-ball-fall"><div></div><div></div><div></div><div></div></div>'),load_more_none:n('<p class="load_more_none tac c_red mt20">没有了</p>')},a)).load_icon&&(n(a.loading).addClass(a.load_icon_class),a.btn.after(a.loading)),a.btn.click(function(){a.key&&(a.key=!1,a.data.pages++,t())})}}}(jQuery,window,document);
//# sourceMappingURL=yunu.js.map
;(($, window, document, undefined) => {
    window.yunu = {
        loadMore(config={}){
            config = $.extend(true, {
                key: true, // load开关
                url: '', // api url
                type: 'POST',
                btn: $('#load_more_btn'), // 加载更多按钮
                box: $('#list>ul'), // 加载内容的容器
                data: { // api接口配置参数
                    pages: 1,
                    limit: 5
                },
                beforeSend: ()=>{}, // 发送请求前
                done: ()=>{}, // 请求成功
                fail: ()=>{}, // 请求失败
                always: ()=>{}, // 请求完成
                load_icon: true, // 是否开启请求等待图标样式
                load_icon_class: '', // 图标尺寸样式 可选: la-sm / la-2x / la-3x
                loading: $('<div class="la-ball-fall"><div></div><div></div><div></div><div></div></div>'), // 按钮load icon元素
                load_more_none: $('<p class="load_more_none tac c_red mt20">没有了</p>') // 没有内容时显示的元素
            }, config);
            var load = function(){
                $.ajax({
                    url: config.url,
                    type: config.type,
                    data: config.data,
                    dataType: "jsonp",
                    beforeSend: function(XMLHttpRequest) {
                        config.beforeSend(XMLHttpRequest);
                        config.btn.attr('disabled',true);
                    }
                })
                .done(function(res, textStatus, XMLHttpRequest) {
                    config.done(res, textStatus, XMLHttpRequest);
                    if (!res.data.length || !config.data.limit || res.data.length < config.data.limit) {
                        config.btn.replaceWith(config.load_more_none);
                    }
                })
                .fail(function(XMLHttpRequest, textStatus, errorThrown) {
                    config.fail(XMLHttpRequest, textStatus, errorThrown);
                })
                .always(function(XMLHttpRequest, textStatus, errorThrown) {
                    config.always(XMLHttpRequest, textStatus, errorThrown);
                    config.key = true;
                    config.btn.attr('disabled',false);
                });
            }
            if (config.load_icon) {
                $(config.loading).addClass(config.load_icon_class); // 设置图标大小
                config.btn.after(config.loading); // 装载图标动画
            }
            config.btn.click(function(){
                if (!config.key) return;
                config.key = false;
                config.data.pages++;
                load();
            });
        }
    };

  
})(jQuery, window, document);