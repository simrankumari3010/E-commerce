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
  let sunglasses = [
    { photo: "./images/sg1.jpeg", name: "Cool", price: "₹350", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/sg2.jpg", name: "Design", price: "₹500", Learn: "learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/sg3.png", name: "Lighties", price: "₹950", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/sg4.jpg", name: "Raises", price: "₹490", Learn: "learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/sg5.png", name: "Casual", price: "₹500", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/sg6.jpg", name: "Formal", price: "₹750", Learn: "learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/sg7.jpg", name: "Stylish", price: "₹900", Learn: "Learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/sg8.png", name: "Infras", price: "₹580", Learn: "learn", Cart: "addtocart", Buy: "buy" },
    { photo: "./images/sg9.png", name: "Bluerays", price: "₹700", Learn: "learn", Cart: "addtocart", Buy: "buy" }
  ]
  let learn2 = [
    { photo: "./images/sg1.jpeg", name: " Cool", price: "₹350", oldprice: "₹800", gstrates: "12%" },
    { photo: "./images/sg2.jpg", name: "Design", price: "₹500", oldprice: "₹620", gstrates: "15%"},
    { photo: "./images/sg3.png", name: "Lighties", price: "₹900", oldprice: "₹1000", gstrates: "5%"},
    { photo: "./images/sg4.jpg", name: "Rayses", price: "₹490", oldprice: "₹600", gstrates: "4%" },
    { photo: "./images/sg5.png", name: "Casual", price: "₹500", oldprice: "₹600", gstrates: "12%" },
    { photo: "./images/sg6.jpg", name: "Formal", price: "₹750", oldprice: "₹900", gstrates: "15%" },
    { photo: "./images/sg7.jpg", name: "Stylish", price: "₹900", oldprice: "₹909", gstrates: "25%" },
    { photo: "./images/sg8.png", name: "Infras", price: "₹580", oldprice: "₹670", gstrates: "5%"},
    { photo: "./images/sg9.png" , name: "Bluerays", price: "₹700", oldprice: "₹800", gstrates: "10%" },
   
  ]
  
  let x = '', i
  x = `<div class = 'row row-cols-3'>`
  for (i = 0; i < sunglasses.length; i++) {
  
    x +=
      `<div class = 'card col'>
      <div class="card mt-3">
      <div class="product-1 align-items-center p-2 text-center">
         <img src="${sunglasses[i].photo}" alt="img1" class="rounded" width="160" height="160">
         <h5>${sunglasses[i].name}</h5>
         
         <div class="cost mt-3 text-dark">
             <span>${sunglasses[i].price}</span>
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
          <div class="card-footer text-black">
              <button type="button" class="btn btn-outline-info " data-toggle = 'modal' data-target="#learnmodel${id[i].d}">
                  ${sunglasses[i].Learn}
              </button>
              <div id = "learnmodel${id[i].d}" 
                class="modal fade"
                data-keyboard = 'false'
                data-backdrop = 'static'>
                <div class="modal-dialog modal-md modal-dialog-centered">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title " >${learn2[i].name}  </h5> 
                        <button class="close" data-dismiss = 'modal'>&times;</button>
                     </div>
                     <div class="modal-body"></div>
                          <form>
                              <div class="form-group">
                                  <img src="${learn2[i].photo}">
                              </div>
                              <div class="form-group">
                                <h2>Special Price:${learn2[i].price}+ ${learn2[i].gstrates}gst<span>${learn2[i].oldprice}</span> </h2>
                                <h3>More features</h3>
                                <h3>Attraictive & Best</h3>
                              </div>
                             
                          </form>
                  </div>
                </div
              </div>
          </div>
              <button id="cartadd" class="btn btn-outline-success ">${sunglasses[i].Cart}</button>
              <button class="btn btn-outline-success ">${sunglasses[i].Buy}</button>
          </div>
      </div>`
  }
  x = x + '</div>'
  
  
  document.getElementById('my-sunglasses').innerHTML = x
  