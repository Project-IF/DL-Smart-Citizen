$(function() {

  //licence preview
  $('#publish-licence').click(function() {
      return confirm('Are you sure?');
  });

  //licence publishing ....
  $('#publishing-complete').hide();
  if($('form').hasClass('auto-submit')){
    setTimeout(function(){ $('form').submit(); }, 6000);
  }


});
