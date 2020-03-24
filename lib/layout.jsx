import React from 'react'

const Layout = ({ children }) => {
  return (
    <main>
      {children}
  
      <style jsx>{`
        main {
          width: 100%;
          max-width: 750px;
          margin: 0 auto;
        }

        @media (max-width: 676px) {
          main {
            max-width: 90vw;
          }
        }
      `}</style>
    </main>
  )
}

export default Layout
