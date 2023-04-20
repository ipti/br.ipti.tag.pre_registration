import { useFetchRequestSchools } from "../../../query/Schedule";


export const States = () => {

    let initialValues = {
        start_date: null,
        end_date: null,
        year: "",
        school_identificationArray: "",
      };

      const { data: schools, isLoading } = useFetchRequestSchools();


  var getIdSchools = [];

  if (schools) {
    for (var school in schools) {
      getIdSchools.push(schools[school].inep_id)
    }
  }


    return {
        initialValues, schools, isLoading, getIdSchools
    }
}