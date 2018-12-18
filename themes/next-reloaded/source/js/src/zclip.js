//此函数用于创建复制按钮
function createCopyBtns() {
    var $codeArea = $("figure table,#comments");
    //查看页面是否具有代码区域，没有代码块则不创建 复制按钮
    if ($codeArea.length > 0) {
        //复制成功后将要干的事情
        function changeToSuccess(item) {
             $imgOK = $("#zclip-btn").find("#zclip-img-success");
                if ($imgOK.css("display") == "none") {
                    $imgOK.css({
                        opacity: 0,
                        display: "block"
                    });
                    $imgOK.animate({
                        opacity: 1
                    }, 500);
                    setTimeout(function() {
                        $imgOK.animate({
                            opacity: 0
                        }, 500);
                    }, 2000);
                    setTimeout(function() {
                        $imgOK.css("display", "none");
                    }, 2500);
                };
        };
        //创建 全局复制按钮，仅有一组。包含：复制按钮，复制成功响应按钮
        //值得注意的是：1.按钮默认隐藏，2.位置使用绝对位置 position: absolute; (position: fixed 也可以，需要修改代码)
        $(".post-body").before('<div id="zclip-btn" style="opacity: 0; position: absolute;top:0px; display: none; line-height: 1; font-size:1em; color: #fff; cursor: pointer; z-index: 9999;"><span id="zclip-img-normal" title="复制代码"><i class="fa fa-paste fa-fw"></i></span><span id="zclip-img-success" style="display: none;"><i class="fa fa-check-circle fa-fw" aria-hidden="true"></i></span>');
        //创建 复制 插件，绑定单机时间到 指定元素，支持JQuery
        var clipboard = new ClipboardJS('#zclip-btn', {
            target: function() {
                //返回需要复制的元素内容
                return document.querySelector("[zclip-copy-flag]");
            },
            isSupported: function() {
                //支持复制内容
                return document.querySelector("[zclip-copy-flag]");
            }
        });
        //复制成功事件绑定
        clipboard.on('success',
            function(e) {
                //清除内容被选择状态
                e.clearSelection();
                changeToSuccess(e);
            });
        //复制失败绑定事件
        clipboard.on('error',
            function(e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
            });
        //鼠标 在复制按钮上滑动和离开后渐变显示/隐藏效果
        $("#zclip-btn").hover(
            function() {
                $(this).stop();
                $(this).css("opacity", 1);
            },
            function() {
                $(this).animate({
                    opacity: 0
                }, 1000);
            }
        );
    }
}

//评论区代码块事件
$('#comments').delegate('pre', 'mouseenter', function(e) {
        if (e.target.nodeName !== 'PRE') return false;
        $("[zclip-copy-flag]").removeAttr("zclip-copy-flag");
        $(e.target).find("code").attr("zclip-copy-flag", 1);
        $copyBtn = $("#zclip-btn");
        if ($copyBtn.lenght != 0) {
            $copyBtn.stop();
            $copyBtn.css("opacity", 0.8);
            $copyBtn.css("color", "#333");
            $copyBtn.css("display", "block");
            $copyBtn.css("top", parseInt($copyBtn.css("top")) + $(e.target).offset().top - $copyBtn.offset().top + 6);
            $copyBtn.css("left", parseInt($(e.target).offset().left + $(e.target).width() - $copyBtn.width() + 16));
        }
});
$('#comments').delegate('pre', 'mouseleave', function(e) {
        $("#zclip-btn").animate({
            opacity: 0
        }, 1000);
});

$("figure").hover(
    function() {
        //-------鼠标活动在代码块内
        //移除之前含有复制标志代码块的 zclip-copy-flag
        $("[zclip-copy-flag]").removeAttr("zclip-copy-flag");
        //在新的（当前鼠标所在代码区）代码块插入标志：zclip-copy-flag
        $(this).find(".code").attr("zclip-copy-flag", 1);
        //获取复制按钮
        $copyBtn = $("#zclip-btn");
        if ($copyBtn.lenght != 0) {
            //获取到按钮的前提下进行一下操作
            //停止按钮动画效果
            //设置为 显示状态
            //修改 复制按钮 位置到 当前代码块开始部位
            //设置代码块 左侧位置
            $copyBtn.stop();
            $copyBtn.css("opacity", 0.8);
            $copyBtn.css("color", "#fff");
            $copyBtn.css("display", "block");
            $copyBtn.css("top", parseInt($copyBtn.css("top")) + $(this).offset().top - $copyBtn.offset().top + 6);
            $copyBtn.css("left", parseInt($(this).offset().left + $(this).width() - $copyBtn.width() - 3));
        }
    },
    function() {
        //-------鼠标离开代码块
        //设置复制按钮可见度 1秒内到 0
        $("#zclip-btn").animate({
            opacity: 0
        }, 1000);
    }
);
//页面载入完成后，创建复制按钮
$(document).ready(function() {
  createCopyBtns();
});