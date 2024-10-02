import { useState } from 'react';
import { useRouter } from 'next/router';

const MenuIcon = ({ contStyle, barStyle, onClick }) => {
    return (
        <div className={contStyle} onClick={onClick}>
            <span className={barStyle}></span>
            <span className={barStyle}></span>
            <span className={barStyle}></span>
        </div>
    );    
};


export default MenuIcon;