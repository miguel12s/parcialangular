import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { User } from '../../core/interfaces/user';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/services/user.service';
import { FormatPipe } from '../../core/pipes/format.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,FormatPipe],
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
