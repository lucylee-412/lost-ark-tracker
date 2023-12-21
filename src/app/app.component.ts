import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { TableModule } from 'primeng/table';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  title: string = 'lost-ark-tracker';
  cols!: Column[];

  ngOnInit() {
    this.cols = [
      { field: 'character', header: 'Character' },
      { field: 'iLvl', header: 'iLvl' },
      { field: 'weeklyTask', header: '📝' },
      { field: 'bloodstone', header: '🩸' },
      { field: 'cube', header: '🧊' },
      { field: 'eventExchange', header: '🌱' },
      { field: 'kayangelExchange', header: '👼🏼' },
      { field: 'plagueMarks', header: '☣️' },
      { field: 'phantomMarks', header: '👿' },
      { field: 'cookiesExchange', header: '🐱' },
      { field: 'piratteCoinsExchange', header: '☠️' },
      { field: 'guardian', header: 'Guardian' },
      { field: 'abyssal', header: 'Abyssal' },
      { field: 'valtan', header: 'Valtan' },
      { field: 'vykas', header: 'Vykas' },
      { field: 'kakul', header: 'Kakul' },
      { field: 'brel', header: 'Brel' },
      { field: 'kayangel', header: 'Kayangel' },
      { field: 'akkan', header: 'Akkan' },
  ];

    this.primengConfig.filterMatchModeOptions = {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    };

  }
}
