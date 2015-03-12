(function($) {

  $(document).ready(function(){

    var text = $.get("content.txt");
    var projects = JSON.parse(text);

    var $resumeLink = $('#resume-link');
    var $gallery = $('#gallery');
    var $mainContainer = $('.main-container');

    var addMenuItems = function(){
      for (var i=0; i < projects.data.length; i++){
        $resumeLink.before('<div class="menu-item" data-name="'+projects.data[i].name+'">'+projects.data[i].title+'</div>');
      }
    }

    var addThumbnails = function(){
      for (var i=0; i < projects.data.length; i++){
        $gallery.append('<div class="thumbnail-container" data-name="'+projects.data[i].name+'"></div>');
        $('#gallery > *[data-name="'+projects.data[i].name+'"]').append('<div class="thumb-image" style="background-image: url(\''+projects.data[i].featuredImage+'\');"></div>')
        .append('<div class="thumb-info"></div>');
        $('#gallery > *[data-name="'+projects.data[i].name+'"] > .thumb-info').append('<div class="header">'+projects.data[i].title+'</div>')
        .append('<div class="subtext">'+projects.data[i].tags+'</div>');
      }
    }
    
    var addProjects = function(){
      for (var i=0; i < projects.data.length; i++){
        $mainContainer.append('<div id="'+projects.data[i].name+'" class="content project"></div>');
        for (var j=0; j < projects.data[i].image.length; j++){
          $('#'+projects.data[i].name).append('<img src="'+projects.data[i].image[j]+'" class="project-image"></img>');
        }
      }
    }

    addMenuItems();
    addThumbnails();
    addProjects();

  });

})(jQuery);