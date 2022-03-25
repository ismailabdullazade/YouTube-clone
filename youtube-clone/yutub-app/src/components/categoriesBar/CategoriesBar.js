import React, { useState } from 'react';
import './_categoriesBar.scss';

const CategoriesBar = () => {

    const keywords = [
        'All',
        'React js',
        'Angular js',
        'React Native',
        'use of API',
        'Redux',
        'Music',
        'Algorithm Art ',
        'Guitar',
        'Bengali Songs',
        'Coding',
        'Cricket',
        'Football',
        'Real Madrid',
        'Gatsby',
        'Poor Coder',
        'Shwetabh',
    ]

    const [activeElement,setActiveElement]= useState('All');
    const handleActive = (value) =>{
        setActiveElement(value);
    }

    return (
        <div className='categoriesBar'>
            {
                keywords.map((value,i) => (
                    <span
                    className={activeElement === value ? 'active' : ''}
                    onClick={()=>handleActive(value)}
                    key={i}>{value}</span>
                ))
            }
        </div>
    );
}

export default CategoriesBar;