import React, { Fragment, Component } from "react";
//
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
                        <BookTotalsCards />
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <BookInfoTable />
                        </div>

                        <div className="col-sm-6">
                            <BookInstanceForm />

                            <BookInfoForm />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default LibraryDashboard;
