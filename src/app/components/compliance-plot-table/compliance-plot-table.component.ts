import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'

// import { CompliancePlotTableService } from './compliance-plot-table.service'
import { ComplianceService } from '../../shared/store/compliance/compliance.service'
import * as fromRoot from '../../shared/store/index'
import * as complianceAction from '../../shared/store/compliance/compliance.actions'

@Component({
  selector: 'app-compliance-plot-table',
  template: `
          <app-chart-base-multi-bar-table [chartData]="data$ | async"></app-chart-base-multi-bar-table>
  `,
  styleUrls: ['./compliance-plot-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompliancePlotTableComponent implements OnInit {

  @Input() subjectId
  data$: Observable<any>

  // constructor (public complianceDataService: CompliancePlotTableService) {}
  constructor (
    public service: ComplianceService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit () {
    // this.data$ = this.complianceDataService.getAll()
    // this.isComplianceLoaded$ = this.store.select(fromRoot.getComplianceIsLoaded)
    this.store.dispatch(new complianceAction.GetSelected(this.subjectId))
    this.data$ = this.store.select(fromRoot.getComplianceSelected)
        .publishReplay().refCount()
  }

}