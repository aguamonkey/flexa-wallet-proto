import Constants from 'expo-constants';
export type FlexaEnv = 'mock' | 'live';

export function getFlexaEnv(): FlexaEnv {
  const env =
    (Constants.expoConfig?.extra as any)?.flexaEnv ??
    (Constants.manifest?.extra as any)?.flexaEnv ??
    'mock';
  return env === 'live' ? 'live' : 'mock';
}
