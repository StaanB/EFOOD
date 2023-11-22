import { BannerDiv, BannerH1 } from "./styles"
import logo from '../../assets/images/logo.svg'

const Banner = () => (
    <BannerDiv>
        <img src={logo} alt="Efood Logo"/>
        <BannerH1>Viva experiências gastronômicas no conforto da sua casa</BannerH1>
    </BannerDiv>
)

export default Banner