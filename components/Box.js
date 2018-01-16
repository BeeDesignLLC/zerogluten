// @flow
import styled from 'styled-components'
import {
  space,
  width,
  color,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignSelf,
  borderRadius,
  borderColor,
  borderWidth,
  boxShadow,
} from 'styled-system'
import {gridArea} from '../utils/styled'
import {withDynamicTag} from './DynamicTag'

const Box = styled.div`
  ${space}
  ${width}
  ${color}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${alignItems}
  ${alignSelf}
  ${borderRadius}
  ${borderColor}
  ${borderWidth}
  ${boxShadow}
  ${gridArea}

  display: flex;
`
export default withDynamicTag(Box)