import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../core/interfaces/user';
import { UserService } from '../../core/services/user.service';

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
        nombres: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(30)]],
        profesion: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
        telefono: ['', [Validators.required,Validators.min(3000000000),Validators.max(3250000000)]],
        correo:['',[Validators.pattern('.*@(unibarranquilla\.edu\.co|itsa\.edu\.co)$')]],
        foto:['',Validators.required]
      },
      
     


    )
  }
  onSubmit(){
   const user:User= this.superheroCreate.value
   user.foto=this.imageSrc
   user.telefono=user.telefono.toString()
  //  user.telefono=this.service.formatPhone(telefono)

    
    console.log(user);
    
    this.service.addSuperhero(user)
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
