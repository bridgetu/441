var $grid = $('.grid').imagesLoaded( function() {
    // init Masonry after all images have loaded
    $grid.masonry({
        columnWidth: 200,
        itemSelector: '.grid-item',
        gutter: 10
    });
  });