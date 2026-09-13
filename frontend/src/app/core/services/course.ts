import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICourse } from '../../model/course';

@Injectable({
  providedIn: 'root',
})
export class Course {
  private baseUrl = 'http://localhost:3000';

  private httpClient = inject(HttpClient);

  fetchAll() {
    return this.httpClient.get<ICourse[]>(this.baseUrl + '/courses');
  }

  fetch(courseId: string) {
    return this.httpClient.get<ICourse>(this.baseUrl + '/courses/' + courseId);
  }
}
