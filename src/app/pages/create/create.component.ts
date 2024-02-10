import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  public fb = inject(FormBuilder)
  public superheroCreate!:FormGroup
  public service=inject(UserService)
  public imageSrc!: string 
  constructor(){
    this.superheroCreate=this.initForm()
  }

  initForm(): FormGroup {
    return this.fb.group(
      {
        nombres: ['', Validators.required],
        profesion: ['', Validators.required],
        telefono: ['', Validators.required],
        correo:['',Validators.required],
        foto:['',Validators.required]
      },
      
     


    )
  }
  onSubmit(){
   const user:User= this.superheroCreate.value
   user.foto=this.imageSrc

    

    this.service.addSuperhero(this.superheroCreate.value)
  }
  onChange(event:any){
const file=event.target.files[0]
const filereader=new FileReader()
filereader.onload = () => {
  this.imageSrc = filereader.result as string


};
filereader.readAsDataURL(file);
  }
}
