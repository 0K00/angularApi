import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';


  getTasks() {
    return new Promise((resolve, reject) => {
      fetch("localhost:3000")
      .then((response) =>{
        if(response.ok){
          console.log("ça marche");
        }
        else{
          reject("ça marche pas")
        }
      })
      .then((data)=> {
        return resolve(data)
      })
    })
  }

}
