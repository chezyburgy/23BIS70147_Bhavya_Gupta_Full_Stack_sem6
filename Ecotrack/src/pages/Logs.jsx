import logs from '../data/logs.js';
const Logs =()=>{
    return(
        <h1>
            <ul>
                {logs.filter(log => log.carbon >= 4).map((log, id) => (     
                    <li key={id}>{log.activity}: {log.carbon} kg CO2</li>           
                ))}
            </ul>
        </h1>
    )
}
export default Logs;
