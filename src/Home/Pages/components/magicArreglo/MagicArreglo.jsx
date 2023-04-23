import React from 'react'



function magicArreglo() {

    const arreglo = [ 
        {
            id:0,
            nombre: 'maymine'
        },
          {
            id: 1,
            nombre: 'michael'
        }
    ]   
    return (
        <ul>
            {arreglo.map(i => (
            <li jey= {i.id}>{i.nombre}</li>
            ))}
        </ul>
  )
}

export default magicArreglo