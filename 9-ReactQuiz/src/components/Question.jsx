import Answers from './Answers.jsx';
import QuestionTimer from './QuestionTimer.jsx';

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedanswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedanswer={selectedanswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
