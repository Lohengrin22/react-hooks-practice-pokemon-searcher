import React from "react";

function Search({search, handleSearch}) {
 

  // function handleChange(){
  //   onSearch(search)
  // }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} type="text" onChange={(e) => handleSearch(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
