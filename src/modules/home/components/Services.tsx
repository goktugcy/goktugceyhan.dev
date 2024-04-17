import Router from 'next/router';
import { BiRocket as RocketIcon } from 'react-icons/bi';

import Button from '@/common/components/elements/Button';
import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

const Services = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title="What I've been working on" />
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>
          I assist brands, companies, institutions, and startups in creating
          exceptional digital experiences for their businesses through strategic
          development services.
        </p>
      </div>
      <Card className='p-8 bg-neutral-100 border dark:border-none rounded-xl space-y-4 dark:bg-[#1e1e1e]'>
        <div className='flex gap-2 items-center'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'>Lets work together!</h3>
        </div>
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
          I&apos;m open for freelance projects, feel free to email me to see how
          can we collaborate.
        </p>
        <Button
          data-umami-event='Click Contact Button'
          onClick={() => Router.push('/contact')}
        >
          Contact me
        </Button>
      </Card>
    </section>
  );
};

export default Services;
