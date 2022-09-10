import './Chips.css';

export function Chips({ children }) {
  return (
    <button className='chips'>
      {children}
    </button>
  )
}