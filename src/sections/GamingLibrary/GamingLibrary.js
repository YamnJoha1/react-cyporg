import './GamingLibrary.css'

import {CardGaming ,SectionHeader, SectionWrapper} from '../../components/index'
import GamingLibraryData from '../../Data/GamimgLibraryData'

function GemingLibrary() {

  const cards = GamingLibraryData.map(card => {
    return  <CardGaming key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.download} />
  })

  return (
    <>
    <SectionWrapper>
      <SectionHeader title1="Gaming" title2="Library" />
      <div className='gaming-cards'>
        {cards}
      </div>
    </SectionWrapper>
    </>
  )
}

export default GemingLibrary