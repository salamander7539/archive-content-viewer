import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../interfaces/files.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  
  constructor(private http: HttpClient) {}

  getContent(): Observable<Content> {
    return this.http.get<Content>('assets/mock.json');
  }
}
