import React from 'react'
import { AiFillStar } from "react-icons/ai";
import approve from '../../assets/img/approve.svg'
import './MenuDetailedCard.scss'

const MenuDetailedCard = ({items}) => {
    console.log('items', items)
  return (
    <div>
        <div className='menucards_main_container'>
          <div className='menucards_main_img'>
            <img className='menucards_main_img_picture cursor' src={items?.img} alt='egg' />
            <img className='menucards_main_img_picture_approve' src={approve} alt='approve' />
          </div>
          <div className='menucards_main_subcontainer'>
            <div className='menucards_main_card'>
              <h2 className='menucards_main_card_title'>{items?.title}</h2>
              <p className='menucards_main_card_cost'>{items?.cost}</p>
            </div>

            <div className='menucards_main_category'>
              <p className='menucards_main_category_type'>{items?.type}</p>
              <p className='menucards_main_category_desc'>{items?.desc}</p>
            </div>
            <div className='menucards_main_ratingscontainer'>
              <div className='menucards_main_ratingsCard'>
                <p className='menucards_main_ratingsCard_ratings'> <AiFillStar className='menucards_main_ratingsCard_ratings_staricon' /> {items?.ratings}</p>
                <p className='menucards_main_ratingsCard_totalRatings'>{items?.totalratings}</p>
              </div>
              <div className='menucards_main_timingsFlex'>
                <p className='menucards_main_timingsFlex_time'>{items?.timings}</p>
                <span className='menucards_main_timingsFlex_delivery'>{items?.delivery}</span>
              </div>
              <div className='menucards_main_AddBtn'>
                <button className='menucards_main_AddBtn_btn cursor'>ADD +</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MenuDetailedCard