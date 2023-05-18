import './MostPopular.css'

import {Card, SectionHeader, SectionWrapper} from '../../components/index'
import MostPopularData from '../../Data/MostPopularData'

const MostPopular = () => {

  const cards = MostPopularData.map(card => {
    return  <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
  }); 

  return (
    <>
    <SectionWrapper>
      <SectionHeader>Most Popular</SectionHeader>
      <SectionHeader title1="Most Popular" title2="Right Now" />

      <div className='most-items'>
        {cards}
      </div>
    </SectionWrapper>
    </>
  )
}

export default MostPopular