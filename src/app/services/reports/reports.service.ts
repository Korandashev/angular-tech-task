import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API_URL} from '../../constants/Api';
import {Report} from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private http: HttpClient) {
  }

  getAll(filters = {}) {
    const params = new HttpParams({fromObject: filters});
    return this.http.get<Report[]>(`${API_URL}/reports/list`, {params});
  }
}
