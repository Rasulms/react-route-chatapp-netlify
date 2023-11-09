import React, { useContext } from 'react';
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa';
import DataContext from './contexts/DataContext';

const Header = ({ title }) => {
    const { width } = useContext(DataContext)

    return (
        <header className='Header' >
            <h3>{title}</h3>
            {width < 768 ? <FaMobileAlt className='icn' /> :
                width < 990 ? <FaTabletAlt /> :
                    <FaLaptop />}

        </header>
    )
}



export default Header
