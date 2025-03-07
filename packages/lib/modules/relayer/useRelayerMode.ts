import { supportsNestedActions } from '../pool/actions/LiquidityActionHelpers'
import { isV3Pool } from '../pool/pool.helpers'
import { Pool } from '../pool/pool.types'
import { useUserSettings } from '../user/settings/UserSettingsProvider'
import { useUserAccount } from '../web3/UserAccountProvider'

export type RelayerMode = 'signRelayer' | 'approveRelayer' | 'no-relayer-needed'

export function useRelayerMode(pool?: Pool): RelayerMode {
  const { connector } = useUserAccount()
  const { enableSignatures } = useUserSettings()

  // TODO requires an additional && to check if the user has toggled the escape
  // hatch. The escape hatch allows the user to revert to adding liquidity in the
  // first level pool tokens.
  if (pool && !supportsNestedActions(pool)) return 'no-relayer-needed'
  // V3 pools use permit/permit2 signatures instead of relayer approvals
  if (pool && isV3Pool(pool)) return 'no-relayer-needed'

  if (enableSignatures === 'no') return 'approveRelayer'
  if (connector?.id === 'walletConnect') return 'approveRelayer'
  if (connector?.id === 'gnosis') return 'approveRelayer'
  if (connector?.id === 'safe') return 'approveRelayer'
  return 'signRelayer'
}
