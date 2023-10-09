import { DEFAULT_NUMBER_OF_RECENT_POST } from "@src/constants";

export const getLastPage = (
  total: number,
  size: number = DEFAULT_NUMBER_OF_RECENT_POST
) => Math.max(1, Math.ceil(total / size));
