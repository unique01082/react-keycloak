import type { KeycloakInstance } from 'keycloak-js'

export interface SSRAuthClient extends KeycloakInstance {
  /** A boolean indicating if the user is authenticated or not. */
  authenticated?: boolean
}
