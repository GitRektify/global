import {
  GqlChain,
  GqlPoolFilterType,
  GqlPoolOrderBy,
  GqlPoolOrderDirection,
} from '@/lib/services/api/generated/graphql'
import { PoolsQueryVariables } from '../pool.types'
import { PROJECT_CONFIG } from '@/lib/config/useProjectConfig'
import { useEffect } from 'react'
import { ReadonlyURLSearchParams } from 'next/navigation'
import { POOL_TYPE_MAP } from './usePoolListFilters'

export enum PoolListUrlParams {
  Networks = 'networks',
  PoolTypes = 'poolTypes',
  Search = 'search',
  Skip = 'skip',
  First = 'first',
  SortBy = 'sortBy',
  SortDir = 'sortDir',
}

export const DEFAULT_POOL_LIST_QUERY_VARS: PoolsQueryVariables = {
  first: 20,
  skip: 0,
  orderBy: GqlPoolOrderBy.TotalLiquidity,
  orderDirection: GqlPoolOrderDirection.Desc,
  where: {
    poolTypeIn: [
      GqlPoolFilterType.Weighted,
      GqlPoolFilterType.Stable,
      GqlPoolFilterType.PhantomStable,
      GqlPoolFilterType.MetaStable,
      GqlPoolFilterType.Gyro,
      GqlPoolFilterType.Gyro3,
      GqlPoolFilterType.Gyroe,
    ],
    chainIn: PROJECT_CONFIG.supportedNetworks,
  },
  textSearch: null,
}

/**
 * Mutates a given URL param unless shouldSet is false.
 * If shouldSet is false, the param will be deleted.
 */
function mutateUrlParam(
  params: URLSearchParams,
  key: string,
  value: string,
  shouldSet: boolean = value.length > 0
) {
  if (shouldSet) params.set(key, value)
  else params.delete(key)
}

type QueryVarToUrlParam = {
  key: string
  value: string
  shouldSet?: () => boolean
}

/**
 * Given a new set of query variables, iterate over them and update the URL params.
 */
function updateURLParams(vars: QueryVarToUrlParam[]) {
  if (!window) return
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)

  vars.forEach(({ key, value, shouldSet }) => {
    mutateUrlParam(params, key, value, shouldSet ? shouldSet() : undefined)
  })

  const searchParams = params.size > 0 ? `?${params.toString()}` : ''
  window.history.pushState({}, '', `${url.pathname}${searchParams}`)
}

/**
 * Listens for changes in defined query variables and updates the URL params.
 */
export function useQueryVarsWatcher(vars: QueryVarToUrlParam[]) {
  return useEffect(() => {
    updateURLParams(vars)
  }, [vars])
}

export type InitQueryState = {
  variables: PoolsQueryVariables
  urlParams?: {
    poolTypes?: GqlPoolFilterType[]
    networks?: GqlChain[]
    searchText?: string
  }
}

/**
 * Combines URL params state with default query variables.
 */
export function getInitQueryState(
  searchParams?: ReadonlyURLSearchParams | URLSearchParams
): PoolsQueryVariables {
  let variables = DEFAULT_POOL_LIST_QUERY_VARS

  const isClient = typeof window !== 'undefined'

  if (!searchParams && !isClient) return variables

  if (!searchParams && isClient) {
    const url = new URL(window.location.href)
    searchParams = new URLSearchParams(url.search)
  } else {
    return variables
  }

  const urlNetworks = searchParams.get(PoolListUrlParams.Networks)
  const urlPoolTypes = searchParams.get(PoolListUrlParams.PoolTypes)
  const urlSearchText = searchParams.get(PoolListUrlParams.Search)
  const urlSkip = searchParams.get(PoolListUrlParams.Skip)
  const urlFirst = searchParams.get(PoolListUrlParams.First)
  const urlSortBy = searchParams.get(PoolListUrlParams.SortBy)
  const urlSortDir = searchParams.get(PoolListUrlParams.SortDir)

  function setNewVars(vars: PoolsQueryVariables, newVars: Partial<PoolsQueryVariables>) {
    return {
      ...vars,
      ...newVars,
      where: {
        ...vars.where,
        ...newVars.where,
      },
    }
  }

  if (urlNetworks) {
    variables = setNewVars(variables, {
      where: {
        chainIn: urlNetworks.split(',') as GqlChain[],
      },
    })
  }

  if (urlPoolTypes) {
    const _poolTypes = urlPoolTypes
      .split(',')
      .map(poolType => POOL_TYPE_MAP[poolType])
      .flat()

    variables = setNewVars(variables, {
      where: {
        poolTypeIn: _poolTypes,
      },
    })
  }

  if (urlSearchText) {
    variables = setNewVars(variables, {
      textSearch: urlSearchText,
    })
  }

  if (urlSkip) {
    variables = setNewVars(variables, {
      skip: parseInt(urlSkip),
    })
  }

  if (urlFirst) {
    variables = setNewVars(variables, {
      first: parseInt(urlFirst),
    })
  }

  if (urlSortBy) {
    variables = setNewVars(variables, {
      orderBy: urlSortBy as GqlPoolOrderBy,
    })
  }

  if (urlSortDir) {
    variables = setNewVars(variables, {
      orderDirection: urlSortDir as GqlPoolOrderDirection,
    })
  }

  return variables
}
