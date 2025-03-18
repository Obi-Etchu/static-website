const ctx4 = document.getElementById('twoLines').getContext('2d');
    const twoLines = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            datasets: [
                {
                    label: 'comments',
                    data: [30, 60, 40, 80, 50, 90, 60, 70, 120],
                    borderColor: 'green',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',  // Transparent red fill
                    fill: false,  // No fill for line chart
                      // Curved lines
                    pointBackgroundColor: 'purple',
                    pointRadius: 5,
                    borderWidth: 3,  // Thicker line for "Like"
                },
                {
                    label: 'Average comments per day',
                    data: [40, 50, 30, 60, 70, 80, 50, 90, 100],
                    borderColor: 'gray',
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',  // Transparent gray fill
                    fill: false,  // No fill for this line either
                    // tension: 0.4,  // Curved lines
                    // pointBackgroundColor: 'purple',
                    // pointRadius: 5,
                }
            ]
        },
        options: {
            responsive:true,
        
        }
    });