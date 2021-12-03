import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage';

const HatsPage = ()=>{
  return(
    <div>
      
    <h1>Hats page </h1>
  </div>
  )
  
}
// 
// const TopicList = (props) =>{
//   return(
//     <div>
//       {/* /Dynamic Routing */}
//       <h1>TOPIC LIST PAGE</h1>
//       <Link to= {`${props.match.url}/13`}>To TOPIC 13</Link>
//       <Link to= {`${props.match.url}/18`}>To TOPIC 18</Link>
//       <Link to= {`${props.match.url}/21`}>To TOPIC 21</Link>
//     </div>
//   )
// }
// 
// const TopicDetail = props =>{
//   console.log(props);
//   return(
//     <div>
//       <h1>Topic Detail page : {props.match.params.topicId}</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
