import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';


declare var Chart: any;

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [ChartModule,RouterModule ,MatFormFieldModule,MatToolbarModule,MatButtonModule,MatInputModule,MatIconModule,MatCardModule, FormsModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit {
  data : any;
  constructor() { }

  ngOnInit(){
    this.data = {
      labels : ["Q1","Q2","Q3","Q4"],
      datasets :[{
        label : "first dataset",
        data : [10,20,30,41],
        backgroundColor :['green'],
        borderColor :['Black'],
        borderWidth: 1
      },
    ]
    }
  }

 
  }

