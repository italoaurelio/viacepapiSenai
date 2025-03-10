import React from 'react';
import './style.css';

export function PopUp({ users, closePopup }) {
	return (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<div style={{
				backgroundColor: '#161616',
				padding: '20px',
				borderRadius: '8px',
				maxHeight: '80vh',
				overflowY: 'auto'
			}}>
				<h2>Usuários Cadastrados</h2>
				{users.length > 0 ? (
					<table style={{ width: '100%', borderCollapse: 'collapse' }}>
						<thead>
							<tr>
								<th style={{ border: '1px solid white', padding: '8px' }}>Username</th>
								<th style={{ border: '1px solid white', padding: '8px' }}>Email</th>
								<th style={{ border: '1px solid white', padding: '8px' }}>Cep</th>
								<th style={{ border: '1px solid white', padding: '8px' }}>Logradouro</th>
								<th style={{ border: '1px solid white', padding: '8px' }}>Bairro</th>
								<th style={{ border: '1px solid white', padding: '8px' }}>Cidade</th>
								<th style={{ border: '1px solid white', padding: '8px' }}>Estado</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={index}>
									<td style={{ border: '1px solid white', padding: '8px' }}>{user.user}</td>
									<td style={{ border: '1px solid white', padding: '8px' }}>{user.email}</td>
									<td style={{ border: '1px solid white', padding: '8px' }}>{user.cep}</td>
									<td style={{ border: '1px solid white', padding: '8px' }}>{user.rua}</td>
									<td style={{ border: '1px solid white', padding: '8px' }}>{user.bairro}</td>
									<td style={{ border: '1px solid white', padding: '8px' }}>{user.cidade}</td>
									<td style={{ border: '1px solid white', padding: '8px' }}>{user.estado}</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<p style={{ color: 'white' }}>Não há usuários cadastrados</p>
				)}
				<button style={{ marginTop: '10px' }} onClick={closePopup}>Fechar</button>
			</div>
		</div>
	);
}
