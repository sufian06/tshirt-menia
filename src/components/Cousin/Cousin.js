import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({name, house}) => {
    return (
        <div>
            <h4>Cousin - {name}</h4>
            <p><small>House: {house}</small></p>
            <section>
                <Friend />
            </section>
        </div>
    );
};

export default Cousin;