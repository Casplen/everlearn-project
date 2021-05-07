import React, {useState} from "react";

const LearnerForm = ({onLearnerSubmit}) => {

    const [forename, setForename] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [score, setScore] = useState(0)

    const handleForenameChange = (evt) => {
        setForename(evt.target.value);
    }

    const handleSurnameChange = (evt) => {
        setSurname(evt.target.value);
    }

    const handleEmailChange = (evt) => {
        setEmail(evt.target.value);
    }

    const handleScoreChange = (evt) => {
        let scoreChange = parseInt(evt.target.value)
        setScore(scoreChange);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const forenameSubmit = forename.trim()
        const surnameSubmit = surname.trim()
        const emailSubmit = email.trim()
        const scoreSubmit = score

        const learnerSubmit = {
            id: Date.now(),
            forename: forenameSubmit,
            surname: surnameSubmit,
            email: emailSubmit,
            score: scoreSubmit,
        }

        onLearnerSubmit(learnerSubmit)

        if (!forenameSubmit || !surnameSubmit || !emailSubmit) {
            return
          }
        setForename("");
        setSurname("");
        setEmail("");
        setScore(0);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="field-wrapper">
                <label htmlFor="forname">Forename: </label>    
                <input type="text" id="forename" value={forename} onChange={handleForenameChange} required/>
            </div>
            <div className="field-wrapper">
                <label htmlFor="surname">Surname: </label>    
                <input type="text" id="surname" value={surname} onChange={handleSurnameChange} required/> 
            </div>
            <div className="field-wrapper">
                <label htmlFor="email">Email: </label>    
                <input type ="email" id="email" value={email} onChange={handleEmailChange} required/>
            </div>
            <div className="field-wrapper">
                <label htmlFor="Score">Score: </label>    
                <input type="number" min="0" max="10" step="1" id="score" value={score} onChange={handleScoreChange}/>
            </div>
            <br/>
            <input type="submit"/>
        </form>
    )

}

export default LearnerForm;