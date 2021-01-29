import React from "react";
s;
import StreamList from "./StreamList";
import StreamForm from "./StreamForm";
import ClassNList from "./ClassNList";
import ClassNForm from "./ClassNForm";
import AddClassesForm from "./AddClassesForm";
import ClassesList from "./ClassesList";

const ClassesDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md mb-2">
                    <ClassesList />
                </div>
                <div className="col-md mb-2">
                    <AddClassesForm />
                </div>
            </div>
            <div className="row">
                <div className="col-md mb-2">
                    <StreamList />
                </div>
                <div className="col-md mb-2">
                    <StreamForm />
                </div>
            </div>
            <div className="row">
                <div className="col-md mb-2">
                    <ClassNList />
                </div>
                <div className="col-md mb-2">
                    <ClassNForm />
                </div>
            </div>
        </div>
    );
};

export default ClassesDashboard;
