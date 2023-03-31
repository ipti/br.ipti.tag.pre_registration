import { useQuery } from "react-query";
import api from "../../services/api";

const requestClassroom = id => {
    let path = "/classroom";
    return api
      .get(path + id, {
        params: {
          include: {
            student_pre_identification: true
          },
        }
      })
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  };

  export const useFetchRequestClassroom = ({id}) => {
    return useQuery(["useRequestClassroom"], () => requestClassroom(id));
  };