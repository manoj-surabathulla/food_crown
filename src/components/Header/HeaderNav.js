import React from 'react'
import menu from '../../assets/img/menu.svg';
import './Header.scss'

const HeaderNav = () => {
    return (
        <>
            <main className='container'>
                <section className='header'>
                    <div className='header_container' >
                        <div className='header_nav'>
                            <img className='header_menu' src={menu} alt='menu' />
                        </div>
                        <div>
                            <ul className='header_lists'>
                                <li className='header_lists_items'>
                                    <a href='https://www.google.com'>Delivery</a>
                                </li>
                                <li className='header_lists_items'>
                                    <a href='https://www.google.com'>Pick Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='header_subcontainer'>
                        <div>
                            <h1 className='header_logo'>Food Crown</h1>
                        </div>
                        <div className='header_btn'>
                            <p className='header_btn_loginBtn'>Login</p>
                            <button className='header_btn_signupBtn'>Sign Up</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HeaderNav