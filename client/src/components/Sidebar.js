import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SidebarUserInfo from './SidebarUserInfo'

class SideBar extends Component {
  state = {
    isOpen: false
  }

  closeMenu = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <Wrap>
        <Menu customCrossIcon={false} isOpen={this.state.isOpen}>
          <SidebarUserInfo />
          <div className="bm-link-list">
            <Link to="/">首页</Link>
            <Link to="/profile">个人中心</Link>
            <Link to="/dishes">猜你喜欢</Link>
          </div>
          <div className="bottom-button">
            <button onClick={this.closeMenu} className="bm-close-button">
              关闭
            </button>
          </div>
        </Menu>
      </Wrap>
    )
  }
}

export default SideBar

const Wrap = styled.div`
  .bm-menu {
    background: #fff;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  .bm-burger-button {
    position: absolute;
    width: 18px;
    height: 12px;
    left: 17px;
    top: 42px;
  }

  .bm-item-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bm-link-list {
    flex-grow: 2;
  }

  .bm-link-list a {
    display: block;
    line-height: 56px;
    border-bottom: 1px solid #e3e9ec;
    padding-left: 10px;
    font-size: 12px;
    color: #878787;
  }

  .bm-menu .user-info-text,
  .bm-menu .user-info-text a {
    font-size: 14px;
    color: #f77062;
    text-align: center;
    line-height: 1;
  }

  .bm-menu .user-info-text {
    display: block;
    margin: 16px auto;
  }

  .bm-user-name {
    display: inline-block;
    padding-right: 5px;
    border-right: 2px solid #f77062;
  }

  .bm-menu .user-info-text a {
    padding-left: 5px;
  }

  .bm-close-button {
    display: block;
    color: white;
    background-image: linear-gradient(-45deg, #f77062 0%, #fe5196 100%);
    border-radius: 2px;
    font-size: 14px;
    border: 0;
    width: 80%;
    margin: 30px auto;
    line-height: 39px;
  }

  .bm-user-avatar {
    margin: 0 auto;
  }
`
