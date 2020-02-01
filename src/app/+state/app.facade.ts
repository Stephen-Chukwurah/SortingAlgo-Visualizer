import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { EntityState } from './app.reducer';
import { query } from './app.selectors';
import * as AuthActions from './app.actions';

@Injectable({
	providedIn: 'root',
})
export class AppFacade {
	currentPane$ = this.store.select(query.getCurrentPane);
	data$ = this.store.select(query.getData);
	dataSize$ = this.store.select(query.getDataSize);
	isSorting$ = this.store.select(query.getIsSorting);

	constructor(private store: Store<EntityState>) { }

	loadCurrentPane(pane: Pane) {
		this.store.dispatch(AuthActions.loadCurrentPane({data: pane}));
	}
	
	loadData(bars: Bar[]) {
		this.store.dispatch(AuthActions.loadData({data: bars}));
	}

	setDataSize(size: number) {
		this.store.dispatch(AuthActions.setDataSize({data: size}));
	}

	sortingData(pane: Pane) {
		this.store.dispatch(AuthActions.sortData({data: {currentPane: pane}}));
	}

	triggerIsSorting() {
		this.store.dispatch(AuthActions.triggerIsSorting());
	}

	triggerNotSorting() {
		this.store.dispatch(AuthActions.triggerNotSorting());
	}

}