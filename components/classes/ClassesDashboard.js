import React, { Suspense } from "react";
import Spinner from "../../layout/spinner/Spinner";
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
                    <Suspense fallback={<Spinner />}>
                    <ClassesList />
                    </Suspense>
                </div>
                <div className="col-md mb-2">
                    <Suspense fallback={<Spinner />}>
                    <AddClassesForm />
                    </Suspense>
                </div>
            </div>
            <div className="row">
                <div className="col-md mb-2">
                    <Suspense fallback={<Spinner />}>
                    <StreamList />
                    </Suspense>
                </div>
                <div className="col-md mb-2">
                    <Suspense fallback={<Spinner />}>
                    <StreamForm />
                    </Suspense>
                </div>
            </div>
            <div className="row">
                <div className="col-md mb-2">
                    <Suspense fallback={<Spinner />}>
                    <ClassNList />
                    </Suspense>
                </div>
                <div className="col-md mb-2">
                    <Suspense fallback={<Spinner />}>
                    <ClassNForm />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default ClassesDashboard;
