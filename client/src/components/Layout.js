import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import SignupContainer from '../containers/SignupContainer'
import LoginContainer from '../containers/LoginContainer'
import { PINK_PRIMARY, PINK_ALT, TEXT_PRIMARY } from '../constants/colors'

class Layout extends Component {
  render() {
    const { title } = this.props

    return (
      <Wrap>
        <Header>{title}</Header>
        <Content>
          <Inner>
            <Switch>
              <Route path="/signup" component={SignupContainer} />
              <Route path="/login" component={LoginContainer} />
            </Switch>
          </Inner>
        </Content>
      </Wrap>
    )
  }
}

export default Layout

const Wrap = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    -45deg,
    ${PINK_PRIMARY} 0%,
    ${PINK_ALT} 100%
  );
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex-grow: 1;
  position: relative;
`

const Inner = styled.div`
  /* 没有这一层，Content 中包裹的内容 height: 100% 就会失效 */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Header = styled.div`
  height: 80px;
  padding-top: 45px;
  line-height: 14px;
  padding-bottom: 21px;
  text-align: center;
  color: ${TEXT_PRIMARY};
`
