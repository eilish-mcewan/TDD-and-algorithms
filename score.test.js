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
  let nextframe = [5,0]
  const expected = 15
  const actual = score.scoreFrame(frame, nextframe)
  expect(actual).toBe(expected)
})

test('scores total', () => {
  const frames = [
    [6, 1],
    [4, 0],
    [6, 4],
    [2, 7],
    [3, 5],
    [5, 0],
    [5, 5],
    [0, 0],
    [1, 6],
    [7, 2],
  ]
  const expected = 71
  const actual = score.scoreTotal(frames)
  expect(actual).toBe(expected)
})