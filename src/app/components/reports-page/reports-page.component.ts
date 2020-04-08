import {Component, AfterViewInit, QueryList, ViewChildren} from '@angular/core';
import {combineLatest} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {ReportsService} from '../../services/reports/reports.service';
import {CheckboxFilterComponent, InputFilterComponent} from '../filters';
import {Report, Filter} from '../../types';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements AfterViewInit {
  @ViewChildren('filter') filters: QueryList<CheckboxFilterComponent | InputFilterComponent>;

  reports: Report[] = [];

  languages: Filter[] = [
    {id: 'en', title: 'EN'},
    {id: 'ru', title: 'RU'},
  ];

  tags: Filter[] = [
    {id: '1', title: 'ACADEMIC'},
    {id: '2', title: 'INTERMEDIATE'},
    {id: '3', title: 'ADVANCED'},
    {id: '4', title: 'HARDCORE'},
  ];

  constructor(private reportsService: ReportsService) {
  }

  clearFilters(): void {
    this.filters.forEach(filter => {
      filter.clearFilter();
    });
  }

  ngAfterViewInit(): void {
    combineLatest(this.filters.map(x => x.changeFilter))
      .pipe(debounceTime(200))
      .subscribe((filters) => {
        const params = Object.fromEntries(filters.map(item => [item.name, item.value]));
        this.reportsService.getAll(params).toPromise().then(data => {
          this.reports = data;
        });
      });
  }
}
