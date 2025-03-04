import type {
  AdvancementOptions, ItemModifierOptions, LootTableOptions, MCFunctionOptions, PredicateOptions, RecipeOptions, TagOptions,
} from '@resources'
import type { BASIC_CONFLICT_STRATEGIES } from './generalTypes'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const NAMESPACE: string = typeof window === 'undefined' ? process.env.NAMESPACE : window.NAMESPACE

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const PACK_UID: string = typeof window === 'undefined' ? process.env.PACK_UID : window.PACK_UID

const {
  GENERAL_CONFLICT_STRATEGY,
  ADVANCEMENT_CONFLICT_STRATEGY,
  LOOT_TABLE_CONFLICT_STRATEGY,
  MCFUNCTION_CONFLICT_STRATEGY,
  PREDICATE_CONFLICT_STRATEGY,
  RECIPE_CONFLICT_STRATEGY,
  TAG_CONFLICT_STRATEGY,
} = process.env

const DEFAULT_STRATEGY = 'warn'

let GENERAL_STRATEGY: BASIC_CONFLICT_STRATEGIES = DEFAULT_STRATEGY
if (GENERAL_CONFLICT_STRATEGY && isBasic(GENERAL_CONFLICT_STRATEGY)) {
  GENERAL_STRATEGY = GENERAL_CONFLICT_STRATEGY
}

export const CONFLICT_STRATEGIES: {
  DEFAULT: 'warn',
  GENERAL: 'throw' | 'replace' | 'ignore' | 'warn',
  ADVANCEMENT: NonNullable<AdvancementOptions['onConflict']>,
  LOOT_TABLE: NonNullable<LootTableOptions['onConflict']>,
  MCFUNCTION: NonNullable<MCFunctionOptions['onConflict']>,
  PREDICATE: NonNullable<PredicateOptions['onConflict']>,
  RECIPE: NonNullable<RecipeOptions['onConflict']>,
  TAG: NonNullable<TagOptions['onConflict']>,
  ITEM_MODIFIER: NonNullable<ItemModifierOptions['onConflict']>,
} = {
  DEFAULT: DEFAULT_STRATEGY,
  GENERAL: GENERAL_STRATEGY,
  ADVANCEMENT: GENERAL_STRATEGY,
  LOOT_TABLE: GENERAL_STRATEGY,
  MCFUNCTION: GENERAL_STRATEGY,
  PREDICATE: GENERAL_STRATEGY,
  RECIPE: GENERAL_STRATEGY,
  TAG: GENERAL_STRATEGY,
  ITEM_MODIFIER: GENERAL_STRATEGY,
}

function isBasic(strategy?: string): strategy is BASIC_CONFLICT_STRATEGIES {
  return strategy === 'throw' || strategy === 'replace' || strategy === 'warn' || strategy === 'ignore'
}

if (isBasic(ADVANCEMENT_CONFLICT_STRATEGY)) {
  CONFLICT_STRATEGIES.ADVANCEMENT = ADVANCEMENT_CONFLICT_STRATEGY
}
if (isBasic(LOOT_TABLE_CONFLICT_STRATEGY)) {
  CONFLICT_STRATEGIES.LOOT_TABLE = LOOT_TABLE_CONFLICT_STRATEGY
}
if ((isBasic(MCFUNCTION_CONFLICT_STRATEGY) || MCFUNCTION_CONFLICT_STRATEGY === 'append' || MCFUNCTION_CONFLICT_STRATEGY === 'prepend')) {
  CONFLICT_STRATEGIES.MCFUNCTION = MCFUNCTION_CONFLICT_STRATEGY
}
if (isBasic(PREDICATE_CONFLICT_STRATEGY)) {
  CONFLICT_STRATEGIES.PREDICATE = PREDICATE_CONFLICT_STRATEGY
}
if (isBasic(RECIPE_CONFLICT_STRATEGY)) {
  CONFLICT_STRATEGIES.RECIPE = RECIPE_CONFLICT_STRATEGY
}
if (isBasic(TAG_CONFLICT_STRATEGY)) {
  CONFLICT_STRATEGIES.TAG = TAG_CONFLICT_STRATEGY
}
