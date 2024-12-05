export const day3 = (input: string) =>
  [...input.matchAll(/mul\(([0-9]+),([0-9]+)\)/g)].reduce((acc, match) => {
    return acc + parseInt(match[1]) * parseInt(match[2]);
  }, 0);

export const day3part2 = (input: string) =>
  (
    input
      .split('\n')
      .join()
      .match(/(?:^|do\(\))(.*?)(?:don\'t\(\)|$)/g) || []
  ).reduce((acc, d) => acc + day3(d), 0);
