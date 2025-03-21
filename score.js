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
  let nextBall = 0
  if (spare && nextFrame) {
    nextBall = nextFrame[0]
    return Frame[0] + Frame[1] + nextBall
  } else {
    return Frame[0] + Frame[1]
  }
}

function scoreTotal(Frames) {
// running total to start at 0
let total = 0
// loop through array of frames
for (let i = 0 ; i <= Frames.length - 1; i++) {
 const currentFrame = Frames[i]
 const nextFrame = Frames[i + 1]

 total += scoreFrame(currentFrame, nextFrame)
}
// if spare add nextBall
return total
// add frame to total and return final total
}