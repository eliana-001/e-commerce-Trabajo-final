import React from 'react';
import './Header.css';
import Menu from '../../pages/Menu/menu';


export default function Header(){
return (
<header className="header">
<div className="logo">
<div className="logo-mark" aria-hidden>
<svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" stroke="#EA5C5A" strokeWidth="1.6" fill="none" />
<path d="M8 12c1.6-3 6-3 6 0" stroke="#C16653" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
<div className="logo-text">
<span className="brand">Koko</span> <span className="ramen">Ramen</span>
</div>
</div>


<nav className="nav" aria-label="Main navigation">
<a className="active" href="#">Home</a>
<a href={Menu}>Menu</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
<button className="cta">Order Now</button>
</nav>
</header>
);
}