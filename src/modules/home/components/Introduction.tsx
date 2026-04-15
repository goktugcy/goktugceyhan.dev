const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
          <h1>Hi, I&apos;m Göktuğ</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
            <li>
              Based in Istanbul, Turkey<span className='ml-1'>🇹🇷</span>
            </li>
            <li>Working remotely</li>
          </ul>
        </div>
      </div>

      <p className='leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300'>
        I am a backend-focused software developer with over 5 years of
        experience in the software industry. I build scalable APIs, services,
        and product-driven solutions using Node.js, TypeScript, PHP/Laravel, and
        modern web technologies. My experience includes database management,
        caching systems, serverless architectures, and developer-focused
        infrastructure, and I continuously strengthen my technical expertise
        through real-world projects and product initiatives.
      </p>
    </section>
  );
};

export default Introduction;
