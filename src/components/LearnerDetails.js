import React from "react";

const LearnerDetails = ({forename, surname, email, score}) => {
    return (
        <p>{forename} {surname}, {email}, score: {score}</p>
    );
};

export default LearnerDetails;