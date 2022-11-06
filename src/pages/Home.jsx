import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Main from '../components/Main';
import List from '../components/List';
import Footer from '../components/Footer';
import CreateSearch from '../components/CreateSearch';
import React from "react";

function App() {
  return (
    <Layout>
        <Main>
        <Banner/>
            <List>
                <CreateSearch/>
            </List>
        </Main>
        <Footer/>
    </Layout>
  );
}

export default App;
