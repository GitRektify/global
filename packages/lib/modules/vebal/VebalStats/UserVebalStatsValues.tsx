'use client'

import React, { useMemo } from 'react'
import { Heading, Skeleton, Text, Tooltip, VStack } from '@chakra-ui/react'
import { bn, fNum } from '@repo/lib/shared/utils/numbers'
import { useVebalUserData } from '@repo/lib/modules/vebal/useVebalUserData'
import { differenceInDays, format } from 'date-fns'
import BigNumber from 'bignumber.js'
import { useVebalLockData } from '@repo/lib/modules/vebal/lock/VebalLockDataProvider'

export type VebalUserStatsValues = {
  balance: string | undefined
  rank: number | undefined
  percentOfAllSupply: BigNumber | undefined
  lockedUntil: string | undefined
}

export function UserVebalStatsValues() {
  const lockData = useVebalLockData()
  const vebalUserData = useVebalUserData()

  const vebalUserStatsValues: VebalUserStatsValues | undefined = useMemo(() => {
    if (vebalUserData.isConnected) {
      const balance = vebalUserData.data?.veBalGetUser.balance
      const rank = vebalUserData.data?.veBalGetUser.rank ?? undefined
      const percentOfAllSupply = vebalUserData.data
        ? bn(vebalUserData.data.veBalGetUser.balance || 0).div(
            lockData.mainnetLockedInfo.totalSupply || 0
          )
        : undefined
      const lockedUntil =
        !lockData.mainnetLockedInfo.lockedEndDate || lockData.mainnetLockedInfo.isExpired
          ? undefined
          : format(lockData.mainnetLockedInfo.lockedEndDate, 'yyyy-MM-dd')

      return {
        balance,
        rank,
        percentOfAllSupply,
        lockedUntil,
      }
    }
  }, [lockData.mainnetLockedInfo, vebalUserData.isConnected, vebalUserData.data])

  return (
    <>
      <VStack align="flex-start" spacing="0" w="full">
        <Text fontSize="sm" fontWeight="semibold" mt="xxs" variant="secondary">
          My veBAL
        </Text>
        {vebalUserData.loading ? (
          <Skeleton height="28px" w="100px" />
        ) : (
          <Heading size="h4">
            {typeof vebalUserStatsValues?.balance === 'string' ? (
              fNum('token', vebalUserStatsValues.balance)
            ) : (
              <>&mdash;</>
            )}
          </Heading>
        )}
      </VStack>
      <VStack align="flex-start" spacing="0" w="full">
        <Text fontSize="sm" fontWeight="semibold" mt="xxs" variant="secondary">
          My rank
        </Text>
        {vebalUserData.loading ? (
          <Skeleton height="28px" w="100px" />
        ) : (
          <Heading size="h4">{vebalUserStatsValues?.rank ?? <>&mdash;</>}</Heading>
        )}
      </VStack>
      <VStack align="flex-start" spacing="0" w="full">
        <Text fontSize="sm" fontWeight="semibold" mt="xxs" variant="secondary">
          My share of veBAL
        </Text>
        {vebalUserData.loading || lockData.isLoading ? (
          <Skeleton height="28px" w="100px" />
        ) : (
          <Heading size="h4">
            {vebalUserStatsValues?.percentOfAllSupply ? (
              fNum('feePercent', vebalUserStatsValues.percentOfAllSupply)
            ) : (
              <>&mdash;</>
            )}
          </Heading>
        )}
      </VStack>
      <VStack align="flex-start" spacing="0" w="full">
        <Text fontSize="sm" fontWeight="semibold" mt="xxs" variant="secondary">
          Expiry date
        </Text>
        {lockData.isLoading ? (
          <Skeleton height="28px" w="100px" />
        ) : (
          <Tooltip
            label={
              vebalUserStatsValues?.lockedUntil
                ? `Expires ${format(new Date(vebalUserStatsValues.lockedUntil), 'dd MMM yyyy')}`
                : undefined
            }
          >
            <Heading size="h4">
              {vebalUserStatsValues?.lockedUntil ? (
                `${differenceInDays(new Date(vebalUserStatsValues.lockedUntil), new Date())} days`
              ) : (
                <>&mdash;</>
              )}
            </Heading>
          </Tooltip>
        )}
      </VStack>
    </>
  )
}
