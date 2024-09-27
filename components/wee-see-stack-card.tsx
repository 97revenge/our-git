'use client'

export function WeeSeeStackCard() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f0f0f0',
      padding: '20px',
    }}>
      <div style={{
        display: 'flex',
        width: '100%',
        maxWidth: '900px',
        height: '500px',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{
          flex: '1',
          padding: '40px',
          background: 'white',
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
          zIndex: 1,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}>
            <img
              src="/placeholder.svg?height=80&width=80"
              alt="Profile"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginRight: '20px',
              }}
            />
            <span style={{ fontSize: '22px', color: '#4a4a4a' }}>97revenge</span>
          </div>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333',
          }}>
            wee-see stack
          </h1>
          <p style={{
            fontSize: '24px',
            lineHeight: '1.4',
            color: '#666',
            maxWidth: '90%',
          }}>
            Technologies based on SSR, type validation, client and...
          </p>
        </div>
        <div style={{
          flex: '1',
          background: '#1a2b3c',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: `url(/placeholder.svg?height=50&width=50)`,
                backgroundSize: 'cover',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}