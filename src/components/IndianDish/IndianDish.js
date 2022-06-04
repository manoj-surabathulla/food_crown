import React from 'react'
import { DishBtns, Dishes } from './mock'
import './IndianDish.scss'

const IndianDish = () => {
  return (
    <>
      <div className='indiandish_header'>
        <h2 className='indiandish_header_title'>Indian Dish</h2>
        <span className='indiandish_header_subtitle'>45 Restaurents nearby</span>
      </div>
      <div className='indiandish_header_card'>
        {Dishes?.map((item, i) => (
          <div className='indiandish_header_card_container'>
            <img className='indiandish_header_card_img' src={item?.images} alt={item?.title} />
            <p className='indiandish_header_card_producttitle'>{item?.title}</p>
          </div>
        ))}
      </div>
      <div className='indiandish_header_view'>
        <button className='indiandish_header_viewBtn cursor'>View All</button>
      </div>

      <div className='indiandish_header_btns'>
        <div className='indiandish_header_btns_container'>
          {DishBtns?.map((item) => (
            <div className='indiandish_header_btns_btntitle'>
              <button className='indiandish_header_btns_Up'>{item?.btnName}</button>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default IndianDish