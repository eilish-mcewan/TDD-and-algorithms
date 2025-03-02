import * as score from './score'

import { test, expect } from 'vitest'

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
  const frame = [2, 3]
  const expected = 5
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare', () => {
  const frame = [3, 7]
  const expected = 'Spare!'
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a single strike', () => {
  let X = 10
  const frame = [X, 0]
  const expected = 'Strike!'
  const actual = score.scoreFrame(frame)
  expect(actual).toBe(expected)
})
