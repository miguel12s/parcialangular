import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() wordSearch:EventEmitter<string> =new EventEmitter<string>
onChange(event: any) {
const palabra=event.target.value
this.wordSearch.emit(palabra)


}
@Output() change:EventEmitter<boolean> =new EventEmitter<boolean>


  push() {
this.change.emit(false)
}

}
