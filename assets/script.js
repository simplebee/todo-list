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
  if (event.which === 13) {
    var inputText = $(this).val();
    $('.list').append('<li class="list__item"><span class="list__bin"><i class="fa fa-trash"></i></span>' + inputText + '</li>');
    $(this).val('');
  }
});