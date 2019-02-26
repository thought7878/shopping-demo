import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Form extends Component {
  state = this.props.config.fields.reduce((obj, t) => {
    obj[t.name] = ''
    return obj
  }, {})

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    })
  }
  formSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const { fields, goto } = this.props.config
    const inputList = fields.map(t => (
      <Input
        key={t.name}
        placeholder={t.name}
        type={t.type}
        value={this.state[t.name]}
        onChange={e => this.handleChange(e, t.name)}
      />
    ))
    return (
      <Wrap>
        <Hero>
          <Title>{goto.title}</Title>
          <Slogan>连接小而确定的幸福</Slogan>
        </Hero>
        <Inputs>
          <Inner>{inputList}</Inner>
        </Inputs>
        <Button onClick={this.formSubmit}>{goto.title}</Button>
        <Goto>
          <Link to={goto.link}>{goto.text}</Link>
        </Goto>
      </Wrap>
    )
  }
}

export default Form

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 280px;
  margin: 0 auto;
`

const Hero = styled.div`
  height: 140px;
`

const Title = styled.div`
  font-size: 36px;
  color: #ffffff;
  line-height: 42px;
  text-align: center;
  margin-top: 54px;
`

const Slogan = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  color: #ffffff;
`

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  line-height: 16px;
  padding: 20px 8px;
  font-size: 14px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #e3e9ec;
  text-indent: 20px;
  color: #878787;
  &::placeholder {
    color: #cecece;
  }
`

const Goto = styled.div`
  margin-bottom: 35px;
  margin-top: 15px;
  text-align: center;
  a {
    color: white;
    line-height: 20px;
  }
`

const Button = styled.button`
  display: block;
  border: 0;
  line-height: 56px;
  outline: 0;
  width: 280px;
  margin: 0 auto;
  text-align: center;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  font-size: 14px;
  color: #f77062;
  user-select: none;
  touch-action: manipulation;
  position: relative;
  /* andriod 手机上，入户输入表单时候，按钮会自动变位置，参考 ant-design 的登录表单代码*/
`
