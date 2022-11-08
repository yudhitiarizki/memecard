import Layout from "../components/Layout";
import Main from "../components/Main";
import React from "react";
import Footer from "../components/Footer";
import CardDetail from "../components/CardDetail";
import Comments from "../components/Comments";

const Detail = () => {
    return (
        <Layout>
            <Main>
                <CardDetail />
                <Comments />
            </Main>
            <Footer />
        </Layout>
    )
}

export default Detail;