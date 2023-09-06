import api from "../../../services/api";
import { logout } from "../../../services/auth";

// request all school
export const requestSchoolList = async () => {
    return await api
      .get("/student-pre-identify/school", {
        params: {
          include: {
            classroom: { where: { school_year: 2023 } },
            calendar_event: true,
            event_pre_registration: true,
            // student_documents_and_address: true,
            // student_identification: true
          }
        }
      })
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  };

  export const requestQuiz = async id => {
    return await api
      .get("/quizbyschool/" + id)
      .then(response => response.data)
      .catch(err => {
        if(err.response.status === 401){
          logout()
          window.location.reload()
        }
        throw err;
      });
  };

  export const requestSaveRegistration = data => {
    return api
      .post("/student-pre-identification", data)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  };
  