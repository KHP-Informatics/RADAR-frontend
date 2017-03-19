import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StudyEffects } from '../../shared/store/study/study.effects'

import { StudyService } from '../../shared/store/study/study.service'
import { OverviewPageComponent } from './overview.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.run(StudyEffects)
  ],
  declarations: [
    OverviewPageComponent
  ],
  providers: [
    StudyService
  ]
})
export class OverviewPageModule {}