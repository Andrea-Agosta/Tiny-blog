# Tiny Blog

Welcome to Tiny Blog, a simple and elegant blogging application built with React, Tailwind CSS, and TypeScript. This application uses the [Dummy JSON API](https://dummyjson.com/) to retrieve a list of users, articles, and comments, and allows users to view and add comments when logged in.

## Features
- User authentication with Auth0
- List of articles and comments
- Dropdown button to show and hide articles
- List of authors and their respective articles
- User can see all the post wrote from every author

## Technologies
- [Dummy JSON API](https://dummyjson.com/) for providing sample data for the application
- [Auth0](https://auth0.com/) for user authentication
- [React Router Dom](https://reactrouter.com/en/main) for routing
- [Tailwind](https://tailwindui.com/) for styling
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)

## Getting Started

To get started, you will need to clone the repository and install the dependencies.

```bash
$ git clone https://github.com/Andrea-Agosta/Tiny-blog.git
$ cd tiny_blog
$ npm install
```

Once the dependencies are installed, create your account and application in [Auth0](https://auth0.com/), rename the file `example-auth0Config.ts` to `auth0Config.ts`, add the `DOMAIN` and `CLIENT_ID` from your Auth0 application, and after you can start the development server with the following command:

```bash
$ npm start
```

This will start the development server and open the application in your default browser.
