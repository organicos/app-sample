# Sample App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Demo

The demo is hosted in a Github Page. 

[Open the demo](https://organicos.github.io/app-sample/)

## Running

Clone, enter, install, serve...

1. Clone: `git clone https://github.com/organicos/app-sample`
2. Go to root folder: `cd app-sample`
3. Install dependencies: `npm i`
4. Serve locally: `ng s`
5. Open your browser e go to `localhost:4200`
6. ;)

## Problem solved

⦁	As an Asset Manager I need my clients to be able to fill their details as first name, last name, email, etc. and address details so I can correctly onboard my new clients

⦁	As an Asset Manager I want prospects to onboard themselves as a customer with a web application.

⦁	As an Asset Manager I need my clients to work with an intuitive interface so it is always clear what data is expected from them

⦁	As an Asset Manager I need the input data to be validated so I can be assured of good quality of data


## Architecture

We use only angular in this project and the `@angular/cli` to scaffolding the pieces.

The folder structure is ready for large systems.

### /core

The core folder hosts modules that are used by the entire application but need to be load only once, usually in the `AppModule`.

### /pages

The pages folder hosts the routes and pages where all the magic components are used.

It usually contain the business logic that in many cases are decisions if a presentations component should be displayed or not.

### /shared

The shared folder hosts all services, directives, pipes, modules and non logical components.

This is where we build the magic.

It is a best practice to separate presentation components from logic ones. This way you can improve reusability.

## PWA - Progressive Web App

This application can be installed in your mobile device. This makes it faster to start and give a better performance and accessibility.

On Android, go to your chrome browser, open the demo, go to settings and `Add to Home Screen`. This way the app will be installed as a native one and one icon will be added to your home screen.

## Testing

To test the app run the command `ng test`.