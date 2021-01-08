require 'middleman/rack'
run Middleman.server

require 'rack/ssl-enforcer'
use Rack::SslEnforcer
