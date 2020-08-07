import React, { useEffect, useState } from "react";

const Search = (page) => {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
    .then(res => res.json())
    .then(json => {
      setSelected(json.data);
    });
  }, [page]);

 // console.log(selected);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter username to search"
        value={search}
        onChange={e => {
          e.preventDefault();
          setSearch(e.target.value);
          //const text = e.target.value.toLowerCase();
        }}
      />
      {selected &&
        selected
          .filter(
            select => select.first_name.toLowerCase().includes(search),
            selected
          ) 
          .map(select => <div className="list">{select.first_name}</div>)}    
          </div>
  );
}

export default Search;
