const BG: { [key: string]: string } = {
  React: "bg-[color:var(--color-react)]",
  JavaScript: "bg-[color:var(--color-javascript)]",
  TypeScript: "bg-[color:var(--color-typescript)]",
  Redux: "bg-[color:var(--color-redux)]",
  Gatsby: "bg-[color:var(--color-gatsby)]",
  Jest: "bg-[color:var(--color-jest)]",
  GithubPage: "bg-[color:var(--color-githubpage)]",
  CSS: "bg-[color:var(--color-css)]",
  SCSS: "bg-[color:var(--color-scss)]",
  ["styled-components"]: "bg-[color:var(--color-styledcomponents)]",
  Emotion: "bg-[color:var(--color-emotion)]",
  HTML: "bg-[color:var(--color-html)]",
};

const TEXT: { [key: string]: string } = {
  React: "text-[color:var(--color-react)]",
  JavaScript: "text-[color:var(--color-javascript)]",
  TypeScript: "text-[color:var(--color-typescript)]",
  Redux: "text-[color:var(--color-redux)]",
  Gatsby: "text-[color:var(--color-gatsby)]",
  Jest: "text-[color:var(--color-jest)]",
  GithubPage: "text-[color:var(--color-githubpage)]",
  CSS: "text-[color:var(--color-css)]",
  SCSS: "text-[color:var(--color-scss)]",
  ["styled-components"]: "text-[color:var(--color-styledcomponents)]",
  Emotion: "text-[color:var(--color-emotion)]",
  HTML: "text-[color:var(--color-html)]",
};

const TEXT_HOVER: { [key: string]: string } = {
  React: "hover:text-[color:var(--color-react)]",
  JavaScript: "hover:text-[color:var(--color-javascript)]",
  TypeScript: "hover:text-[color:var(--color-typescript)]",
  Redux: "hover:text-[color:var(--color-redux)]",
  Gatsby: "hover:text-[color:var(--color-gatsby)]",
  Jest: "hover:text-[color:var(--color-jest)]",
  GithubPage: "hover:text-[color:var(--color-githubpage)]",
  CSS: "hover:text-[color:var(--color-css)]",
  SCSS: "hover:text-[color:var(--color-scss)]",
  ["styled-components"]: "hover:text-[color:var(--color-styledcomponents)]",
  Emotion: "hover:text-[color:var(--color-emotion)]",
  HTML: "hover:text-[color:var(--color-html)]",
};

const TAG_COLOR = { BG, TEXT, TEXT_HOVER };

export default TAG_COLOR;