import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'Tarefa';
import { CommonModule, DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { LigaBancoService } from '../service/liga-banco.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  id = 0 ;
  tarefa: string = '';
  nivel: string = '';
  data: string = '';

  aprova = true;

  listatarefa : Tarefa[] = [] ;

  constructor( private bancodados : LigaBancoService, private dadosurl: ActivatedRoute) {
    this.mostrarconsole();
  }

  mostrarconsole(){
    console.log("Carrega Dados");
    this.bancodados.carregadordados().subscribe((x) => this.listatarefa = x);
  }

  getLength(){
    if(this.listatarefa.length < 5){
      return 'block';
    }else{
      return 'none';
    }
  }

  salvardadostarefa(){

    for (let index = 0; index < this.listatarefa.length; index++) {
      let element = this.listatarefa[index].tarefa;

      if(this.tarefa === element){
        alert('Tarefa já criada');
        this.aprova = false;
        window.location.reload();
      }
    }

    if(this.aprova == true){
      console.log('Funciona');
      this.listatarefa.push({tarefa: this.tarefa, nivel: this.nivel, data: this.data});
    }

    //this.listatarefa.push({tarefa: this.tarefa, nivel: this.nivel, data: this.data});
    //window.location.reload();

  }

  consolelog(){
    console.log(this.listatarefa.length);
    //this.id = this.listatarefa.length - 1;
    //console.log(this.id);

    
    
    
  } // Metodo que vê o numero do Array

  enviardados(){

    if(this.aprova == true){
      this.bancodados.salvardados(this.listatarefa[this.listatarefa.length - 1]).subscribe();
      window.location.reload();
    }

    //this.bancodados.salvardados(this.listatarefa[this.listatarefa.length - 1]).subscribe();
  }

  excluirTarefa(bddados:Tarefa){
    let num: number = 0;
    num = Number(bddados.id);
    this.bancodados.excluir(num).subscribe();
  }

  excluirvisual(dadosvisual:Tarefa){
    this.listatarefa = this.listatarefa.filter((a) => dadosvisual.id !== a.id);
  }

  ngOnInit(): void {
  }

}
