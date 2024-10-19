import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
    RadialLinearScale
  } from "chart.js";
import { Line,Bar,PolarArea } from 'react-chartjs-2';



function Charts({data}) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        BarElement,
        ArcElement,
        RadialLinearScale
      );
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Line Chart"
          },
          annotation: {
            annotations: {
              box1: {
                // Indicates the type of annotation
                type: "box",
                xMin: 1,
                xMax: 2,
                yMin: 50,
                yMax: 70,
                backgroundColor: "rgba(255, 99, 132, 0.25)"
              }
            }
          }
        }
      };

      const optionsBar = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "Bar Chart"
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    };

    const optionsPolarArea = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "PolarArea Overview"
            }
        }
    };

    const chartData = {
        labels: data.map(d => d.year),
        datasets: [
            {
                label: 'Intensity',
                data: data.map(d => d.intensity),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: "rgba(75, 192, 192, 0.6)",
                pointBackgroundColor: "rgba(75, 192, 192, 0.6)",
                pointBorderColor: "rgba(75, 192, 192, 0.6)",
            },
            {
                label: 'Likelihood',
                data: data.map(d => d.likelihood),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 0.6)',
                pointBackgroundColor: 'rgba(153, 102, 255, 0.6)',
                pointBorderColor: 'rgba(153, 102, 255, 0.6)',
            },
            {
                label: 'Relevance',
                data: data.map(d => d.relevance),
                backgroundColor: '#0d6efd',
                borderColor: '#0d6efd',
                pointBackgroundColor: '#0d6efd',
                pointBorderColor: '#0d6efd',
            },
            {
                label: 'Country',
                data: data.map(d => d.country),
                backgroundColor: '#fd7e14',
                borderColor: '#fd7e14',
                pointBackgroundColor: '#fd7e14',
                pointBorderColor: '#fd7e14',
            },
            {
                label: 'Topics',
                data: data.map(d => d.topic),
                backgroundColor: '#ffc107',
                borderColor: '#ffc107',
                pointBackgroundColor: '#ffc107',
                pointBorderColor: '#ffc107',
            },
            {
                label: 'Region',
                data: data.map(d => d.region),
                backgroundColor: '#198754',
                borderColor: '#198754',
                pointBackgroundColor: '#198754',
                pointBorderColor: '#198754',
            },
            {
                label: 'City',
                data: data.map(d => d.city),
                backgroundColor: 'red',
                borderColor: 'red',
                pointBackgroundColor: 'red',
                pointBorderColor: 'red',
            }
        ]
    };

    

    return (
        <>
            <Line options={options}  data={chartData} />
            <br/>
            <Bar options={optionsBar} data={chartData} />
            <br/>
            <div className="d-flex justify-content-center"><span style={{width:'500px'}}><PolarArea options={optionsPolarArea} data={chartData} /></span></div>
        </>
    );
}

export default Charts;
