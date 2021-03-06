import {
  ALINK_TOKEN_ADDR,
  BASED_TOKEN_ADDR,
  COMP_TOKEN_ADDR,
  CREAM_TOKEN_ADDR,
  DICE_TOKEN_ADDR,
  ERC20_ABI,
  LEND_TOKEN_ADDR,
  LINK_TOKEN_ADDR,
  MKR_TOKEN_ADDR,
  PASTA_TOKEN_ADDR,
  SHRIMP_TOKEN_ADDR,
  SNX_TOKEN_ADDRESS,
  WBTC_TOKEN_ADDR,
  WETH_TOKEN_ADDR,
  YAM_CLASSIC_ADDR,
  YAM_TOKEN_ABI,
  YAM_TOKEN_ADDR,
  YCRV_TOKEN_ADDR,
  YFI_TOKEN_ADDR,
} from './constants'
import { TokenData } from '../types'

export const YCRV_TOKEN: TokenData = {
  address: YCRV_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'yCRV',
  tokenId: 'curve-fi-ydai-yusdc-yusdt-ytusd',
}

export const YYCRV_TOKEN: TokenData = {
  address: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
  ABI: ERC20_ABI,
  ticker: 'yyCRV',
  tokenId: 'curve-fi-ydai-yusdc-yusdt-ytusd',
}

export const YAM_TOKEN: TokenData = {
  address: YAM_TOKEN_ADDR,
  ABI: YAM_TOKEN_ABI,
  ticker: 'YAM',
  tokenId: 'yam',
}

export const YAM_CLASSIC_TOKEN: TokenData = {
  address: YAM_CLASSIC_ADDR,
  ABI: YAM_TOKEN_ABI,
  ticker: 'YAM2',
}

export const YFI_TOKEN: TokenData = {
  address: YFI_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'YFI',
  tokenId: 'yearn-finance',
}

export const COMP_TOKEN: TokenData = {
  address: COMP_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'COMP',
  tokenId: 'compound-governance-token',
}

export const LEND_TOKEN: TokenData = {
  address: LEND_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'LEND',
  tokenId: 'ethlend',
}

export const LINK_TOKEN: TokenData = {
  address: LINK_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'LINK',
  tokenId: 'chainlink',
}

export const ALINK_TOKEN: TokenData = {
  address: ALINK_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'aLINK',
  tokenId: 'chainlink',
}

export const MKR_TOKEN: TokenData = {
  address: MKR_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'MKR',
  tokenId: 'maker',
}

export const SNX_TOKEN: TokenData = {
  address: SNX_TOKEN_ADDRESS,
  ABI: ERC20_ABI,
  ticker: 'SNX',
  tokenId: 'havven',
}

export const WETH_TOKEN: TokenData = {
  address: WETH_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'WETH',
  tokenId: 'ethereum',
}

export const SHRIMP_TOKEN: TokenData = {
  address: SHRIMP_TOKEN_ADDR,
  ABI: YAM_TOKEN_ABI,
  ticker: 'SHRIMP',
  tokenId: 'shrimp-finance',
}

export const CREAM_TOKEN: TokenData = {
  address: CREAM_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'CREAM',
  tokenId: 'cream-2',
}

export const DICE_TOKEN: TokenData = {
  address: DICE_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'DICE',
  tokenId: 'cream-2',
}

export const PASTA_TOKEN: TokenData = {
  address: PASTA_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'PASTA',
  tokenId: 'spaghetti',
}

export const WBTC_TOKEN: TokenData = {
  address: WBTC_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'WBTC',
}

export const BASED_TOKEN: TokenData = {
  address: BASED_TOKEN_ADDR,
  ABI: ERC20_ABI,
  ticker: 'BASED',
  tokenId: 'based-money',
}

export const SUSD_TOKEN: TokenData = {
  address: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
  ABI: ERC20_ABI,
  ticker: 'sUSD',
  tokenId: 'nusd',
}

export const ZOMBIE_TOKEN: TokenData = {
  address: '0xd55BD2C12B30075b325Bc35aEf0B46363B3818f8',
  ABI: ERC20_ABI,
  ticker: 'ZOMBIE',
  tokenId: 'zombie-finance',
}

export const DAI_TOKEN: TokenData = {
  address: '0xd55BD2C12B30075b325Bc35aEf0B46363B3818f8',
  ABI: ERC20_ABI,
  ticker: 'DAI',
  tokenId: 'dai',
}
