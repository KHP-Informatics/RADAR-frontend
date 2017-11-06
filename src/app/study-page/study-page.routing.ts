import { Routes } from '@angular/router'

import { StudyPageComponent } from './containers/study-page.component'
import { StudyGuard } from './guards/study.guard'

export const routes: Routes = [
  {
    path: '',
    component: StudyPageComponent,
    canActivate: [StudyGuard]
  }
]