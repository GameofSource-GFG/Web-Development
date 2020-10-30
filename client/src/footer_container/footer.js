import React from 'react'
import Footer from '../components/footerAssests/footericons/footerStyling'
import Icon from '../components/footerAssests/footericons'

// Footer Body linked the content using routing

export function FooterContainer() {
    return (
        <Footer>
            <h1 style={{ color: "green", textAlign:"center" }}>GeeksForGeeks</h1>
            <h3 style={{ color: "green", textAlign:"center" }}>Student Chapter</h3>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Link</Footer.Title>
                    <Footer.Link href="#">Home</Footer.Link>
                    <Footer.Link href="#">About Us</Footer.Link>
                    <Footer.Link href="#">Events</Footer.Link>
                    <Footer.Link href="#">Member</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Addrees</Footer.Link>
                    <Footer.Link href="#">Addrees1</Footer.Link>
                    <Footer.Link href="#">Email</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
            <hr></hr>
            <p style={{textAlign:"center" }}>Copyright<span>&#169;</span> 2020  All rights reserved | <Footer.Link href="#">Privacy Policy</Footer.Link> | <Footer.Link href="#">Terms of Service</Footer.Link>
                </p>
        </Footer>
    )
}