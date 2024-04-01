function reverse(string: string): string;
function reverse(stringArray: string[]): string[];
function reverse(stringOrStringArray: string | string[]) {
  if (typeof stringOrStringArray == "string") {
    return stringOrStringArray.split("").reverse().join("");
  } else {
    return stringOrStringArray.slice().reverse();
  }
}

const hell = reverse("hello");
const h_e_l_l = reverse(["h", "e", "l", "l", "o"]);

function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(timeStampOrYear: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(timeStampOrYear, month - 1, day);
  } else {
    return new Date(timeStampOrYear);
  }
}

const doomsday = makeDate(2000, 1, 1); // 1 Jan 2000
const epoch = makeDate(0); // 1 Jun 1970
