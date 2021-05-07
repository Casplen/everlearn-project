import React, {useState, useEffect} from "react";
import LearnerList from "../components/LearnerList";
import LearnerForm from "../components/LearnerForm";

import db from "../firebase";

const LearnersBox = () => {

    const [learners, setLearners] = useState([]);
    const [meanScore, setMeanScore] = useState(0);

    useEffect(() => {
        fetchLearners();
      }, []);

    useEffect(() => {
        if (learners.length > 0 ) {
            calculateMeanScore();
        }
    }, [learners]);
      
    const fetchLearners= () => {
        db.collection('learners').get()
        .then(snapshot => {
            let learners = []
            snapshot.forEach(doc => {
                let learnerInfo = doc.data()
                learnerInfo.id = doc.id
                learners.push(learnerInfo)
            })
            setLearners(learners)
        })
        .catch(error => console.log(error))
    };

    const addLearner=(submittedLearner) => {
        const updatedLearners = [...learners, submittedLearner]
        setLearners(updatedLearners)
        db.collection('learners').add(submittedLearner)
    };

    const calculateMeanScore = () => {
        let scores = []
        learners.forEach(learner => scores.push(learner.score))
        let mean = (scores.reduce((total, score) => total + score))/scores.length
        setMeanScore(mean)
    };

    return (
        <div className="learners-wrapper">
            <LearnerForm onLearnerSubmit = {(learner) => addLearner(learner)}/>
            <LearnerList learners={learners} meanScore={meanScore}/>
        </div>
    );
};

export default LearnersBox;