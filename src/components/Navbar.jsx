import React, { useState } from 'react';
import {Button, Menu, Typography, Avatar} from 'antd'
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutLined } from '@ant-design/icons';
import icon from '../cryptocurrency.png';
const Navbar = () => {
 
  

  return (
    <div className="nav-container">
      <div style={{ backgroundColor: '#001529', display: 'flex', padding: '20px', alignItems: 'center', width: '100%' }}>
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} style={{ margin: '0 0 0 15px' }}><Link to="/" style={{ color: 'white' }}>MetaCrypto</Link></Typography.Title>
       

      </div>
               {/* <Button className='menu-control-container'></Button> */}
               <Menu theme='dark'>
                  <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrecies</Link>
                  </Menu.Item>
                  <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                  </Menu.Item>
                  <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                  </Menu.Item>

               </Menu>
             </div>
  
  );
}

export default Navbar