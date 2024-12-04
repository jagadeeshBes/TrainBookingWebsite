import { Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
export const routes: Routes = [
    {
        path:"",
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:"home",
        component:HomePageComponent
    },
    {
        path:"nav",
        component:NavComponent
    },
    
    {
        path:"search/:fromStationId/:toStationId/:dateOfTravel",
        component:SearchComponent
    }
];
