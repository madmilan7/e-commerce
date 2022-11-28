import React from 'react';

const Burger = ({ open }) => {
    return (
        <div className='w-8 h-8'>
            <div className={`w-full h-1 bg-purple-700 rounded transition-all
                ${open ? 'rotate-45' : 'rotate-0 mb-1'}`}>
            </div>
            <div className={`w-3/4 h-1 bg-purple-700 rounded transition-all  
                ${open ? '-rotate-45 w-full' : 'rotate-0'}`}>
            </div>
        </div>
    );
};

export default Burger;