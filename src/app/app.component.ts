import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Ayuda y soporte', url: '', icon: 'alert-circle' }, 
    { title: 'Comentarios', url: '', icon: 'chatbubble-ellipses' }, 
    { title: 'Donaciones', url: '', icon: 'cash' }, 
    { title: 'Cerrar Sesión', url: '', icon: 'arrow-forward' } ,
  ];

  constructor(
    private router: Router,
    private menuController: MenuController
  ) {}

  mostrarMenu() {
    return this.router.url !== '/alerta'; 
  }
  

}
