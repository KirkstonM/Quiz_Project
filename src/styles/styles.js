const constants = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const appStyles = {
    "mainPage": {
        height: '100vh',
        width: '100%',
        ...constants,
        background: "#008080"
    },
    "quizStartBtn": {
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'none',
        border: 'none',
        borderRadius: '5px',
        cursor: "pointer",
        border: "2px solid #ba33cc",
        background: 'none',
        color: 'white',
        marginTop: '30px'
    },
    "QuestionBox": {
        width: '37%',
        height: 'auto',
        background: "#20305f",
        color: '#fff',
        padding: '2.5rem',
        borderRadius: '7px'
    },
    "QuestionNumberToolTip": {
        marginBottom: '1rem',
        padding: '0.3rem',
        width: '170px',
        borderRadius: '9px',
        background: "#1c8eaa",
        color: "white",
        border: 'none',
        fontWeight: 'bolder'
    },
    "Question": {
        marginBottom: '1rem',
        lineHeight: '40px'
    },
    "AnswerButtonsContainer": {
        marginBottom: '1rem',
        display: 'grid',
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: '20px',
        padding: '15px'
    },
    "AnswerButtons": {
        width: '100%',
        height: '90px',
        background: 'none',
        border: "3px solid #818fb7",
        borderRadius: '10px',
        cursor: 'pointer',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20px',
        wordWrap: 'normal'
    },
    "SelectedAnswerButton": {
        background: "#1fef10",
        color: " #222"
    },
    "Dividers": {
        width: '100%',
        background: 'grey',
        height: '1px'
    },
    "NextButtonContainer": {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    "NextButton": {
        padding: '15px 25px',
        margin: '15px 0',
        background: '#18b115',
        border: 'none',
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: '6px',
        fontSize: '15px',
        cursor: 'pointer'
    },
    "RedirectButton": {
        padding: '15px 25px',
        margin: '15px 0px',
        background: '#1084b7', border: 'none', color: 'white', fontWeight: 'bold',
        letterSpacing: '6px',
        fontSize: '15px', cursor: 'pointer',
        marginTop: '50px'
    },
    "QuizCompletedBox": {
        ...constants,
        flexDirection: 'column',
        width: '500px',
        height: '250px',
        background: "#20305f",
        color: '#fff',
        padding: '2.5rem',
        borderRadius: '7px'
    },
    "Loader": {
        color: "#debe21"
    }
};

export default appStyles;