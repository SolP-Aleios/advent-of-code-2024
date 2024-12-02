const checkAscendingReport = (report: number[]): boolean => {
  for (let i = 0; i < report.length - 1; i++) {
    const diff = report[i + 1] - report[i];
    if (diff <= 0 || diff > 3) return false;
  }
  return true;
};

const checkDescendingReport = (report: number[]): boolean => {
  for (let i = 0; i < report.length - 1; i++) {
    const diff = report[i] - report[i + 1];
    if (diff <= 0 || diff > 3) return false;
  }
  return true;
};

const isReportSafe = (
  report: number[],
  problemDampener: boolean = false,
): boolean => {
  if (checkAscendingReport(report) || checkDescendingReport(report)) {
    return true;
  }

  if (!problemDampener) {
    return false;
  }

  return report.some((_, i) => {
    return (
      checkAscendingReport(report.toSpliced(i, 1)) ||
      checkDescendingReport(report.toSpliced(i, 1))
    );
  });
};

export const day2 = (input: string[]) =>
  input.filter((report) => isReportSafe(report.split(' ').map(Number))).length;

export const day2part2 = (input: string[]) =>
  input.filter((report) => isReportSafe(report.split(' ').map(Number), true))
    .length;
