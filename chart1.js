const ctx = document.getElementById('lineChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Data',
                data: [30, 60, 45, 80, 120, 100, 85, 110, 90, 70],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                borderWidth: 2,
                tension: 0.4,  // This controls the curve of the line (0.4 is a good value for smooth curves)
                pointBackgroundColor: 'purple',  // Color of the points
                pointRadius: 5,  // Size of the points
                pointHoverRadius: 7,  // Size of points on hover
            }]
        },
        options: {
            responsive: true,
          
        }
    });