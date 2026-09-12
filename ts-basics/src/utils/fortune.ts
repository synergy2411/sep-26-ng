const LUCKY_NUMBER = Math.floor(Math.random() * 100);

export function getMyLuckyNumber() {
  return LUCKY_NUMBER;
}

export function getValues() {
  return 101;
}

export default function getDailyQuote() {
  return "Run 5 miles today!";
}

// export { getMyLuckyNumber };
// export default getDailyQuote;
