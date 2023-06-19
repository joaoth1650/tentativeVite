import {useState} from "react";



function Home() {
    const [step, setStep] = useState(1);
  
    const nextStep = () => {
      setStep(step + 1);
    };
  
    const previousStep = () => {
      setStep(step - 1);
    };
  
    const handleSubmit = (event: any) => {
      event.preventDefault();
      // Lógica para enviar os dados do formulário
      // ...
    };
  
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Etapa 1 */}
                  {step === 1 && (
                    <div>
                      <h3>Etapa 1: Informações pessoais</h3>
                      <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="nome" name="nome" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                      </div>
                      <button type="button" className="btn btn-primary" onClick={nextStep}>Próximo</button>
                    </div>
                  )}
  
                  {/* Etapa 2 */}
                  {step === 2 && (
                    <div>
                      <h3>Etapa 2: Informações de contato</h3>
                      <div className="mb-3">
                        <label htmlFor="numero" className="form-label">Número de telefone</label>
                        <input type="tel" className="form-control" id="numero" name="numero" required />
                      </div>
                      <button type="button" className="btn btn-primary" onClick={nextStep}>Próximo</button>
                      <button type="button" className="btn btn-secondary" onClick={previousStep}>Voltar</button>
                    </div>
                  )}
  
                  {/* Etapa 3 */}
                  {step === 3 && (
                    <div>
                      <h3>Etapa 3: Outras informações</h3>
                      <div className="mb-3">
                        <label htmlFor="texto" className="form-label">Área de texto</label>
                        <textarea className="form-control" id="texto" name="texto" rows={4} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="url" className="form-label">URL</label>
                        <input type="url" className="form-control" id="url" name="url" />
                      </div>
                      <button type="submit" className="btn btn-primary">Enviar</button>
                      <button type="button" className="btn btn-secondary" onClick={previousStep}>Voltar</button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Home