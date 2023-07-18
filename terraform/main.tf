resource "keycloak_realm" "realm" {
  realm   = "futurama"
  enabled = true
}

resource "keycloak_openid_client" "openid_client" {
  realm_id  = keycloak_realm.realm.id
  client_id = "frontend-client"

  enabled                  = true
  access_type              = "PUBLIC"
  standard_flow_enabled    = true
  valid_redirect_uris      = [
    "http://localhost:3000/*"
  ]
  web_origins = [
    "+"
  ]
  login_theme = "keycloak"
}

resource "keycloak_user" "user" {
  realm_id = keycloak_realm.realm.id
  username = "user"
  enabled  = true

  email      = "user@example.com"
  first_name = "John"
  last_name  = "Doe"

  initial_password {
    value     = "user"
    temporary = false
  }
}
