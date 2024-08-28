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
    // Implemente a l�gica de autentica��o aqui
    if (this.username === 'admin' && this.password === 'admin') {
      // Redireciona para a p�gina home ap�s login bem-sucedido
      this.router.navigate(['/books']);
    } else {
      // Adicione l�gica para mostrar mensagem de erro
      console.log('Usu�rio ou senha inv�lidos');
    }
  }
}
