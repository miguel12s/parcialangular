import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public phoneOriginal=""
  private users: User[] = [
    {
      id: 1,
      nombres: "Juan Pérez",
      profesion: "Ingeniero de software",
      telefono: "+57 (300) 987 6543",
      correo: "juan @unibarranquilla.edu.co",
      foto: "https://www.okchicas.com/wp-content/uploads/2018/12/Hombres-guapos-11.jpg"
    },
    {
      id: 2,
      nombres: "María Rodríguez",
      profesion: "Diseñadora gráfica",
      telefono: "+57 (310) 123 4567",
      correo: "maria@unibarranquilla.edu.co",
      foto: "https://th.bing.com/th/id/OIP.eLvNMg--K-uAKrGeS8VgbwHaE8?w=1500&h=1000&rs=1&pid=ImgDetMain"
    },
    {
      id: 3,
      nombres: "Carlos Gómez",
      profesion: "Contador",
      telefono: "+57 (320) 555 7890",
      correo: "carlos@unibarranquilla.edu.co",
      foto: "https://www.okchicas.com/wp-content/uploads/2018/12/Hombres-guapos-11.jpg"
    },
    {
      id: 4,
      nombres: "Laura Martínez",
      profesion: "Periodista",
      telefono: "+57 (315) 246 8010",
      correo: "laura@unibarranquilla.edu.co",
      foto: "https://th.bing.com/th/id/R.28e2599db45fe4a13316a580fe00a6a4?rik=EHdkmmiBiW4Q8Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f-1yIlocuhN9A%2fVjTUiIn8O-I%2fAAAAAAAABz8%2fd3MDeazcTDs%2fs1600%2f11080824_351430138388726_2374566367614438083_o.jpg&ehk=w7AKP2RJzZTRBhLVs4F1Bmzby%2favDqwio7KbVBTioFY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id: 5,
      nombres: "Andrés López",
      profesion: "Médico",
      telefono: "+57 (350) 369 2580",
      correo: "andres@unibarranquilla.edu.co",
      foto: "https://www.okchicas.com/wp-content/uploads/2018/12/Hombres-guapos-11.jpg"
    }
  ];
  selectedImageUrl!: string | ArrayBuffer | null;
  imageUrl!: string;
  constructor() { }

  addSuperhero(superhero:User){
    superhero.id=this.users.length+1
    this.users.push(superhero)

  }
  get userss(){

    return this.users
  }

  editUser(user:User,id:number){
    
    const indice=this.users.findIndex((hero:User)=>
    hero.id===id
    )

    if(id!==-1){
      user.id=id
      this.users[indice]=user
      console.log(this.users);    
    }else{
      console.error('error al encontrar')
    }
  
    
    
  }

  delete(id:number){
    const indice=this.users.map((hero:User)=>
    hero.id
    ).indexOf(id)
    
    this.users.splice(indice,1)
    console.log(this.users)
}
userImages: { [key: string]: string } = {};

setUserImage(userId: string, imageUrl: string) {
  this.userImages[userId] = imageUrl;
}

getUserImage(userId: string): string | undefined {
  return this.userImages[userId];
}


formatPhone(phone:string){
   const number=phone.substring(0,3)
  
   const result=`+57 (${number}) ${phone.substring(3,6)} ${phone.substring(6,10)} `
   return result
}

reverseFormatPhone(phone:string){
   const result=`${phone.substring(5,8)}${phone.substring(10,13)}${phone.substring(14,18)}`
   return result.trim()
}


}
