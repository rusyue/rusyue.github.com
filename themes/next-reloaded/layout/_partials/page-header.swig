<header class="post-header">

{# TODO: 暂时用这种方法屏蔽留言板的标题 #}
{% if not page.notitle %}
    <{% if theme.seo %}h2{% else %}h1{% endif %} class="post-title" itemprop="name headline">{{ page.title }}</{% if theme.seo %}h2{% else %}h1{% endif %}>
{% endif %}

{% if page.description %}
	<div class="post-meta">
		<div class="post-description">{{ page.description }}</div>
	</div>
{% endif %}

</header>
