import ms from "ms";
import * as z from "zod";

export const schemaError = z.object({
  code: z.string(),
  message: z.string(),
});

export function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function matchingTextColor(color: string) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "#000" : "#fff";
}

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

export function nFormatter(num: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

export const slugify = (text: string) => {
  return `${generateRandomChar(5)}-${text}`
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const generateRandomChar = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const objectToSearchParams = (
  obj: Record<string, string | number | boolean>
) => {
  const params = new URLSearchParams(obj as unknown as string);
  return params.toString();
};

export function cleanURL(url: string) {
  try {
    const parsedURL = new URL(url);
    parsedURL.search = "";
    let urlString = parsedURL.toString();
    if (urlString.endsWith("/")) {
      urlString = urlString.slice(0, -1);
    }
    return urlString;
  } catch (err) {
    console.error(err);
    return "";
  }
}

export const cn = (...args: (string | undefined | boolean)[]) => {
  return args.filter(Boolean).join(" ");
};
