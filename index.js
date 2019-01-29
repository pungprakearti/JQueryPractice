$(document).ready(() => {
  //
  //create root div and attach to body
  const $ROOT = $('<div class="root">');
  $(document.body).prepend($ROOT);

  /*
  createItem returns an JQuery item that
  can be attached to the DOM. 
  */
  function createItem(name, header, imgSrc, price, rating) {
    //
    //div container
    let $cont = $(`<div class="container" id=${name}>`);

    //img
    let $img = $(`<img src=${imgSrc} alt=${name}>`);
    $cont.append($img);

    //header
    let $header = $('<h2>');
    $header.text(header);
    $cont.append($header);

    //rating
    let $star;
    let $starCont = $('<div class="star-cont">');

    for (let count = 0; count <= 4; count++) {
      //
      //if count is less than rating, give it a full star
      if (count <= rating - 1) {
        $star = $('<i class="fas fa-star"></i>');

        //else if rating is greater than the count + 0.5,
        //  give it half a star
      } else {
        if (rating >= count + 0.5 && rating < 5) {
          $star = $('<i class="fas fa-star-half-alt"></i>');

          //fill the rest with empty stars
        } else {
          $star = $('<i class="far fa-star"></i>');
        }
      }
      $starCont.append($star);
    }
    $cont.append($starCont);

    //price
    let $price = $('<h3>');
    $price.text(price);
    $cont.append($price);

    //button
    let $form = $('<form>');
    let $button = $('<button>Add to cart</button>');
    $form.append($button);
    $cont.append($form);

    return $cont;
  }

  //create a new item
  let $newItem = createItem(
    'TwoBuckChuck',
    '2018 Charles Shaw Chardonnay',
    'https://media.mnn.com/assets/images/2017/04/burgundy-bottle.jpg.838x0_q80.jpg',
    '$1.99',
    3.7
  );

  //attach it to the DOM
  $ROOT.append($newItem);
});
