import { useState } from 'react';
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import Notification from '../Notification/Notification';
import type { VoteType, Votes } from '../../types/votes';
function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleVote = (key: VoteType) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }
  const {good, neutral, bad} = votes
  const totalVotes: number = good + neutral + bad;
  const positiveRate: number = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  const canReset = Object.values(votes).some(value => value !== 0);

  return (
    <>
     <div className={css.app}>
      <CafeInfo/>
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={canReset}/>
      {totalVotes !== 0 ? (  
      <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate}/>
      ) : ( 
      <Notification/>
      )}
      </div> 
    </>
  )
}

export default App
