import React from 'react'

const CardCommon = ({className , children , cardHeader, cardTitle, cardDesc}) => {
  return (
    <div className={className}>
      <h2 className='card__header'>{cardHeader ? cardHeader : `Tim Haldorsson`}</h2>
      <h5 className='card__title'>{cardTitle ? cardTitle : `Paid Search Manager`}</h5>
      <p className='card__desc'> {cardDesc ? cardDesc : `Gothenburg, Sweden
tim@lunarstrategy.com`} </p>


    {children}
    </div>

  )
}

export default CardCommon;