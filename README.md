# Chrome browser extension boilerplate with preact and webpack
Chrome extension boilerplate project with [webpack](https://webpack.js.org)
and [preact](https://preactjs.com).

**DISCLAIMER**: Currently this is a very basic setup, and you
should probably look for something more polished for basing your projects.

## Setup and build
- Make sure you have [yarn](https://yarnpkg.com/) installed -
  if not then install it via `npm i -g yarn`.
- Run `yarn` to install depedencies.
- Run `npm run build` to build.

## Installing extension in Chrome
To install built extension:
1. Build extension as described above (doh).
2. Access `Settings -> Extensions` in Chrome browser.
3. Check `Developer mode` checkbox.
4. Click `Load unpacked extension...` button.
5. Navigate to `preact-chrome-extension-boilerplate` directory.
6. Select `build` directory and click `Open` button in
   file-picker.

## Developer resources
1. [Chrome extensions documentation](https://developer.chrome.com/extensions)
2. [Chrome sample extensions](https://developer.chrome.com/extensions/samples)
3. [Very nice react & chrome ext boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate)

## TODO
- Add unit tests(test framework, test runner, etc.)
- Configure separate production and development environments
- Build more complex sample components
- Add file watcher to run automatic builds

