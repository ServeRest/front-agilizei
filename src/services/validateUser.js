import axios from 'axios';
import history from './history';

export function validateLogin(emaill) {
  axios
    .get('https://serverest-api-agilizei-com.umbler.net/usuarios')
    .then((response) => {
      const { usuarios } = response.data;
      usuarios.forEach((element) => {
        if (element.email === emaill) {
          if (element.administrador === 'true') {
            localStorage.setItem('serverest/userNome', element.nome);
            history.push('/admin/home');
          } else {
            history.push('/home');
          }
        }
      });
    });
}

export function validateToken() {
  const token = localStorage.getItem('serverest/userToken');
  if (token === null) { history.push('/login'); }
}

export function login(email, password) {
  axios
    .post('https://serverest-api-agilizei-com.umbler.net/login', {
      email: email,
      password: password,
    })
    .then((response) => {
      localStorage.setItem('serverest/userToken', response.data.authorization);
    })
    .catch((error) => {
      console.log(error.data);
    });
}
