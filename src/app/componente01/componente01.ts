import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms'
import { Pessoa } from '../model/Person';


@Component({
  selector: 'app-componente01',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente01.html',
  styleUrl: './componente01.css'
})
export class Componente01 {

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
  })


  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  // Vetor
  vetor:Pessoa[] = [];

  indice:number = -1;

  // Função de cadastro

  cadastrar(){
    // Adicionando um novo elemento no array
    this.vetor.push(this.formulario.value as Pessoa);

    // Resetando o o formulario
    this.formulario.reset();

    // Mostrando no Console
    console.table(this.vetor);
  }

  selecionar(indice:number){
    this.indice = indice;
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });

    this.btnCadastrar = false;
  }

  alterar(){
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    this.formulario.reset();

    this.btnCadastrar = true;
  }

  remover(){
    this.vetor.splice(this.indice, 1);

    this.formulario.reset();

    this.btnCadastrar = true;
  }

  cancelar(){
    this.formulario.reset();

    this.btnCadastrar = true;
  }
}