import './SectionHeader.css'

function SectionHeader(props) {
  return (
    <div className='section-header'>
        <h4>{props.title1}</h4> <span>{props.title2}</span>
    </div>
  )
}

export default SectionHeader