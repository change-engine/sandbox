# Getting Started

This is a simple React + Supabase sandbox.

## Prerequisites

* Node 16
* Docker
* A package manager of your choice. We tend to use Yarn.

## Available Scripts

In the project directory, after `yarn install` you can run:

### `yarn supabase start`

Launch the database and API into docker containers.\
Open [http://localhost:54323](http://localhost:54323) to view it in the browser.

If you have issues installing the local database, an alternative is to use a [free remote instance](https://supabase.com/database).

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn resetdb`

Clears database, runs migrations, seeds, then generates matching Typescript types.\
You only need to do this if you edit the SQL migrations or seeds.
