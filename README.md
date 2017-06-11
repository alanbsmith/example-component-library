# Example Component Library

## Up & Running
`$ npm install` or `$ yarn`

## Overview
This component lib is set up to use [styled-components](https://github.com/styled-components/styled-components) and [polished](https://github.com/styled-components/polished) 💅. This is a starter for you to create your own components and easily publish them to npm.

### File Structure

##### ELEMENTS
`lib/elements` is intended to contain your smallest reusable components, e.g. Buttons, Inputs, etc.


##### COMPONENTS
`lib/components` is intended to contain combinations of these elements, e.g. SearchField, DropDown, etc.

##### STYLES
`lib/styles` is inteded to contain your global styles that you would like to include throughout the application, e.g. colors, animations, themes, etc.

## Local Development

### Linter
Run once:
```
$ npm run lint
```

Run the watch script:
```
$ npm run lint:watch
```

### Tests
Run once:
```
$ npm test
```

Run the watch script:
```
$ npm run test:watch
```

### Build
Run once:
```
$ npm run build
```

Run the watch script:
```
$ npm run build:watch
```

_**NOTE:** the build script runs in the `prepublish` script just before you publish to npm._

## Publishing
If you already have an account with npm, you can simply run:
```
$ npm login
$ npm publish
```

If you don't have an account with npm:

_**NOTE:** Your email address is public_
```
$ npm set init.author.name "Your Name"
$ npm set init.author.email "you@example.com"
$ npm set init.author.url "http://yourblog.com"
$ npm adduser
```

## Contributing
If you'd like to contribute to this app, please raise an issue and/or submit a pull request. Please be sure to follow the [Code of Conduct](CODE_OF_CONDUCT.md) when contributing.
