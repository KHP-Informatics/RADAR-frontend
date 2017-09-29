import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MdGridListModule } from '@angular/material'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { TileModule } from '../core/components/tile/tile.module'
import { ToolbarModule } from '../core/components/toolbar/toolbar.module'
import { RadarHttpInterceptorProvider } from '../core/services/radar.interceptor'
import { CompliancePlotModule } from './components/compliance-plot/compliance-plot.module'
import { SubjectTableModule } from './components/subject-table/subject-table.module'
import { StudyPageComponent } from './containers/study-page.component'
import { StudyGuard } from './guards/study.guard'
import { ComplianceDataService } from './services/compliance-data.service'
import { StudyService } from './services/study.service'
import { SubjectService } from './services/subject.service'
import { ComplianceDataEffects } from './store/compliance-data/compliance-data.effects'
import { StudyEffects } from './store/study/study.effects'
import { SubjectEffects } from './store/subject/subject.effects'
import { routes } from './study-page.routing'
import { reducers } from './store'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TileModule,
    ToolbarModule,
    MdGridListModule,
    SubjectTableModule,
    CompliancePlotModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('studyPage', reducers),
    EffectsModule.forFeature([
      StudyEffects,
      SubjectEffects,
      ComplianceDataEffects
    ])
  ],
  declarations: [StudyPageComponent],
  providers: [
    RadarHttpInterceptorProvider,
    StudyGuard,
    StudyService,
    SubjectService,
    ComplianceDataService
  ]
})
export class StudyPageModule {}
