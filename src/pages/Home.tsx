import hamburger from './../assets/hamburger-bars.svg'
import slantBars from './../assets/slant-bars.svg'
import zigzag from './../assets/zigzag.svg'
export default function Home() {
  return (
    <main>
      <div
        className={`container-custom relative m-4 flex min-h-screen flex-col justify-evenly p-5 lg:min-h-[calc(100vh-5rem)] lg:p-9 ${`bg-teal-base-200`}`}
      >
        <button className='nav-toggle absolute right-5 top-5'>
          <img src={hamburger} alt='Open Menu' />
        </button>

        <div className='adjust-top-spacing h-4 lg:h-14'></div>
        <div className='grid grid-rows-2 lg:min-h-[75vh] lg:grid-cols-2 lg:grid-rows-1  lg:gap-4'>
          <section className='hero-img min-h-[40vh] lg:order-2'>
            <div className='hero-img-bg bg-teal-base-400 relative mx-auto grid h-full max-w-[40rem] place-content-center overflow-hidden'>
              <div className='relative aspect-square h-40 lg:h-64'>
                <div className='hero-img-placeholder relative z-10 h-full w-full bg-slate-600'>
                  {/* hero image here */}
                </div>
                <div className='hero-ouline absolute left-10 top-10 z-0 h-full w-full border-2 border-black'></div>
                <img
                  src={slantBars}
                  alt='slant-bars'
                  className='absolute -left-1/4 -top-1/4 aspect-square h-32'
                />
                <img
                  src={zigzag}
                  alt='zigzag'
                  className='absolute -bottom-[18%] -left-1/4 hidden aspect-square h-8 lg:inline-block'
                />
                <img
                  src={zigzag}
                  alt='zigzag'
                  className='absolute -bottom-[36%] -right-[30%] hidden aspect-square h-8 lg:inline-block'
                />
              </div>
            </div>
          </section>

          <section className='hero-text relative grid place-items-center lg:order-1'>
            <span className='decorators text-text-lighter absolute left-0 top-0 inline-block'></span>
            <span className='decorators text-text-lighter absolute bottom-0 right-0 inline-block'></span>

            <div className='flex flex-col gap-4'>
              <h1 className='font-urbanist text-2xl font-semibold uppercase lg:text-3xl'>
                Hi, I'm
              </h1>
              <h1 className='font-urbanist text-6xl font-semibold uppercase lg:text-8xl'>
                john doe
              </h1>
              <h2 className='text-lg lg:text-xl'>
                A veteran software developer based in Los angeles
              </h2>
            </div>
          </section>
        </div>
        <div className='cta-group'>
          <button className='border border-black px-3 py-1'>Resume</button>
        </div>
      </div>
    </main>
  )
}
