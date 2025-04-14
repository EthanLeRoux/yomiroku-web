import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function ImmersionStatistics(){
    const data = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Anime Watched",
                data: [5, 8, 6, 10, 3],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };
    const dataMonth = {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        datasets: [
            {
                label: "Anime Watched",
                data: [5, 8, 6, 10, 3],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    return(
        <>
            <h1>Stats</h1>
            <div style={{ width: '400px', height: '300px' }}>
                <Bar data={dataMonth} />
                <p>This month</p>
            </div>
            <div style={{ width: '400px', height: '300px' }}>
                <Bar data={data} />
                <p>This year</p>
            </div>
        </>
    )
}