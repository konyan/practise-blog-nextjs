import Layout from '../components/Layout';
import Link from 'next/link';



const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>Hello {title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout title="My Blog">
    <ul>
      <PostLink title="react" slug="react-post" />
      <PostLink title="Angular" slug="angular-post" />
      <PostLink title="Vue" slug="vue-post" />
      <PostLink title="Jquery" slug="jquery" />
    </ul>
  </Layout>
)