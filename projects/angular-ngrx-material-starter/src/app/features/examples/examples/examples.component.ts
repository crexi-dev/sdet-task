import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'crx-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;

  examples = [
    { link: 'todos', label: 'crx.examples.menu.todos' },
    { link: 'stock-market', label: 'crx.examples.menu.stocks' },
    { link: 'theming', label: 'crx.examples.menu.theming' },
    { link: 'crud', label: 'crx.examples.menu.crud' },
    { link: 'form', label: 'crx.examples.menu.form' },
    { link: 'notifications', label: 'crx.examples.menu.notifications' },
    { link: 'elements', label: 'crx.examples.menu.elements' },
    { link: 'authenticated', label: 'crx.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
