import Layout from '../components/MyLayout.js'
import Redirect from '../lib/redirect.js'

export default class RedirectPage extends React.Component {

    static async getInitialProps({ res }) {
        Redirect('/index', res);
        return {};
    } 
    
    render(){
        return (
            <Layout headerText="from index">
                <h1>Redirect page</h1>
            </Layout>
        )
    }
}
