import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ITheme } from '../../core/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  addTheme$(body: { themeName: string, thmeDescription: string }): Observable<ITheme> {
    return this.http.post<ITheme>(`${apiUrl}/themes`, body, { withCredentials: true })
  }

  loadThemeList(searchTerm: string = ''): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes?title=${searchTerm}`, {
      params: new HttpParams({
        fromObject: {
        }
      })
    });
  }

  loadThemeById(id: string): Observable<ITheme> {
    return this.http.get<ITheme>(`${apiUrl}/themes/${id}`);
  }

}