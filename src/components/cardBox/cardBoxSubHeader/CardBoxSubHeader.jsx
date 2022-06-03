import React from 'react'
import './CardBoxSubHeader.css'
import {BsChevronContract} from 'react-icons/bs'

function CardBoxSubHeader() {
  return (
      <div className='CardBoxSubHeader'>
          <div className="sub-h">
              <span><BsChevronContract />#</span>
              <span>Coin<BsChevronContract /></span>
          </div>

          <div className="sub-h sub-mid">
              <span><BsChevronContract />Market Cap</span>
              <span><BsChevronContract />Price</span>
              <span><BsChevronContract />Volume</span>
          </div>

          <div className="sub-h">
              <span><BsChevronContract />Circulating</span>
              <span><BsChevronContract />Change</span>
              <span><BsChevronContract />Last 7 Days</span>
          </div>
      </div>
  )
}

export default CardBoxSubHeader

