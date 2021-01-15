import React from 'react'
import CardPersonel from '../card-personel/CardPersonel'
import './GroupCardPersonel.scss'


const GroupCardPersonel = ({currentData}) => {

    return (
        <div 
            className='wrapper-card-personel'
        >
            {
                currentData && currentData.map((val, idx) => {
                    return(
                        <CardPersonel
                        key={idx} 
                        border={true}
                        personel_id={val.id.value} 
                        foto_user={val.picture.large}
                        name={val.name.first + ' ' + val.name.last}
                        phone_number={val.phone}
                        birthday={val.dob.date}
                        email={val.email}
                        />
                    )
                })
            }
        </div>
    )
}

export default GroupCardPersonel
