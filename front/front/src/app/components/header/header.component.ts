import { Component } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  newTask : any 

  create(){
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3000/api/tasks",{ method: 'POST',
  headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({title: "New Task",  description: "Description of the new task"})
}
  )
      .then((response) =>{
        if(response.ok){
           console.log("ça marche");
         
         
        }
        else{
          reject("ça marche pas")
        }
      })
      .then((data)=> {
        this.newTask=data
        return resolve(data)
      })
    })
  }
}
