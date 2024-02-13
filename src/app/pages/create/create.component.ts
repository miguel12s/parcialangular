import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user';
import { FormatNumberPipe } from '../../pipes/format-number.pipe';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormatNumberPipe],
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
        profesion: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(30)]],
        telefono: ['', [Validators.required,Validators.min(3000000000),Validators.max(3250000000)]],
        correo:['',[Validators.pattern('.*@(unibarranquilla\.edu\.co|itsa\.edu\.co)$')]],
        foto:['',Validators.required]
      },
      
     


    )
  }
  onSubmit(){
   const user:User= this.superheroCreate.value
   user.foto=this.imageSrc
   const telefono=user.telefono.toString()
   user.telefono=this.service.formatPhone(telefono)

    

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
