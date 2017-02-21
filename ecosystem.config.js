module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "Express App",
      script    : "app.js",
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "root",
      host : "64.137.202.57",
      ref  : "origin/master",
      repo : "git@github.com:sjamartucheli/express-basic.git",
      path : "/var/www/express-basic",
      "post-deploy" : "npm install && pm2 startOrRestart ~/ecosystem.config.json"
    }
  }
}
