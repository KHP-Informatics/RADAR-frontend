import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { Subject } from './subject.model'

@Injectable()
export class SubjectService {
  constructor(private http: HttpClient) {}

  getAll(studyId): Observable<Subject[]> {
    const url = `${PARAMS.API_URI}/subject/getAllSubjects/${studyId}`

    return this.http
      .get<any>(url)
      .filter(d => d !== null)
      .map(res => res.subjects)
  }
}
