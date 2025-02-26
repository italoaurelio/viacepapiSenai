import React, { useState, useEffect } from "react";
import './style.css';

function UserReg(){

    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    async function buscaCep(){
        if (cep.length==8) {
            const queryUrl = `https://viacep.com.br/ws/${cep}/json/`;
            fetch(queryUrl)
                .then((res) => res.json())
                .then((data) => {
                    console.log("Response:", data);
                    const resposta = data;
                    setRua(resposta.logradouro);
                    setBairro(resposta.bairro);
                    setCidade(resposta.localidade);
                    setEstado(resposta.estado);
                })
                .catch((err) => console.error(err))
        }
    }

    function submit(formData) {
        const username = {
            "user":formData.get('user'), 
            "email":formData.get('email'),
            "cep":formData.get('cep'),
            "rua":formData.get('rua'),
            "bairro":formData.get('bairro'),
            "cidade":formData.get('cidade'),
            "estado":formData.get('estado'),
        };
        console.log(username);
    }
    
    return(
            <>
                <div id="container">
                    <h1>Cadastro de Usuário</h1>
                    <form action={submit} method="POST">
                        <div className="input">
                            <label htmlFor="user">Username</label><br/>
                            <input type="text" id="user" className="input" name='user'/>
                        </div>
                        <div className="input">
                            <label htmlFor="Email">Email</label><br/>
                            <input type="email" id="Email" className="input" name='email'/>
                        </div>
                        <div className="input">
                            <label htmlFor="cep">Cep</label><br/>
                            <input
                            type="text"
                            id="cep" 
                            value={cep} 
                            maxlength="8" 
                            title="CEP deve conter exatamente 8 dígitos" 
                            className="input" 
                            name='cep'
                            onChange={(e) => setCep(e.target.value)}
                            onBlur={buscaCep}/>
                        </div>
                        <div className="input">
                            <label htmlFor="id">Logradouro</label><br/>
                            <input type="text" id="id" className="input" name='rua' value={rua}/>
                        </div>
                        <div className="input">
                            <label htmlFor="id">Bairro</label><br/>
                            <input type="text" id="id" className="input" name='bairro' value={bairro}/>
                        </div>
                        <div className="input">
                            <label htmlFor="id">Cidade</label><br/>
                            <input type="text" id="id" className="input" name='cidade' value={cidade}/>
                        </div>
                        <div className="input">
                            <label htmlFor="id">Estado</label><br/>
                            <input type="text" id="id" className="input" name='estado' value={estado}/>
                        </div>
                        <button id='button'>Cadastrar</button>
                    </form>
                </div>
            </>
    );
}

export { UserReg }