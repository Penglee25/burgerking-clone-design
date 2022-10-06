import React from 'react';
import { Container } from "react-bootstrap";
import { Facebook, Instagram, Youtube, Twitter } from 'react-bootstrap-icons';

export default function Footer() {
        return (
            <div className='footer'>
            <Container className='py-5'>
                    <div className="row my-5">
                        <div className="col-md-3 col-sm-6 d-flex flex-column justify-content-start">
                            <h2>BKC INFO</h2>
                            <a href="#" className="mb-0"><span>About BK</span></a>
                            <a href="#" className="mb-0"><span>Trademarks Notice</span></a>
                            <a href="#" className="mb-0"><span>Food Quality</span></a>
                            <a href="#" className="mb-0"><span>News & Press</span></a>
                            <a href="#" className="mb-0"><span>Global Media Contacts</span></a>
                            <a href="#" className="mb-0"><span>Investor Relations</span></a>
                            <a href="#" className="mb-0"><span>Franchising</span></a>
                            <a href="#" className="mb-0"><span>International</span></a>
                            <a href="#" className="mb-0"><span>Menu</span></a>
                        </div>
                        <div className="col-md-3 col-sm-6 d-flex flex-column justify-content-start">
                            <h2>MY BK</h2>
                            <a href="#" className="mb-0"><span>BK App</span></a>
                            <a href="#" className="mb-0"><span>Gift Cards / Crown Cards</span></a>
                            <a href="#" className="mb-0"><span>Reload Card</span></a>
                            <a href="#" className="mb-0"><span>Check Card Balance</span></a>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-sm-3 d-flex flex-column justify-content-start">
                            <h2>CAREERS</h2>
                            <a href="#" className="mb-0"><span>Careers Home</span></a>
                            <a href="#" className="mb-0"><span>Opportunities</span></a>
                            <a href="#" className="mb-0"><span>Apply</span></a>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-sm-3 d-flex flex-column justify-content-start">
                            <h2>BK CARES</h2>
                            <a href="#" className="mb-0"><span>Nutrition Explorer</span></a>
                            <a href="#" className="mb-0"><span>Download Allergens</span></a>
                            <a href="#" className="mb-0"><span>Allergens View in Browser</span></a>
                            <a href="#" className="mb-0"><span>Privacy Policy</span></a>
                            <a href="#" className="mb-0"><span>Do Not Sell My Personal Information</span></a>
                            <a href="#" className="mb-0"><span>Sustainability</span></a>
                            <a href="#" className="mb-0"><span>Burger King Foundation</span></a>
                            <a href="#" className="mb-0"><span>Diversity</span></a>
                        </div>
                    </div>

                    <hr/>

                    <div className="row my-3 justify-content-between">
                        <div className="col-lg-auto col-sm">
                            <h2>BURGER KING</h2>
                        </div>
                        <div className="col-lg-auto col-sm">
                            <Instagram className='icons'/>
                            <Facebook className='icons'/>
                            <Youtube className='icons'/>
                            <Twitter className='icons'/>
                        </div>
                    </div>

                    <div className='terms d-flex align-items-center'>
                        <a href="#" className="mb-0"><span>Policies</span></a>
                        <div className="divider"></div>
                        <a href="#" className="mb-0"><span>Terms of Service</span></a>
                        <div className="divider"></div>
                        <a href="#" className="mb-0"><span>Accessibility</span></a>
                        <div className="divider"></div>
                        <a href="#" className="mb-0"><span>Contact Us</span></a>
                    </div>

                    <span>TM & Copyright 2021 Burger King Corporation. All Rights Reserved.</span>

            </Container>
            </div>
        );
}
