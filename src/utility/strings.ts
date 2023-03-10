import sanitize from "sanitize-html";

/**
 * Takes in a string in title case and converts it to snake case
 * @param cat category, type string
 * @returns string
 */

export function snakeCase(cat: string | undefined): string {
  if (!cat) return "";
  return cat.toLowerCase().replaceAll(" ", "_");
}

/**
 * Takes in a string in snake case and converts it to title case
 * @param cat category, type string
 * @returns string
 */

export function titleCase(cat: string | undefined): string {
  if (!cat) return "";
  return cat
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Cleans up markup html
 * @param dirtyHtml a markup hmtl generated by react quill
 * @returns a sanitized markup html returned by sanitize-html with custom config
 */
export const cleanHtml = (dirtyHtml: string) =>
  sanitize(dirtyHtml, {
    allowedTags: sanitize.defaults.allowedTags.concat(["h1", "h2"]),
    allowedAttributes: {
      "*": ["class"],
      a: ["href", "title"],
    },
    transformTags: {
      script: (tagName, attribs) => {
        return {
          tagName: "p",
          attribs: {
            class: "dangerous",
          },
          text: "Script tags are not allowed",
        };
      },
    },
  });
