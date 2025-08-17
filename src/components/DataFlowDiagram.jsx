import React from 'react'
import styled from 'styled-components'
import { Slide } from 'react-awesome-reveal'

const DiagramContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0;
  flex-wrap: wrap;
  gap: 20px;
`

const DataBox = styled.div`
  background: ${props => props.color || 'rgba(255, 215, 0, 0.1)'};
  border: 2px solid ${props => props.borderColor || '#232099'};
  border-radius: 15px;
  padding: 25px;
  min-width: 180px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.2);
  }

  h4 {
    color: ${props => props.borderColor || '#232099'};
    margin: 0 0 10px 0;
    font-size: 1.3em;
  }

  p {
    margin: 5px 0;
    opacity: 0.9;
  }

  small {
    opacity: 0.7;
    font-style: italic;
  }
`

const Arrow = styled.div`
  font-size: 2.5em;
  color: #232099;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }

  @media (max-width: 768px) {
    transform: rotate(90deg);
    font-size: 2em;
  }
`

const operationData = [
  {
    title: 'PARTIAL',
    description: 'Initial snapshot',
    color: 'rgba(0, 150, 255, 0.1)',
    borderColor: '#0096ff'
  },
  {
    title: 'INSERT',
    description: 'New records',
    color: 'rgba(0, 255, 0, 0.1)',
    borderColor: '#00ff00'
  },
  {
    title: 'UPDATE',
    description: 'Modify existing',
    color: 'rgba(255, 165, 0, 0.1)',
    borderColor: '#ffa500'
  },
  {
    title: 'DELETE',
    description: 'Remove records',
    color: 'rgba(255, 0, 0, 0.1)',
    borderColor: '#ff4444'
  }
]

function DataFlowDiagram() {
  return (
    <DiagramContainer>
      {operationData.map((operation, index) => (
        <React.Fragment key={operation.title}>
          <Slide direction="up" delay={index * 200}>
            <DataBox color={operation.color} borderColor={operation.borderColor}>
              <h4>{operation.title}</h4>
              <p>{operation.description}</p>
            </DataBox>
          </Slide>
          {index < operationData.length - 1 && (
            <Slide direction="up" delay={index * 200 + 100}>
              <Arrow>→</Arrow>
            </Slide>
          )}
        </React.Fragment>
      ))}
    </DiagramContainer>
  )
}

export default DataFlowDiagram
