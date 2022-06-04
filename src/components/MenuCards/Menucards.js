import React from 'react'
import { menuList } from './mock'
import MenuDetailedCard from '../../common/MenuDetailedCard/MenuDetailedCard';
import './MenuCards.scss'

const Menucards = () => {
  return (
    <div className='menucards_main'>
      {menuList?.map((items, i) => (
        <MenuDetailedCard items = {items} />
      ))}
      <div className='menucards_main_view'>
        <button className='menucards_main_viewBtn cursor'>View All</button>
      </div>
    </div>
  )
}

export default Menucards