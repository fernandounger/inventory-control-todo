import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITodoItem } from 'src/app/model/todo-item.interface';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  categorias: string[] = ['Limpeza', 'Laticínios' , 'Bebidas', 'Papelaria']
  fornecedores: string[] = ['Felipe', 'Matheus', 'Ricardo']

  form!: FormGroup
  itemId!: number
  item!: ITodoItem

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {

   }

  ngOnInit(): void {
    this.initForm()
    this.route.paramMap.subscribe(item => {
      this.itemId = Number(item.get('id'))
      this.item = this.todoService.getById(this.itemId)
      if(!this.item){
        this.router.navigate([
          '/todo/list'
        ])
        return
      }
      this.form.setValue(this.item)
    })
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      nome: [ null , [Validators.required]],
      quantidade: [ null , [Validators.required, Validators.pattern("^[0-9]*$") , Validators.min(1), Validators.max(200)]],
      validade:[ null , [Validators.required]],
      categoria: [ null , [Validators.required]],
      fornecedor: [ null , [Validators.required]]
    })
  }

  OnSubmit(): void {
    if(this.form.invalid){
      return
    }
    this.todoService.update(this.itemId ,this.form.value)

    this.router.navigate([
      '/todo/list'
    ])
  }
  get f(){
    return this.form.controls;
  }
}
