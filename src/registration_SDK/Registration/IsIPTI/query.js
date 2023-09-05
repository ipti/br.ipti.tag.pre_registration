import { useQuery } from "react-query";
import { requestQuiz, requestSchoolList } from "./request";

export const useFetchRequestSchoolList = () => {
  return useQuery(["useRequestSchoolList"], () => requestSchoolList());
};


export const useFetchRequestQuiz = ({ id }) => {
  return useQuery(["useRequestsQuiz", id], () => requestQuiz(id));
};