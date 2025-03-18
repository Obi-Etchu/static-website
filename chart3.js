const ctx3 = document.getElementById('myDualLineChart').getContext('2d');
    const myDualLineChart = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            datasets: [
                {
                    label: 'Like',
                    data: [30, 60, 40, 80, 50, 90, 60, 70, 120],
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',  // Transparent red fill
                    fill: false,  // No fill for line chart
                      // Curved lines
                    pointBackgroundColor: 'purple',
                    pointRadius: 5,
                    borderWidth: 3,  // Thicker line for "Like"
                },
                {
                    label: 'Average like per day',
                    data: [40, 50, 30, 60, 70, 80, 50, 90, 100],
                    borderColor: 'gray',
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',  // Transparent gray fill
                    fill: false,  // No fill for this line either
                    // tension: 0.4,  // Curved lines
                    pointBackgroundColor: 'purple',
                    pointRadius: 5,
                }
            ]
        },
        options: {
            responsive:true,
            
        }
    });