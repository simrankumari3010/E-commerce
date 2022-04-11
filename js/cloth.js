let id = [
  { d: 1 },
  { d: 2 },
  { d: 3 },
  { d: 4 },
  { d: 5 },
  { d: 6 },
  { d: 7 },
  { d: 8 },
  { d: 9 },
  { d: 10 },
  { d: 11 },
  { d: 12 }
]
let cloths = [
  { photo: "./images/17.png", name: " Suit", price: "₹650", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/24.png", name: "Trouser", price: "₹500", Learn: "learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/27.png", name: "Black shirt", price: "₹450", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/18.png", name: "Western", price: "₹490", Learn: "learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/tenth.png", name: "Casual", price: "₹1000", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/28.png", name: "Formal", price: "₹880", Learn: "learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/29.png", name: "Sari", price: "₹900", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/30.png", name: "Indian", price: "₹580", Learn: "learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/31.png", name: "Top", price: "₹700", Learn: "learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/32.png", name: "T-shirt", price: "₹450", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/33.png", name: "Pant", price: "₹770", Learn: "learn", Cart: "addtocart", Buy: "buy" },
  { photo: "./images/34.png", name: "Coat", price: "₹600", Learn: "learn", Cart: "addtocart", Buy: "buy" }
]
let learn = [
  { photo: "./images/17.png", name: " Suit", price: "₹650", oldprice: "₹800", gstrates: "12%", fabric: "linien" },
  { photo: "./images/24.png", name: "Trouser", price: "₹500", oldprice: "₹620", gstrates: "15%", fabric: "nylon" },
  { photo: "./images/27.png", name: "Black shirt", price: "₹450", oldprice: "₹800", gstrates: "5%", fabric: "silk" },
  { photo: "./images/18.png", name: "Western", price: "₹490", oldprice: "₹600", gstrates: "4%", fabric: "crepe" },
  { photo: "./images/tenth.png", name: "Casual", price: "₹1000", oldprice: "₹1500", gstrates: "12%", fabric: "silk" },
  { photo: "./images/28.png", name: "Formal", price: "₹880", oldprice: "₹1000", gstrates: "15%", fabric: "cotton" },
  { photo: "./images/29.png", name: "Sari", price: "₹900", oldprice: "₹999", gstrates: "25%", fabric: "silk" },
  { photo: "./images/30.png", name: "Indian", price: "₹580", oldprice: "₹670", gstrates: "5%", fabric: "Polyester" },
  { photo: "./images/31.png", name: "Top", price: "₹700", oldprice: "₹800", gstrates: "10%", fabric: "rayon" },
  { photo: "./images/32.png", name: "T-shirt", price: "₹450", oldprice: "₹500", gstrates: "6%", fabric: "silk" },
  { photo: "./images/33.png", name: "Pant", price: "₹770", oldprice: "₹900", gstrates: "14%", fabric: "cotton" },
  { photo: "./images/34.png", name: "Coat", price: "₹600", oldprice: "₹800", gstrates: "12%", fabric: "Polyester" }

]

let x = '', i
x = `<div class = 'row row-cols-3'>`
for (i = 0; i < cloths.length; i++) {

  x +=
    `<div class = 'card col'>
        <img src = '${cloths[i].photo}' class = 'card-img-top'>
        <div class = 'card-body'>
            <div class = "h2 card-title">${cloths[i].name} </div>
            <div class = "h4 card-subtitle text-muted">${cloths[i].price} </div>
        </div> 
        <div class="card-footer text-white">
            <button type="button" class="btn btn-outline-info " data-toggle = 'modal' data-target="#learnmodel${id[i].d}">
                ${cloths[i].Learn}
            </button>
            <div id = "learnmodel${id[i].d}" 
              class="modal fade"
              data-keyboard = 'false'
              data-backdrop = 'static'>
              <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content">
                   <div class="modal-header">
                      <h5 class="modal-title " >${learn[i].name}  </h5> 
                      <button class="close" data-dismiss = 'modal'>&times;</button>
                   </div>
                   <div class="modal-body"></div>
                        <form>
                            <div class="form-group">
                                <img src="${learn[i].photo}">
                            </div>
                            <div class="form-group">
                              <h2>Special Price:${learn[i].price}+ ${learn[i].gstrates}gst<span>${learn[i].oldprice}</span> </h2>
                              <h3>More features</h3>
                              <h3>Size: S M L XL XXL XXL</h3>
                            </div>
                            <div class="form-group">
                            <h3>Fabric:${learn[i].fabric} </h3>
                            </div>
                        </form>
                </div>
              
            </div>
        </div>
            <button id="cartadd" class="btn btn-outline-success ">${cloths[i].Cart}</button>
            <button class="btn btn-outline-success ">${cloths[i].Buy}</button>
        </div>
    </div>`
}
x = x + '</div>'


document.getElementById('my-cloth').innerHTML = x
