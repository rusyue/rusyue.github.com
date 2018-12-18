<div class="copyright busuanzi-count">{#
#}{% set current = date(Date.now(), "YYYY") %}{#
#}&copy; {% if theme.footer.since and theme.footer.since != current %}{{ theme.footer.since }} &mdash; {% endif %}{#
#}<span itemprop="copyrightYear">{{ current }}</span>
  <span class="with-love">
    <i class="fa fa-{{ theme.footer.icon }}"></i>
  </span>
  <span class="author" itemprop="copyrightHolder">{{ theme.footer.copyright || config.author }}</span>

  {% if config.symbols_count_time.total_symbols %}
    <span class="post-meta-divider busuanzi-insert">|</span>
    <span class="post-meta-item-icon busuanzi-insert">
      <i class="fa fa-area-chart"></i>
    </span>
    {% if theme.symbols_count_time.item_text_total %}
      <span class="post-meta-item-text busuanzi-insert">{{ __('post.totalcount') }}&#58;</span>
    {% endif %}
    <span class="busuanzi-insert" title="{{ __('post.totalcount') }}">{#
    #}{{ symbolsCountTotal(site) }}{#
  #}</span>
  {% endif %}

  {% if config.symbols_count_time.total_time %}
    <span class="post-meta-divider busuanzi-insert">|</span>
    <span class="post-meta-item-icon busuanzi-insert">
      <i class="fa fa-coffee"></i>
    </span>
    {% if theme.symbols_count_time.item_text_total %}
      <span class="post-meta-item-text busuanzi-insert">{{ __('post.totaltime') }}&#58;</span>
    {% endif %}
    <span class="busuanzi-insert" title="{{ __('post.totaltime') }}">{#
    #}{{ symbolsTimeTotal(site, theme.symbols_count_time.awl, theme.symbols_count_time.wpm) }}{#
  #}</span>
  {% endif %}
  {# 不蒜子统计 #}
  <script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
  {% if theme.busuanzi_count.insert %}
    <span class="post-meta-divider busuanzi-insert">|</span>
    <span class="post-meta-item-icon busuanzi-insert">
      <i class="fa fa-users"></i>
    </span>
    <span class="site-uv busuanzi-insert">
      {# {{ theme.busuanzi_count.site_uv_header }} #}
      <span class="busuanzi-value" id="busuanzi_value_site_uv" title="站点总到访人次"></span>
      {# {{ theme.busuanzi_count.site_uv_footer }} #}
    </span>
    <span class="post-meta-divider busuanzi-insert">|</span>
    <span class="post-meta-item-icon busuanzi-insert">
      <i class="fa fa-file"></i>
    </span>
    <span class="site-pv busuanzi-insert">
      {# {{ theme.busuanzi_count.site_pv_header }} #}
      <span class="busuanzi-value" id="busuanzi_value_site_pv" title="站点总阅读次数"></span>
      {# {{ theme.busuanzi_count.site_pv_footer }} #}
    </span>
  {% endif %}

</div>

{% if theme.footer.powered %}
  <div class="powered-by">{#
  #}{{ __('footer.powered', '<a class="theme-link" target="_blank" href="https://hexo.io">Hexo</a>') }}{#
#}</div>
{% endif %}

{% if theme.footer.powered and theme.footer.theme.enable %}
  <span class="post-meta-divider">|</span>
{% endif %}

{% if theme.footer.theme.enable %}
  <div class="theme-info">{#
  #}{{ __('footer.theme') }} &mdash; {#
  #}<a class="theme-link" target="_blank" href="https://github.com/theme-next/hexo-theme-next">{#
    #}NexT.{{ theme.scheme }}{#
  #}</a>{% if theme.footer.theme.version %} v{{ theme.version }}{% endif %}{#
#}</div>
{% endif %}

{% if theme.footer.custom_text %}
  <div class="footer-custom">{#
  #}{{ theme.footer.custom_text }}{#
#}</div>
{% endif %}
