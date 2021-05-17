/*
JavaScript script (static/scripts/1-hbnb.js):

    Your script must be executed only when DOM is loaded
    You must use JQuery
    Listen for changes on each INPUT checkbox tag:
        if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
        if the checkbox is unchecked, you must remove the Amenity ID from the variable
        update the H4 tag inside the DIV Amenities with the list of Amenities checked
*/

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
