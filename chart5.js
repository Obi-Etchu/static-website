const ctx5 = document.getElementById('heatmapChart').getContext('2d');

// Data for the heatmap
const data = {
    datasets: [
        // Saturday
        {
            label: 'Sat',
            data: [
                { x: 1, y: 1, r: 15 },  // r defines the size of the "bubble"
                { x: 2, y: 1, r: 15 },
                { x: 3, y: 1, r: 15 },
                { x: 4, y: 1, r: 15 },
                { x: 5, y: 1, r: 15 },
                { x: 6, y: 1, r: 15 },
                { x: 7, y: 1, r: 15 },
                { x: 8, y: 1, r: 15 },
                { x: 9, y: 1, r: 15 },
                { x: 10, y: 1, r: 15 },

            ],
            backgroundColor: 'rgba(0, 123, 255, 0.8)',
        },
        // Sunday
        {
            label: 'Sun',
            data: [
                { x: 1, y: 2, r: 15 },
                { x: 2, y: 2, r: 15 },
                { x: 3, y: 2, r: 15 },
                { x: 4, y: 2, r: 15 },
                { x: 5, y: 2, r: 15 },
                { x: 6, y: 2, r: 15 },
                { x: 7, y: 2, r: 15 },
                { x: 8, y: 2, r: 15 },
                { x: 9, y: 2, r: 15 },
                { x: 10, y: 2, r: 15 },
            ],
            backgroundColor: 'rgba(0, 123, 255, 0.8)',
        },
        {
            label: 'Mon',
            data: [
                { x: 1, y: 3, r: 15 },
                { x: 2, y: 3, r: 15 },
                { x: 3, y: 3, r: 15 },
                { x: 4, y: 3, r: 15 },
                { x: 5, y: 3, r: 15 },
                { x: 6, y: 3, r: 15 },
                { x: 7, y: 3, r: 15 },
                { x: 8, y: 3, r: 15 },
                { x: 9, y: 3, r: 15 },
                { x: 10, y: 3, r: 15 },
            ],
            backgroundColor: 'rgba(0, 123, 255, 0.8)',
        },
        {
            label: 'Tues',
            data: [
                { x: 1, y: 4, r: 15 },
                { x: 2, y: 4, r: 15 },
                { x: 3, y: 4, r: 15 },
                { x: 4, y: 4, r: 15 },
                { x: 5, y: 4, r: 15 },
                { x: 6, y: 4, r: 15 },
                { x: 7, y: 4, r: 15 },
                { x: 8, y: 4, r: 15 },
                { x: 9, y: 4, r: 15 },
                { x: 10, y: 4, r: 15 },
            ],
            backgroundColor: 'rgba(0, 123, 255, 0.8)',
        },
        {
            label: 'wed',
            data: [
                { x: 1, y: 5, r: 15 },
                { x: 2, y: 5, r: 15 },
                { x: 3, y: 5, r: 15 },
                { x: 4, y: 5, r: 15 },
                { x: 5, y: 5, r: 15 },
                { x: 6, y: 5, r: 15 },
                { x: 7, y: 5, r: 15 },
                { x: 8, y: 5, r: 15 },
                { x: 9, y: 5, r: 15 },
                { x: 10, y: 5, r: 15 }
            ],
            backgroundColor: 'rgba(0, 123, 255, 0.8)',
        },
        {
            label: 'Thurs',
            data: [
                { x: 1, y: 6, r: 15 },
                { x: 2, y: 6, r: 15 },
                { x: 3, y: 6, r: 15 },
                { x: 4, y: 6, r: 15 },
                { x: 5, y: 6, r: 15 },
                { x: 6, y: 6, r: 15 },
                { x: 7, y: 6, r: 15 },
                { x: 8, y: 6, r: 15 },
                { x: 9, y: 6, r: 15 },
                { x: 10, y: 6, r: 15 }
            ],
            backgroundColor: 'rgba(0, 123, 255, 0.8)',
        },
        {
            label: '    Fri',
            data: [
                { x: 1, y: 7, r: 15 },
                { x: 2, y: 7, r: 15 },
                { x: 3, y: 7, r: 15 },
                { x: 4, y: 7, r: 15 },
                { x: 5, y: 7, r: 15 },
                { x: 6, y: 7, r: 15 },
                { x: 7, y: 7, r: 15 },
                { x: 8, y: 7, r: 15 },
                { x: 9, y: 7, r: 15 },
                { x: 10, y: 7, r: 15 },
            ],
            backgroundColor: 'rgba(0, 123, 255, 0.8)',
        },
        // Other days similarly...
    ]
};

// Create the chart
const myBubbleChart = new Chart(ctx5, {
    type: 'bubble',
    data: data,
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time (hours)',
                },
                ticks: {
                    callback: function(value) {
                        const hours = ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm'];
                        return hours[value-1]; // Match with your data
                    },
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90,
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Days of the Week',
                },
                ticks: {
                    callback: function(value) {
                        const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
                        return days[value - 1];
                    }
                },
            }
        }
    },
    
});
