import React, { Component } from 'react';

const Search = (props) => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Search" onChange={(e) => props.handleFilter(e.target.value)}/>
            </form>
        </div>
    )
}

export default Search;