import React from 'react'
import { Doing, getToKnow, help, letUs } from './mock'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer container'>
            <div className='footer_main'>
                <div className=''>
                    <h2 className='header'>Get to Know use</h2>
                    <div>
                        <ul className='footer_lists'>
                            {getToKnow?.map((get, i) => (

                                <li key={i} className='footer_items'>{get?.item}</li>
                            ))}
                        </ul>
                        <div className='footer_followUs'>
                            <h2 className='footer_header'>Follow Us on</h2>
                            <div className='footer_icons'>
                                <a href='https://www.facebook.com'>
                                    <FiFacebook className='footer_img' />
                                </a>
                                <FiInstagram className='footer_img' />
                                <FiTwitter className='footer_img' />
                                <FiYoutube className='footer_img' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <h2 className='header'>Let Us Help You</h2>
                    <ul className='footer_lists'>
                        {letUs?.map((lets, i) => (
                            <li key={i} className='footer_items'>{lets?.item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='header'>Doing Business</h2>
                    <ul className='footer_lists'>
                        {Doing?.map((doing, i) => (
                            <li key={i} className='footer_items'>{doing?.item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='header'>Help With Us</h2>
                    <ul className='footer_lists'>
                        {help?.map((helps, i) => (
                            <li key={i} className='footer_items'>{helps?.item}</li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className='footer_copyright'>
                <p className='footer_quote'>Copyright © 2020 FoodCrown - All Rights Reserved</p>
            </div>


        </div>
    )
}

export default Footer