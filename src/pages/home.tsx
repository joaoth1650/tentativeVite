import { useState } from 'react';
import styled from 'styled-components';

const Boton = styled.button`
    padding: 5px;
    height: 50px;
    width: 150px;
    border-radius: 50px;
    `


const Home = () => {
const [description, setDescription] = useState<string>("")
const [phone, setPhone] = useState<string>("")
const [name, setName] = useState<string>("")
const [color, setColor] = useState<string>("btn btn-outline-warning ")
const [formulario, setFormulario] = useState<string>("grid grid-flow-col grid-cols-1 grid-rows-1 gap-4")
const [formularioSmall, setFormularioSmall] = useState<string>("grid grid-flow-col grid-cols-1 grid-rows-1 gap-4")
const [thanks, setThanks] = useState<string>("hidden")
const [boton, setBoton] = useState<string>("d-grid gap-2 col-2 mx-auto")
const [Label, setLabel] = useState<string>("SEND")

const send = () => {
    if (description && phone && name) {
        const contenido = {
            "content": "Que pasa amigos, vou hablar agora!",
            "embeds": [{
                "title": phone,
                "description": description,
                "footer": {
                    "text": "Obrigado, att:" + " " + name
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
                setPhone("")
                setFormulario("hidden grid grid-flow-col grid-cols-3 grid-rows-1 gap-4") 
                setThanks("grid grid-flow-col grid-cols-3 grid-rows-1 gap-4") 
                setBoton("hidden")
                })
    }
    else {
        setColor("text-white items-center bg-red-500 text-center flex justify-center font-bold hover:bg-red-400") 
        setLabel("Error try again")
    }
}

  return (
    <div>
        <div className="">
            <div className="mx-auto">
                <div className="text-center fs-1">Mande uma sugestão </div>
                <div className={formulario}>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label className="text-white text-base font-normal p-1">Descreva sua ideia </label>
                            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe your idea." className="p-4 rounded col-12" />
                            <br></br>
                            <label className="text-white text-base font-normal p-1">Informe seu numero</label>
                            <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="55-XX-XXXX-XXX" className="p-4 rounded col-12" />
                            <br></br>
                            <label className="text-white text-base font-normal p-1">Informe seu nome</label>
                            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Exa. Yan Santiago" className="p-4 rounded col-12" />
                        </div>
                    </div>
                </div>
                <div className={thanks}>
                    <div></div>
                    <div className="text-center text-4x1 font-bold text-gray-100 mt-10 mb-10"></div>
                    <div></div>
                </div>
            </div>
            <div className={boton}>
                <Boton onClick={send} className={color}>{Label}</Boton>
            </div>
        </div>
    </div>
  )
}

// export default Home