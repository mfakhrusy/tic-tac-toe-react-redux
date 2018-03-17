export const calculateWinner = (tiles) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const winnerLine of winnerLines) {
    const [a, b, c] = [winnerLine];
    if (tiles[a] !== '' && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
      return tiles[a];
    }
  }
  return null;
}

export const justAHack = () => {
  console.log('a hack');
}
