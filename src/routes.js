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
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

// Newly Added
import AddStudent from "./views/AddStudent";
import AddVounteer from "./views/AddVolunteer";
import AddCenter from "./views/AddCenter";
import Login from "./views/Login";


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
    component: AddVounteer
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
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];