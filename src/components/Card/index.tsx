import './style.css'

export type CardProps = {
  name: string;
  time: string;
}

export function Card(props: CardProps) {
  return(
    <div className='card'>
      <strong>{props.name}</strong>
      <small>Pedido feito {props.time}</small>
    </div>
  )
}