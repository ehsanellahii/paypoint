import Wrapper from '@/components/shared/Wrapper';
import Footer from '@/components/shared/layout/Footer';
import Navigation from '@/components/shared/layout/Navigation';
import { Link } from '@/navigation';

export default function NotFound() {
  return (
    <div className='w-full h-full bg-bgApp'>
      <Navigation />
      <Wrapper style='py-8'>
        <div className='w-full grid md:grid-cols-2'>
          <div className='w-full flex flex-col gap-4 px-4 md:px-8'>
            <h1 className='text-[5rem] font-semibold leading-[5.5rem] text-[#262626]'>
              Oops!
            </h1>
            <h5 className='text-left text-[#262626] text-xl lg:max-w-[70%] font-normal'>
              Unfortunately, the page you are looking for does not exist.
            </h5>
            <h5 className='text-left text-[#262626] text-xl font-normal'>
              Do not worry! With the right links we can quickly get back to your PayPoint:
            </h5>
            <ul>
              <li>
                <Link href='/' className='font-bold text-primaryDark text-xl'>
                  Back to Homepage
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </Wrapper>
      <Footer />s
    </div>
  );
}
