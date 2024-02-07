import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.presentStaticAlert();
  }

  async presentStaticAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta de Recolección',
      message: 'Este es un mensaje de Alerta.',
      buttons: ['OK'],
      
    });

  
    await alert.present();
  }
  
  async alerta2() {
    const alert = await this.alertController.create({
      header: 'Alerta ',
      message: 'Este es un mensaje de Alerta.',
      buttons: ['OK'],
      
    });
    await alert.present();
}
}