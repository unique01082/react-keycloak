import { createAuthProvider } from '@baolq/react-keycloak-core'

import { reactKeycloakSsrContext } from './context'

export const KeycloakProvider = createAuthProvider(reactKeycloakSsrContext)
