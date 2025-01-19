export const ALL_TAG = "all";

export interface TagInfoNode {
  label: string;
  color?: string;
  bg?: string;
  bg_hover?: string;
  text?: string;
  text_hover?: string;
  border?: string;
}

const TAG_INFO: {
  [key: string]: TagInfoNode;
} = {
  algorithm: { label: "Algorithm" },
  programming: { label: "Programming" },
  network: { label: "Network" },
  css: {
    label: "CSS",
    color: "#1572b6",
    bg: "bg-[#1572b6]",
    bg_hover: "hover:bg-[#1572b6] dark:hover:bg-[#1572b6]",
    text: "text-[#1572b6]",
    text_hover: "hover:text-[#1572b6] dark:hover:text-[#1572b6]",
    border: "border-[#1572b6]",
  },
  scss: {
    label: "SCSS",
    color: "#bf4080",
    bg: "bg-[#bf4080]",
    bg_hover: "hover:bg-[#bf4080] dark:hover:bg-[#bf4080]",
    text: "text-[#bf4080]",
    text_hover: "hover:text-[#bf4080] dark:hover:text-[#bf4080]",
    border: "border-[#bf4080]",
  },
  emotion: {
    label: "Emotion",
    color: "#d26ac2",
    bg: "bg-[#d26ac2]",
    bg_hover: "hover:bg-[#d26ac2] dark:hover:bg-[#d26ac2]",
    text: "text-[#d26ac2]",
    text_hover: "hover:text-[#d26ac2] dark:hover:text-[#d26ac2]",
    border: "border-[#d26ac2]",
  },
  styled_components: {
    label: "Styled-Components",
    color: "#ffa4e8",
    bg: "bg-[#ffa4e8]",
    bg_hover: "hover:bg-[#ffa4e8] dark:hover:bg-[#ffa4e8]",
    text: "text-[#ffa4e8]",
    text_hover: "hover:text-[#ffa4e8] dark:hover:text-[#ffa4e8]",
    border: "border-[#ffa4e8]",
  },
  gatsby: {
    label: "Gatsby",
    color: "#663399",
    bg: "bg-[#663399]",
    bg_hover: "hover:bg-[#663399] dark:hover:bg-[#663399]",
    text: "text-[#663399]",
    text_hover: "hover:text-[#663399] dark:hover:text-[#663399]",
    border: "border-[#663399]",
  },
  intellij: { label: "IntelliJ" },
  javascript: {
    label: "JavaScript",
    color: "#fac905",
    bg: "bg-[#fac905]",
    bg_hover: "hover:bg-[#fac905] dark:hover:bg-[#fac905]",
    text: "text-[#fac905]",
    text_hover: "hover:text-[#fac905] dark:hover:text-[#fac905]",
    border: "border-[#fac905]",
  },
  typescript: {
    label: "TypeScript",
    color: "#3178c6",
    bg: "bg-[#3178c6]",
    bg_hover: "hover:bg-[#3178c6] dark:hover:bg-[#3178c6]",
    text: "text-[#3178c6]",
    text_hover: "hover:text-[#3178c6] dark:hover:text-[#3178c6]",
    border: "border-[#3178c6]",
  },
  python3: { label: "Python3" },
  html: {
    label: "HTML",
    color: "#e44f26",
    bg: "bg-[#e44f26]",
    bg_hover: "hover:bg-[#e44f26] dark:hover:bg-[#e44f26]",
    text: "text-[#e44f26]",
    text_hover: "hover:text-[#e44f26] dark:hover:text-[#e44f26]",
    border: "border-[#e44f26]",
  },
  react: {
    label: "React",
    color: "#61dbfb",
    bg: "bg-[#61dbfb]",
    bg_hover: "hover:bg-[#61dbfb] dark:hover:bg-[#61dbfb]",
    text: "text-[#61dbfb]",
    text_hover: "hover:text-[#61dbfb] dark:hover:text-[#61dbfb]",
    border: "border-[#61dbfb]",
  },
  redux_persist: { label: "Redux-Persist" },
  redux: {
    label: "Redux",
    color: "#764abc",
    bg: "bg-[#764abc]",
    bg_hover: "hover:bg-[#764abc] dark:hover:bg-[#764abc]",
    text: "text-[#764abc",
    text_hover: "hover:text-[#764abc] dark:hover:text-[#764abc]",
    border: "border-[#764abc]",
  },
  recoil: { label: "Recoil" },
  axios: { label: "Axios" },
  lodash: { label: "Lodash" },
  git: {
    label: "Git/Github",
    color: "#000000",
    bg: "bg-black",
    bg_hover: "hover:bg-black dark:hover:bg-black",
    text: "text-black",
    text_hover: "hover:text-black dark:hover:text-black",
    border: "border-black",
  },
  reg_exp: {
    label: "RegExp",
    color: "#b0b0ae",
    bg: "bg-[#b0b0ae]",
    bg_hover: "hover:bg-[#b0b0ae] dark:hover:bg-[#b0b0ae]",
    text: "text-[#b0b0ae]",
    text_hover: "hover:text-[#b0b0ae] dark:hover:text-[#b0b0ae]",
    border: "border-[#b0b0ae]",
  },
  // git_hub: {
  //   label: "GitHub",
  //   color: "#000000",
  //   bg: "bg-black",
  //   bg_hover: "hover:bg-black dark:hover:bg-white",
  //   text: "text-black dark:text-white",
  //   text_hover: "hover:text-black dark:hover:text-white",
  //   border: "border-black",
  // },
  npm: { label: "npm" },
  yarn: { label: "yarn" },
  yarn_berry: { label: "yarn berry" },
  jest: {
    label: "Jest",
    color: "#99425b",
    bg: "bg-[#99425b]",
    bg_hover: "hover:bg-[#99425b] dark:hover:bg-[#99425b]",
    text: "text-[#99425b]",
    text_hover: "hover:text-[#99425b] dark:hover:text-[#99425b]",
    border: "border-[#99425b]",
  },
};
export default TAG_INFO;
