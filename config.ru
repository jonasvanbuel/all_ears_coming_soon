require 'middleman/rack'
run Middleman.server

# Force SSL
unless ENV['RACK_ENV'] == 'development'
  require 'rack/ssl'
  use Rack::SSL
end
