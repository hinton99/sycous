import React from 'react'
import moment from 'moment';
import './Consumer.css'

export const ConsumerInfo = ({consumer}) => {

  
  return (
    <>
        <div className='col-xs-12' key={consumer.consumerId}>
          <div className='consumer-box'>
            <p>Customer Name: <span>{consumer.name}</span></p>
            <p>Email: <span>{consumer.email}</span></p>
            <p>Phone Number: <span>{consumer.phoneNumber}</span></p>
            <p>Occupation Date: <span>{moment(consumer.occupationDate).format('DD.MM.YYYY')}</span></p>
          </div>
        </div>
    </>
            )
        }
