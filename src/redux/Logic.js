import {push} from 'react-router-redux';

export default class Logic {
  constructor({store}={}) {
    this._store = store;
  }

  routerPush(path) {
    this.dispatch(push(path));
  }

  get location() {
    return this.state.routing.locationBeforeTransitions;
  }

  get path() {
    return this.location.pathname;
  }

  get loggedInUser() {
    return this.state.auth.user;
  }

  get isLoggedIn() {
    return !!this.state.auth.user;
  }

  get state() {
    return this.store.getState();
  }

  get store() {
    return this._store;
  }

  dispatch(obj) {
    this.store.dispatch(obj);
  }
}