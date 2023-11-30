import PropTypes from 'prop-types';
const FeedbackOptions = ({  onLeaveFeedback }) => {
  return (
    <>
        <button type="button" name='good' key='good' onClick={onLeaveFeedback}>
          good
      </button>
       <button type="button" name='neutral' key='neutral' onClick={onLeaveFeedback}>
          neutral
      </button>
       <button type="button" name='bad' key='bad' onClick={onLeaveFeedback}>
          bad
        </button>
      
    </>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};
export { FeedbackOptions };
