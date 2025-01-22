import CONSTANTS from "@src/constants";

const getLastPage = (
  total: number,
  size: number = CONSTANTS.DEFAULT_NUMBER_OF_RECENT_POST
) => Math.max(1, Math.ceil(total / size));

export default getLastPage;
