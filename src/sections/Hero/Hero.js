import './Hero.css'

import PrimaryButton from '../../components/Buttons/Buttons'

const Hero = () => {
  return (
    <div className='hero-main'>
      <div className='hero-text'>
        <h6 className='hero-subtitle'>Welcome To Cybporg</h6>
        <h4 className='hero-title'><em>BROWSE </em>OUR <br /> POPULAR GAMES HERE</h4>

        <PrimaryButton>Browse Now</PrimaryButton>

      </div>
    </div>
  )
}

export default Hero