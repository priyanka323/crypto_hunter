import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const canvasRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (canvasRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = canvasRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
          datasets: [
            {
              data: [20, 10, 15, 25, 5, 15, 10],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4CAF50',
                '#9C27B0',
                '#FF9800',
                '#795548'
              ]
            }
          ]
        },
        options: {
          // Existing options remain the same
        }
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <div style={{ background: 'linear-gradient(to bottom right, #31065f 40%, #b327de 100%, #31065f 70%)' }}>
        <div style={{ textAlign: 'center', padding: '10px', color: 'white', fontSize: '1.5em' }}>TOKENOMICS</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '300px', padding: '10px' }}>
            <div style={{ color: 'white' }}>TOKEN</div>
            <div></div>
          </div>
          <div style={{ flex: 1, maxWidth: '500px' }}>
            <canvas ref={canvasRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChart;
