import React from 'react';
import "./Card.css"
import CardCommon from '../../Component/CommonComponent/CardCommon';
import Button from '../../Component/CommonComponent/Button'
import { FaAngleRight } from "react-icons/fa6";


const Card = () => {
    return(
        <div className='cardPart'>
            <div className="container">
                <div className="cardWrapper">
                    <CardCommon className="card"
                    cardHeader="Tim Haldorsson" cardTitle="Paid Search Manager" cardDesc="Gothenburg, Sweden
                    tim@lunarstrategy.com" > 

                     <Button btnStyle='cardBtn' >
                       Book a free meeting <FaAngleRight className='cardIcon' />
                     </Button>
                     </CardCommon>
                    <CardCommon className="card"
                    cardHeader="Tim Haldorsson" cardTitle="Paid Search Manager" cardDesc="Gothenburg, Sweden
                    tim@lunarstrategy.com" > 

                     <Button btnStyle='cardBtn' >
                       Book a free meeting <FaAngleRight className='cardIcon' />
                     </Button>
                     </CardCommon>
                    <CardCommon className="card"
                    cardHeader="Tim Haldorsson" cardTitle="Paid Search Manager" cardDesc="Gothenburg, Sweden
                    tim@lunarstrategy.com" > 

                     <Button btnStyle='cardBtn' >
                       Book a free meeting <FaAngleRight className='cardIcon' />
                     </Button>
                     </CardCommon>
                    <CardCommon className="card"
                    cardHeader="Tim Haldorsson" cardTitle="Paid Search Manager" cardDesc="Gothenburg, Sweden
                    tim@lunarstrategy.com" > 

                     <Button btnStyle='cardBtn' >
                       Book a free meeting <FaAngleRight className='cardIcon' />
                     </Button>
                     </CardCommon>
                    <CardCommon className="card"
                    cardHeader="Tim Haldorsson" cardTitle="Paid Search Manager" cardDesc="Gothenburg, Sweden
                    tim@lunarstrategy.com" > 

                     <Button btnStyle='cardBtn' >
                       Book a free meeting <FaAngleRight className='cardIcon' />
                     </Button>
                     </CardCommon>
                    <CardCommon className="card"
                    cardHeader="Tim Haldorsson" cardTitle="Paid Search Manager" cardDesc="Gothenburg, Sweden
                    tim@lunarstrategy.com" > 

                     <Button btnStyle='cardBtn' >
                       Book a free meeting <FaAngleRight className='cardIcon' />
                     </Button>
                     </CardCommon>

                </div>
            </div>
        </div>
    )
}


export default Card;