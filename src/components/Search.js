import React from 'react'

function Search(props) {
    const { query, updateQuery } = props

    return (
        <input
            className='sidebar'
            type='text'
            placeholder='Filter Locations'
            value={query}
            onChange={(evt) => updateQuery(evt.target.value)}
        />
    )
}

export default Search