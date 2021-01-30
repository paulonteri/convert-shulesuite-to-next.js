import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getStudentAnalytics } from "../state/actions/students/analytics/students";

function useStudentAnalyticsGeneral() {
    const dispatch = useDispatch();
    const [time, setTime] = useState(null);

    useEffect(() => {
        const today = new Date();

        if (!(today.getMinutes() - time < 1)) {
            dispatch(getStudentAnalytics());
            setTime(today.getMinutes());
        } else {
            // console.log("pass");
        }
        // eslint-disable-next-line
    }, []);
}

export default useStudentAnalyticsGeneral;
