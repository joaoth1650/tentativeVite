import { useState } from 'react';
import '../styles/stylee.css'
import Swal from 'sweetalert2'
import dotenv from 'dotenv';
const apiUrl = import.meta.env.VITE_APP_API_URL;



const Home = () => {
    const [description, setDescription] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [icone, setIcone] = useState<string>("") //
    const [image, setImage] = useState<string>("")
    const [titulo, setTitulo] = useState<string>("") // 
    const [urlThumb, setThumb] = useState<string>("") // 
    const [Label, setLabel] = useState<string>("SEND")
 

    const send = () => {
        if (description && email && name && titulo) {
            const conteudo = {
                "username": "Contact Tentative",
                "avatar_url": "https://as1.ftcdn.net/v2/jpg/05/55/43/74/1000_F_555437468_Ot5KfXfuYdoMWoSGz33xRRPIoybcRtoQ.jpg",
                "content": "Uma nova tentativa de contato foi realizada",
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
                      "text": "Responder no Email: " + email + " :)"
                    },
                  }
                ],
            }

            fetch( apiUrl, {
                method: 'POST',
                body: JSON.stringify(conteudo),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    setDescription("")
                    setName("")
                    setEmail("")
                    setImage("")
                    setTitulo("")
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
            {/* <div className="bg-segundary rounded mt-0 col-4 ">
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
            </div> */}
            <div className="bg-escolhido rounded col-5 mb-5 container px-5" >

                <div className="row">
                    <h1 className="text-white col-8">C O N T A T O</h1>
                </div>
                <div className="row ">
                    <label className="text-white fs-5">Nome</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="   Ex. João Pedro" className=" opacity-75 p-2 rounded col-12" />
                </div>
                <div className="row">
                    <label className="text-white fs-5">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="  @outlook.com" className=" opacity-75 p-2 rounded col-12" />
                </div>
                <div className="row">
                    <label className="text-white fs-5 col-12">Descrição breve </label>
                    <input value={titulo} onChange={e => setTitulo(e.target.value)} type="text" placeholder="  Sobre o que se trata?" className=" opacity-75 p-2 mb-2 rounded col-12" />
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
            {/* <div className="bg-segundary-segundary rounded mt-0 col-4">
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
            </div> */}
        </div>
    )

}

export default Home