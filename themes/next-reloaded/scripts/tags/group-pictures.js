/* global hexo */
// Usage: {% grouppicture group-layout %}{% endgrouppicture %}
// Alias: {% gp group-layout %}{% endgp %}

function groupPicture(args, content) {
  ary = args[0].split('-');
  var group = parseInt(ary[0]);
  var layout = parseInt(ary[1]);
  var gpName = !!args[1] ? 'pictures-' + args[1] : 'pictures';

  // TODO: group-picture
  // templates.groupname = GenNonDuplicateID(Math.round(Math.random() * 4 + 6));
  templates.groupname = gpName;
  content = hexo.render.renderSync({text: content, engine: 'markdown'});

  var pictures = content.match(/<img[\s\S]*?>/g);

  return '<div class="group-picture">' +
            templates.dispatch(pictures, group, layout) +
         '</div>';
}

/**
 * 生成一个用不重复的ID
 * GenNonDuplicateID()将生成 rfmipbs8ag0kgkcogc 类似的ID
 */
function GenNonDuplicateID(randomLength){
 return Number(Math.random().toString().substr(2,randomLength) + Math.random().toString().substr(2,randomLength)).toString(36);
}

var templates = {

  dispatch: function (pictures, group, layout) {
    var fn = 'group' + group + 'Layout' + layout;
    fn = templates[fn] || templates.defaults;
    return fn.call(templates, pictures);
  },

  /**
   * 2-1
   *
   *  □
   *  □
   *
   * @param pictures
   * @returns {string}
   */
  group2Layout1: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1)
    ]);
  },

  /**
   * 2-2
   *
   * □ □
   *
   * @param pictures
   */
  group2Layout2: function (pictures) {
    return this.getHTML(pictures);
  },

  /**
   * 3-1
   *
   * □ □ □
   *
   * @param pictures
   */
  group3Layout1: function (pictures) {
    return this.getHTML(pictures);
  },

  /**
   * 3-2
   *
   *  □
   * □ □
   *
   * @param pictures
   */
  group3Layout2: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1)
    ]);
  },

  /**
   * 3-3
   *
   * □ □
   *  □
   *
   * @param pictures
   */
  group3Layout3: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2)
    ]);
  },

  /**
   * 4-1
   *
   *  □
   * □ □
   *  □
   *
   * @param pictures
   */
  group4Layout1: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 3),
      pictures.slice(3)
    ]);
  },

  /**
   * 4-2
   *
   *   □
   * □ □ □
   *
   * @param pictures
   */
  group4Layout2: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1)
    ]);
  },

  /**
   * 4-3
   *
   * □ □
   * □ □
   *
   * @param pictures
   */
  group4Layout3: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2)
    ]);
  },

  /**
   * 4-4
   *
   * □ □ □
   *   □
   *
   * @param pictures
   */
  group4Layout4: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3)
    ]);
  },

  /**
   * 5-1
   *
   *  □
   * □ □
   * □ □
   *
   * @param pictures
   */
  group5Layout1: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 3),
      pictures.slice(3)
    ]);
  },

  /**
   * 5-2
   *
   * □ □
   *  □
   * □ □
   *
   * @param pictures
   */
  group5Layout2: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 3),
      pictures.slice(3)
    ]);
  },

  /**
   * 5-3
   *
   *  □ □
   * □ □ □
   *
   * @param pictures
   */
  group5Layout3: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2)
    ]);
  },

  /**
   * 5-4
   *
   * □ □ □
   *  □ □
   *
   * @param pictures
   */
  group5Layout4: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3)
    ]);
  },

  /**
   * 6-1
   *
   *   □
   *  □ □
   * □ □ □
   *
   * @param pictures
   */
  group6Layout1: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 3),
      pictures.slice(3)
    ]);
  },

  /**
   * 6-2
   *
   *   □
   * □ □ □
   *  □ □
   *
   * @param pictures
   */
  group6Layout2: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 4),
      pictures.slice(4)
    ]);
  },

  /**
   * 6-3
   *
   *  □ □
   *   □
   * □ □ □
   *
   * @param pictures
   */
  group6Layout3: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 3),
      pictures.slice(3)
    ]);
  },

  /**
   * 6-4
   *
   * □ □
   * □ □
   * □ □
   *
   * @param pictures
   */
  group6Layout4: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 4),
      pictures.slice(4)
    ]);
  },

  /**
   * 6-5
   *
   * □ □ □
   * □ □ □
   *
   * @param pictures
   */
  group6Layout5: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3)
    ]);
  },

  /**
   * 7-1
   *
   *  □
   * □ □
   * □ □
   * □ □
   *
   * @param pictures
   */
  group7Layout1: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 3),
      pictures.slice(3, 5),
      pictures.slice(5)
    ]);
  },

  /**
   * 7-2
   *
   *   □
   * □ □ □
   * □ □ □
   *
   * @param pictures
   */
  group7Layout2: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 4),
      pictures.slice(4)
    ]);
  },

  /**
   * 7-3
   *
   *  □ □
   *  □ □
   * □ □ □
   *
   * @param pictures
   */
  group7Layout3: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 4),
      pictures.slice(4)
    ]);
  },

  /**
   * 7-4
   *
   *  □ □
   * □ □ □
   *  □ □
   *
   * @param pictures
   */
  group7Layout4: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 5),
      pictures.slice(5)
    ]);
  },

  /**
   * 7-5
   *
   * □ □ □
   *  □ □
   *  □ □
   *
   * @param pictures
   */
  group7Layout5: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3, 5),
      pictures.slice(5)
    ]);
  },

  /**
   * 8-1
   *
   *   □
   *  □ □
   *  □ □
   * □ □ □
   *
   * @param pictures
   */
  group8Layout1: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 3),
      pictures.slice(3, 5),
      pictures.slice(5)
    ]);
  },

  /**
   * 8-2
   *
   *   □
   *  □ □
   * □ □ □
   *  □ □
   *
   * @param pictures
   */
  group8Layout2: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 3),
      pictures.slice(3, 6),
      pictures.slice(6)
    ]);
  },

  /**
   * 8-3
   *
   *   □
   * □ □ □
   *  □ □
   *  □ □
   * @param pictures
   */
  group8Layout3: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 4),
      pictures.slice(4, 6),
      pictures.slice(6)
    ]);
  },

  /**
   * 8-4
   *
   * □ □
   * □ □
   * □ □
   * □ □
   *
   * @param pictures
   */
  group8Layout4: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 4),
      pictures.slice(4, 6),
      pictures.slice(6)
    ]);
  },

  /**
   * 8-5
   *
   *  □ □
   * □ □ □
   * □ □ □
   *
   * @param pictures
   */
  group8Layout5: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 5),
      pictures.slice(5)
    ]);
  },

  /**
   * 8-6
   *
   * □ □ □
   *  □ □
   * □ □ □
   *
   * @param pictures
   */
  group8Layout6: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3, 5),
      pictures.slice(5)
    ]);
  },

  /**
   * 8-7
   *
   * □ □ □
   * □ □ □
   *  □ □
   *
   * @param pictures
   */
  group8Layout7: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3, 6),
      pictures.slice(6)
    ]);
  },

  /**
   * 9-1
   *
   *   □
   *  □ □
   * □ □ □
   * □ □ □
   *
   * @param pictures
   */
  group9Layout1: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 3),
      pictures.slice(3, 6),
      pictures.slice(6)
    ]);
  },

  /**
   * 9-2
   *
   *   □
   * □ □ □
   *  □ □
   * □ □ □
   *
   * @param pictures
   */
  group9Layout2: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 4),
      pictures.slice(4, 6),
      pictures.slice(6)
    ]);
  },

  /**
   * 9-3
   *
   *  □ □
   *  □ □
   *  □ □
   * □ □ □
   *
   * @param pictures
   */
  group9Layout3: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 4),
      pictures.slice(4, 6),
      pictures.slice(6)
    ]);
  },

  /**
   * 9-4
   *
   *  □ □
   *  □ □
   * □ □ □
   *  □ □
   *
   * @param pictures
   */
  group9Layout4: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 4),
      pictures.slice(4, 7),
      pictures.slice(7)
    ]);
  },

  /**
   * 9-5
   *
   *  □ □
   * □ □ □
   *  □ □
   *  □ □
   *
   * @param pictures
   */
  group9Layout5: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 5),
      pictures.slice(5, 7),
      pictures.slice(7)
    ]);
  },

  /**
   * 9-6
   *
   * □ □ □
   *  □ □
   *  □ □
   *  □ □
   *
   * @param pictures
   */
  group9Layout6: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3, 5),
      pictures.slice(5, 7),
      pictures.slice(7)
    ]);
  },

  /**
   * 9-7
   *
   * □ □ □
   * □ □ □
   * □ □ □
   *
   * @param pictures
   */
  group9Layout7: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3, 6),
      pictures.slice(6)
    ]);
  },

  /**
   * 10-1
   *
   *   □
   * □ □ □
   * □ □ □
   * □ □ □
   *
   * @param pictures
   */
  group10Layout1: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 1),
      pictures.slice(1, 4),
      pictures.slice(4, 7),
      pictures.slice(7)
    ]);
  },

  /**
   * 10-2
   *
   *  □ □
   *  □ □
   * □ □ □
   * □ □ □
   *
   * @param pictures
   */
  group10Layout2: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 4),
      pictures.slice(4, 7),
      pictures.slice(7)
    ]);
  },

  /**
   * 10-3
   *
   *  □ □
   * □ □ □
   *  □ □
   * □ □ □
   *
   * @param pictures
   */
  group10Layout3: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 5),
      pictures.slice(5, 7),
      pictures.slice(7)
    ]);
  },

  /**
   * 10-4
   *
   *  □ □
   * □ □ □
   * □ □ □
   *  □ □
   *
   * @param pictures
   */
  group10Layout4: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 2),
      pictures.slice(2, 5),
      pictures.slice(5, 8),
      pictures.slice(8)
    ]);
  },

  /**
   * 10-5
   *
   * □ □ □
   *  □ □
   *  □ □
   * □ □ □
   *
   * @param pictures
   */
  group10Layout5: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3, 5),
      pictures.slice(5, 7),
      pictures.slice(7)
    ]);
  },

  /**
   * 10-6
   *
   * □ □ □
   *  □ □
   * □ □ □
   *  □ □
   *
   * @param pictures
   */
  group10Layout6: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3, 5),
      pictures.slice(5, 8),
      pictures.slice(8)
    ]);
  },

  /**
   * 10-7
   *
   * □ □ □
   * □ □ □
   *  □ □
   *  □ □
   *
   * @param pictures
   */
  group10Layout7: function (pictures) {
    return this.getHTML([
      pictures.slice(0, 3),
      pictures.slice(3, 6),
      pictures.slice(6, 8),
      pictures.slice(8)
    ]);
  },

  /**
   * Defaults Layout
   *
   * □ □ □
   * □ □ □
   * ...
   *
   * @param pictures
   */
  defaults: function (pictures) {
    var ROW_SIZE = 3;
    var rows = pictures.length / ROW_SIZE + 1;
    var pictureArr = [];

    for (var i = 0; i < rows; i++) {
      pictureArr.push(pictures.slice(i * ROW_SIZE, (i + 1) * ROW_SIZE));
    }

    return this.getHTML(pictureArr);
  },

  getHTML: function (rows) {
    var rowHTML = '';

    for (var i = 0; i < rows.length; i++) {
      rowHTML += this.getRowHTML(rows[i]);
    }

    return '<div class="group-picture-container">' + rowHTML + '</div>';
  },

  getRowHTML: function (pictures) {
    return (
      '<div class="group-picture-row">' +
        this.getColumnHTML(pictures) +
      '</div>'
    );
  },

  getColumnHTML: function (pictures) {
    var columns = [];
    var columnWidth = 100 / pictures.length;
    var columnStyle = ' style="width: ' + columnWidth + '%;"';

    // fancybox compatibility
    var re = /src="(.*?)"\s?/i;

    for (var i = 0; i < pictures.length; i++) {
      // default
      // columns.push('<div class="group-picture-column" ' + columnStyle + '>' + pictures[i] + '</div>');

      // fancybox compatibility
      columns.push('<div class="group-picture-column" ' + columnStyle + '>' +
                       '<a href="' + pictures[i].match(re)[1] + '" class="fancybox fancybox.image" rel="group" data-fancybox="' + this.groupname + '">' +
                           pictures[i] +
                       '</a>' +
                   '</div>');
    }
    return columns.join('');
  }
};

hexo.extend.tag.register('grouppicture', groupPicture, {ends: true});
hexo.extend.tag.register('gp', groupPicture, {ends: true});
