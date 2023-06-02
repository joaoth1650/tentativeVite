import React from 'react'

const discord = () => {
  return (
    <div className="bg-light">
      <nav className="fixed-top p-2 bg-primary text-white">
        Anonimous mensage
      </nav>

      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="card p-3">
          <form action="">
            <div className="mb-1">
              <label htmlFor="exampleInputPassword1" className="form-label">Nome</label>
              <input type="text" className="form-control form-control-sm" id="" />
            </div>
            <div className="mb-1">
              <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
              <input type="email" className="form-control form-control-sm" id="" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Mensagem</label>
              <textarea 
              className="form-control form-control-sm"
              cols={30} 
              rows={5}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary ms-5">Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default discord