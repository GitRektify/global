'use client'
import { Stack } from '@chakra-ui/react'
import { PortfolioSummary } from './PortfolioSummary'
import { PortfolioTable } from './PortfolioTable/PortfolioTable'
import { ClaimNetworkPools } from './PortfolioClaim/ClaimNetworkPools/ClaimNetworkPools'
import { TransactionStateProvider } from '../transactions/transaction-steps/TransactionStateProvider'

import { VebalLockDataProvider } from '@repo/lib/modules/vebal/lock/VebalLockDataProvider'

export default function Portfolio() {
  return (
    <Stack gap={20} width="full">
      <PortfolioSummary />
      <TransactionStateProvider>
        <ClaimNetworkPools />
      </TransactionStateProvider>

      <VebalLockDataProvider>
        <PortfolioTable />
      </VebalLockDataProvider>
    </Stack>
  )
}
