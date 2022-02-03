import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomeIndex from './pages';
const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Layout>
                <Route exact path="/" component={HomeIndex} />
            </Layout>
        </Switch>
    </BrowserRouter>
}
export default Router