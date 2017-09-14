import Layout from '../components/MyLayout.js'

const Index = (props) => (

  <Layout {...props}>
          <div className="bgWrap">
						<h2>Welcome</h2>
						<p>This site is an example of using Facebook login with an API</p>
						<p>It uses React.js and Node.JS</p>
						<p>There will also be a React Native app for both iOS and Android to follow</p>
						<h3>On Login</h3>
						<p>On login you will be able to see a list of dummy users and users who have also logged in to the app</p>
            <style jsx>
              {`
                .bgWrap {
                  margin-top:50px;
                  float:left;
                  background-color: #fff;
                  width:100%;
                  padding:25px 0 50px 0;
                  box-shadow: 3px 3px 3px #ccc;
                }
              `}
            </style>
					</div>
  </Layout>
)

Index.getInitialProps = async function({ req }) {
    return {
       headerText:"from index", 
       indexSelected:"selected"
    }
}

export default Index;