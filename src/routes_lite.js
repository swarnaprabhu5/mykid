import React, { useLayoutEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout } from './layouts';
import { LoginLayout } from './layouts';

// Route Views

import BlogOverview from './views/BlogOverview';
import UserProfileLite from './views/UserProfileLite';
import AddNewPost from './views/AddNewPost';
import Errors from './views/Errors';
import ComponentsOverview from './views/ComponentsOverview';
import BlogPosts from './views/BlogPosts';

// Common
import Login from './views/Login';

// Student
import StudentsList from './views/StudentsList';
import AddStudent from './views/AddStudent';

// Volunteer
import AddVolunteer from './views/AddVolunteer';
import VolunteersList from './views/VolunteersList';

// Center
import AddCenter from './views/AddCenter';
import CentersList from './views/CentersList';

// Test
import TestList from './views/TestList';
import CreateTest from './views/CreateTest';

// Class
import ClassList from './views/ClassList';
import AcademicCalendar from './views/AcademicCalendar';
import ViewClass from './views/ViewClass';
import ClassLog from './views/ClassLog';

export default [
  {
    path: '/',
    exact: true,
    layout: LoginLayout,
    component: Login
  },
  {
    path: '/classes',
    layout: DefaultLayout,
    component: ClassList
  },
  {
    path: '/class-log',
    layout: DefaultLayout,
    component: ClassLog
  },
  {
    path: '/view-class',
    layout: DefaultLayout,
    component: ViewClass
  },
  {
    path: '/blog-overview',
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: '/user-profile-lite',
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: '/add-new-post',
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: '/errors',
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: '/components-overview',
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: '/blog-posts',
    layout: DefaultLayout,
    component: BlogPosts
  }
];
