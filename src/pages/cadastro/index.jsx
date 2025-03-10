import React, { useState, useEffect } from "react";
import './style.css';
import { PopUp } from './popUp.jsx';

function UserReg(){
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    const [users, setUsers] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    async function buscaCep(){
        if (cep.length === 8) {
            const queryUrl = `https://viacep.com.br/ws/${cep}/json/`;
            fetch(queryUrl)
                .then((res) => res.json())
                .then((data) => {
                    // Verifica se a resposta tem a cidade (localidade)
                    if (data.erro || !data.localidade) {
                        alert("CEP não é valido");
                        setRua("");
                        setBairro("");
                        setCidade("");
                        setEstado("");
                        return;
                    }
                    setRua(data.logradouro);
                    setBairro(data.bairro);
                    setCidade(data.localidade);
                    setEstado(data.uf);
                })
                .catch((err) => console.error(err));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Verifica se o CEP possui exatamente 8 dígitos
        if (cep.length !== 8) {
            alert("CEP deve conter exatamente 8 dígitos");
            return;
        }
        // Verifica se a cidade foi preenchida (CEP válido)
        if (!cidade) {
            alert("CEP não é valido");
            return;
        }
        const formData = new FormData(e.target);
        const newUser = {
            user: formData.get('user'),
            email: formData.get('email'),
            cep: formData.get('cep'),
            rua: formData.get('rua'),
            bairro: formData.get('bairro'),
            cidade: formData.get('cidade'),
            estado: formData.get('estado'),
        };
        setUsers([...users, newUser]);
        alert("Usuário cadastrado com sucesso");
        console.log(newUser);
    }

    return(
        <>
            <div id="container">
                <h1>Cadastro de Usuário</h1>
                <form onSubmit={handleSubmit} method="POST">
                    <div className="input">
                        <label htmlFor="user">Username</label><br/>
                        <input type="text" id="user" className="input" name="user"/>
                    </div>
                    <div className="input">
                        <label htmlFor="Email">Email</label><br/>
                        <input type="email" id="Email" className="input" name="email"/>
                    </div>
                    <div className="input">
                        <label htmlFor="cep">Cep</label><br/>
                        <input
                            type="text"
                            id="cep"
                            value={cep}
                            maxLength="8"
                            title="CEP deve conter exatamente 8 dígitos"
                            className="input"
                            name="cep"
                            onChange={(e) => setCep(e.target.value)}
                            onBlur={buscaCep}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="rua">Logradouro</label><br/>
                        <input type="text" id="rua" className="input" name="rua" value={rua}/>
                    </div>
                    <div className="input">
                        <label htmlFor="bairro">Bairro</label><br/>
                        <input type="text" id="bairro" className="input" name="bairro" value={bairro}/>
                    </div>
                    <div className="input">
                        <label htmlFor="cidade">Cidade</label><br/>
                        <input type="text" id="cidade" className="input" name="cidade" value={cidade}/>
                    </div>
                    <div className="input">
                        <label htmlFor="estado">Estado</label><br/>
                        <input type="text" id="estado" className="input" name="estado" value={estado}/>
                    </div>
                    <div style={{display: 'flex', gap: '10px', width: '90%', marginLeft: '5%'}}>
                        <button type="submit" id="button">Cadastrar</button>
                        <button type="button" id="button" onClick={() => setShowPopup(true)}>Visualizar</button>
                    </div>
                </form>
            </div>
            { showPopup && <PopUp users={users} closePopup={() => setShowPopup(false)} /> }
        </>
    );
}

export { UserReg }
