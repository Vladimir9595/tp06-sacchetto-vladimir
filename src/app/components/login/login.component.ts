import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name = 'Angular';
  username: string = '';
  password: string = '';

  nom: string = '';
  prenom: string = '';
  cnx: boolean = false;

  constructor(private prodService: ProductService) {}
  connexion() {
    this.prodService
      .loginClient(this.username, this.password)
      .subscribe((c) => {
        this.username = c.username;
        this.password = c.password;
        this.cnx = true;
      });
  }
}
