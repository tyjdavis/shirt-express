//Adding Items and price to Shopping Cart

$('.buy').on('click', function () {
  $.get('http://localhost:3000/shirts/'+ $(this).attr('id'), function(data) {
    let $ul = $('.cart');
    let $li = `<li>${data.name} ${data.price}</li>`
    $ul.append($li);
    let $shirtPrice = parseInt(data.price);
    let $cartPrice = parseInt($("#total").text());
    let $test = $('#total');
    $cartPrice += $shirtPrice;
    $test.text($cartPrice);
    //cartLimit();
  })
})


// //Size Selector
//
// $('.XL').on('click', function () {$(this).closest('.size').find('.sizeText').text('XL')});
//
// $('.L').on('click', function () {$(this).closest('.size').find('.sizeText').text('L')});
//
// $('.M').on('click', function () {$(this).closest('.size').find('.sizeText').text('M')});
//
// $('.S').on('click', function () {$(this).closest('.size').find('.sizeText').text('S')});
//
//
// //Color Selector
//
// $('.blue-option').on('click', function() {$(this).closest('article').find('.t-shirt').attr('src', 'shirts/blue-front.png');
// $(this).parent().next().css('background-color', '#80bbe5')});
//
// //Pink Color
//
// $('.pink-option').on('click', function() {$(this).closest('article').find('.t-shirt').attr('src', 'shirts/pink-front.png');
// $(this).parent().next().css('background-color', '#e276a7')});
//
// //Orange Color
//
// $('.orange-option').on('click', function() {$(this).closest('article').find('.t-shirt').attr('src', 'shirts/yellow-front.png');
// $(this).parent().next().css('background-color', '#e4b177')});
//
// //Green Color
//
// $('.green-option').on('click', function() {$(this).closest('article').find('.t-shirt').attr('src', 'shirts/green-front.png');
// $(this).parent().next().css('background-color', '#8bb992')});
//


//Adding Items and price to Shopping Cart



//Limit of 8 of each individual shirt
//
// let saveShirt = 0;
// let natureShirt = 0;
// let forrestShirt = 0;
//
// function cartLimit () {
//
//   let cartIcon = event.target;
//   let shirt = cartIcon.dataset.shirt;
//
//   if (shirt === "Save my Trees") {
//     saveShirt++;
//     if (saveShirt >= 8) {
//       sold1.style.display ='block';
//     }
//
//   } else if (shirt === "Nature Lover") {
//     natureShirt++;
//     if (natureShirt >= 8) {
//       sold2.style.display ='block';
//   }
//
//   } else {
//     forrestShirt++;
//     if (forrestShirt >= 8) {
//       sold3.style.display ='block';
//     }
//   }
// }
//
//
//
// //5% discount after five or more shirts
//
// //work in progress
//
// let shirtCounter = 0;
//
// function cartDiscount (event) {
//
//   if (cartAdd() >= 5) {
//     console.log("discount");
//   }
// }
