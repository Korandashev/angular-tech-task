import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BaseFilterComponent} from './base-filter.component';
import {ActiveFilter} from '../../types';

@Component({
  selector: 'app-input-filter',
  styleUrls: ['./filter.component.scss'],
  template: `
    <div class="filter-group">
      <input type="text" [(ngModel)]="value" (ngModelChange)="handleChange()" class="filter">
    </div>
  `,
})
export class InputFilterComponent extends BaseFilterComponent implements OnInit, OnDestroy {
  @Input() name: string;
  @Input() value: string;

  changeFilter: BehaviorSubject<ActiveFilter>;

  get activeFilters() {
    return {name: this.name, value: this.value};
  }

  ngOnInit(): void {
    this.changeFilter = new BehaviorSubject<any>(this.activeFilters);
  }

  ngOnDestroy() {
    this.changeFilter.unsubscribe();
  }

  handleChange() {
    this.changeFilter.next(this.activeFilters);
  }

  clearFilter() {
    this.value = '';
    this.handleChange();
  }
}
