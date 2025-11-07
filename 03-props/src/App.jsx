import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      <Card user="Mohd Jtrix" age={18} img='https://images.unsplash.com/photo-1678468826224-886aaccd22eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764'/>
      <Card user="Mohd Tabrez" age={21} img="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" />
    
    </div>
  )
}

export default App