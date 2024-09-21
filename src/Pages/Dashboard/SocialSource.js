import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const SocialSource = () => {
  const [selectedMonth, setSelectedMonth] = useState("September");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /**
   * Sample static monthly data for doughnut chart.
   */
  const monthlyData = {
    January: { Sakra: 28.5, "Jurong Hills": 71.5 },
    February: { Sakra: 35.2, "Jurong Hills": 64.8 },
    March: { Sakra: 40.0, "Jurong Hills": 60.0 },
    April: { Sakra: 25.4, "Jurong Hills": 74.6 },
    May: { Sakra: 31.1, "Jurong Hills": 68.9 },
    June: { Sakra: 33.5, "Jurong Hills": 66.5 },
    July: { Sakra: 29.0, "Jurong Hills": 71.0 },
    August: { Sakra: 27.8, "Jurong Hills": 72.2 },
    September: { Sakra: 32.3, "Jurong Hills": 67.7 },
    October: { Sakra: 34.1, "Jurong Hills": 65.9 },
    November: { Sakra: 30.5, "Jurong Hills": 69.5 },
    December: { Sakra: 30.0, "Jurong Hills": 70.0 },
  };

  /**
   * Handles the change event for the month dropdown.
   *
   * @param {Object} event - The change event object.
   */
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Retrieve data for the selected month or default to zeros
  const currentData = monthlyData[selectedMonth] || {
    Sakra: 0,
    "Jurong Hills": 0,
  };

  const data = {
    labels: Object.keys(currentData), // Sakra and Jurong Hills
    datasets: [
      {
        data: Object.values(currentData), // Percentage values for Sakra and Jurong Hills
        backgroundColor: ["#4e73df", "#1cc88a"], // Colors for Sakra and Jurong Hills
        hoverBackgroundColor: ["#2e59d9", "#17a673"], // Hover colors
        borderColor: ["white"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%", // Adjust the cutout to increase or decrease the size of the doughnut's hole
    plugins: {
      legend: {
        display: true, // Enable the legend
        position: "bottom", // Position of the legend
        labels: {
          boxWidth: 15, // Adjust the size of the legend box
          padding: 20, // Space between the labels and the legend box
          font: {
            size: 15, // Increase font size for the legend labels
            weight: "bold", // Optionally make the text bold
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <Col xl={4} lg={6} md={8} sm={12} className="d-flex align-items-stretch">
      <Card className="flex-fill" style={{ minHeight: '500px' }}> {/* Increased card height */}
        <CardBody>
          {/* Header with Title and Select Dropdown */}
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <h5 className="card-title">DFNS Location Detection Rate</h5>
            </div>
            <div className="flex-shrink-0">
              <select
                className="form-select form-select-sm mb-0 my-n1"
                value={selectedMonth}
                onChange={handleMonthChange}
                aria-label="Select Month for Social Source Data"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* RadialChart */}
          <div style={{ height: "400px", marginTop: "20px" }}> {/* Increased chart height */}
            <Doughnut data={data} options={options} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default React.memo(SocialSource);
