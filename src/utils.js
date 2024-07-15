import { parse, format } from "date-fns";

function formatMonth(string) {
  const date = parse(string, "yyyy-MM", new Date());
  const result = format(date, "MMM yyyy");
  return result;
}

export default formatMonth;
