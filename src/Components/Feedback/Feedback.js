import { FeedbackBtn } from './Feedback.styled';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map(opt => (
        <FeedbackBtn key={opt} type="button" name={opt} onClick={() => leaveFeedback(opt)}>
          {opt.toUpperCase()}
        </FeedbackBtn>
      ))}
    </>
  );
};
