interface StateHealth {
  children: React.ReactNode
  color: string
  colorText: string
}

const StateHealth: React.FC<StateHealth> = (props) => {
  const { children, color, colorText } = props

  return (
    <div className={`${color} ${colorText} rounded-lg p-4 flex`}>
      {children}
    </div >
  )
}

export default StateHealth