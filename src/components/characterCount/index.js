/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "../../state/selectors/charCount";

const characterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count:{count}</>;
};

export default characterCount;
