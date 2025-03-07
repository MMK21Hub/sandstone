import * as util from 'util'

import { VectorClass } from './Coordinates'

import type {
  Coordinates, NBTObject, Range,
  RootNBT, Rotation,
} from '@arguments'
// PARSERS
export function arrayToArgsParser(args: unknown): (
  typeof args extends string[] ? VectorClass<typeof args> : typeof args
) {
  if (Array.isArray(args) && args.length === 3) {
    return new VectorClass(args.map((arg) => arg.toString()))
  }

  return args
}

function isRawCoordinates(arg: unknown): arg is [string, string, string] | [string, string] {
  return Array.isArray(arg) && (arg.length === 3 || arg.length === 2) && arg.every((c) => typeof c === 'string')
}

function isRawRotation(arg: unknown): arg is [string, string] {
  return Array.isArray(arg) && arg.length === 2 && arg.every((c) => typeof c === 'string')
}

export function coordinatesParser<T extends unknown>(coordinates: T): (
  T extends Coordinates ? VectorClass<[string, string, string]> : T
) {
  return isRawCoordinates(coordinates) ? new VectorClass(coordinates) : coordinates as any
}

export function rotationParser<T extends unknown>(rotation: T): (
  T extends Rotation ? VectorClass<[string, string]> : T
) {
  return isRawRotation(rotation) ? new VectorClass(rotation) : rotation as any
}

// Sanitize score values. null => '', Infinity => '', any number => itself
export const sanitizeValue = (value: number | null | undefined): string => {
  if (value === undefined || value === null) {
    return ''
  }

  if (Number.isFinite(value)) {
    return value.toString()
  }

  // Value is Infinity or -Infinity
  return ''
}

// Returns the string representation of a range. [0, null] => '0..', [-Infinity, 5] => '..5', 8 => '8'
export const rangeParser = (range: Range): string => {
  if (Array.isArray(range)) {
    return `${sanitizeValue(range[0])}..${sanitizeValue(range[1])}`
  }
  return range.toString()
}
