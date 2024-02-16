import { createAuthContext } from '@baolq/react-keycloak-core'

import { isServer } from './utils'
import { KeycloakInstance } from 'keycloak-js'

// Context to hold Keycloak and his state
export const reactKeycloakSsrContext = createAuthContext<KeycloakInstance>({
  initialized: isServer(),
})

export const ReactKeycloakSSRContextConsumer = reactKeycloakSsrContext.Consumer
