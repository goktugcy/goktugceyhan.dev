import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
  SiAdonisjs,
  SiCloudflare,
  SiCloudflarepages,
  SiCss3,
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSocketdotio,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWebpack,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  PHP: <SiPhp size={iconSize} className='text-blue-500' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'Vue.js': <SiVuedotjs size={iconSize} className='text-green-500' />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  ),
  GraphQL: <SiGraphql size={iconSize} className='text-pink-600' />,
  Laravel: <SiLaravel size={iconSize} className='text-red-500' />,
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  Supabase: <SiSupabase size={iconSize} className='text-amber-500' />,
  MySQL: <SiMysql size={iconSize} className='text-blue-500' />,
  PostgreSQL: <SiPostgresql size={iconSize} className='text-blue-500' />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,
  'Artificial Intelligence': (
    <BsRobot size={iconSize} className='text-rose-500' />
  ),
  OpenAI: <SiOpenai size={iconSize} className='text-green-500' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  Cloudflare: <SiCloudflare size={iconSize} className='text-blue-500' />,
  'Cloudflare Pages': (
    <SiCloudflarepages size={iconSize} className='text-blue-500' />
  ),
  Webpack: <SiWebpack size={iconSize} className='text-blue-500' />,
  'Styled Components': (
    <SiStyledcomponents size={iconSize} className='text-pink-500' />
  ),
  Nginx: <SiNginx size={iconSize} className='text-green-500' />,
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  Socket: <SiSocketdotio size={iconSize} />,
  Express: <SiExpress size={iconSize} />,
  NestJS: <SiNestjs size={iconSize} />,
  AdonisJS: <SiAdonisjs size={iconSize} />,
  Jquery: <SiJquery size={iconSize} />,
};
