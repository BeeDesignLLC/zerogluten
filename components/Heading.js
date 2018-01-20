// @flow
import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  justifyContent,
  alignItems,
  alignSelf,
} from 'styled-system'
import {gridArea, justifySelf} from '../utils/styled'

const Heading = styled.h1.attrs({
  mb: props => (props.mb !== undefined ? props.mb : 3),
})`
  font-weight: 700;

  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${textAlign}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${gridArea}
  ${justifySelf}
`
export default Heading
