import { ChangeEvent, useState } from "react";

const useInput = (initialValue: any) => {
  const [keyword, setter] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  return [keyword, onChange, setter];
};

export default useInput;
