import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import BlogPosts from "./views/BlogPosts";

// Newly Added
import AddStudent from "./views/AddStudent";
import AddVolunteer from "./views/AddVolunteer";
import AddCenter from "./views/AddCenter";
import Login from "./views/Login";
import StudentsList from "./views/StudentsList";
import VolunteersList from "./views/VolunteersList";
import CentersList from "./views/CentersList";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Login
    //component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/add-center",
    layout: DefaultLayout,
    component: AddCenter
  },
  {
    path: "/add-student",
    layout: DefaultLayout,
    component: AddStudent
  },
  {
    path: "/add-volunteer",
    layout: DefaultLayout,
    component: AddVolunteer
  },
  {
    path: "/centers",
    layout: DefaultLayout,
    component: CentersList
  },
  {
    path: "/students",
    layout: DefaultLayout,
    component: StudentsList
  },
  {
    path: "/volunteers",
    layout: DefaultLayout,
    component: VolunteersList
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];