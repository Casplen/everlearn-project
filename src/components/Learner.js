import React from "react";

import LearnerDetails from "./LearnerDetails";

const Learner = ( { learner } ) => {
    return (
        <div className="Learner">
            <h3>{learner.forename[0]}. {learner.surname}</h3>
            <LearnerDetails forename= {learner.forename} surname={learner.surname} email={learner.email} score ={learner.score}/>
        </div>
    );
};

export default Learner;