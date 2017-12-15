# Mitsobox

[![npm version](https://badge.fury.io/js/mitsobox.svg)](https://badge.fury.io/js/mitsobox)
[![Dependency Status](https://gemnasium.com/badges/github.com/jimfilippou/mitsobox.svg)](https://gemnasium.com/github.com/jimfilippou/mitsobox)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Basic Overview

Mitsobox is a library for nodeJS, that calls native win32 API directly to show dialog boxes. With simpler words, it just spawns a message box using native windows service.

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
"use strict";

var mitsobox = require('mitsobox');

// Display a messagebox only with OK key
mitsobox.ok("This is the body", "Your title");

// Display a messagebox with OK - CANCEL keys, then get response
mitsobox.okCancel("This is the body", "Your title").then(function (action) {
  console.log(action); // 'OK' || 'CANCEL'
});

// Display a messagebox with ABORT - RETRY - IGNORE keys, then get response
mitsobox.abortRetryIgnore("This is the body", "Your title").then(function (action){
  console.log(action); // 'ABORT' ||  'RETRY' || 'IGNORE'
});


```



