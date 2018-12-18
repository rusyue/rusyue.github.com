/**
 * label.js | global hexo script.
 *
 * Usage:
 *
 * {% bookinfo cover %}
 * {% endbookinfo %}
 *
 * cover : image url
 */

function bookInfo (args, content) {
  var template;
  var cover = args[0];
  var height = args[1] || null;
  var details = hexo.render.renderSync({text: content, engine: 'markdown'}).trim();

  template = [
    '<div class="book-info clearfix">',
        '<div class="book-cover">',
            `<img src="${cover}" alt="book-cover"${!height ? '' : ' style="max-height: ' + height + ';"'}>`,
        '</div>',
        '<div class="book-details">',
            details,
        '</div>',
    '</div>'
  ].join("");

  return template;
}

hexo.extend.tag.register('bookinfo', bookInfo, { ends: true });
