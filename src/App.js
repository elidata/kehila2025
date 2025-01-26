import logo from './logo.svg';
import './App.css';
import React from 'react';

const projects = [
  { id: 1, name: 'project1', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 2, name: 'project2', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 3, name: 'project3', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 4, name: 'project4', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 5, name: 'project5', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 6, name: 'project6', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 7, name: 'project7', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 8, name: 'project8', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 9, name: 'project9', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 10, name: 'project10', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 11, name: 'project11', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 12, name: 'project12', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 13, name: 'project13', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 14, name: 'project14', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 15, name: 'project15', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 16, name: 'project16', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 17, name: 'project17', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 18, name: 'project18', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 19, name: 'project19', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 20, name: 'project20', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 21, name: 'project21', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 22, name: 'project22', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 23, name: 'project23', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 24, name: 'project24', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 25, name: 'project25', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 26, name: 'project26', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 27, name: 'project27', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 28, name: 'project28', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 29, name: 'project29', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 30, name: 'project30', students: ['student1', 'student2', 'student3', 'student4', 'student5'] },
  { id: 31, name: 'project31', students: ['student1', 'student2', 'student3', 'student4', 'student5'] }
];
const Card = ({ project }) => {
  const borderColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet', 'gold'];
  const randomColor = borderColors[Math.floor(Math.random() * borderColors.length)];

  return (
    <div className="card" style={{ border: `2px solid ${randomColor}`, position: 'relative' }}>
      <h2>{project.name}</h2>
      <ul>
        {project.students.map((student, index) => (
          <li key={index} style={index === 0 ? { fontWeight: 'bold' } : {}}>{student}</li>
        ))}
      </ul>
      <p style={{ position: 'absolute', bottom: '10px', left: '10px' }}>ID: {project.id}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>הקהילה</h1>

      <div className="card-container">
        {projects.map(project => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;

