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

## NPM
### Bump npm version 

With commit message.  %s represents the version number
``` bash
$ npm version patch -m "Upgrade to %s for reasons"
```
To bump npm version by 0.0.1
``` bash
$ npm version patch
```

### Publish
With Travis: bump version, commit, and push with:
``` bash
$ git push --follow-tags origin
```

To manually publish to NPM
``` bash
$ npm publish --access public
```

## MISC

Push without travis
``` bash
$ git commit -m "[skip travis] Update READMEMES"
```

<hr/>

## Thank You

I was able to set this up with travis thanks to [this tutorial](https://auth0.com/blog/developing-npm-packages/) by Bruno Krebs
