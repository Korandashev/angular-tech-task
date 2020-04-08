import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BaseFilterComponent} from './base-filter.component';
import {ActiveFilter, Filter} from '../../types';

@Component({
  selector: 'app-checkbox-filter',
  styleUrls: ['./filter.component.scss'],
  template: `
    <div class="filter-group">
      <label class="filter" *ngFor="let filter of filters">
        <input type="checkbox" name="lang" [value]="filter.id" [checked]="filter.active" (change)="handleChange(filter)"/>
        <span>{{filter.title}}</span>
      </label>
    </div>
  `,
})
export class CheckboxFilterComponent extends BaseFilterComponent implements OnInit, OnDestroy {
  @Input() name: string;
  @Input() filters: Filter[] = [];

  changeFilter: BehaviorSubject<ActiveFilter>;

  get activeFilters() {
    return {name: this.name, value: this.filters.filter(x => x.active).map(x => x.id)};
  }

  ngOnInit(): void {
    this.changeFilter = new BehaviorSubject<any>(this.activeFilters);
  }

  ngOnDestroy() {
    this.changeFilter.unsubscribe();
  }

  handleChange(filter: Filter) {
    filter.active = !filter.active;
    this.changeFilter.next(this.activeFilters);
  }

  clearFilter() {
    this.filters.forEach((filter) => {
      filter.active = false;
    });
    this.changeFilter.next(this.activeFilters);
  }
}
