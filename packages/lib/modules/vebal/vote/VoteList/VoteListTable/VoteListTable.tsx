'use client'

import { PaginatedTable } from '@repo/lib/shared/components/tables/PaginatedTable'
import { VoteListTableHeader } from './VoteListTableHeader'
import { VoteListTableRow } from './VoteListTableRow'
import { getPaginationProps } from '@repo/lib/shared/components/pagination/getPaginationProps'
import { Card, Skeleton } from '@chakra-ui/react'
import { useIsMounted } from '@repo/lib/shared/hooks/useIsMounted'
import { VoteListItem } from '@repo/lib/modules/vebal/vote/vote.types'
import { useVoteList } from '@repo/lib/modules/vebal/vote/VoteList/VoteListProvider'

interface Props {
  voteList: VoteListItem[]
  count: number
  loading: boolean
}

export function VoteListTable({ voteList, count, loading }: Props) {
  const isMounted = useIsMounted()
  const {
    queryState: { pagination, setPagination },
  } = useVoteList()
  const paginationProps = getPaginationProps(count || 0, pagination, setPagination)
  const showPagination = !!voteList.length && !!count && count > pagination.pageSize

  const rowProps = {
    px: { base: 'sm', sm: '0' },
    gridTemplateColumns: `32px minmax(320px, 1fr) 120px 120px 120px 120px 100px`,
    alignItems: 'center',
    gap: { base: 'xxs', xl: 'lg' },
  }

  if (!isMounted) return <Skeleton height="500px" w="full" />

  return (
    <Card
      alignItems="flex-start"
      left={{ base: '-4px', sm: '0' }}
      p={{ base: '0', sm: '0' }}
      position="relative"
      w={{ base: '100vw', lg: 'full' }}
    >
      <PaginatedTable
        items={voteList}
        loading={loading}
        noItemsFoundLabel="No votes found"
        paginationProps={paginationProps}
        renderTableHeader={() => <VoteListTableHeader {...rowProps} />}
        renderTableRow={(item: VoteListItem, index) => {
          return <VoteListTableRow keyValue={index} vote={item} {...rowProps} />
        }}
        showPagination={showPagination}
      />
    </Card>
  )
}
