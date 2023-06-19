import { useState, useEffect } from 'react';
import '../styles/stylee.css';
import '../styles/CardFlip.css';
import Swal from 'sweetalert2';
import dotenv from 'dotenv';

const apiUrl = import.meta.env.VITE_APP_API_URL;

const Home = () => {
  const [description, setDescription] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [icone, setIcone] = useState<string>(""); //
  const [image, setImage] = useState<string>("");
  const [titulo, setTitulo] = useState<string>(""); //
  const [urlThumb, setThumb] = useState<string>(""); //
  const [Label, setLabel] = useState<string>("NEXT");
  const [color, setColor] = useState('#BC8C4E');
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipCount, setFlipCount] = useState(0);
  const [primeiroEstado, setPrimeiroEstado] = useState(``);
  const [showMainCard, setShowMainCard] = useState(true);
  const [conclusaoEstado, setConclusaoEstado] = useState('d-none');
  const [segundoEstado, setIsSegundoEstado] = useState('d-none');
  const [terceiroEstado, setIsTerceiroEstado] = useState('d-none');

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setFlipCount(flipCount + 1);
  };

  useEffect(() => {
    setPrimeiroEstado(`card mx-auto ${isFlipped ? "flipped" : ""}`);
  }, [isFlipped]);

  useEffect(() => {
    if (flipCount === 2) {
      setShowMainCard(false);
    }
  }, [flipCount]);

  const Send = () => {
    if (name && email) {
      setDescription("");
      setName("");
      setEmail("");
      setImage("");
      setTitulo("");
      setColor("#505050");
      setIsSegundoEstado("bg-segundary rounded mt-0 col-4");
      setIsFlipped(!isFlipped);
      handleFlip();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'PARECE QUE VOCÊ ESQUECEU DE PREENCHER ALGUM CAMPO IMPORTANTE!',
        text: 'Tente preencher o formulário novamente.',
        showConfirmButton: false
      });
    }
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
              // "url": "https://www.youtube.com/channel/UCImmyvB_TBV3pGuVxuT4wsw",
            },
            "title": titulo,
            "url": "https://discord.gg/brVS6b7sPr",
            "color":  color,
            "thumbnail": {
              "url": urlThumb
            },
            "image": {
              "url": image
            },
            "fields": [
              {
                "name": "Email",
                "value": email
              }
            ]
          }
        ]};
  
        fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(conteudo)
        })
          .then((response) => {
            if (response.ok) {
              setDescription("");
              setName("");
              setEmail("");
              setImage("");
              setTitulo("");
              setColor("#BC8C4E");
              setIsFlipped(!isFlipped);
              handleFlip();
              setConclusaoEstado("d-block");
              setIsSegundoEstado("d-none");
              setIsTerceiroEstado("bg-primary rounded mt-0 col-4");
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Houve um problema ao enviar a solicitação!',
                text: 'Por favor, tente novamente mais tarde.',
                showConfirmButton: false
              });
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Houve um problema ao enviar a solicitação!',
              text: 'Por favor, tente novamente mais tarde.',
              showConfirmButton: false
            });
          });
      }
    };

    return (
      <div className="container">
        <div className={primeiroEstado}>
          {showMainCard && (
            <div className="card-front">
              <div className="card__content">
                <h2>Formulário de Contato</h2>
                <form onSubmit={send}>
                  <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {Label}
                  </button>
                </form>
              </div>
            </div>
          )}
  
          <div className="card-back">
            <div className="card__content">
              <h2>Formulário de Contato</h2>
              <form onSubmit={Send}>
                <div className="form-group">
                  <label htmlFor="titulo">Título:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Descrição:</label>
                  <textarea                   className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="color">Cor:</label>
                <input
                  type="color"
                  className="form-control"
                  id="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="urlThumb">URL da miniatura:</label>
                <input
                  type="url"
                  className="form-control"
                  id="urlThumb"
                  value={urlThumb}
                  onChange={(e) => setThumb(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">URL da imagem:</label>
                <input
                  type="url"
                  className="form-control"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {Label}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={segundoEstado}>
        <div className="card__content">
          <h2>Solicitação enviada com sucesso!</h2>
          <p>Obrigado por entrar em contato conosco.</p>
        </div>
      </div>

      <div className={terceiroEstado}>
        <div className="card__content">
          <h2>Ocorreu um erro!</h2>
          <p>Não foi possível enviar a solicitação. Por favor, tente novamente mais tarde.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

  
