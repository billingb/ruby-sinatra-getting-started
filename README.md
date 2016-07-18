# Ruby + Sinatra & React + Redux simple project

My boilerplate project for Sinatra + React application.

## Development

### Node

* Build into ruby/sinatra served location
  * `npm run build`

* Hot reloading via webpack dev server (with proxy to ruby sinatra for API)
  * `npm start`

### Ruby

* Running a local server
  * `rake run`

### Heroku

* Buildpacks - Add the node and ruby buildpacks with the following commands
  1. `heroku buildpacks:add heroku/ruby`
  1. `heroku buildpacks:add --index 1 heroku/nodejs`
  1. Confirm nodejs before ruby buildpack: `heroku buildpacks`
