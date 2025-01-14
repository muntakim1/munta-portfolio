const trace1 = {
    name: 'Bachelor Degree', 
    x: ['2016-01-01', '2020-12-31'],  // Start date: 2016, End date: 2020
    y: [0, 0], 
    mode: 'markers',
    marker: { color: 'rgb(255, 99, 132)' }
};
const trace2 = {
    name: 'H.S.C', 
    x: ['2015-01-01', '2015-12-31'],  // Start date: 2015, End date: 2015
    y: [1, 1], 
    mode: 'markers',
    marker: { color: 'rgb(54, 162, 235)' }
};
const trace3 = {
    name: 'S.S.C', 
    x: ['2013-01-01', '2013-12-31'],  // Start date: 2013, End date: 2013
    y: [2, 2], 
    mode: 'markers',
    marker: { color: 'rgb(75, 192, 192)' }
};

// Data for the chart
const data_education = [trace1, trace2, trace3];

// Layout configuration
const layout_education = {
    width: 900,
    xaxis: {
        type: 'date',
        showgrid: true,
        zeroline: false
    },
    yaxis: {
        range: [-1, 3],
        showgrid: true,
        ticktext: ['BAIUST', 'Comilla Govt College', 'P.L.H.S.'],
        tickvals: [0, 1, 2],
        zeroline: false,
        autorange: false
    },
    height: 600,
    shapes: [
        // Define shapes for visual representation of the tasks (optional)
        {
            x0: '2016-01-01', 
            x1: '2020-12-31', 
            y0: -0.35, 
            y1: 0.35, 
            line: { width: 0 }, 
            type: 'rect', 
            xref: 'x', 
            yref: 'y', 
            
            opacity: 0.3, 
            fillcolor: 'rgb(255, 99, 132)'
        },
        {
            x0: '2015-01-01', 
            x1: '2015-12-31', 
            y0: 0.65, 
            y1: 1.35, 
            line: { width: 0 }, 
            type: 'rect', 
            xref: 'x', 
            yref: 'y', 
            opacity: 0.3, 
            fillcolor: 'rgb(54, 162, 235)'
        },
        {
            x0: '2013-01-05', 
            x1: '2013-12-31', 
            y0: 1.65, 
            y1: 2.35, 
            line: { width: 0 }, 
            type: 'rect', 
            font: { color: 'black' },
            xref: 'x', 
            yref: 'y', 
            opacity: 0.3, 
            fillcolor: 'rgb(75, 192, 192)'
        }
    ],
    annotations: [
        // Annotation for Project 1
        {
            x: '2018-01-01',
            y: 0, 
            text: 'B.Sc. In C.S.E (CGPA-3.74/4)',
            showarrow: false,
            font: { color: 'white', size: 14 },
            align: 'center',
            valign: 'middle'
        },
        // Annotation for Project 2
        {
            x: '2015-06-01',
            y: 1,
            text: 'H.S.C. (GPA-4.5/5)',
            showarrow: false,
            font: { color: 'white', size: 14 },
            align: 'center',
            valign: 'middle'
        },
        // Annotation for Project 3
        {
            x: '2013-06-01',
            y: 2,
            text: '     S.S.C.\n(GPA-5/5)',
            showarrow: false,
            font: { color: 'white', size: 14 },
            align: 'center',
            valign: 'middle'
        }
    ],
    margin:{
        b:50,
        t:0,l:205 ,r:0
    },
    paper_bgcolor: '#111827',
    plot_bgcolor: '#111827',
    hovermode: 'closest',
    showlegend: true,
    font: {
        color: '#fff'
    }
};

export {data_education, layout_education}