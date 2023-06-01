import React from 'react'

const DishesComponent = ({item}) => {
  return (
    <div>
       <div className='indiandish_header_card_container'>
            <img className='indiandish_header_card_img' src={item?.images} alt={item?.title} />
            <p className='indiandish_header_card_producttitle'>{item?.title}</p>
          </div>
    </div>
  )
}

export default DishesComponent