import React, {useState} from "react";

const SearchBar = ({bob}) => {
    const [search, setSearch] = useState("")
    const [paramiter, setParamiter] = useState('Best_Match')

    const searching = () => {

        bob(search,paramiter)
        //if (paramiter === 'Rating') 
            //bob.sort((a,b)=> b.rating - a.rating);
        
    }

    return(
        <div>
            <input type="search" onChange={(event) => setSearch(event.target.value)}/>
            <h1>{search}</h1>
            <h2>{paramiter}</h2>
            <button onClick = {() => setParamiter('Best_Match')}>Best_Match</button>
            <button onClick = {() => setParamiter('Rating')}>Rating</button>
            <button onClick = {() => setParamiter('Review_Count')}>Review_Count</button>
            <button onClick={searching}>Search</button>
        </div>
    )
}

export default SearchBar