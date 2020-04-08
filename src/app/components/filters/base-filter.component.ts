import {Input, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ActiveFilter, Filter} from '../../types';

export abstract class BaseFilterComponent implements OnInit, OnDestroy {
  @Input() name: string;
  @Input() value: string;

  changeFilter: BehaviorSubject<ActiveFilter>;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  handleChange(filter?: Filter): void {
  }

  clearFilter(): void {
  }
}
