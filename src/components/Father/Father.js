import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({house, ring}) => {
    return (
        <div>
            <h3>Father</h3>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Myself house={house} ring={ring} />
                <Brother house={house}/>
                <Sister house={house}/>
            </section>
        </div>
    );
};

export default Father;