// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import {connectSearchBox, connectStateResults} from 'react-instantsearch/connectors'
import {withRouter} from 'next/router'
import styled from 'styled-components'
import {themeGet} from 'styled-system'
import Box from './Box'
import A from './A'
import SmallText from './SmallText'
import {HomeIcon} from './Icons'
import {default as BaseInput} from './Input'

const Input = BaseInput.extend`
  padding: 0 16px 0 35px;
  height: 2.5rem;
  caret-color: black;

  &::placeholder {
    opacity: 1;
  }

  &:focus {
    padding: 0 15px 0 34px;
  }

  @media (max-width: ${themeGet('breakpoints.0')}) {
    background-color: ${themeGet('colors.greenDark')};
    color: white;

    &:focus {
      border: 3px solid white;
    }

    &::placeholder {
      color: white;
    }
  }
`

const Wrapper = Box.extend`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${themeGet('colors.green')};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: ${themeGet('space.2')} ${themeGet('space.2')};
  z-index: 1;

  @media (min-width: ${themeGet('breakpoints.0')}) {
    align-self: flex-end;
    background: none;
    box-shadow: none;
    position: relative;
    padding: 0;
    top: unset;
    left: unset;
    right: unset;
  }
`

const SearchForm = Box.withComponent('form').extend`
  position: relative;
	width: 100%;
`

const SearchIconButton = styled.button`
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23F9F9F9%22%20stroke%3D%22transparent%22%20stroke%2Dwidth%3D%220%22%20d%3D%22M13%2E5%2013%2E5c%2D2%2E6%202%2E6%2D6%2E7%202%2E6%2D9%2E3%200%2D2%2E6%2D2%2E6%2D2%2E6%2D6%2E7%200%2D9%2E3%202%2E6%2D2%2E6%206%2E7%2D2%2E6%209%2E3%200%202%2E5%202%2E6%202%2E5%206%2E7%200%209%2E3M2%2E6%2015%2E1c3%203%207%2E7%203%2E4%2011%2E2%201%2E1l7%2E7%207%2E7%202%2E4%2D2%2E4%2D7%2E7%2D7%2E7c2%2E3%2D3%2E4%201%2E9%2D8%2E1%2D1%2E1%2D11%2E2C11%2E7%2D%2E8%206%2D%2E8%202%2E6%202%2E6c%2D3%2E5%203%2E4%2D3%2E5%209%200%2012%2E5%22%2F%3E%3C%2Fsvg%3E');
  background-size: contain;
  background-color: transparent;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: 0.66rem;
  left: 0.66rem;

  @media (min-width: ${themeGet('breakpoints.0')}) {
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23000000%22%20stroke%3D%22transparent%22%20stroke%2Dwidth%3D%220%22%20d%3D%22M13%2E5%2013%2E5c%2D2%2E6%202%2E6%2D6%2E7%202%2E6%2D9%2E3%200%2D2%2E6%2D2%2E6%2D2%2E6%2D6%2E7%200%2D9%2E3%202%2E6%2D2%2E6%206%2E7%2D2%2E6%209%2E3%200%202%2E5%202%2E6%202%2E5%206%2E7%200%209%2E3M2%2E6%2015%2E1c3%203%207%2E7%203%2E4%2011%2E2%201%2E1l7%2E7%207%2E7%202%2E4%2D2%2E4%2D7%2E7%2D7%2E7c2%2E3%2D3%2E4%201%2E9%2D8%2E1%2D1%2E1%2D11%2E2C11%2E7%2D%2E8%206%2D%2E8%202%2E6%202%2E6c%2D3%2E5%203%2E4%2D3%2E5%209%200%2012%2E5%22%2F%3E%3C%2Fsvg%3E');
  }
`

const ClearIconButton = styled.button`
  background-image: url("data:image/svg+xml;charset=UTF-8, %3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3e%3cg fill='none' stroke='%23F9F9F9' stroke-width='2' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' %3e%3cpath d='M.5.5l23 23M23.5.5l-23 23' /%3e%3c/g%3e%3cg%3e%3cpath fill='none' d='M0 0h24v24H0z' /%3e%3c/g%3e%3c/svg%3e ");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: content-box;
  background-color: transparent;
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  padding: 0.2rem;

  @media (min-width: ${themeGet('breakpoints.0')}) {
    background-image: url("data:image/svg+xml;charset=UTF-8, %3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3e%3cg fill='none' stroke='%23000000' stroke-width='2' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' %3e%3cpath d='M.5.5l23 23M23.5.5l-23 23' /%3e%3c/g%3e%3cg%3e%3cpath fill='none' d='M0 0h24v24H0z' /%3e%3c/g%3e%3c/svg%3e ");
  }
`

type Props = {
  currentRefinement: string,
  refine: any => any,
  searchResults: Object,
  area: string,
  router: Object,
}
type State = {
  value: string,
}

class SearchBox extends React.Component<Props, State> {
  state = {
    value: '',
  }

  syncUpdate(fn, cb) {
    //$FlowFixMe
    ReactDOM.flushSync(() => {
      this.setState(fn, cb)
    })
  }

  handleFocus = () => {
    const {router} = this.props
    if (router.pathname !== '/search') {
      router.push('/search')
    }
  }

  handleChange = ({target: {value}}) => {
    this.syncUpdate(() => ({value}))
    this.props.refine(value)
    window.scrollTo(0, 0)
  }

  handleSubmit = event => {
    window.document.activeElement.blur()
    window.scrollTo(0, 0)
    event.preventDefault()
  }

  handleReset = event => {
    this.syncUpdate(() => ({value: ''}))
    this.props.refine('')
    window.scrollTo(0, 0)
    event.preventDefault()

    const searchInput = window.document.querySelector('#global-product-search')
    if (searchInput) searchInput.focus()
    // this._input.focus()
  }

  render() {
    const {currentRefinement, searchResults, area} = this.props

    // window.i = this._input
    return (
      <Wrapper area={area} flexDirection="row" alignItems="center">
        <SearchForm
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
          action="."
          role="search"
        >
          <Input
            id="global-product-search"
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            placeholder="What can we find for you?"
            type="search"
            innerRef={r => {
              //$FlowFixMe
              this._input = r
            }}
          />
          <label htmlFor="global-product-search">
            <span className="screen-reader-text">Search The Gluten Project For:</span>
          </label>
          <SearchIconButton type="submit">
            <span className="screen-reader-text">Search</span>
          </SearchIconButton>
          {this.state.value && (
            <ClearIconButton type="reset">
              <span className="screen-reader-text">reset search</span>
            </ClearIconButton>
          )}
        </SearchForm>
        {currentRefinement &&
          searchResults && (
            <SmallText
              width="50%"
              style={{position: 'absolute', left: 'calc(100% + 0.6rem)', bottom: 10}}
              className="mobile-hide"
            >
              {searchResults.nbHits} results
            </SmallText>
          )}

        <Link href="/" passHref>
          <A color="white" ml={2} className="mobile-show">
            <HomeIcon />
          </A>
        </Link>
      </Wrapper>
    )
  }
}

export default withRouter(connectSearchBox(connectStateResults(SearchBox)))
