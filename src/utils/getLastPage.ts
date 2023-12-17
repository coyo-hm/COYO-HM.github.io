import { DEFAULT_NUMBER_OF_RECENT_POST } from "@constants/post";

const getLastPage = (
  total: number,
  size: number = DEFAULT_NUMBER_OF_RECENT_POST
) => Math.max(1, Math.ceil(total / size) - 1);

export default getLastPage;
