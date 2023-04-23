import React, { useEffect, useState } from 'react'

function MagicButton() {

  const [data, setData] = useState(1);
    
    const handleClick = () => {

        setData(10);
    };

    useEffect(() => {


    }, [data]);

  return (
    <div>
        <span>{data}</span>
        <button onClick={handleClick}>Transformar A </button>
    </div>
  )
}

export default MagicButton