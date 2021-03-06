import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Search({search}) {
    const [query, setQuery] = useState("")
    
    return (<div>
        <hr/>
        <center>
        <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}></input>
        <button 
            type="button"
            onClick={() => search(query)}>Search</button>
        </center>
        <hr/>
    </div>)
}
Search.propTypes = {
    search: PropTypes.func.isRequired,
}
export default Search