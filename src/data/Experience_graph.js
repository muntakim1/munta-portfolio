// Used to store the data for the experience section of the website
const data = [
    {
        type: "scattermap",
        lon: [75.7139],
        lat: [19.7515],
        hoverinfo: "text",
        text: "<b>Apex36Tech</b><br>Data Science Consultant (Remote)<br>2025-present",
        mode: "markers",
        marker: { size: 20 },
        name: "Apex36Tech (Current)"
    },
    {
        type: "scattermap",
        lon: [142.702789],
        lat: [-20.917574],
        hoverinfo: "text",
        text: "<b>Innova Analytics</b><br>Data Scientist (Remote)<br>2022-2025",
        mode: "markers",
        marker: { size: 20 },
        name: "Innova Analytics"
    },
    {
        type: "scattermap",
        lon: [151.209900],
        lat: [-33.865143],
        hoverinfo: "text",
        text: "<b>Leading Engineers</b><br>Data Scientist (Remote)<br>2021-2022",
        mode: "markers",
        marker: { size: 20 },
        name: "Leading Engineers"
    },
    {
        type: "scattermap",
        lon: [-75.4516],
        lat: [40.1857],
        hoverinfo: "text",
        text: "<b>FamaCash</b><br>Data Science Intern (Remote)<br>OCT,2020-NOV,2020",
        mode: "markers",
        marker: { size: 20 },
        name: "FamaCash"
    }
]

const layout = {
    width: 660,
    height: 620,
    hovermode: 'closest',
    margin: {
        t: 10,
        b:10,
        l:10,
        r:10

      },  
    map: {
        style: 'dark',
        center: { lon: 39.826168, lat: 21.4241 },
        zoom: 0.001
    },
    paper_bgcolor: '#111827',
    plot_bgcolor: '#111827',
    legend: {
        title: {
            text: 'Companies',
        }
    },
    font: {
        color: '#fff'
    }
};

export { data, layout };