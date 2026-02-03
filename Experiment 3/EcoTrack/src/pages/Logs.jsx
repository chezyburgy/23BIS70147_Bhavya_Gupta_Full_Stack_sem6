import {useDispatch, useSelector} from "react-redux";
import {fetchLogs} from "../store/logsSlice";
import { useEffect } from "react";

/*const Logs=()=>{
  const dispatch = useDispatch();
  const{data, status, error}= useSelector((state) => state.logs);

  useEffect(()=>{
    if(status==="idle"){
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);

  if(status === "loading"){
    return <p>Loading Logs...</p>
  }
  if(status === "failed"){
    return <p>Error: {error}</p>
  }

  const highcarbon=data.filter((log)=>log.carbon>=4);
  return(
    <>
      <h1>High Carbon Activities</h1>
      <ul>
        {
          highcarbon.map(elem=>{
            return(
              <li key={elem.id}>{elem.activity}={elem.carbon}Kgs</li>
            )
          })
        }
      </ul>
    </>
  )
}
export default Logs;*/

const Logs=()=>{
  const dispatch = useDispatch();
  const{data, status, error}= useSelector((state) => state.logs);
  let content = null;
  function handleClick(){
    dispatch(fetchLogs());
  }
  if(status==="loading"){
    content= <p>loading...</p>
  }
  else if(status === "failed"){
    content = <p>Error: {error}</p>
  }
  else{
    const highcarbon=data.filter((log)=>log.carbon>=4);
    content= (
      <>
        
        <ul>
          {
            highcarbon.map(elem=>{
              return(
                <li key={elem.id}>{elem.activity}={elem.carbon}Kgs</li>
              )
            })
          }
        </ul>
      </>
    )
  }
  return (
    <>
      <h1>High Carbon Activities</h1>
      <button onClick={handleClick}>Fetch Logs</button>
      {content}
    </>
  )
}

export default Logs;

