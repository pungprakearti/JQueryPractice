$(document).ready(() => {
  //
  //create root div and attach to body
  const $ROOT = $('<div class="root">');
  $(document.body).prepend($ROOT);

  /*
  createItem returns an ecommerce item that
  can be attached to the DOM. 
  */
  function createItem(name, header, imgSrc, price) {
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

  //create an item
  let $newItem = createItem(
    'TwoBuckChuck',
    '2018 Charles Shaw Chardonnay',
    'https://media.mnn.com/assets/images/2017/04/burgundy-bottle.jpg.838x0_q80.jpg',
    '$1.99'
  );

  //attach to dom
  $ROOT.append($newItem);
});
