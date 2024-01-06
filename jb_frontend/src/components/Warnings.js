import React from "react";
import "../styles/Warning.css"


function Warnings(){
    return (
        <div className="Warnings ">
            <div className="container">
                <div className="WarningText">
                    <h2>Before you get in touch...</h2>
                    <p>___________________</p>

                    <div className="row mb-3">
                        <div className="col-4">
                            <div className="WarningCard Instructions">
                            Decide if you want to speak on the record, off the record, or on background (anonymously).
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="WarningCard Instructions">
                            Do you have documents that would help corroborate your story or fill in some blanks? Decide how much
                            you'd be willing to share with me and if you mind if those documents were quoted from or published.
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="WarningCard Instructions">
                            I like to record my calls and in-person interviews. Decide if you'd be willing to be recorded. I'd just be using it for my own notes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Warnings
