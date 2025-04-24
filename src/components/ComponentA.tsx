import ComponentB from "./ComponentB"

/**
 * This is how to create a re-usable component
 * @returns Card Component
 */
type TComponentAProps = {
  title: string,
  content: string
}

export default function ComponentA({title, content} : TComponentAProps) {
  function handleClick() {
    alert('You clicked the button!')
  }
  
  return (
    <div className="card">
      {/* Card Header */}
      <div>
        <h3>{title}</h3>
      </div>
      {/* Card Content */}
      <div>
        <p>{content}</p>
      </div>
      {/* Card Footer */}
      <div>
        <ComponentB label="Test Button" className="button" onClick={handleClick} />
      </div>
    </div>
  )
}
