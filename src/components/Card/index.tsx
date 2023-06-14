import { useState } from 'react';

import dotenv from 'dotenv';



const Form = () => {

    return (
        <div className="row  mx-auto w-100 mt-5 issoSim container">
            <div className="bg-escolhido rounded col-5 mb-5 container px-5" >

                <div className="row">
                    <h1 className="text-white col-8">C O N T A T O</h1>
                </div>
                <div className="row ">
                    <label className="text-white fs-5">Nome</label>
                    <input value='' type="text" placeholder="   Ex. João Pedro" className=" opacity-75 p-2 rounded col-12" />
                </div>
                <div className="row">
                    <label className="text-white fs-5">Email</label>
                    <input value='' type="email" placeholder="  @outlook.com" className=" opacity-75 p-2 rounded col-12" />
                </div>
                <div className="row">
                    <label className="text-white fs-5 col-12">Descrição breve </label>
                    <input value=''  type="text" placeholder="  Sobre o que se trata?" className=" opacity-75 p-2 mb-2 rounded col-12" />
                    <textarea value='' placeholder="Escreva sobre o assunto" className=" opacity-75 p-4 rounded col-12" />
                </div>
                
                <div className="row">
                    <img src='' alt="" className=" mx-auto opacity-75 col-12 " style={{width:"300px"}} />
                    <div className="d-grid gap-2 px-5 ">
                        <input value=''  type="text" placeholder="https://" className=" opacity-75 p-2 rounded col-12" />
                        <button  className="btn btn-outline-dark btn-warning" type="button">oioi</button>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Form