// dragula([myTab])
dragula([main]);
var del = document.querySelectorAll('.delete');

// del[0].onclick = function () {
//   alert(123)
// }
del.forEach(item => {
  // console.log(item);


  item.addEventListener('click', function (e) {
    console.log(1);

    e.preventDefault();

    console.log(e.currentTarget.parentNode.parentNode);
    console.log(e.currentTarget.parentNode);


    e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode)
  }, true)



})