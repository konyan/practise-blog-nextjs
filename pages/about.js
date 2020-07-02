
import Layout from '../components/Layout';
import Link from 'next/link'
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

export default class About extends Component {


  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/konyan")
    const data = await res.json();
    return { user: data };
  }


  render() {
    const { user } = this.props;
    return (
      <Layout title="About">
        <Link href="/">
          <a >Back to Home</a>
        </Link>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Me logo" height="200px" />
      </Layout>
    )
  }
}

