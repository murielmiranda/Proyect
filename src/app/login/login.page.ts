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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, 
    private router: Router, 
    public alertController : AlertController) { 
    this.formularioLogin = this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'password' : new FormControl("",Validators.required)
    })
  }



  ngOnInit() {
  }

  ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario')!);
    if (this.formularioLogin.valid) {
      if(usuario.email === f.nombre && usuario.password === f.password){
        console.log('Ingresado');
        this.router.navigate(['home'])
      }else{
        this.Alerta("Credenciales inválidas", "Proporciona nuevamente tus credenciales")
       
      }
    
      
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
