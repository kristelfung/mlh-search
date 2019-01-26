import React from 'react';

const Input = (props) => {
    return (
        <div>
            <form>
                <input type="text" 
                    placeholder={props.placeholder} 
                    onChange={(e) => props.filterText(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Input;