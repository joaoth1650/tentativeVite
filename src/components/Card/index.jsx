import './style.css'

export function Card({name, time}) {
  return(
    <div className='card'>
      <strong>{name}</strong>
      <small>Pedido feito {time}</small>
    </div>
  )
}