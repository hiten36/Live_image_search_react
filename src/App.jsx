import React, { useEffect, useState } from 'react';

function App()
{
    let [s1,s2]=useState('');
    function f1(e)
    {
        s2(e.target.value);
    }
    let src1=`https://source.unsplash.com/400x400/?${s1}`;
    return(
        <>
            <h1>Live image search</h1>
            <input onChange={f1} type="text"/>
            <button>Search</button>
            {s1==='' ? null : <img src={src1} alt="image here"/>}
        </>
    )
}
export default App;