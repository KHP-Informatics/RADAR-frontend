import { Action } from '@ngrx/store'

import { Subject } from '../../models/study.model'

export const LOAD = '[Subject] LOAD'
export const LOAD_SUCCESS = '[Subject] LOAD_SUCCESS'

export class Load implements Action {
  readonly type = LOAD

  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS

  constructor(public payload: Subject[]) {}
}

export type Actions = Load | LoadSuccess