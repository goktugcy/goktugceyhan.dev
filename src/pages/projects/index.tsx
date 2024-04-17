import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { supabase } from '@/common/libs/supabase';
import { ProjectItemProps } from '@/common/types/projects';
import Projects from '@/modules/projects';
interface ProjectsPageProps {
  projects: ProjectItemProps[];
}

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Several projects that I have worked on, both private and open source.';

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < projects.length;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Göktuğ Ceyhan`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={projects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await supabase
    .from('projects')
    .select('*')
    .order('is_featured', { ascending: false })
    .filter('is_show', 'eq', true)
    .filter('deleted_at', 'is', null);

  return {
    props: {
      projects: JSON.parse(JSON.stringify(response.data)),
    },
    revalidate: 1,
  };
};
