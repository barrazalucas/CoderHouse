import React from 'react';
import './Contador.css';

export default function Contador() {
 var miBoton = <button>Presionar</button>
 var animales = [
     {
         id: 1,
         name: 'perro',
         description:'Perro saltando'
     },
     {
        id: 2,
        name: 'gato',
        description:'Perro ladrando'
    },
 ]

 return(
     <div style={{backgroundColor: 'red'}}>
    {
        miBoton
    }

    {
        animales.map((animal) => {
            return (
                <ul key={animal.id}>
                  <li>{animal.name}
                    <p>{animal.description}</p>
                  </li>
                </ul>
            )
        })
    }

    <input type="text" />
     </div>    
 )
}