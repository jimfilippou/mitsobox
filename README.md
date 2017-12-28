# Mitsobox 📦

[![npm version](https://badge.fury.io/js/mitsobox.svg)](https://badge.fury.io/js/mitsobox)
[![Dependency Status](https://gemnasium.com/badges/github.com/jimfilippou/mitsobox.svg)](https://gemnasium.com/github.com/jimfilippou/mitsobox)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Basic Overview

Mitsobox is a library for nodeJS scripts that calls native win32 API directly, to show dialog boxes. In simpler words, it creates a message box using native windows services (Yeah it's only for windows 😝).

<br>


<br>

## Install with yarn
```javascript
yarn add mitsobox
```

## Install with npm
```javascript
npm i mitsobox --save
```


## Usage
```javascript

const mitsobox = require('mitsobox');

// Display a messagebox only with OK key
mitsobox.ok("The coolest title ever", "The content");

// Display a messagebox with OK - CANCEL keys, then get response
mitsobox.okCancel("Another cool title", "Another cool content").then(function (action) {
  console.log(action); // 'OK' or 'CANCEL'
});

// Display a messagebox with ABORT - RETRY - IGNORE keys, then get response
mitsobox.abortRetryIgnore("Breaking news!", "Nasa has confirmed that the earth is FLAT").then(function (action){
  console.log(action); // 'ABORT' or  'RETRY' or 'IGNORE'
});


```



