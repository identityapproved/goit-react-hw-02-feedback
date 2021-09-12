import { StatsList, StatsListItem } from './Statistics.styled';

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatsList>
      <StatsListItem>Good: {good}</StatsListItem>
      <StatsListItem>Neutral: {neutral}</StatsListItem>
      <StatsListItem>Bad: {bad}</StatsListItem>
      <StatsListItem>Total: {total}</StatsListItem>
      {positivePercentage > 0 && (
        <StatsListItem>Positive feedback: {positivePercentage}%</StatsListItem>
      )}
    </StatsList>
  );
};
