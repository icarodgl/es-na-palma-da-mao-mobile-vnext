import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { AcessoCidadaoClaims, Token, CidadaoRole } from '../models';

export const defaultAvatarSrc = 'assets/imgs/user.png';

export type AuthState = {
  claims: Partial<AcessoCidadaoClaims>;
  accessToken?: Token;
  refreshToken?: any;
  clientId?: string;
  avatarUrl?: string;
  roles?: CidadaoRole[];
};

export function createDefaultAuthState(): AuthState {
  return {
    claims: {
      nome: 'Usuário visitante'
    },
    avatarUrl: defaultAvatarSrc
  };
}

const initialState: AuthState = createDefaultAuthState();

@Injectable()
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  /**
   *
   */
  constructor() {
    super(initialState);
  }
}
