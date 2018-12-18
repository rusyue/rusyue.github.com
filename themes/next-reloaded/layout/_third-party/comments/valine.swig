{% if theme.valine.enable and theme.valine.appid and theme.valine.appkey %}
  <script type="text/javascript" src="/lib/valine/av-min.js?v=6.0.0"></script>
  <script type="text/javascript" src="/lib/valine/valine@1.3.0.min.js?v=6.0.0"></script>
  <script type="text/javascript">
    var GUEST = ['nick','mail','link'];
    var guest = '{{ theme.valine.guest_info }}';
    var tips = [
      '随便说点儿什么吧~ Σ( ° △ °|||)︴',
      '留下邮箱可以收到回复提醒哦~ ( ˘•ω•˘ )◞⁽˙³˙⁾ ',
      '来啊，快活啊! ヾﾉ≧∀≦)o',
      '按下Ctrl+Enter就能直接提交回复啦~ (๑•̀ㅂ•́)و✧'
    ];

    guest = guest.split(',').filter(item=>{
      return GUEST.indexOf(item)>-1;
    });

    new Valine({
        el: '#comments',
        verify: {{ theme.valine.verify }},
        notify: {{ theme.valine.notify }},
        appId: '{{ theme.valine.appid }}',
        appKey: '{{ theme.valine.appkey }}',
        avatar: '{{ theme.valine.avatar }}',
        guest_info: guest,
        placeholder: tips[Math.floor(Math.random() * tips.length)],
        lang: 'zh-cn',
        pageSize: '{{ theme.valine.pageSize }}' || 10,
    });
  </script>
{% endif %}
