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
  day1: any;
  day2: any;
  day3: any;
  day4: any;
  day5: any;
  day6: any;
  day7: any;
  id: any;
  fid: any;
  constructor(private router: Router, private service: ServiceService) {
    this.id = this.service.id;
  }

  async ngOnInit() {
    this.fid = localStorage.getItem('fid');
    this.id = localStorage.getItem('uid');
    console.log('id local = ', this.id);
    console.log('uid', this.id);
    // this.service.id = this.id;
    this.day1 = await this.service.get_rank_day1(this.fid);
    this.day2 = await this.service.get_rank_day2(this.fid);
    this.day3 = await this.service.get_rank_day3(this.fid);
    this.day4 = await this.service.get_rank_day4(this.fid);
    this.day5 = await this.service.get_rank_day5(this.fid);
    this.day6 = await this.service.get_rank_day6(this.fid);
    this.day7 = await this.service.get_rank_day7(this.fid);
    console.log('day1',JSON.stringify(this.day1));
    console.log('da2', this.day2.score);
    console.log('day3', this.day3.score);

    this.img = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
      datasets: [
        {
          label: 'first dataset',
          data: [
            this.day7.score,
            this.day6.score,
            this.day5.score,
            this.day4.score,
            this.day3.score,
            this.day2.score,
            this.day1.score,
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
