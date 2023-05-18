import './Card.css'

import {FaStar, FaDownload} from 'react-icons/fa'

const Card = (props) => {
  return (
    <div className='most-item'>
    <div className='card-wrapper'>
      <img className='most-item-img' src={props.image} alt='img' />
      <div className='most-item-content'>
        <h4 className='most-item-title'>
          {props.title} <br />
          <span>{props.category}</span>  
        </h4>
        <ul>
          <li> 
            <span style={{color: "var(--color-icons)"}}>
              <FaStar />  
            </span> 
            <span className='number'> {props.rate}</span>
          </li>
          <li> 
            <span style={{color: "var(--color-primary)"}}>
              <FaDownload />  
            </span> 
            <span className='number'> {props.download}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Card