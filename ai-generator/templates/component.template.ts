import { Component,signal } from '@angular/core'

@Component({
 selector:'app-{{name}}',
 standalone:true,
 template:`
  <h1>{{name}}</h1>
 `
})
export class {{className}}Component{

 state = signal(null)

}