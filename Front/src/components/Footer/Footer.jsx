import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
        <section className='sectionFooter'>
            <img src="/logo.webp" alt="Amani Logo" className='titleFooter logoFooter'/>
            <p className='logoText'>© 2022 Amani. All rights reserved.</p>
            <p className='logoText'><Link href="/terms" className='logoText'>Terms of Service</Link> . <Link href="/policy" className='logoText'>Privacy Policy</Link></p>
        </section>
        <section className='sectionFooter'>
            <h5 className='titleFooter'>Tags</h5>
            <ul className='tags'>
                <li>
                    <button>BECOME A HOST</button>
                </li>
                <li>
                    <button>LIFESTYLE</button>
                </li>
                <li>
                    <button>SOCIAL</button>
                </li>
                <li>
                    <button>ENTERTAINMENT</button>
                </li>
                <li>
                    <button>NEWS</button>
                </li>
                <li>
                    <button>BOOKS</button>
                </li>
                <li>
                    <button>DESIGN</button>
                </li>
                <li>
                    <button>GADGETS</button>
                </li>
            </ul>
        </section>
        <section className='sectionFooter'>
            <h5 className="titleFooter">
                Social
            </h5>
            <ul className='vertical'>
                <li><a href="https://www.x.com"><i class="bi bi-twitter-x"></i></a></li>
                <li><a href="https://www.facebook.com"><i class="bi bi-facebook"></i></a></li>
                <li><a href="https://www.instagram.com"><i class="bi bi-instagram"></i></a></li>
                <li><a href="https://www.youtube.com"><i class="bi bi-youtube"></i></a></li>
            </ul>
        </section>
        <section className='sectionFooter'>
            <h5 className="titleFooter">About</h5>
            <ul className='vertical'>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/authors">Authors</a></li>
                <li><a href="/site">Sitemap</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer