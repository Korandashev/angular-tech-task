import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';
import {reports, tags as tagsData} from '../../data/reports';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, params} = request as HttpRequest<any>;

    function ok(body?) {
      return of(new HttpResponse({status: 200, body}));
    }

    function handleRoute() {
      switch (true) {
        case url.endsWith('/reports/list') && method === 'GET':
          return getReportsList(params);
        case url.endsWith('/reports/tags') && method === 'GET':
          return getReportsTagsList();
        default:
          return next.handle(request);
      }
    }

    function getReportsList(data) {
      const lang = data.map.get('lang') || [];
      const search = data.map.get('search') || '';
      const tags = data.map.get('tags') || [];

      const result = reports
        .filter(x => lang.length ? lang.includes(x.lang) : true)
        .filter(x => tags.length ? x.tags.map(tag => tag.id).every(t => tags.includes(t)) : true)
        .filter(x => search ? `${x.title} ${x.author}`.toLowerCase().includes(search) : true);
      return ok(result);
    }

    function getReportsTagsList() {
      return ok(tagsData);
    }

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(300))
      .pipe(dematerialize());
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
