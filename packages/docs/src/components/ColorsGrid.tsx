import { getContrast } from 'polished';

import { colors } from '@ignite-ui/tokens';

export function ColorsGrid() {
  return Object.entries(colors).map(([key, value]) => {
    return (
      <div key={key} style={{ backgroundColor: value, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(value, '#FFFFFF') > 3.5 ? '#FFFFFF' : '#000000',
          }}
        >
          <strong>${key}</strong>
          <span>{value}</span>
        </div>
      </div>
    )
  })
}
