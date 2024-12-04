
import { Component, inject, OnInit } from '@angular/core';
import { TrainDataService } from '../../train-data.service';
import { IStation } from '../../model/train';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";  // Correct import for Router

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']  // Corrected styleUrls
})
export class HomePageComponent implements OnInit {

  trainService = inject(TrainDataService);

  stationList: IStation[] = [];

  fromStation: number = 0;
  toStation: number = 0;
  dateOfTravel: string = "";

  router = inject(Router);  // Inject Angular Router

  ngOnInit(): void {
    this.loadAllStation();
  }

  loadAllStation() {
    this.trainService.getAllStation().subscribe((res: any) => {
      this.stationList = res.data;
    });
  }

  onSearch() {
    if (this.fromStation == 0 || this.toStation == 0 || this.dateOfTravel === '') {
      alert("Select Your Journey Details");
    } else {
      if (this.fromStation == this.toStation) {
        alert("From and To stations can't be the same");
      } else {
        this.router.navigate(["/search", this.fromStation, this.toStation, this.dateOfTravel]);
      }
    }
  }

}