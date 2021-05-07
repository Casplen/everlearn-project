import React from "react";
import Learner from "./Learner";

const LearnerList = ({ learners, meanScore }) => {
    return (
        <div>
            <p>Average Score: {meanScore}</p>
            {learners.map( (learnerData) => {
                return (
                    <Learner learner= {learnerData} key={learnerData.id} />
                )
            })}
        </div>
    );
};

export default LearnerList