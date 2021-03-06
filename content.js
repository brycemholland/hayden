(function($) {

  $(document).ready(function(){





// =========== THIS IS WHERE YOU CHANGE YOUR PORTFOLIO DATA =======================================================


    


    var projects = [
      {
        name: 'verano',
        title: 'VERANO Zine',
        tags: 'print, layout, typography',
        featuredImage: 'https://m1.behance.net/rendition/modules/132088687/hd/3c0fb06ed5d4088b449923574c59fb68.jpg',
        image: [
          'https://m1.behance.net/rendition/modules/132088671/hd/34220e74664442b0eca00f46e225934d.jpg',
          'https://m1.behance.net/rendition/modules/132088673/hd/c5f384f0bb1a099b0957e30ba85c1928.jpg',
          'https://m1.behance.net/rendition/modules/132088683/hd/6ab5abf6a7835006a16c5de2ad3c10a3.jpg',
          'https://m1.behance.net/rendition/modules/132088677/hd/b13eceb55122343291892ff58f5c9418.jpg',
          'https://m1.behance.net/rendition/modules/132088685/hd/6a29a12167f50cd907c48f046d4839a3.jpg',
          'https://m1.behance.net/rendition/modules/132088681/hd/a19ca484d76fff4c9589c7bc14ed475c.jpg',
          'https://m1.behance.net/rendition/modules/132088679/hd/b6f9eba6a9b4d42f0093746d3c7af6bc.jpg',
          'https://m1.behance.net/rendition/modules/132088675/hd/15c803ef67d302e2333d0c6117efffac.jpg',
          'https://m1.behance.net/rendition/modules/132088687/hd/3c0fb06ed5d4088b449923574c59fb68.jpg',
          'https://m1.behance.net/rendition/modules/132088669/hd/2e9ee0c5f676c56990bece1202d4c2a4.jpg'
        ]
      },
      {
        name: 'lauren',
        title: 'Lauren Vanderwerken Photography',
        tags: 'print, layout, typography',
        featuredImage: 'https://m1.behance.net/rendition/modules/155407649/hd/4f72197d2044266f5ba30b8d4b2b8f57.jpg',
        image: [
          'https://m1.behance.net/rendition/modules/155407649/hd/4f72197d2044266f5ba30b8d4b2b8f57.jpg'
        ]
      },
      {
        name: 'play',
        title: 'Play with Type',
        tags: 'print, layout, typography',
        featuredImage: 'https://m1.behance.net/rendition/modules/153804281/hd/1d22478691c84b3d16d6d26f1cd027ea.jpg',
        image: [
          'https://m1.behance.net/rendition/modules/153804281/hd/1d22478691c84b3d16d6d26f1cd027ea.jpg'
        ]
      },
      {
        name: 'lana',
        title: 'Lana Del Rey',
        tags: 'print, layout, typography',
        featuredImage: 'https://m1.behance.net/rendition/modules/39297647/hd/b8a74a5ecbebc9e7a08774dc3e2ff5ad.jpg',
        image: [
          'https://m1.behance.net/rendition/modules/39297647/hd/b8a74a5ecbebc9e7a08774dc3e2ff5ad.jpg'
        ]
      }
    ];





// =========== THIS MAKES THE DATA WORK =======================================================





    var $resumeLink = $('#resume-link');
    var $gallery = $('#gallery');
    var $mainContainer = $('.main-container');

    var addMenuItems = function(){
      for (var i=0; i < projects.length; i++){
        $resumeLink.before('<div class="menu-item" data-name="'+projects[i].name+'">'+projects[i].title+'</div>');
      }
    }

    var addThumbnails = function(){
      for (var i=0; i < projects.length; i++){
        $gallery.append('<div class="thumbnail-container" data-name="'+projects[i].name+'"></div>');
        $('#gallery > *[data-name="'+projects[i].name+'"]').append('<div class="thumb-image" style="background-image: url(\''+projects[i].featuredImage+'\');"></div>')
        .append('<div class="thumb-info"></div>');
        $('#gallery > *[data-name="'+projects[i].name+'"] > .thumb-info').append('<div class="header">'+projects[i].title+'</div>')
        .append('<div class="subtext">'+projects[i].tags+'</div>');
      }
    }
    
    var addProjects = function(){
      for (var i=0; i < projects.length; i++){
        $mainContainer.append('<div id="'+projects[i].name+'" class="content project"></div>');
        for (var j=0; j < projects[i].image.length; j++){
          $('#'+projects[i].name).append('<img src="'+projects[i].image[j]+'" class="project-image"></img>');
        }
      }
    }

    addMenuItems();
    addThumbnails();
    addProjects();

  });

})(jQuery);