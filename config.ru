require 'middleman/rack'
run Middleman.server

# Force SSL
unless ENV["DEV_ENV"]
  use Rack::SSL
end
