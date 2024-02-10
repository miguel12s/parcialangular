import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(users: User[],word:string, ...args: unknown[]): User[] {  
console.log(word)
if(word!==""){
    const user:User[]=users.filter(
      (userr:User)=>
        
        userr.nombres.toLowerCase().includes(word.toLowerCase())
      
    )
    console.log(user);
    return user
    // return users.filter(user=>user.nombres.includes(word))
   }else{
    return users
   }


  }

}
