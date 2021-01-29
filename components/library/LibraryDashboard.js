import React, { Fragment, Component, Suspense } from "react";
import Spinner from "../spinner/Spinner";

import BookInstanceForm from "./BookInstanceForm";
import BookInfoTable from "./BookInfoTable";
import BookInfoForm from "./BookInfoForm";
import BookTotalsCards from "./BookTotalsCards";

export class LibraryDashboard extends Component {
    render() {
        return (
            <Fragment>
                <div class="container-fluid ">
                    <div className="row mb-2">
                        <Suspense fallback={<Spinner />}>
                            <BookTotalsCards />
                        </Suspense>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <Suspense fallback={<Spinner />}>
                                <BookInfoTable />
                            </Suspense>
                        </div>

                        <div className="col-sm-6">
                            <Suspense fallback={<Spinner />}>
                                <BookInstanceForm />
                            </Suspense>
                            <Suspense fallback={<Spinner />}>
                                <BookInfoForm />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default LibraryDashboard;
