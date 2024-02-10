import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { User } from '../../interfaces/user';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
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
