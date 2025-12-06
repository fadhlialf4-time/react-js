import React from 'react';

const TodoFilter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'active', label: 'Aktif' },
    { id: 'completed', label: 'Selesai' }
  ];

  const buttonStyle = (filterId) => {
    const baseStyle = {
      padding: '10px 20px',
      border: '2px solid',
      borderRadius: '6px',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minWidth: '80px',
      textAlign: 'center'
    };

    if (currentFilter === filterId) {
      let backgroundColor, borderColor, color;
      switch(filterId) {
        case 'all':
          backgroundColor = '#3498db';
          borderColor = '#3498db';
          break;
        case 'active':
          backgroundColor = '#e74c3c';
          borderColor = '#e74c3c';
          break;
        case 'completed':
          backgroundColor = '#2ecc71';
          borderColor = '#2ecc71';
          break;
        default:
          backgroundColor = '#3498db';
          borderColor = '#3498db';
      }
      return {
        ...baseStyle,
        backgroundColor,
        borderColor,
        color: 'white',
        transform: 'scale(1.05)'
      };
    }

    return {
      ...baseStyle,
      backgroundColor: 'transparent',
      borderColor: '#ddd',
      color: '#7f8c8d'
    };
  };

  return (
    <div style={styles.filterContainer}>
      <div style={styles.filterLabel}>
        <span style={styles.filterIcon}>📊</span>
        Filter:
      </div>
      <div style={styles.filterButtons}>
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            style={buttonStyle(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flexWrap: 'wrap'
  },
  filterLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '600',
    color: '#2c3e50'
  },
  filterIcon: {
    fontSize: '1.2rem'
  },
  filterButtons: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  }
};

export default TodoFilter;