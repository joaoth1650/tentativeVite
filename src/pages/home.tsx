import { useState } from 'react';
import './style.css'

const Home = () => {
const [description, setDescription] = useState<string>("")
const [email, setEmail] = useState<string>("")
const [name, setName] = useState<string>("")
const [color, setColor] = useState<string>("btn btn-outline-warning ")
const [formulario, setFormulario] = useState<string>("grid grid-flow-col grid-cols-1 grid-rows-1 gap-4")
const [Label, setLabel] = useState<string>("SEND")

const send = () => {
    if (description && email && name) {
        const contenido = {
            "content": "Que pasa amigos, vou hablar agora!",
            "embeds": [{
                "title": email,
                "description": description,
                "footer": {
                    "text": "atenciosamente:" + " " + name
                }
            }]
}
        fetch('https://discordapp.com/api/webhooks/1113561678689345637/sm7gTwM0MKzWna1cAK_kdMPKKQ6YlhjvwX2cZryVoVcALs0yYI2h5MDHI5EOr_lLV5dY', {
            method: 'POST',
            body: JSON.stringify(contenido),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
                setDescription("")
                setName("")
                setEmail("")
                setFormulario("hidden grid grid-flow-col grid-cols-3 grid-rows-1 gap-4") 
                })
    }
    else {
        setColor("text-white items-center bg-red-500 text-center flex justify-center font-bold hover:bg-red-400") 
        setLabel("Error try again")
    }
}

  return (
    <div className="row">
        <div className=" bg-segundary mt-5 w-25 col-4"></div>
            <div className="bg-escolhido w-50 mb-5 col-4" style={{height:"670px"}}> 
                <h1 className="text-white">Describer</h1>
                <div className="row">
                    <label className="text-white fs-5">Nome</label>
                    <input value={name} onChange={e => setEmail(e.target.value)} type="email" placeholder="Ex. João Pedro" className="p-2 rounded col-12" />
                </div>
                <div className="row">
                    <label className="text-white fs-5">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="@outlook.com" className="p-2 rounded col-12" />
                </div>
                <div className="row">
                    <label className="text-white fs-5 col-12">Descrição breve </label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Escreva sobre o assunto" className="p-4 rounded col-12" />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button onClick={send} className="btn btn-outline-warning" type="button">{Label}</button>
                </div>
            </div>
        <div className="bg-segundary mt-5 w-25 col-4"></div>
    </div>
  )
}

export default Home