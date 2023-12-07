import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
        {options.map(op => (
        <button type="button" name={op} key={op} onClick={onLeaveFeedback}>
          {op}
        </button>
      ))}
      
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
export { FeedbackOptions };
