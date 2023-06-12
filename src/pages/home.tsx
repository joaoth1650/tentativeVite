import { useState } from 'react';
import './style.css'
import Swal from 'sweetalert2'

const Home = () => {
    const [description, setDescription] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [icone, setIcone] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [titulo, setTitulo] = useState<string>("")
    const [urlThumb, setThumb] = useState<string>("")
    const [color, setColor] = useState<string>("btn btn-outline-warning ")
    const [formulario, setFormulario] = useState<string>("grid grid-flow-col grid-cols-1 grid-rows-1 gap-4")
    const [Label, setLabel] = useState<string>("SEND")



    const send = () => {
        if (description && email && name) {
            const contenido = {
                "username": "Contact Tentative",
                "avatar_url": "https://as1.ftcdn.net/v2/jpg/05/55/43/74/1000_F_555437468_Ot5KfXfuYdoMWoSGz33xRRPIoybcRtoQ.jpg",
                "content": "Um teste de mensagem",
                "tts": false,
                "embeds": [
                  {
                    "id": 23645914,
                    "description": description,
                    "author": {
                      "name": name,
                      "icon_url": icone 

                      //   "url": "https://www.youtube.com/channel/UCImmyvB_TBV3pGuVxuT4wsw",
                    },
                    "title": titulo,
                    "url": "https://discord.gg/brVS6b7sPr",
                    "color": 2622218,
                    "image": {
                      "url": image
                    },
                    "thumbnail": {
                      "url": urlThumb
                    },
                    "footer": {
                      "text": "Atenciosamente" + name + ":)"
                    },
                    "timestamp": "2023"
                  }
                ],
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
                    setImage("")
                    setFormulario("hidden grid grid-flow-col grid-cols-3 grid-rows-1 gap-4")
                })

                Swal.fire({
                    icon: 'success',
                    title: 'Mensagem enviada',
                    showConfirmButton: false,
                    timer: 2000
                  })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'PARECE QUE VOCÊ ESQUECEU DE PRENCHER ALGUM CAMPO IMPORTANTE!',
                text: 'Tente prencher o formulario novamente',
                showConfirmButton: false
              })
        }
    }


    return (
        <div className="row  mx-auto w-100 mt-5 issoSim container">
            <div className="bg-segundary rounded mt-0 col-4 ">
                <h1 className="w-100 mt-0"></h1>
                <div className="row">
                    <div className="colorPadrao opacity-25 w-25 mb-1"></div>
                    <div className="colorPadrao opacity-25 p-3"></div>
                </div>
                <div className="row">
                    <div className="colorPadrao opacity-25 w-25 mb-1"></div>
                    <div className="colorPadrao opacity-25 p-3"></div>
                </div>
                <div className="row">
                    <div className="colorPadrao opacity-25 w-25 mb-1"></div>
                    <div className="colorPadrao opacity-25 p-5 rounded col-12"></div>
                </div>
                <div className="colorPadrao opacity-25 p-4 rounded "></div>
            </div>
            <div className="bg-escolhido rounded col-5 mb-5 container px-5" >

                <div className="row">
                    <h1 className="text-white col-8">Describer</h1>
                </div>
                <div className="row ">
                    <label className="text-white fs-5">Nome</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Ex. João Pedro" className=" opacity-75 p-2 rounded col-12" />
                </div>
                <div className="row">
                    <label className="text-white fs-5">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="@outlook.com" className=" opacity-75 p-2 rounded col-12" />
                </div>
                <div className="row">
                    <label className="text-white fs-5 col-12">Descrição breve </label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Escreva sobre o assunto" className=" opacity-75 p-4 rounded col-12" />
                </div>
                
                <div className="row">
                    <img src={image} alt="" className=" mx-auto opacity-75 col-12 " style={{width:"300px"}} />
                    <div className="d-grid gap-2 px-5 ">
                        <input value={image} onChange={e => setImage(e.target.value)} type="text" placeholder="https://" className=" opacity-75 p-2 rounded col-12" />
                        <button onClick={send} className="btn btn-outline-dark btn-warning" type="button">{Label}</button>
                    </div>
                </div>

            </div>
            <div className="bg-segundary-segundary rounded mt-0 col-4">
                <h1 className="w-100 mt-0"></h1>
                <div className="row">
                    <div className="colorPadrao opacity-25 rounded w-25 mb-1 ms-0"></div>
                    <div className="colorPadrao opacity-25 p-3"></div>
                </div>
                <div className="row">
                    <div className="colorPadrao opacity-25 rounded w-25 mb-1 ms-0"></div>
                    <div className="colorPadrao opacity-25 p-3"></div>
                </div>
                <div className="row">
                    <div className="colorPadrao opacity-25 rounded w-25 mb-1 ms-0"></div>
                    <div className="colorPadrao opacity-25 p-5 rounded col-12"></div>
                </div>
                 <div className="colorPadrao opacity-25 p-4 rounded "></div>
            </div>
        </div>
    )

}

export default Home