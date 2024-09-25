
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarefas = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Fazer compras', concluida: true },
    { descricao: 'Limpar a casa', concluida: false },
    { descricao: 'Finalizar projeto', concluida: true },
    { descricao: 'Assistir aula', concluida: false }
  ];

  alternarConclusao(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}
