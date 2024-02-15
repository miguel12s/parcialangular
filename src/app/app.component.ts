import { Component, OnInit, createComponent, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { UpdateComponent } from './components/update/update.component';

import { User } from './core/interfaces/user';
import { CreateComponent } from './components/create/create.component';
import { UserService } from './core/services/user.service';
import { FilterPipe } from './core/pipes/filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CardComponent,CommonModule,CreateComponent,UpdateComponent,FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  word:string=""
  user!:User
  title = 'parcial-1-angular';
  public usuarios:User[] =[]
  public create=true
  public service=inject(UserService)

  wordSearch(word: string) {
    this.word=word
  }

ngOnInit(): void {
   this.usuarios=this.service.userss
}

change() {

  this.create=true
  
}
push(user:User){  
  this.create=false
  this.user=user
  this.usuarios=this.service.userss

}




  
  
  
}
