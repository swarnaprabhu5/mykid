import { EventEmitter } from 'events';

import Dispatcher from './dispatcher';
import Constants from './constants';
import getSidebarNavItems from '../data/sidebar-nav-items';
import getAdminSidebarNavItems from '../data/admin-sidebar-nav-items';

let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
  adminNavItems: getAdminSidebarNavItems()
};

class Store extends EventEmitter {
  constructor() {
    super();
    this.state = { userData: JSON.parse(localStorage.getItem('userData')) };

    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      default:
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE);
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getSidebarItems() {
    if (this.state.userData.position == 'VOLUNTEER') {
      return _store.navItems;
    } else {
      return _store.adminNavItems;
    }
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new Store();
