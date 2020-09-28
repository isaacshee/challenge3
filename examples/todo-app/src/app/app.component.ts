import { Component, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("moveInLeft",[
      transition("void=> *",[style({transform:"translateX(300px)"}),
      animate(200,keyframes([
        style({transform:"translateX(300px)"}),
        style({transform:"translateX(0)"})
      ]))]),
      transition("*=>void",[style({transform:"translateX(0px)"}),
      animate(100,keyframes([
        style({transform:"translateX(0px)"}),
        style({transform:"translateX(300px)"})
      ]))])    
    ])
  ]
})
export class AppComponent {
  title = 'todo-app';

  todoArray = []; 
  // value: FormControl; 
  // myForm = new FormGroup({
  //   value: this.value
  // }); 
  todo: string; 
  @ViewChild('todoForm', {static: false}) todoForm; 

  addTodo(value){
    if(value !== ""){
      this.todoArray.push(value); 
      // todoForm.resetForm(); 
      console.log(this.todoArray);
      this.todoForm.resetForm(); 
    }
    else {
      alert("Field required **"); 
    }
  }
  /*delete item*/  
  deleteItem(todo){   
    for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo == this.todoArray[i]){
        this.todoArray.splice(i,1); 
        console.log("delete item");
  		}
  	}
  }

  // submit Form  
  todoSubmit(value:any){ 
    if(value != ""){
      console.log(value)  
      this.todoArray.push(value.todo); 
      this.todoForm.resetForm(); 
    }
    else {
      alert("Field required **"); 
    }
  }
}
