import React from 'react';

const Header=({name,age,sex,pid})=>{
    return (
        <header>
            
             <h4>{name}</h4>
            <p>Age:{age}</p>
            <p>Sex:{sex}</p>
            <p>PID:{pid}</p>
          
        </header>
    );
};
export default Header;