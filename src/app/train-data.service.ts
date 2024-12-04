import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, register, registerApiResponce, Search } from './model/train';

@Injectable({
  providedIn: 'root'
})
export class TrainDataService {

  constructor(private http:HttpClient) { }


  apiUrl:string = "https://freeapi.miniprojectideas.com/api/TrainApp/"

  getAllStation(){
    return this.http.get(`${this.apiUrl}/GetAllStations`)
  }

  getTrainSearch(from:number,to:number,date:string):Observable<Search>{
    return this.http.get<Search>(`${this.apiUrl}/GetTrainsBetweenStations?departureStationId=${from}&arrivalStationId=${to}&departureDate=${date}`)
  }

  createNewCustomer(obj:register):Observable<registerApiResponce>{
    return this.http.post<registerApiResponce>(`${this.apiUrl}AddUpdatePassengers`,obj)
  }

  LoginCustomer(obj:Login){
    return this.http.post<registerApiResponce>(`${this.apiUrl}Login`,obj)
  }

}
