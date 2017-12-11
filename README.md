<p align="center"><img width=12.5% src="https://github.com/jimfilippou/mitsobox/blob/master/assets/Logo.png"></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![npm version](https://badge.fury.io/js/mitsobox.svg)](https://badge.fury.io/js/mitsobox)
[![Dependency Status](https://gemnasium.com/badges/github.com/jimfilippou/mitsobox.svg)](https://gemnasium.com/github.com/jimfilippou/mitsobox)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Basic Overview

Mitsobox is a library for nodeJS, that enables developers to have a better interaction with users using windows native dialog boxes. With simpler words, it just spawns a message box and wait for you to click yes, no, cancel etc.

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

// Display a messagebx only with OK key
mitsobox.OK("This is the body", "Your title");

// Display a messagebx with OK - CANCEL keys, then get response
mitsobox.OK_CANCEL("This is the body", "Your title").then(function (action) {
  return console.log(action); // 'OK' or 'CANCEL'
});

```



