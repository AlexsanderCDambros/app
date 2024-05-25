import { Component } from '@angular/core';
import { HeaderService } from '../../../../core/services/header.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _mostrarSenha: boolean = false;

  constructor(
    private headerService: HeaderService
  ) {
    this.headerService.setShowHeader(false);
  }

  get mostrarSenha(): boolean {
    return this._mostrarSenha;
  }

  public toogleMostrarSenha(): void {
    this._mostrarSenha = !this._mostrarSenha;
  }
}
