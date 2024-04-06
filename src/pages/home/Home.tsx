import Footer from '../../components/footer/Footer'
import CTA from './CTA'
import Main from './Main'
import Services from './Services'
import Testimonials from './Testimonials'

export default function Home() {
  return (
    <>
      <Main />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}