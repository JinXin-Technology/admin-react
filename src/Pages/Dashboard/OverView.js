import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardBody, Col } from "reactstrap";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OverView = () => {
  // State to keep track of the active button
  const [activeButton, setActiveButton] = useState('ALL');

  // Sample data for the chart (Sakra and Jurong Hills)
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sakra",
        backgroundColor: "#4e73df",
        data: [50, 60, 70, 55, 40, 50, 45, 60, 65, 70, 40, 60],
      },
      {
        label: "Jurong Hills",
        backgroundColor: "#1cc88a",
        data: [150, 200, 250, 180, 170, 200, 180, 190, 220, 210, 170, 240],
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 70, // Adjust step size based on your data
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    }
  };

  // Function to handle button click and update the active state
  const handleButtonClick = (period) => {
    setActiveButton(period);
  };

  return (
    <Col xl={8} className="d-flex">
      <Card className="flex-fill">
        <CardBody>
          {/* Header with Buttons */}
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <h5 className="card-title">Number of Drones Detection</h5>
            </div>
            <div className="flex-shrink-0">
              <div>
                {/* Buttons with dynamic active state */}
                <button 
                  type="button" 
                  className={`btn btn-sm me-1 ${activeButton === 'ALL' ? 'btn-soft-primary' : 'btn-soft-secondary'}`}
                  onClick={() => handleButtonClick('ALL')}
                >
                  ALL
                </button>
                <button 
                  type="button" 
                  className={`btn btn-sm me-1 ${activeButton === '6M' ? 'btn-soft-primary' : 'btn-soft-secondary'}`}
                  onClick={() => handleButtonClick('6M')}
                >
                  6M
                </button>
                <button 
                  type="button" 
                  className={`btn btn-sm me-1 ${activeButton === '1Y' ? 'btn-soft-primary' : 'btn-soft-secondary'}`}
                  onClick={() => handleButtonClick('1Y')}
                >
                  1Y
                </button>
              </div>
            </div>
          </div>
          
          {/* Chart with Increased Height */}
          <div className="mt-4" style={{ height: "400px" }}> {/* Height increased to 500px */}
            <Bar data={data} options={options} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OverView;
