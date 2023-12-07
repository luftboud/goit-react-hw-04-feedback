import React, { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import css from './App.module.css'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = evt => {
    const { name } = evt.target;
    if (name === 'good') {
      const value = good
      const valueUpToDate = value + 1;
      setGood(valueUpToDate)
    } 
    if (name === 'neutral') {
      const value = neutral
      const valueUpToDate = value + 1;
      setNeutral(valueUpToDate)
    } 
    if (name === 'bad') {
      const value = bad
      const valueUpToDate = value + 1;
      setBad(valueUpToDate)
    }
  };
  const countTotalFeedback = (a, b, c) => {
    const total = a + b + c;
    return total;
  };
  const countPositiveFeedbackPercentage = (pos, neu, neg) => {
    const total = pos + neu + neg;
    if (total === 0) {
      return 0;
    }
    const positive = Math.round((pos / total) * 100);
    return positive;
  };

    const totalVotes = countTotalFeedback(good, neutral, bad);
    const positivePercentage = countPositiveFeedbackPercentage(
      good,
      neutral,
      bad
    );
  const options = ["good", "neutral", "bad"]
    return (
      <div className = {css.app}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleClick}
          />
        </Section>
        <Section title="Statistics">
          {totalVotes === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalVotes}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
export { App };
