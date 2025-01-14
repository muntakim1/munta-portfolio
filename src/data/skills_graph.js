const data_Skill = [
    {
        "type": "sunburst",
        "labels": ["Technical Skills", "Programming", "Python", "SQL", "TensorFlow", "PyTorch",
            "Machine Learning", "Time Series", "Computer Vision", "Geospatial Analysis",
            "Visualization", "Plotly", "Mapbox", "Cesium",
            "Tools", "Docker", "Git & DVC", "GCP", "AWS",
            "Soft Technical Skills", "Communication", "Problem-Solving", "Project Management",
            "Core Skills", "Analysis", "Data Preprocessing", "Feature Engineering",
            "Visualization Core Skills", "Dashboard Development", "Custom Map Applications",
            "Modeling", "Predictive Models", "Optimization",
            "Cloud Solutions", "IoT Management", "Cloud Deployment",
            "Collaboration", "Teamwork", "Client Interaction"],
        "parents": ["", "Technical Skills", "Programming", "Programming", "Programming", "Programming",
            "Technical Skills", "Machine Learning", "Machine Learning", "Machine Learning",
            "Technical Skills", "Visualization", "Visualization", "Visualization",
            "Technical Skills", "Tools", "Tools", "Tools", "Tools",
            "Technical Skills", "Soft Technical Skills", "Soft Technical Skills", "Soft Technical Skills",
            "", "Core Skills", "Analysis", "Analysis",
            "Core Skills", "Visualization Core Skills", "Visualization Core Skills",
            "Core Skills", "Modeling", "Modeling",
            "Core Skills", "Cloud Solutions", "Cloud Solutions",
            "Core Skills", "Collaboration", "Collaboration"],
        "values": [100, 40, 10, 10, 10, 10, 30, 10, 10, 10,
            20, 7, 7, 6, 20, 5, 5, 5, 5, 10, 3, 3, 4,
            100, 40, 20, 20, 30, 15, 15, 25, 12, 13,
            20, 10, 10, 10, 5, 5],
        "leaf": { "opacity": 0.9 },
        "marker": { "line": { "width": 2 } },
        "branchvalues": 'reminder',
        "textfont": {
            "color": "#fff" // Change this to the desired color, for example, a shade of blue.
        }
    }];
const layout_skill = {
    width: 800,
    height: 750,
    "margin": { "l": 0, "r": 0, "b": 0, "t": 0 },
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

export { data_Skill, layout_skill }
