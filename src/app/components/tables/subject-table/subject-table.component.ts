import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core'
import { MdPaginator } from '@angular/material'
import { Router } from '@angular/router'

import { SubjectDataSource } from './subject-data-source'
import { SubjectDB } from './subject-db'

@Component({
  selector: 'app-subject-table',
  styleUrls: ['subject-table.component.scss'],
  templateUrl: 'subject-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectTableComponent implements OnInit, OnDestroy {
  // TODO: Fix with service and API
  sampleComplianceData = [
    { type: 'simple', value: 0.2 },
    { type: 'special', value: 0.3 }
  ]

  displayedColumns = [
    'subjectId',
    'active',
    'startdate',
    'enddate',
    'sources',
    'compliance'
  ]
  dataSource: SubjectDataSource | null
  subjectDB = new SubjectDB()

  @ViewChild(MdPaginator) paginator: MdPaginator

  @Input() studyId
  @Input()
  set subjects(value) {
    this.subjectDB.data = value
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.dataSource = new SubjectDataSource(this.subjectDB, this.paginator)
    this.paginator._intl.itemsPerPageLabel = ''
    this.paginator._intl.getRangeLabel = this.paginatorRangeLabel
  }

  ngOnDestroy() {
    this.dataSource.disconnect()
  }

  trackById(index, subject) {
    return subject ? subject.subjectId : undefined
  }

  redirectSubject(event, subjectId) {
    this.router.navigateByUrl(
      '/study/' + this.studyId + '/subject/' + subjectId
    )
  }

  paginatorRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
      return `0 of ${length} Patients`
    }
    length = Math.max(length, 0)
    const startIndex = page * pageSize
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize
    return `${startIndex + 1} - ${endIndex} of ${length} Patients`
  }
}
