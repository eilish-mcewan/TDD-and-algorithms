export { scoreFrame }

function scoreFrame(Frame) {
  if (Frame[0] === 10) {
    return 'Strike!'
  } else if (Frame[0] + Frame[1] === 10) {
    return 'Spare!'
  } else {
    return Frame[0] + Frame[1]
  }
}
