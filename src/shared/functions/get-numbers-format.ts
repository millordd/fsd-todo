export const getFormatNumber = (number: number | string): string => {
  const [wholePart, decimalPart] = String(number).split('.');
  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return decimalPart
    ? `${formattedWholePart}.${decimalPart}`
    : formattedWholePart;
};

/// outputs formatNumber
//  formatNumber(-4) -> "-4"
//  formatNumber(4) -> "4"
//  formatNumber(-10) -> "-10"
//  formatNumber(10) -> "10"
//  formatNumber(-145) -> "-145"
//  formatNumber(145) -> "145"
//  formatNumber(-1457) -> "-1 457"
//  formatNumber(1457) -> "1 457"
//  formatNumber(-1457.13) -> "-1 457.13"
//  formatNumber(1457.13) -> "1 457.13"
//  formatNumber(-1457.10) -> "-1 457.1"
//  formatNumber(1457.10) -> "1 457.1"
//  formatNumber(14576.10) -> "14 576.1"
//  formatNumber(123456) -> "123 456"
//  formatNumber(1234567) -> "1 234 567"
