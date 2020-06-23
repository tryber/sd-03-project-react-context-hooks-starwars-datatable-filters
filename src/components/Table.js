import React from 'react'
import ApiResults from '../components/ApiResults.js'
import Header from './Header.js'

export default () => {
  return (
    <div>
      <table>
          <Header />
          <ApiResults/>
      </table>
    </div>
  )
}
