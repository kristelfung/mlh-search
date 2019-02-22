import React from 'react';
import searchIcon from './images/search.svg';

const Input = (props) => {
    return (
        <div>
            <form className="search">
                <img src={searchIcon} className="icon"/>
                <input type="text" 
                    placeholder={props.placeholder} 
                    onChange={(e) => props.filterText(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Input;