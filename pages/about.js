
import Layout from '../components/Layout';
import Link from 'next/link'

export default () => (
  <Layout title="About">
    <Link href="/">
      <a >Back to Home</a>
    </Link>
    <p>A Javascript Programmer</p>
    <img src="/static/js.png" alt="js logo" height="200px" />
  </Layout>
)