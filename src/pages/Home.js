import React ,{useState} from 'react'
import { Box } from '@mui/material';
import Herobanner from '../components/Herobanner';
import SearchExercise from '../components/SearchExercise';
import Exercises from '../components/Exercises';

const Home = () => {
  const [exercises,setExercises]=useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
   <Herobanner />
    <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home