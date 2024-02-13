import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { User } from './interfaces/user';
import { CreateComponent } from './pages/create/create.component';
import { UserService } from './services/user.service';
import { UpdateComponent } from './components/update/update.component';
import { FilterPipe } from './pipes/filter.pipe';

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
