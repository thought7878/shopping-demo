import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Avatar from './Avatar'
import avatar from '../assets/avatar.png'

const SidebarUserInfo = ({ isAuthenticated, logout }) => (
  <Wrap>
    <CenteredAvatar avatar={avatar} size="100" />
    {isAuthenticated && (
      <Text>
        <Name to="/profile">用户名</Name>
        <Link to="" onClick={logout}>
          退出
        </Link>
      </Text>
    )}
  </Wrap>
)

export default SidebarUserInfo

const Wrap = styled.div``
const CenteredAvatar = styled(Avatar)`
  margin: 0 auto;
`
const Name = styled(Link)`
  display: inline-block;
  padding-right: 5px;
  border-right: 2px solid #f77062;
`
const Text = styled.div`
  font-size: 14px;
  text-align: center;
  line-height: 1;
  display: block;
  margin: 16px auto;
  a {
    padding-left: 5px;
    color: #f77062;
  }
`
