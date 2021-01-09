require 'middleman/rack'
run Middleman.server

# Force SSL
unless ENV["DEV_ENV"]
  require 'rack/ssl'
  use Rack::SSL
end
