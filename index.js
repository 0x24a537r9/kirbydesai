var fields = ['skin', 'location', 'ink', 'layering', 'scarring', 'colors'];
var form;

$(function() {
  form = document.forms[0];

  $('input').change(onChange);
  onChange();
});


function onChange() {
  var scale = {};
  var field_count = 0;
  for (var i = 0; i < fields.length; ++i) {
    var field = fields[i];
    if (form[field].value) {
      scale[field] = form[field].value;
      ++field_count;
    }
  }
  
  var total_points = 0;
  for (var field in scale) {
    $('.' + field + '-points').text(scale[field]);
    total_points += parseInt(scale[field]);
  }

  if (field_count == fields.length) {
    $('.total-points').text(total_points);
  }
}