import React, { FC } from "react";
export type TStudentCourses = {
  Student: {
    id: number;
    name: string;
  };
};
export type TCourse = {
  id: number;
  name: string;
  students: TStudentCourses[];
};

export type Props = {
  data: TCourse[];
};

export const Display: FC<Props> = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, name, students }) => (
        <li key={id}>
          {name} -{" "}
          {students.map(({ Student: { id, name } }) => (
            <span key={id}>{name}, </span>
          ))}
        </li>
      ))}
    </ul>
  );
};
