$('html').on('keydown', function () {
  var $ball = $('<div>').addClass('ball');

  $ball.css('left', Math.random() * 1000).css('top', Math.random() * 1000).css('background-color', 'hsla(' + Math.floor(Math.random() * 360) + ', 50%, 50%, .5)');
  $('body').append($ball);
});
