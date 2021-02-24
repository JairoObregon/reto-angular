import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styles: [
  ]
})
export class ComponentComponent implements OnInit {

  forma:FormGroup;

  constructor(private fb:FormBuilder) {
    this.Form()
   }

  ngOnInit(): void {
    console.log("carga otra vez, por alguna razon no carga el mapa")
  }

  Form(){
    this.forma = this.fb.group({
      name: [''],
      email: [''],
      subject: [''],
      message: ['']
    });
    
  }
  Enviar(){
    console.log("enviando al back")
    console.log(this.forma.value)
  }

}
