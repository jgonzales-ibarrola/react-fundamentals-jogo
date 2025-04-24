/**
 * 
 * @returns Button Component
 */
type TComponentBProps ={
  label: string
  className: string;
  onClick: () => void;
}

export default function ComponentB({label, className, onClick} : TComponentBProps) {
  return (
    <button type="button" className={`${className}`} onClick={onClick}>
      {label}
    </button>
  )
}
