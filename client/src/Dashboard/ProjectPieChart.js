import React, { useRef, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';
import propertyData from '../data/properties.json'; // ✅ Make sure this path is correct

ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectPieChart = () => {
  const chartRef = useRef();
  const navigate = useNavigate();

  // Compute counts dynamically
  const statusCounts = useMemo(() => {
    const counts = {
      Active: 0,
      Pending: 0,
      Completed: 0,
    };

    propertyData.forEach((property) => {
      const status = property.status;
      if (counts[status] !== undefined) {
        counts[status]++;
      }
    });

    return counts;
  }, []);

  const data = {
    labels: ['Active', 'Pending', 'Completed'],
    datasets: [
      {
        data: [statusCounts.Active, statusCounts.Pending, statusCounts.Completed],
        backgroundColor: ['#36a2eb', '#ffcd56', '#a97cf1'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const chart = chartRef.current;
        const index = elements[0].index;
        const label = chart.data.labels[index];

        // Navigate to filtered property list
        navigate(`/projects?status=${label}`);
      }
    },
  };

  return <Pie ref={chartRef} data={data} options={options} />;
};

export default ProjectPieChart;
