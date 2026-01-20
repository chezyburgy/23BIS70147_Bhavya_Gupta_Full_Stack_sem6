import logs from "../data/logs";
const Dashboard =  () => {
    const totalcarbonfootprint = logs.reduce(
        (total, log) => total + log.carbon,0
    );
    return(
        <div>
            <h2>Carbon Footprint Dashboard</h2>
            <p>Total Carbon Footprint:{totalcarbonfootprint} kg</p>
            <ul>
                {logs.map((log)=>(
                    <li key={log.id}>
                        {log.activity}-{log.carbon}kg C02
                    </li>
                ))}
            </ul>
        </div>
    )
}




export default Dashboard;