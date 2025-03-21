export { scoreFrame }
export { scoreTotal }

const Frames = [
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


function scoreFrame(Frame, nextFrame) {
  const spare = Frame[0] + Frame[1] === 10
  let nextBall = nextFrame ? nextFrame[0] : 0
  if (spare && nextFrame) {
    return Frame[0] + Frame[1] + nextBall
  } else {
    return Frame[0] + Frame[1]
  }
}

function scoreTotal(Frames) {
let total = 0
for (let i = 0 ; i <= Frames.length - 1; i++) {
 const currentFrame = Frames[i]
 const nextFrame = Frames[i + 1]
 total += scoreFrame(currentFrame, nextFrame)
}
return total
}