import {useState} from 'react';
import './style.css';

import { Card } from '../components/Card';

export function Home() {
  const [coffeeName, setCoffeeName] = useState('');
  const [coffees, setCoffees] = useState([]);

  function adicionarAoCoffee(){
    const newCoffee = {
      name: coffeeName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    setCoffees(prevState => [...prevState, newCoffee]);
  }


  return (
    <div className="container">
      <header>
        <h1>Projetones coffeetones!</h1>
        <div>
          <strong>Jotinha</strong>
          <img src="https://github.com/joaoth1650.png" alt="foto perfil" />
        </div>
      </header>
    

    <input 
    type="text" placeholder="Digite a bebida desejado. . ." onChange={e => setCoffeeName(e.target.value)}
    />

    <button type="button" onClick={adicionarAoCoffee} >Realizar pedido</button>
    

  {
    coffees.map(coffee => <Card  key={coffee.time} name={coffee.name} time={coffee.time} />)
  }

    </div>
  )
}