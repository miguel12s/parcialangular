import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { User } from '../../core/interfaces/user';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnChanges {
  @Input() user!:User
  public fb = inject(FormBuilder)
  public superheroCreate!:FormGroup
  public service=inject(UserService)
  public imageSrc!: string 
  constructor(){
    this.superheroCreate=this.initForm()
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateHero()

  }
  updateHero(){
    this.superheroCreate.patchValue({
      nombres:this.user.nombres,
      profesion:this.user.profesion,
      telefono:this.user.telefono,
      correo:this.user.correo
    })    
  }
  

  initForm(): FormGroup {
    return this.fb.group(
      {
        nombres: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(30)]],
        profesion: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
        telefono: ['', [Validators.required,Validators.min(3000000000),Validators.max(3510000000)]],
        correo:['',[Validators.pattern('.*@(unibarranquilla\.edu\.co|itsa\.edu\.co)$')]],
        foto:['',Validators.required]
      },
      
     


    )
  }
  onSubmit(){
   const user:User= this.superheroCreate.value
   user.foto=this.imageSrc
   
    

    this.service.editUser(this.superheroCreate.value,this.user.id)
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
