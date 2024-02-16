import type { KeycloakInstance } from 'keycloak-js'

export interface AuthClientError {
  error: string

  error_description: string
}

export interface AuthClientInitOptions {
  [paramName: string]: any
}

/**
 * Set of tokens provided by AuthClient
 */
export type AuthClientTokens = Pick<
  KeycloakInstance,
  'idToken' | 'refreshToken' | 'token'
>

/**
 * ReactAuth event types
 */
export type AuthClientEvent =
  | 'onReady'
  | 'onInitError'
  | 'onAuthSuccess'
  | 'onAuthError'
  | 'onAuthRefreshSuccess'
  | 'onAuthRefreshError'
  | 'onAuthLogout'
  | 'onTokenExpired'
