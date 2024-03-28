import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

declare var Chart: any;

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [
    ChartModule,
    RouterModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
  ],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css',
})
export class GraphComponent implements OnInit {
  img: any;
  day1: any | undefined;
  day2: any  | undefined;
  day3: any  | undefined;
  day4: any  | undefined;
  day5: any  | undefined;
  day6: any  | undefined;
  day7: any  | undefined;
  id: any;
  fid: any;
  constructor(private router: Router, private service: ServiceService) {
    this.id = this.service.id;
  }

  async ngOnInit() {
    if(localStorage.getItem("uid")){
      this.router.navigateByUrl('/');
    }
    this.fid = localStorage.getItem('fid');
    this.id = localStorage.getItem('uid');
    console.log('id local = ', this.id);
    console.log('uid', this.id);
    console.log('id', this.fid);
    // this.service.id = this.id;
    this.day1 = await this.service.get_rank_day1(this.fid);
    this.day2 = await this.service.get_rank_day2(this.fid);
    this.day3 = await this.service.get_rank_day3(this.fid);
    this.day4 = await this.service.get_rank_day4(this.fid);
    this.day5 = await this.service.get_rank_day5(this.fid);
    this.day6 = await this.service.get_rank_day6(this.fid);
    this.day7 = await this.service.get_rank_day7(this.fid);
    console.log('day1',Math.floor(this.day1[0].score));
    console.log('day2', Math.floor(this.day2[0].score));
    console.log('day3', Math.floor(this.day3[0].score));
    console.log('day4', Math.floor(this.day4[0].score));
    console.log('day5', Math.floor(this.day5[0].score));
    console.log('day6', Math.floor(this.day6[0].score));
    console.log('day7', Math.floor(this.day7[0].score));

    
    this.img = {
      labels: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'],
      datasets: [
        {
          label: 'first dataset',
          data: [
            Math.floor(this.day7[0].score),
            Math.floor(this.day6[0].score),
            Math.floor(this.day5[0].score),
            Math.floor(this.day4[0].score),
            Math.floor(this.day3[0].score),
            Math.floor(this.day2[0].score),
            Math.floor(this.day1[0].score),
        ],
          backgroundColor: ['green'],
          borderColor: ['Black'],
          borderWidth: 1,
          
        },
      ],
      
    };
  }
  profile() {
    // this.service.id = this.id;
    localStorage.removeItem("fid");
    this.router.navigateByUrl('/profile');
  }
}
