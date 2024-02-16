import { createAuthContext } from '@baolq/react-keycloak-core'
import type { KeycloakInstance } from 'keycloak-js'

// @ts-ignore
export const reactKeycloakWebContext = createAuthContext<KeycloakInstance>()

export const ReactKeycloakWebContextConsumer = reactKeycloakWebContext.Consumer
