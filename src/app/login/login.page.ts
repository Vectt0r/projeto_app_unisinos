import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Implemente a lógica de autenticação aqui
    if (this.username === 'admin' && this.password === 'admin') {
      // Redireciona para a página home após login bem-sucedido
      this.router.navigate(['/books']);
    } else {
      // Adicione lógica para mostrar mensagem de erro
      console.log('Usuário ou senha inválidos');
    }
  }
}
