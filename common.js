
$(function() {

  var nums = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13]
  function  makeChart(array, size) {
  for (var i = 0; i < array.length; i++) {
  $('.block').append('<div class = "column"> </div>')
  $('.column').last().css({
   'width' : size + 'px',
  'display' : 'inline-block',
   'height' : (size * array[i])+ 'px',
   'margin-right': '10px'
})
   if(array[i] <= 5)
     $('.column').last().css('background-color', '#52fa52')
    else if(array[i] > 5 && array[i] <= 10)
      $('.column').last().css('background-color', '#fafa52')
     else
      $('.column').last().css('background-color', '#fa5252')
  }
}
 makeChart(nums, 30)
})
