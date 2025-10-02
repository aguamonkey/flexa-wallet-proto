import { FlexaEnv, getFlexaEnv } from '../../shared/env';

export type ScanResult = { ok: boolean; payload?: string; error?: string };
export type SpendResult = { ok: boolean; txId?: string; error?: string };

let currentEnv: FlexaEnv = 'mock';

export function init() {
  currentEnv = getFlexaEnv();
}

export async function scanPay(data: string): Promise<ScanResult> {
  if (currentEnv === 'mock') {
    // Pretend anything that contains "flexa" is valid
    return data?.toLowerCase().includes('flexa')
      ? { ok: true, payload: data }
      : { ok: false, error: 'Invalid mock QR' };
  }
  // TODO: call Flexa Components SDK once you have access/keys
  // return await realScanPay(data)
  return { ok: false, error: 'LIVE not implemented' };
}

export async function spend(amountCents: number): Promise<SpendResult> {
  if (currentEnv === 'mock') {
    // Approve any spend up to $20 in mock
    return amountCents <= 2000
      ? { ok: true, txId: `mock-${Date.now()}` }
      : { ok: false, error: 'Insufficient funds (mock)' };
  }
  // TODO: call Flexa Components Spend in LIVE
  return { ok: false, error: 'LIVE not implemented' };
}
