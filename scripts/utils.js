var exec = require('child_process').exec;

hexo.on('new', function(data){
  exec('start "D:\\Sublime Text\\Sublime Text 3\\sublime_text.exe" ' + data.path);
});