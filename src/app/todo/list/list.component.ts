import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'angular-web-storage';
import { ITodoItem } from 'src/app/model/todo-item.interface';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @LocalStorage('todo') todoList!: ITodoItem[]
  // todoList: ITodoItem[] = []

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.todoList = this.todoService.get()
  }
  updateItem(key: number){
    this.router.navigate([ '/todo/update/' + key ])
  }
  removeItem(key: number){
    this.todoService.remove(key)
  }

}
