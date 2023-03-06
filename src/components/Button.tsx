interface props {
  onClick: () => void
  value?: string
  children: JSX.Element | JSX.Element[]
}

const Button = ({ onClick, value }: props) => (
  <button onClick={onClick}>{value}</button>
)

export default Button
