import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#09090b', // surface-container-lowest
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4AF37', // primary gold
          fontWeight: 'bold',
          fontFamily: 'monospace',
          borderRadius: '6px',
          border: '1px solid rgba(212, 175, 55, 0.3)',
        }}
      >
        M
      </div>
    ),
    {
      ...size,
    }
  )
}
