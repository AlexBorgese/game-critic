interface props {
  onClick: () => void
  value: string
}

const Button = ({ onClick, value }: props) => (
  <button onClick={onClick}>{value}</button>
)

export default Button
