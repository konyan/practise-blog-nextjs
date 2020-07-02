import Link from 'next/link'
import Layout from '../components/Layout';

const Index = () =>
  <Layout>
    <h1>Home</h1>
    <Link href="/about">
      <a >Go To About</a>
    </Link>
    <p>Welcome to About Page</p>
  </Layout>

export default Index;