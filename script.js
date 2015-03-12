(function($) {

  $(document).ready(function(){

    /*
    var projects = [
      {
        name: 'verano1',
        title: 'VERANO Zine1',
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
        name: 'verano2',
        title: 'VERANO Zine2',
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
        name: 'verano3',
        title: 'VERANO Zine3',
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
      }
    ];


    var addMenuItems = function(){
      for (var i=0; i < projects.length; i++){
        $resumeLink.before('<div class="menu-item" data-name="'+projects[i].name+'">'+projects[i].title+'</div>');
      }
    }
    
    var addProjects = function(){
      for (var i=0; i < projects.length; i++){
        $mainContainer.append('<div id="'+projects[i].name+'" class="content project"></div>');
        for (var j=0; j < projects[i].image.length; j++){
          $('#'+projects[i].name).append('<img src="'+projects[i].images[j]+'" class="project-image"></img>');
        }
      }
    }
    

    addMenuItems();
    addProjects();
    */
    var $menuItem = $('.menu-item');
    var $content = $('.content');
    var $thumbnailContainer = $('.thumbnail-container');

    var changeContent = function(_element){
      var dataName = _element.attr('data-name');
      var $thisContent = $('#'+dataName);
      if ($thisContent.css('display') == 'none'){
        $menuItem.removeClass('active');
        $('.menu-item[data-name="'+dataName+'"]').addClass('active');
        $content.animate({
          'opacity':'0'
          }, 500, function(){
            $content.css('display','none');
            $thisContent.css('display','flex');
            $thisContent.animate({
              'opacity':'1'
            }, 500);
        });
      }
    }

    $menuItem.click(function(){
      changeContent($(this));
    });

    $thumbnailContainer.click(function(){
      changeContent($(this));
    });

  });

})(jQuery);