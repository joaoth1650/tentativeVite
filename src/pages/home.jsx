import './style.css';

import { Card } from '../components/Card';

export function Home() {
  return (
    <div className="container">
    <h1>Projetones, coffeetones!</h1>
    <input type="text" placeholder="Digite o café desejado. . ."/>
    <button type="button">Realizar pedido</button>
    
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
  )
}