import React from 'react';
import Logo from './assets/pictures/LogoAssociation.png'
import './assets/css/main.css';

const Navbar = () => {
    return <div id="header">
				
    <div class="top">
            <div id="logo">
                <span class="image avatar48"><img src={Logo} alt="logo" /></span>
                <h1 id="title">Les amis des animaux</h1>
                <p>A.s.b.l.</p>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#top" id="top-link"><span class="icon solid fa-home">Introduction</span></a></li>
                    <li><a href="#about" id="about-link"><span class="icon solid fa-user">Notre Association</span></a></li>
                    <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Nos Services</span></a></li>
                    <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Nous Contacter</span></a></li>
                    <li><a href="#other" id="other-link"><span class="icon solid fa-cat">Nos collaborateurs</span></a></li>
                </ul>
            </nav>
    </div>
    <div class="bottom">
            <ul class="icons">
                <li><a href="https://twitter.com/animauxamis" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/lesamisdesanimauxdefeluy/" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                <li><a href="#contact" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
            </ul>

    </div>

</div>
};

export default Navbar;