const HOST = '0.0.0.0';
const amenityData = {};

$(document).ready(()=>{
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenityData[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenityData[$(this).attr('data-name')];
    }
    const amenintyKeys = Object.keys(amenityData);
    $('.amenities h4').text(amenintyKeys.sort().join(', '));
  });
  statusAPI();
});

const statusAPI = ()=> {
  const END_POINT = `http://${HOST}:5001/api/v1/status/`;
  $.get(END_POINT, (data, textStatus) => {
    if (textStatus === 'success' && data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
}
