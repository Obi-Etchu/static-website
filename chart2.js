const ctx2 = document.getElementById('myAreaChart').getContext('2d');
const myAreaChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00'],
        datasets: [
            {
                label: 'Series 1',
                data: [20, 80, 20, 80, 20, 80, 20],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'purple',
                pointRadius: 5,
            },
            {
                label: 'Series 2',
                data: [80, 20, 80, 20, 80, 20, 80],
                borderColor: 'gray',
                backgroundColor: 'rgba(128, 128, 128, 0.2)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'purple',
                pointRadius: 5,
            }
        ]
    },
    options: {
        responsive: true,
     
    }
});
