import { Component, inject } from '@angular/core';
import {Login, register, registerApiResponce} from "../model/train"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainDataService } from '../train-data.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
   
  Register:register=new register();

  trainService= inject(TrainDataService);

  login:Login = new Login();

  onRegister(){
    this.trainService.createNewCustomer(this.Register).subscribe((res:registerApiResponce)=>{
      if(res.Result){
        alert("Registration Success")
      }else{
        alert(res.Message)
      }
    })
  }
  onLogin(){
    this.trainService.LoginCustomer(this.login).subscribe((res:registerApiResponce)=>{
      if(res.Result){
        alert("Login Success")
        localStorage.setItem('trainApp',JSON.stringify(res.Data))
      }else{
        alert(res.Message)
      }
    })
  }

  

}
