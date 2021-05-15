$(document).ready(()=>{
  const amenityData = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenityData[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenityData[$(this).attr('data-name')];
    }
    const amenintyKeys = Object.keys(amenityData);
    $('.amenities h4').text(amenintyKeys.sort().join(', '));
  });
});
