import { Injectable } from '@angular/core';
import { Tarefa } from 'Tarefa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigaBancoService {

  private bdjson = "http://localhost:3000/tarefa";

  constructor( private http: HttpClient ) { }

  carregadordados(): Observable<Tarefa[]> {
    console.log('Funciona Back End');
    return this.http.get<Tarefa[]>(this.bdjson);
  }

  salvardados(objeto : Tarefa) : Observable<Tarefa>{
    return this.http.post<Tarefa>(this.bdjson,objeto).pipe(take(1));
  }

  excluir(id:number){
    const bdapi = `${this.bdjson}/${id}`;
    return this.http.delete(bdapi);
  }

}
