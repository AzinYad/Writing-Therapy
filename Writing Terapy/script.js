var add_comment;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


add_comment = [];


document.getElementById('button').addEventListener
('click', (event) =>
{
  add_comment.unshift(getNumberOrString(document.getElementById('text').value));
  let element_list = document.getElementById('list');
  let new_ul = document.createElement('ul');
  new_ul.innerText = getNumberOrString(document.getElementById('text').value);

  element_list.appendChild(new_ul);

});