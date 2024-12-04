import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { AddPassange, Search, searchTrain } from '../model/train';
import { TrainDataService } from '../train-data.service';
import { CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IStation } from '../model/train';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NavComponent,DatePipe,FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  activeRoute = inject(ActivatedRoute);

  SearchData:Search = new Search();

  trainService = inject(TrainDataService);

  trainList:searchTrain [] = []

  stationList: IStation[] = [];

  Passange:AddPassange = new AddPassange()

  pasangerList:AddPassange []= []

  constructor(){
    this.activeRoute.params.subscribe((res:any)=>{
      debugger;
      this.SearchData = res;
      this.GetTrainSearch()
      
    })
  }

  ngOnInit(): void {
      this.loadAllStation();
  }

  loadAllStation() {
    this.trainService.getAllStation().subscribe((res: any) => {
      this.stationList = res.data;
      
    });
  }

  GetTrainSearch(){
    this.trainService.getTrainSearch(this.SearchData.fromStationId,this.SearchData.toStationId,this.SearchData.dateOfTravel).subscribe((res:any)=>{
      debugger;
      this.trainList=res.data;
    })
  }

  AddPasanger(){

    const strObj = JSON.stringify(this.Passange);
    const parsObj = JSON.parse(strObj);
    this.pasangerList.push(parsObj)
    this.resetPasangerData()
  }

  remove($index:number){
    if($index > -1 && $index <this.pasangerList.length){
      this.pasangerList.splice($index,1);
    }
  }


  resetPasangerData(){
    this.Passange = new AddPassange();
  }

}
