const express = require("express");
const helmet = require("helmet");
const compression = require('compression');
const path = require("path");

var app = express();



app.use(helmet.contentSecurityPolicy({
    directives: {
    	
    	/*
    	
    	*/
    	
      defaultSrc: [ "data:", "'self'", "*", "'unsafe-inline'", "'unsafe-eval'",  ],/*
      fontSrc: ["'self'", "data:", "https://gitcdn.xyz/repo/Nefomemes/monaco.ttf/master/monaco.ttf" ],
      scriptSrc: [ "'self'", "https://code.jquery.com", "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js", "https://cdn.jsdelivr.net/npm/eruda", "https://unpkg.com/vue@next", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: [ "'self'", "'unsafe-inline'" ],
      upgradeInsecureRequests: [],
      
    */
  }}));

  app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.use(compression());
app.use("/", express.static(path.join(__dirname)));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "app.html")));

app.listen(process.env.PORT || 3000, (port) => console.log(`Server started at PORT ${port}`) )