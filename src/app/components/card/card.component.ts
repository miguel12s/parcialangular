import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {


  @Input() usuario!: User
  @Output() user: EventEmitter<User> = new EventEmitter<User>


  private service = inject(UserService)

  delete(id: number) {
    this.service.delete(id)

  }

  push() {
    this.user.emit(this.usuario)

  }

  
}
