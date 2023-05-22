import React from 'react';

const H1=({name,address,refby})=>{
    return (
        <header>
            
             <h4>{name}</h4>
             <p>{address}</p>
             <h4>Ref.By:{refby}</h4>
        </header>
    );
};
export default H1;