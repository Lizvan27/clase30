import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'clase30';

  formRegistro!: FormGroup;

  constructor(
    private userservice: UserService,
    private router:Router
  ){
    this.formRegistro = new FormGroup({
      nombre: new FormControl(" ",
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]),
      apellido: new FormControl("",
      [
        Validators.required,
      ]
      
  
      ),
      email: new FormControl("",
      [
        Validators.required,
        Validators.email
      ]
      ),
      website: new FormControl("",
      [
        Validators.required
      ]
      ),
    })
  }


  ngOnInit(): void {}

  registrar(){}
    /*this.userservice.registro(this.formRegistro.value)
    .then(response =>{
      console.log(response)
      this.router.navigate(['']);
    })
    .catch(error => console.log(error));
  }*/
}
