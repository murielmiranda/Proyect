import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  formularioRegistro: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController : AlertController,
    private router: Router, 
    ) 
    { 
    this.formularioRegistro = this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'email' : new FormControl("",Validators.required),
      'password' : new FormControl("",Validators.required),
      'confirmacionPassword' : new FormControl("",Validators.required)
    });
    } 
  ngOnInit() {}




  guardar(){
  var f = this.formularioRegistro.value;

  if (this.formularioRegistro.valid) {  
    if (f.password === f.confirmacionPassword) {
      var usuario = {
        nombre: f.nombre,
        password: f.password,
        email: f.email
      }
      localStorage.setItem('usuario', JSON.stringify(usuario));

      this.Alerta("Registro Exitoso", "Inicia sesión").then(() =>
        this.router.navigate(['login'])
      )

    }else{
      this.Alerta("Contraseña no coincide", "Confirma tu contraseña")
    }
  
  }else{
    
    this.Alerta("Campos invalidos", "Debes llenar todos los campos")
    
  }
  
  } 
  async Alerta(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
    return;

  }
}