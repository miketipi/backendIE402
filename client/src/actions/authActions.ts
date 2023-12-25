// src/actions/authActions.ts
export const login = (): { type: 'LOGIN' } => ({
    type: 'LOGIN',
});

export const logout = (): { type: 'LOGOUT' } => ({
    type: 'LOGOUT',
});
