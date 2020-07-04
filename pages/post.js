import Layout from '../components/Layout';
import { withRouter } from 'next/router';


const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
  </Layout>
)

export default withRouter(Post);