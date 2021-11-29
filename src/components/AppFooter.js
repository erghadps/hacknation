import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Hacknation
        </a>
        <span className="ms-1">&copy; erghaDps</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://github.com/erghadps" target="_blank" rel="noopener noreferrer">
          React Hacknation
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
