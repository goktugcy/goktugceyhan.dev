import Breakline from '@/common/components/elements/Breakline';

import Introduction from './Introduction';
import Services from './Services';
import CareerList from '../../about/components/CareerList';
import Skills from '../../about/components/Skills';
const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mt-8 mb-7' />
      <CareerList />
      <Breakline className='mt-8 mb-7' />
      <Skills />
      <Breakline className='mt-8 mb-7' />
      <Services />
    </>
  );
};

export default Home;
