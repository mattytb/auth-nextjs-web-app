import Head from 'next/head'
export default (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>My authentiation app - {props.headerText}</title>
    </Head>
    <style jsx global>{`
        html, body {
            margin:0;
            padding: 0;
            background:#f8f8f8;
            font-family: sans-serif; 
        }
        #app {
            width:100%;
            height:auto;
            margin:0;
            padding: 0;
        }
        h2, h3 {
            font-size: 24px;
            font-family: sans-serif;
            color: #333;
            float: left;
            font-weight: normal;
            padding:2.5px 45px;
            clear:left;
            margin:0;
            margin-bottom:10px;
        }
        h3 {
            font-size: 22px;
            margin-top:25px;
        }
        p {
            font-size: 16px;
            font-family: sans-serif;
            color: #808080;
            float: left;
            clear:left;
            padding:0px 45px;
            margin:3.5px 0;
        }
    `}</style>
  </div>
)