import React, { useEffect, useState } from 'react'

const Test1 = () => {
    const[val,setVal,] = useState(0);
    useEffect(() =>{ console.log("value changed")},[val]);

    
    }
  return (<>
    <h1>
        on 
    </h1>
    <button onClick={() => (setVal + 1)} click </button>
    <div>test1</div>
    </>
  )
}

export default Test1