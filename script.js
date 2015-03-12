(function($) {

  $(document).ready(function(){

    var animationSpeed = 500;

    var $menuItem = $('.menu-item');
    var $content = $('.content');
    var $thumbnailContainer = $('.thumbnail-container');

    var changeContent = function(_element){
      var dataName = _element.attr('data-name');
      var $thisContent = $('#'+dataName);
      if ($thisContent.css('display') == 'none'){
        $menuItem.removeClass('active');
        $('.menu-item[data-name="'+dataName+'"]').addClass('active');
        $content.finish();
        $content.animate({
          'opacity':'0'
          }, animationSpeed, function(){
            $content.css('display','none');
            $thisContent.css('display','flex');
            $thisContent.animate({
              'opacity':'1'
            }, animationSpeed);
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