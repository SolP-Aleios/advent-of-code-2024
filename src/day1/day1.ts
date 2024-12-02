const parseLists = (input: string[]) => {
  return {
    listA: input.map((pair) => Number(pair.split('   ')[0])).sort(),
    listB: input.map((pair) => Number(pair.split('   ')[1])).sort(),
  };
};

const countOccurrences = (arr: number[], val: number) =>
  arr.filter((item) => item === val).length;

export const day1 = (input: string[]) => {
  const { listA, listB } = parseLists(input);
  return listA.reduce(
    (totalDistance, num, index) => totalDistance + Math.abs(num - listB[index]),
    0,
  );
};

export const day1part2 = (input: string[]) => {
  const { listA, listB } = parseLists(input);
  return listA.reduce(
    (similarity, num) => similarity + num * countOccurrences(listB, num),
    0,
  );
};
