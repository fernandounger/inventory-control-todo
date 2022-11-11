import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { ITodoItem } from '../model/todo-item.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  KEY = 'todo'
  constructor(
    private storageService: LocalStorageService
  ) { }
  getById(key: number){
    const list = this.get()
    const item = list[key]
    return item
  }
  get() {
    const list = this.storageService.get(this.KEY) || []
    return list as ITodoItem[]
  }

  set(item: ITodoItem){
    const list = this.get()
    this.storageService.set(this.KEY, [...list, item])
  }
  remove(key: number):void{
    const list = this.get()
    list.splice(key, 1)
    this.storageService.set(this.KEY , list)
  }
  update(key: number , data : ITodoItem){
    const items = this.get()
    items[key] = data
    this.storageService.set(this.KEY, items)
  }
}
