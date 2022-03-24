import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar,Exchanges,Homepage,Cryptocurrencies,News,CryptoDetails } from './components'
import './App.css'
import ScrollToTop from './components/ScrolltoTop'
const App = () => {
  return (
      
    <div className='app'>
        <div className="navbar">
         <Navbar/>
         <ScrollToTop/>
        </div>
        <div className="main">
        <Layout>
            <div className="routes">
                <Switch>
                    <Route exact path='/'>
                        <Homepage/>
                    </Route>
                    <Route exact path='/exchanges'>
                        <Exchanges/>
                    </Route>
                    <Route exact path='/cryptocurrencies'>
                        <Cryptocurrencies/>
                    </Route>
                    <Route exact path='/crypto/:coinID'>
                        <CryptoDetails/>
                    </Route>
                    
                    <Route exact path='/news'>
                        <News/>
                    </Route>
                </Switch>
            </div>
        </Layout>
        
        <div className='footer' style={{ backgroundColor: '#001529', display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center' }}>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021 <Link to="/">MetCrypto Inc.</Link> <br /> All Rights Reserved.</Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
         
        </Space>
        <div className="author">
        <p style={{color:'white', fontSize:'1.3rem', marginTop:'1rem'}}>Developed by Shubham Joshi</p>
        <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100008201645139" target='_blank'> <i class="icon fa fa-facebook-square" style={{color:'#4267B2', borderRadius:'50%'}}></i></a>
        <a href="https://github.com/shubhamjoshi99899" target='_blank'><i class="icon fa fa-github" style={{color:''}}></i></a>
        <a href="https://www.instagram.com/i_s_h_u_b_h_a_m_j_o_s_h_i__/" target='_blank'><i class="icon fa fa-instagram"style={{color:'#DD2A7B'}}></i></a>
        <a href="https://www.linkedin.com/in/shubham-joshi-272a01202" target='_blank'><i class="icon fa fa-linkedin-square"style={{color:'#515BD4'}}></i></a>
        </div>
        </div>
      </div>
        </div>
        
    </div>
  );
}

export default App