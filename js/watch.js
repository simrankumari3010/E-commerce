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
  let watches = [
    { photo: "./images/w1.jpg", name: "cool", price: "350", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/w2.jpg", name: "Royals", price: "₹500", Learn: "learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/w3.jpg", name: "Combo", price: "₹950", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/w4.jpg", name: "Balck & white", price: "₹490", Learn: "learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/w5.jpg", name: "Casual", price: "₹500", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/w6.jpg", name: "Formal", price: "₹750", Learn: "learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/w7.jpg", name: "Girlish", price: "₹900", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/w8.png", name: "Indian", price: "₹580", Learn: "learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/w9.jpg", name: "Branded", price: "₹700", Learn: "learn", Cart: "addtocart", Buy: "buy" }
  ]
  let learn1 = [
    { photo: "./images/w1.jpg", name: " cool", price: "₹350", oldprice: "₹800", gstrates: "12%" },
    { photo: "./images/w2.jpg", name: "Royls", price: "₹500", oldprice: "₹620", gstrates: "15%"},
    { photo: "./images/w3.jpg", name: "Combo", price: "₹900", oldprice: "₹1000", gstrates: "5%"},
    { photo: "./images/w4.jpg", name: "Balck & white", price: "₹490", oldprice: "₹600", gstrates: "4%" },
    { photo: "./images/w5.jpg", name: "Casual", price: "₹500", oldprice: "₹600", gstrates: "12%" },
    { photo: "./images/w6.jpg", name: "Formal", price: "₹750", oldprice: "₹900", gstrates: "15%" },
    { photo: "./images/w7.jpg", name: "Girlish", price: "₹900", oldprice: "₹909", gstrates: "25%" },
    { photo: "./images/w8.png", name: "Indian", price: "₹580", oldprice: "₹670", gstrates: "5%"},
    { photo: "./images/w9.jpg" , name: "Branded", price: "₹700", oldprice: "₹800", gstrates: "10%" },
   
  ]
  
  let x = '', i
  x = `<div class = 'row row-cols-3'>`
  for (i = 0; i < watches.length; i++) {
  
    x +=
      `<div class = 'card col'>
      <div class="card mt-3">
      <div class="product-1 align-items-center p-2 text-center">
         <img src="${watches[i].photo}" alt="img1" class="rounded" width="160" height="160">
         <h5>${watches[i].name}</h5>
        
         <div class="cost mt-3 text-dark">
             <span>${watches[i].price}</span>
             <div class="star mt-3 align-items-center">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
             </div>
         </div>
      </div>
  </div> 
          <div class="card-footer text-white">
              <button type="button" class="btn btn-outline-info " data-toggle = 'modal' data-target="#learnmodel${id[i].d}">
                  ${watches[i].Learn}
              </button>
              <div id = "learnmodel${id[i].d}" 
                class="modal fade"
                data-keyboard = 'false'
                data-backdrop = 'static'>
                <div class="modal-dialog modal-md modal-dialog-centered">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title " >${learn1[i].name}  </h5> 
                        <button class="close" data-dismiss = 'modal'>&times;</button>
                     </div>
                     <div class="modal-body"></div>
                          <form>
                              <div class="form-group">
                                  <img src="${learn1[i].photo}">
                              </div>
                              <div class="form-group">
                                <h2>Special Price:${learn1[i].price}+ ${learn1[i].gstrates}gst<span>${learn1[i].oldprice}</span> </h2>
                                <h3>More features</h3>
                                <h3>Attraictive & Best</h3>
                              </div>
                             
                          </form>
                  </div>
                </div
              </div>
          </div>
              <button id="cartadd" class="btn btn-outline-success ">${watches[i].Cart}</button>
              <button class="btn btn-outline-success">${watches[i].Buy}</button>
          </div>
      </div>`
  }
  x = x + '</div>'
  
  
  document.getElementById('my-watches').innerHTML = x
  