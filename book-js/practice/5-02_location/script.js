'use script';

document.getElementById('form') .select.onchange = function() {
  location.href = document.getElementById('form').select.value;
}