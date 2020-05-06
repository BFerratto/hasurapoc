import React, { FC } from "react";

export type Props = {
  error: string;
};
export const Error: FC<Props> = ({ error }) => {
  return <h1 style={{ color: "purple" }}>{error}</h1>;
};
