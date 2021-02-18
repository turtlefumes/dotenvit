## dotenvit 
## [![Build Status](https://travis-ci.com/turtlefumes/dotenvit.svg?branch=main)](https://travis-ci.com/turtlefumes/dotenvit)

It's supposed to create a dotenv file and require it in the right files or something

RIGHT NOW IT DOES NOTHING REALLY

# Installation and Usage

#### Install with npm 

``` bash
$ npm i @turtlefumes/dotenvit
```

#### Require and call the one method
``` javascript
const dotenvit = require("@turtlefumes/dotenvit");

dotenvit.insanity();
```

# Notes to Self

#### NPM
To bump npm version with commit message.  %s represents the version number
``` bash
$ npm version patch -m "Upgrade to %s for reasons"
```
To bump npm version by 0.0.1
``` bash
$ npm version patch
```

To publish through travis just bump version, commit, and push.


To manually publish to NPM
``` bash
$ npm publish --access public
```

#### MISC

Push without travis
``` bash
$ git commit -m "[skip travis] Update READMEMES"
```