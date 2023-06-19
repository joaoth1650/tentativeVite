import { useState, useEffect } from 'react';
import '../styles/stylee.css'
import '../styles/CardFlip.css'
import Swal from 'sweetalert2'
import dotenv from 'dotenv';

const apiUrl = import.meta.env.VITE_APP_API_URL;

interface Erros {
    nome?: string;
    email?: string;
    titulo?: string;
    texto?: string;
}



const Home = () => {
    const [description, setDescription] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [icone, setIcone] = useState<string>("") //
    const [image, setImage] = useState<string>("")
    const [titulo, setTitulo] = useState<string>("") // 
    const [urlThumb, setThumb] = useState<string>("") // 
    // const [Label, setLabel] = useState<string>("SEND")
    const [color, setColor] = useState('#BC8C4E');
    const [isFlipped, setIsFlipped] = useState(false);
    const [flipCount, setFlipCount] = useState(0);
    const [primeiroEstado, setPrimeiroEstado] = useState(``)
    const [showMainCard, setShowMainCard] = useState(true);
    // const [conclusaoEstado, setConclusaoEstado] = useState('d-none')
    // const [segundoEstado, setIsSegundoEstado] = useState('d-none');
    // const [terceiroEstado, setIsTerceiroEstado] = useState('d-none');
    const [step, setStep] = useState(1);
    const [erros, setErros] = useState<Erros>({});

    const Flip = () => {
        setIsFlipped(!isFlipped);
        setFlipCount(flipCount + 1);
    };


    useEffect(() => {
        setPrimeiroEstado(`card mx-auto ${isFlipped ? "flipped" : ""}`);
    }, [isFlipped]);

    useEffect(() => {
        if (flipCount == 2) {
            setShowMainCard(false);
        }
    }, [flipCount]);


    const previousStep = () => {
        setIsFlipped(!isFlipped);
        Flip();
    };

    const nextStep = () => {
        if (validarFormulario() && name && email) {
            setIsFlipped(!isFlipped);
            Flip();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'PARECE QUE VOCÊ ESQUECEU DE PREENCHER ALGUM CAMPO IMPORTANTE!',
                text: 'Tente preencher o formulario novamente',
                showConfirmButton: false
            })
        }
    };

    const validarFormulario = () => {
        const novosErros: Erros = {};

        if (name.trim() === '') {
            novosErros.nome = 'Por favor, informe o nome.';
        }

        if (email.trim() === '') {
            novosErros.email = 'Por favor, informe o email.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            novosErros.email = 'Por favor, informe um email válido.';
        }

        setErros(novosErros);

        return Object.keys(novosErros).length === 0;
    };


    const send = () => {
        if (description && titulo) {
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

            fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(conteudo),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    setDescription("");
                    setName("");
                    setEmail("");
                    setImage("");
                    setTitulo("");
                    setColor("#3a5181");
                    setPrimeiroEstado('d-none')
                })

            Swal.fire({
                icon: 'success',
                title: 'Mensagem enviada',
                showConfirmButton: false,
                timer: 1500
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
        <div className="row mx-auto w-100 mt-5 issoSim container" >
            {/* <div className={segundoEstado}>
                <h1 className="w-100 mt-0 opacity-50">Check</h1>
                <div className="row">
                    <div className="colorPadrao opacity-25 rounded w-25 mb-1"></div>
                    <div className="colorPadrao opacity-25 rounded p-3"></div>
                </div>
                <div className="row">
                    <div className="colorPadrao opacity-25 rounded w-25 mb-1"></div>
                    <div className="colorPadrao opacity-25 p-3"></div>
                </div>
                <div className="row">
                    <div className="colorPadrao opacity-25 rounded w-25 mb-1"></div>
                    <div className="colorPadrao opacity-25 p-5 rounded col-12"></div>
                </div>
                <div className="colorPadrao opacity-25 p-4 rounded "></div>
            </div> */}
            {showMainCard && (
                <div className={primeiroEstado} style={{ backgroundColor: color, transition: 'background-color 1s ease' }} >
                    <div className="card-inner">
                        <div className="card-front">
                            <div className="row">
                                <h1 className="text-white col-8">C O N T A T O</h1>
                            </div>
                            <div className="row ">
                                <label className="text-white fs-5">Nome</label>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="   Ex. João Pedro" className=" opacity-75 p-2 rounded col-12" />
                                {erros.nome && <span>{erros.nome}</span>}
                            </div>
                            <div className="row">
                                <label className="text-white fs-5">Email</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="  @outlook.com" className=" opacity-75 p-2 rounded col-12" />
                                {erros.email && <span>{erros.email}</span>}
                            </div>
                            <div className="d-grid gap-2 px-5 mt-5 ">
                                <button onClick={nextStep} className="btn btn-outline-dark btn-warning" type="button">Proximo</button>
                                
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="row">
                                <label className="text-white fs-5 col-12">Descrição breve </label>
                                <input value={titulo} onChange={e => setTitulo(e.target.value)} type="text" placeholder="  Sobre o que se trata?" className=" opacity-75 p-2 mb-2 rounded col-12" />
                                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Escreva sobre o assunto" className=" opacity-75 p-4 rounded col-12" />
                            </div>

                            <div className="row">
                                <img src={image} alt="" className=" mx-auto opacity-75 col-12 rounded " style={{ width: "300px" }} />
                                <div className="d-grid gap-2 px-5 ">
                                    <input value={image} onChange={e => setImage(e.target.value)} type="text" placeholder="https://" className=" opacity-75 p-2 rounded col-12" />
                                    <button type="button" className="btn btn-secondary" onClick={previousStep}>Voltar</button>
                                    <button onClick={send} className="btn btn-outline-dark btn-warning" type="button">Enviar</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* <div className={conclusaoEstado} style={{ width: '900px', height: '700px' }}>
                <h1 className="text-center"></h1>

            </div> */}
            {/* <div className={terceiroEstado}>
                <h1 className="w-100 mt-0 opacity-50 ">Check</h1>
                <div className="row">
                    <div className="colorPadrao opacity-25 z-index-0 rounded w-25 mb-1 ms-0"></div>
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