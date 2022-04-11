window.onload=function(){
    // cart box
    let iconShopping=document.querySelector('.fa-shopping-cart');
    let cartCloseBtn=document.querySelector('.fa-close')
    let cartBox=document.querySelector('.cartBox')
    iconShopping.addEventListener("click",function(){
       cartBox.classList .add('active')
    });
    cartCloseBtn.addEventListener("click",function(){
        cartBox.classList .remove('active')
     });
    //  local storage
    let addToCartBtn=document.getElementById('cartadd')
    let items = [];
	 for(let i=0; i<addToCartBtn.length; i++){
         addToCartBtn[i].addEventListener("click",function(e){
            console.log(i+""+e.target);
            if(typeof(Storage) !== 'undefined'){
                let items={
                    id:i+1,
                    name:e.target.parentElement.children[0],
                };
        }else{
            console.log('Not is localstorage')
        }
        
    
         });
         
	
    }
    
        // let array=['a','b','c','d']
        // let cloths=[
        //     { photo: "./images/17.png", name: " Suit", price: "₹650"},
        //     { photo: "./images/24.png", name: "Trouser", price: "₹500"},
        //     { photo: "./images/27.png", name: "Black shirt", price: "₹450"},
        //     { photo: "./images/18.png", name: "Western", price: "₹490"},
        //     { photo: "./images/tenth.png", name: "Casual", price: "₹1000"},
        //     { photo: "./images/28.png", name: "Formal", price: "₹880"},
        //     { photo: "./images/29.png", name: "Sari", price: "₹900"},
        //     { photo: "./images/30.png", name: "Indian", price: "₹580"},
        //     { photo: "./images/31.png", name: "Top", price: "₹700" },
        //     { photo: "./images/32.png", name: "T-shirt", price: "₹450"},
        //     { photo: "./images/33.png", name: "Pant", price: "₹770"},
        //     { photo: "./images/34.png", name: "Coat", price: "₹600"},
        //     { photo: "./images/27.png", name: "Black shirt", price: "₹450" },
        //     { photo: "./images/sg1.jpeg", name: "Cool", price: "₹350"},
        //     { photo: "./images/sg2.jpg", name: "Design", price: "₹500"},
        //     { photo: "./images/sg3.png", name: "Lighties", price: "₹950"},
        //     { photo: "./images/sg4.jpg", name: "Raises", price: "₹490"},
        //     { photo: "./images/sg5.png", name: "Casual", price: "₹500"},
        //     { photo: "./images/sg6.jpg", name: "Formal", price: "₹750"},
        //     { photo: "./images/sg7.jpg", name: "Stylish", price: "₹900"},
        //     { photo: "./images/sg8.png", name: "Infras", price: "₹580"},
        //     { photo: "./images/sg9.png", name: "Bluerays", price: "₹700"},
        //     { photo: "./images/w1.jpg", name: "cool", price: "350"},
        //     { photo: "./images/w2.jpg", name: "Royals", price: "₹500"},
        //     { photo: "./images/w3.jpg", name: "Combo", price: "₹950"},
        //     { photo: "./images/w4.jpg", name: "Balck & white", price: "₹490"},
        //     { photo: "./images/w5.jpg", name: "Casual", price: "₹500"},
        //     { photo: "./images/w6.jpg", name: "Formal", price: "₹750"},
        //     { photo: "./images/w7.jpg", name: "Girlish", price: "₹900"},
        //     { photo: "./images/w8.png", name: "Indian", price: "₹580"},
        //     { photo: "./images/w9.jpg", name: "Branded", price: "₹700"}
        //   ]
        // localStorage.setItem("localstorageitem",JSON.stringify(cloths));
        
        // let data=localStorage.getItem("localstorageitem");
        //  console.log(JSON.parse(data)[0].channelName);
         localStorage.removeItem("localstorageitem")
    } 
    