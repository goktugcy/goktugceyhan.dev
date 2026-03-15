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

  // Guard for null or undefined projects
  const safeProjects = Array.isArray(projects) ? projects : [];
  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < safeProjects.length;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Göktuğ Ceyhan`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={safeProjects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  let projects: ProjectItemProps[] = [];

  try {
    const response = await supabase
      .from('projects')
      .select('*')
      .order('is_featured', { ascending: false })
      .filter('is_show', 'eq', true)
      .filter('deleted_at', 'is', null)
      .order('updated_at', { ascending: false });

    if (response.error || !response.data) {
      throw new Error(response.error?.message || 'Supabase error');
    }

    projects = response.data;
  } catch (error) {
    if (process.env.NEON_DATABASE_URL) {
      try {
        const { Pool } = await import('pg');
        const pool = new Pool({
          connectionString: process.env.NEON_DATABASE_URL,
          ssl: true,
        });
        const client = await pool.connect();
        try {
          const result = await client.query(
            `SELECT * FROM projects 
             WHERE is_show = true AND deleted_at IS NULL 
             ORDER BY is_featured DESC, updated_at DESC`
          );
          projects = result.rows.map((row) => ({
            ...row,
            stacks:
              typeof row.stacks === 'object'
                ? JSON.stringify(row.stacks)
                : row.stacks,
          })) as ProjectItemProps[];
        } finally {
          client.release();
          await pool.end();
        }
      } catch (neonError) {
        // eslint-disable-next-line no-console
        console.error('NeonDB error:', neonError);
      }
    }
  }

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
    revalidate: 1,
  };
};
