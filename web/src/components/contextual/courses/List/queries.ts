import { gql } from "apollo-boost";

export const fetchCourses = gql`
  {
    courses {
      id
      name
      students {
        Student {
          id
          name
        }
      }
    }
  }
`;
