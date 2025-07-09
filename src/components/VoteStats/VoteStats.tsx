import css from "./VoteStats.module.css";
import type {Votes} from "../../types/votes";

interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
  }

export default function VoteStats ({votes, totalVotes, positiveRate}: VoteStatsProps) { 
    const {good, neutral, bad} = votes
    // const totalVotes: number = good + neutral + bad;
    // const positiveRate: number = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

    return (
        <div className={css.container}>
            <p className={css.stat}>Good: <strong>{good}</strong></p>
            <p className={css.stat}>neutral: <strong>{neutral}</strong></p>
            <p className={css.stat}>Bad: <strong>{bad}</strong></p>
            <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
            <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
        </div>
    );
}