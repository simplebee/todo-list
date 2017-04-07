$('.list').on('click', '.list__item', function() {
  $(this).toggleClass('list__item_done');
});

$('.list').on('click', '.list__bin', function(event) {
  $(this).parent().fadeOut(function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$('.list__input').on('keypress', function(event) {
  var inputText = $(this).val();
  var $listItem = $('<li class="list__item"><span class="list__bin"><i class="fa fa-trash"></i></span>' + inputText + '</li>');
  if (event.which === 13 && inputText !== "") {
    $listItem.hide().appendTo('.list').fadeIn();
    $(this).val('');
  }
});

$('.title__button').on('click', function() {
  $('.list__input').fadeToggle();
  $(this).toggleClass('fa-plus');
  $(this).toggleClass('fa-minus');
});