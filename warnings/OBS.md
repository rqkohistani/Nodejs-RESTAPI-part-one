# Here's an image of an Error

## Error 1

Error 1 that may cause you trouble when adding **type models** in package.json.

### package.json

    "type": "module",

    "start":  "nodemon **--experimental-modules --es-module-specifier-resolution=node** server.js"
    should be used.

![Import..../routes.js](typeModule.PNG)

## Error 2

Error 2 that may cause when installing jsonwebtoken.

    npm install ecdsa-sig-formatter --save

![Error: Cannot find module 'ecdsa-sig-formatter'](jsonwt.PNG)
