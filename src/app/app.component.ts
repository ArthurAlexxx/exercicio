
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarefas = [
    { descricao: 'Estudar para ac1', concluida: false },
    { descricao: 'Compra mandicoca', concluida: true },
    { descricao: 'Limpar a casa', concluida: false },
    { descricao: 'Finalizar projeto', concluida: true },
    { descricao: 'Dormir cedo', concluida: false }
  ];

  alternarConclusao(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}
