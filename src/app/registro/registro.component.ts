
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;
  contactInfoVisible: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
      contactCheck: [false],
      email: [''],
      telefono: ['']
    });
  }

  toggleContactInfo() {
    this.contactInfoVisible = !this.contactInfoVisible;
  }

  registrarCliente() {
    if (this.registroForm.valid) {
   
      console.log(this.registroForm.value);
      alert('Cliente registrado exitosamente.'); 
    }
  }

  volverAlInicio() {
    this.router.navigate(['/inicio']);
  }
}
