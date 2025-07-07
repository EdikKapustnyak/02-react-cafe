import css from "./VoteStats.module.css";
import type {Votes} from "../../types/votes";
import Notification from "../Notification/Notification";

interface VoteStatsProps {
    votes: Votes;
  }

export default function VoteStats ({votes}: VoteStatsProps) { 
    const {good, neutral, bad} = votes
    const totalVotes: number = good + neutral + bad;
    const positiveRate: number = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;
    if (totalVotes !== 0) {
    return (
        <div className={css.container}>
            <p className={css.stat}>Good: <strong>{good}</strong></p>
            <p className={css.stat}>neutral: <strong>{neutral}</strong></p>
            <p className={css.stat}>Bad: <strong>{bad}</strong></p>
            <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
            <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
        </div>
    )}  else { 
        return (
            <Notification/>
        )
    }
}