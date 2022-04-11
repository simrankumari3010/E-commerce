class MyHeader extends HTMLElement {
    // <a href="#" class="fas fa-user"></a>
    connectedCallback() {
        this.innerHTML = `
            
        <a href="#" class="logo">shopyshop<span>.</span></a>
        <div class="icons">
            <div id="menu-bar" class="fas fa-bars"></div>
            <div id="theme-toggler" class="fas fa-moon"></div>
            <a  class="fas fa-shopping-cart"></a>
            
            <a href="./index.html" class="fas fa">out</a>
            
        </div>
        <div class="cartBox">
        <div class="cart">
        <i class="fa fa-close"></i>
        <h1>Cart</h1></div></div>
        <nav class="navbar">

            <div class="user">
                <img src="images/first.jpg" alt="">
                <h3>Shopy</h3>
            </div>

            <div class="links">
                <a href="home.html">home</a>
                <a href="cloths.html">cloths</a>
                <a href="watches.html">watches</a>
                <a href="sunglass.html">sunglasses</a>
                
            </div>

            <div id="close" class="fas fa-times"></div>

        </nav>
        

        `
    }
}
customElements.define('my-header', MyHeader)

let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {

    navbar.classList.remove('active');

    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }

}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.querySelector('body').classList.add('active');
    } else {
        document.querySelector('body').classList.remove('active');
    }
}


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <div class="container">
                <div class="row">
                <div class="col-md-6 col-lg-3">
                        <div class="footer-about">
                            <h3>About Us</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros
                            </p>
                            <div class="footer-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-youtube"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="footer-contact">
                            <h3>Get In Touch</h3>
                            <p><i class="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                            <p><i class="fa fa-phone-alt"></i>+012 345 67890</p>
                            <p><i class="fa fa-envelope"></i>info@example.com</p>
                            <p><i class="far fa-clock"></i>24 hours</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="footer-links">
                            <h3>Useful Links</h3>
                            <a href="home.html">Home</a>
                            <a href="cloths.html">Cloths</a>
                            <a href="watches.html">Watches</a>
                            <a href="sunglass.html">Sunglasses</a>
                           
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="footer-project">
                            <h3>Latest Projects</h3>
                            <a href=""><img src="./images/12_.png" alt="Image"></a>
                            <a href=""><img src="./images/13.png" alt="Image"></a>
                            <a href=""><img src="./images/11.png" alt="Image"></a>
                            <a href=""><img src="./images/33.png" alt="Image"></a>
                            <a href=""><img src="./images/15.png" alt="Image"></a>
                          
                        </div>
                    </div>
                </div>
                </div>
                <div class="copyright">
                <div class="container">
                    <div class="row align-items-center">
                      
                        <div class="col-md-6">
                        <div class="copy-text">
                            <p>&copy; <a href="./home.html">Shopyshop</a>. All Rights Reserved</p>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="copy-menu">
                            <a href="">About</a>
                            <a href="">Terms</a>
                            <a href="">Privacy</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
            </div>
                    </div>
                   
            </div>
        </div>
      
         
        `
    }
}
customElements.define('my-footer', MyFooter)
