import React from 'react'
import Footer from '../Footer/Footer'
import IndianDish from '../IndianDish/IndianDish'
import Menucards from '../MenuCards/Menucards'
import './Dishes.scss'

const DishesPage = () => {
  return (
    <div className=''>
      <main className='container'>
        <section className='dish_parent'>
          <div className='indiandish_parent'>
            <IndianDish />
          </div>
          <div className='menucards_parent'>
            <Menucards />
          </div>
        </section>
      </main>
      <div className='footer-parent'>
        <Footer />
      </div>
    </div>
  )
}

export default DishesPage