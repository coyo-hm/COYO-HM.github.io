const sortPostByDate = (postList: any[], reverse = false) =>
  postList.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (reverse) {
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
    } else {
      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
    }

    return 0;
  });

export default sortPostByDate;
