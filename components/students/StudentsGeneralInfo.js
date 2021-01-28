import React from "react";
import Genders from "./analytics/Genders";
import NumberPerClass from "./analytics/NumberPerClass";
import NumberPerDormitory from "./analytics/NumberPerDormitory";
import EventsCalender from "../events/EventsCalender";

function StudentsGeneralInfo() {
    return (
        <div className=" container-fluid">
            <div className="row">
                <div className="col-sm-4 mb-2">
                    <Genders />
                </div>
                <div className="col-sm-4 mb-2">
                    <NumberPerClass />
                </div>
                <div className="col-sm-4 mb-2">
                    <NumberPerDormitory />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <EventsCalender />
                </div>
            </div>
        </div>
    );
}

export default StudentsGeneralInfo;
