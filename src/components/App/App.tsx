import { useState } from 'react';
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import type { VoteKey, Votes } from '../../types/votes';
function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleVote = (key: VoteKey) => {
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

  const canReset = Object.values(votes).some(value => value !== 0);

  return (
    <>
     <div className={css.app}>
      <CafeInfo/>
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={canReset}/>
      <VoteStats votes={votes}/>
      </div> 
    </>
  )
}

export default App
