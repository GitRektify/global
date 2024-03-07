/* eslint-disable max-len */

import { GqlChain, GqlPoolElement } from '@/lib/shared/services/api/generated/graphql'

export const recoveryPoolMock: GqlPoolElement = {
  id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473',
  address: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023',
  name: 'Balancer 50wstETH-50bb-euler-USD',
  version: 3,
  owner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  decimals: 18,
  factory: '0x5dd94da3644ddd055fcf6b3e1aa310bb7801eb8b',
  symbol: '50wstETH-50bb-euler-USD',
  createTime: 1675958987,
  type: 'WEIGHTED',
  chain: GqlChain.Mainnet,
  vaultVersion: 2,
  dynamicData: {
    poolId: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473',
    swapEnabled: true,
    totalLiquidity: '27.56',
    totalLiquidity24hAgo: '27.64',
    totalShares: '0.383446968921222182',
    totalShares24hAgo: '0.383446968921222182',
    fees24h: '0.00',
    swapFee: '0.0005',
    volume24h: '0.00',
    fees48h: '0.00',
    volume48h: '0.00',
    lifetimeVolume: '13677760.25',
    lifetimeSwapFees: '6838.88',
    holdersCount: '7',
    swapsCount: '1027',
    sharePriceAth: '71.71543771553347',
    sharePriceAthTimestamp: 1709251200,
    sharePriceAtl: '16.74939876152677',
    sharePriceAtlTimestamp: 1678665600,
    totalLiquidityAth: '10521801.86',
    totalLiquidityAthTimestamp: 1678320000,
    totalLiquidityAtl: '0.91',
    totalLiquidityAtlTimestamp: 1676332800,
    volume24hAth: '4156780.34',
    volume24hAthTimestamp: 1678665600,
    volume24hAtl: '0.00',
    volume24hAtlTimestamp: 1675900800,
    fees24hAth: '2078.39',
    fees24hAthTimestamp: 1678665600,
    fees24hAtl: '0.00',
    fees24hAtlTimestamp: 1675900800,
    yieldCapture24h: '0.04',
    yieldCapture48h: '0.08',
    apr: {
      hasRewardApr: false,
      thirdPartyApr: { total: '0' },
      nativeRewardApr: { total: '0' },
      swapApr: '0',
      apr: { total: '0.513654555109003' },
      items: [
        {
          id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-wstETH-yield-apr',
          title: 'wstETH APR',
          apr: { total: '0.008572737434281911' },
          subItems: [],
        },
        {
          id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-EULER',
          title: 'Euler boosted APR',
          apr: { total: '0.5050818176747212' },
          subItems: [
            {
              id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f-0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a4399-2',
              title: 'eUSDC APR',
              apr: { total: '0.2609486185344997' },
            },
            {
              id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f-0x3c640f0d3036ad85afa2d5a9e32be651657b874f-0',
              title: 'eUSDT APR',
              apr: { total: '0.007931613037193017' },
            },
            {
              id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f-0xeb486af868aeb3b6e53066abc9623b1041b42bc0-3',
              title: 'eDAI APR',
              apr: { total: '0.2362015861030285' },
            },
          ],
        },
      ],
    },
  },
  allTokens: [
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      name: 'Wrapped liquid staked Ether 2.0',
      symbol: 'wstETH',
      decimals: 18,
      isNested: false,
      isPhantomBpt: false,
      isMainToken: true,
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x4d19f33948b99800b6113ff3e83bec9b537c85d2',
      address: '0x4d19f33948b99800b6113ff3e83bec9b537c85d2',
      name: 'Euler Pool: Tether USD',
      symbol: 'eUSDT',
      decimals: 18,
      isNested: true,
      isPhantomBpt: false,
      isMainToken: false,
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0xdac17f958d2ee523a2206206994597c13d831ec7',
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 6,
      isNested: true,
      isPhantomBpt: false,
      isMainToken: true,
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0xe025e3ca2be02316033184551d4d3aa22024d9dc',
      address: '0xe025e3ca2be02316033184551d4d3aa22024d9dc',
      name: 'Euler Pool: Dai Stablecoin',
      symbol: 'eDAI',
      decimals: 18,
      isNested: true,
      isPhantomBpt: false,
      isMainToken: false,
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x6b175474e89094c44da98b954eedeac495271d0f',
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      isNested: true,
      isPhantomBpt: false,
      isMainToken: true,
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0xeb91861f8a4e1c12333f42dce8fb0ecdc28da716',
      address: '0xeb91861f8a4e1c12333f42dce8fb0ecdc28da716',
      name: 'Euler Pool: USD Coin',
      symbol: 'eUSDC',
      decimals: 18,
      isNested: true,
      isPhantomBpt: false,
      isMainToken: false,
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x50cf90b954958480b8df7958a9e965752f627124',
      address: '0x50cf90b954958480b8df7958a9e965752f627124',
      name: 'bb-euler-USD',
      symbol: 'bb-euler-USD-BPT',
      decimals: 18,
      isNested: false,
      isPhantomBpt: false,
      isMainToken: false,
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0xeb486af868aeb3b6e53066abc9623b1041b42bc0',
      address: '0xeb486af868aeb3b6e53066abc9623b1041b42bc0',
      name: 'Balancer Euler Boosted Pool (DAI)',
      symbol: 'bb-e-DAI',
      decimals: 18,
      isNested: true,
      isPhantomBpt: false,
      isMainToken: false,
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      isNested: true,
      isPhantomBpt: false,
      isMainToken: true,
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a4399',
      address: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a4399',
      name: 'Balancer Euler Boosted Pool (USDC)',
      symbol: 'bb-e-USDC',
      decimals: 18,
      isNested: true,
      isPhantomBpt: false,
      isMainToken: false,
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x3c640f0d3036ad85afa2d5a9e32be651657b874f',
      address: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f',
      name: 'Balancer Euler Boosted Pool (USDT)',
      symbol: 'bb-e-USDT',
      decimals: 18,
      isNested: true,
      isPhantomBpt: false,
      isMainToken: false,
    },
  ],
  displayTokens: [
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x50cf90b954958480b8df7958a9e965752f627124',
      address: '0x50cf90b954958480b8df7958a9e965752f627124',
      name: 'bb-euler-USD',
      weight: '0.5',
      symbol: 'bb-euler-USD-BPT',
      nestedTokens: [
        {
          id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x50cf90b954958480b8df7958a9e965752f627124-0x6b175474e89094c44da98b954eedeac495271d0f',
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          name: 'Dai Stablecoin',
          weight: null,
          symbol: 'DAI',
        },
        {
          id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x50cf90b954958480b8df7958a9e965752f627124-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          name: 'USD Coin',
          weight: null,
          symbol: 'USDC',
        },
        {
          id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x50cf90b954958480b8df7958a9e965752f627124-0xdac17f958d2ee523a2206206994597c13d831ec7',
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          name: 'Tether USD',
          weight: null,
          symbol: 'USDT',
        },
      ],
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      name: 'Wrapped liquid staked Ether 2.0',
      weight: '0.5',
      symbol: 'wstETH',
      nestedTokens: null,
    },
  ],
  staking: {
    id: '0x623f3dbc761b46f64ae7951700dd7724cb7d6075',
    type: 'GAUGE',
    chain: 'MAINNET',
    address: '0x623f3dbc761b46f64ae7951700dd7724cb7d6075',
    gauge: {
      id: '0x623f3dbc761b46f64ae7951700dd7724cb7d6075',
      gaugeAddress: '0x623f3dbc761b46f64ae7951700dd7724cb7d6075',
      version: 1,
      status: 'KILLED',
      workingSupply: '0.009355380126269833',
      otherGauges: [],
      rewards: [
        {
          id: '0x623f3dbc761b46f64ae7951700dd7724cb7d6075-0xba100000625a3754423978a60c9317c58a424e3d',
          rewardPerSecond: '0.000000000000000000',
          tokenAddress: '0xba100000625a3754423978a60c9317c58a424e3d',
        },
      ],
    },
  },
  investConfig: {
    singleAssetEnabled: true,
    proportionalEnabled: true,
    options: [
      {
        poolTokenIndex: 0,
        poolTokenAddress: '0x50cf90b954958480b8df7958a9e965752f627124',
        tokenOptions: [
          {
            id: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f00000000000000000000046b-0xdac17f958d2ee523a2206206994597c13d831ec7',
            index: 2,
            name: 'Tether USD',
            symbol: 'USDT',
            balance: '59.494647',
            address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            priceRate: '1.0',
            decimals: 6,
            weight: null,
            totalBalance: '59.494647',
          },
        ],
      },
      {
        poolTokenIndex: 0,
        poolTokenAddress: '0x50cf90b954958480b8df7958a9e965752f627124',
        tokenOptions: [
          {
            id: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a439900000000000000000000046a-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            index: 1,
            name: 'USD Coin',
            symbol: 'USDC',
            balance: '423.306163',
            address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            priceRate: '1.0',
            decimals: 6,
            weight: null,
            totalBalance: '423.306163',
          },
        ],
      },
      {
        poolTokenIndex: 0,
        poolTokenAddress: '0x50cf90b954958480b8df7958a9e965752f627124',
        tokenOptions: [
          {
            id: '0xeb486af868aeb3b6e53066abc9623b1041b42bc000000000000000000000046c-0x6b175474e89094c44da98b954eedeac495271d0f',
            index: 1,
            name: 'Dai Stablecoin',
            symbol: 'DAI',
            balance: '514.465552577786742881',
            address: '0x6b175474e89094c44da98b954eedeac495271d0f',
            priceRate: '1.0',
            decimals: 18,
            weight: null,
            totalBalance: '514.465552577786742881',
          },
        ],
      },
      {
        poolTokenIndex: 1,
        poolTokenAddress: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
        tokenOptions: [
          {
            id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
            index: 1,
            name: 'Wrapped liquid staked Ether 2.0',
            symbol: 'wstETH',
            balance: '0.001754442794244201',
            address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
            priceRate: '1.0',
            decimals: 18,
            weight: '0.5',
            totalBalance: '0.001754442794244201',
          },
        ],
      },
    ],
  },
  withdrawConfig: {
    singleAssetEnabled: true,
    proportionalEnabled: true,
    options: [
      {
        poolTokenIndex: 0,
        poolTokenAddress: '0x50cf90b954958480b8df7958a9e965752f627124',
        tokenOptions: [
          {
            id: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f00000000000000000000046b-0xdac17f958d2ee523a2206206994597c13d831ec7',
            index: 2,
            name: 'Tether USD',
            symbol: 'USDT',
            balance: '59.494647',
            address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            priceRate: '1.0',
            decimals: 6,
            weight: null,
            totalBalance: '59.494647',
          },
        ],
      },
      {
        poolTokenIndex: 0,
        poolTokenAddress: '0x50cf90b954958480b8df7958a9e965752f627124',
        tokenOptions: [
          {
            id: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a439900000000000000000000046a-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            index: 1,
            name: 'USD Coin',
            symbol: 'USDC',
            balance: '423.306163',
            address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            priceRate: '1.0',
            decimals: 6,
            weight: null,
            totalBalance: '423.306163',
          },
        ],
      },
      {
        poolTokenIndex: 0,
        poolTokenAddress: '0x50cf90b954958480b8df7958a9e965752f627124',
        tokenOptions: [
          {
            id: '0xeb486af868aeb3b6e53066abc9623b1041b42bc000000000000000000000046c-0x6b175474e89094c44da98b954eedeac495271d0f',
            index: 1,
            name: 'Dai Stablecoin',
            symbol: 'DAI',
            balance: '514.465552577786742881',
            address: '0x6b175474e89094c44da98b954eedeac495271d0f',
            priceRate: '1.0',
            decimals: 18,
            weight: null,
            totalBalance: '514.465552577786742881',
          },
        ],
      },
      {
        poolTokenIndex: 1,
        poolTokenAddress: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
        tokenOptions: [
          {
            id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
            index: 1,
            name: 'Wrapped liquid staked Ether 2.0',
            symbol: 'wstETH',
            balance: '0.001754442794244201',
            address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
            priceRate: '1.0',
            decimals: 18,
            weight: '0.5',
            totalBalance: '0.001754442794244201',
          },
        ],
      },
    ],
  },
  userBalance: {
    stakedBalance: '0',
    totalBalance: '0.0',
    walletBalance: '0',
    stakedBalanceUsd: 0,
    walletBalanceUsd: 0,
    totalBalanceUsd: 0,
  },
  nestingType: 'HAS_SOME_PHANTOM_BPT',
  tokens: [
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x50cf90b954958480b8df7958a9e965752f627124',
      index: 0,
      name: 'bb-euler-USD',
      symbol: 'bb-euler-USD-BPT',
      balance: '20.952755572073536473',
      address: '0x50cf90b954958480b8df7958a9e965752f627124',
      weight: '0.5',
      priceRate: '1.0',
      decimals: 18,
      totalBalance: '20.952755572073536473',
      pool: {
        id: '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f',
        type: 'COMPOSABLE_STABLE',
        version: 3,
        name: 'bb-euler-USD',
        symbol: 'bb-euler-USD-BPT',
        address: '0x50cf90b954958480b8df7958a9e965752f627124',
        owner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
        factory: '0xdba127fbc23fb20f5929c546af220a991b5c6e01',
        createTime: 1675954271,
        totalShares: '895400.147223784762125555',
        totalLiquidity: '880756.3555825928',
        nestingType: 'HAS_ONLY_PHANTOM_BPT',
        swapFee: '0.1',
        amp: '2000',
        bptPriceRate: '1.000238166815367525',
        tokens: [
          {
            id: '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f-0x3c640f0d3036ad85afa2d5a9e32be651657b874f',
            index: 0,
            name: 'Balancer Euler Boosted Pool (USDT)',
            symbol: 'bb-e-USDT',
            balance: '1.225927492379106',
            address: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f',
            priceRate: '1.004485267200633076',
            decimals: 18,
            weight: null,
            mainTokenBalance: '9.730041',
            wrappedTokenBalance: '50634.440245546788850439',
            totalMainTokenBalance: '50644.170287',
            totalBalance: '52389.083306301663618953',
            pool: {
              id: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f00000000000000000000046b',
              type: 'LINEAR',
              version: 1,
              name: 'Balancer Euler Boosted Pool (USDT)',
              symbol: 'bb-e-USDT',
              address: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f',
              owner: '0x0000000000000000000000000000000000000000',
              factory: '0x5f43fba61f63fa6bff101a0a0458cea917f6b347',
              createTime: 1675908575,
              wrappedIndex: 1,
              mainIndex: 2,
              upperTarget: '3500000',
              lowerTarget: '1000000',
              totalShares: '320334.724137022541529969',
              totalLiquidity: '309975.0631115222',
              bptPriceRate: '1.0',
              tokens: [
                {
                  id: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f00000000000000000000046b-0x4d19f33948b99800b6113ff3e83bec9b537c85d2',
                  index: 1,
                  name: 'Euler Pool: Tether USD',
                  symbol: 'eUSDT',
                  balance: '1.1848680763378852',
                  address: '0x4d19f33948b99800b6113ff3e83bec9b537c85d2',
                  priceRate: '1.0',
                  decimals: 18,
                  weight: null,
                  totalBalance: '309605.903066808428169379',
                },
                {
                  id: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f00000000000000000000046b-0xdac17f958d2ee523a2206206994597c13d831ec7',
                  index: 2,
                  name: 'Tether USD',
                  symbol: 'USDT',
                  balance: '0.00022768722186824748',
                  address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                  priceRate: '1.0',
                  decimals: 6,
                  weight: null,
                  totalBalance: '59.494647',
                },
              ],
            },
          },
          {
            id: '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f-0x50cf90b954958480b8df7958a9e965752f627124',
            index: 1,
            name: 'bb-euler-USD',
            symbol: 'bb-euler-USD-BPT',
            balance: '2596148437667884.096014975802548411',
            address: '0x50cf90b954958480b8df7958a9e965752f627124',
            priceRate: '1.000238166815367525',
            decimals: 18,
            weight: null,
            totalBalance: '2596148437667884.096014975802548411',
          },
          {
            id: '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f-0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a4399',
            index: 2,
            name: 'Balancer Euler Boosted Pool (USDC)',
            symbol: 'bb-e-USDC',
            balance: '10.393189427067377',
            address: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a4399',
            priceRate: '1.000633937977554868',
            decimals: 18,
            weight: null,
            mainTokenBalance: '422.349401',
            wrappedTokenBalance: '435808.742051636981372113',
            totalMainTokenBalance: '436231.091453',
            totalBalance: '444145.082068547342295996',
            pool: {
              id: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a439900000000000000000000046a',
              type: 'LINEAR',
              version: 1,
              name: 'Balancer Euler Boosted Pool (USDC)',
              symbol: 'bb-e-USDC',
              address: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a4399',
              owner: '0x0000000000000000000000000000000000000000',
              factory: '0x5f43fba61f63fa6bff101a0a0458cea917f6b347',
              createTime: 1675908515,
              wrappedIndex: 2,
              mainIndex: 1,
              upperTarget: '10000000',
              lowerTarget: '2000000',
              totalShares: '445151.218410781788489231',
              totalLiquidity: '436450.6684445491',
              bptPriceRate: '0.981283138333550885',
              tokens: [
                {
                  id: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a439900000000000000000000046a-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                  index: 1,
                  name: 'USD Coin',
                  symbol: 'USDC',
                  balance: '0.009883160947892176',
                  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                  priceRate: '1.0',
                  decimals: 6,
                  weight: null,
                  totalBalance: '423.306163',
                },
                {
                  id: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a439900000000000000000000046a-0xeb91861f8a4e1c12333f42dce8fb0ecdc28da716',
                  index: 2,
                  name: 'Euler Pool: USD Coin',
                  symbol: 'eUSDC',
                  balance: '10.198115419896856',
                  address: '0xeb91861f8a4e1c12333f42dce8fb0ecdc28da716',
                  priceRate: '1.0',
                  decimals: 18,
                  weight: null,
                  totalBalance: '436795.993810903308934787',
                },
              ],
            },
          },
          {
            id: '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f-0xeb486af868aeb3b6e53066abc9623b1041b42bc0',
            index: 3,
            name: 'Balancer Euler Boosted Pool (DAI)',
            symbol: 'bb-e-DAI',
            balance: '9.338020788740025',
            address: '0xeb486af868aeb3b6e53066abc9623b1041b42bc0',
            priceRate: '1.000153689187269605',
            decimals: 18,
            weight: null,
            mainTokenBalance: '513.367173843080379560',
            wrappedTokenBalance: '393321.608210406889643810',
            totalMainTokenBalance: '393834.975384249970023370',
            totalBalance: '399053.249118255667643505',
            pool: {
              id: '0xeb486af868aeb3b6e53066abc9623b1041b42bc000000000000000000000046c',
              type: 'LINEAR',
              version: 1,
              name: 'Balancer Euler Boosted Pool (DAI)',
              symbol: 'bb-e-DAI',
              address: '0xeb486af868aeb3b6e53066abc9623b1041b42bc0',
              owner: '0x0000000000000000000000000000000000000000',
              factory: '0x5f43fba61f63fa6bff101a0a0458cea917f6b347',
              createTime: 1675908635,
              wrappedIndex: 2,
              mainIndex: 1,
              upperTarget: '10000000',
              lowerTarget: '2000000',
              totalShares: '399907.046605083208430053',
              totalLiquidity: '395466.9632890177',
              bptPriceRate: '0.985923389730464468',
              tokens: [
                {
                  id: '0xeb486af868aeb3b6e53066abc9623b1041b42bc000000000000000000000046c-0x6b175474e89094c44da98b954eedeac495271d0f',
                  index: 1,
                  name: 'Dai Stablecoin',
                  symbol: 'DAI',
                  balance: '0.012013016689366164',
                  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
                  priceRate: '1.0',
                  decimals: 18,
                  weight: null,
                  totalBalance: '514.465552577786742881',
                },
                {
                  id: '0xeb486af868aeb3b6e53066abc9623b1041b42bc000000000000000000000046c-0xe025e3ca2be02316033184551d4d3aa22024d9dc',
                  index: 2,
                  name: 'Euler Pool: Dai Stablecoin',
                  symbol: 'eDAI',
                  balance: '9.203897881410372',
                  address: '0xe025e3ca2be02316033184551d4d3aa22024d9dc',
                  priceRate: '1.0',
                  decimals: 18,
                  weight: null,
                  totalBalance: '394163.142520294167179245',
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473-0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      index: 1,
      name: 'Wrapped liquid staked Ether 2.0',
      symbol: 'wstETH',
      balance: '0.001754442794244201',
      address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      priceRate: '1.0',
      decimals: 18,
      weight: '0.5',
      totalBalance: '0.001754442794244201',
    },
  ],
} as unknown as GqlPoolElement
