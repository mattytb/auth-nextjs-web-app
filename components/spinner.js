export default () => (
    <div>
        <span></span>
        <style jsx>
            {`
            span {
                width:50px;
                height:50px;
                background:url('../static/loader.gif') no-repeat;
                float:right;
                margin:50px 0px 0 0;
            }
            @media only screen and (max-width: 935px) {
                span {
                    float:left;
                    margin:15px 0px 0 0;
                }
            }
            `}
        </style>
    </div>
)
