import React, { FC, ReactElement } from "react";
export type Props = {};
import { useQuery } from "@apollo/react-hooks";
import { fetchCourses } from "./queries";
import { Display, TCourse } from "./Display";
import { renderStuff } from "./renderStuff";

export const List: FC<Props> = () => {
  const result = useQuery(fetchCourses);
  // Render with error and loading data using the data type, the props as parameters the key of query, result itself and component
  return renderStuff<TCourse[], Props>("courses", result, Display);
};
