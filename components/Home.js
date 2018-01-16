// @flow
import * as React from 'react'

import Box from '../components/Box'
import ArticleHeading from '../components/ArticleHeading'
import LargeText from '../components/LargeText'
import Link from '../components/Link'

type Props = {}

export default class extends React.Component<Props> {
  render() {
    const {props} = this
    return (
      <Box flexDirection="column" {...props}>
        <ArticleHeading>Find any certified gluten free product</ArticleHeading>
        <LargeText>
          The Gluten Project is the first and only place to search through the entire list
          of certified gluten free products.{' '}
        </LargeText>
        <LargeText>
          This project is for you, so please tell us what is not working, what you need,
          and what you want!
        </LargeText>

        <ArticleHeading>Popular Searches</ArticleHeading>
        <LargeText>
          <Box flexDirection="column">
            <Link href="/certified-gluten-free-coffee">Coffee</Link>
            <Link href="/certified-gluten-free-oats">Oats</Link>
            <Link href="/certified-gluten-free-probiotics">Probiotics</Link>
            <Link href="/certified-gluten-free-vitamins">Vitamins</Link>
            <Link href="/certified-gluten-free-spices">Spices</Link>
          </Box>
        </LargeText>
      </Box>
    )
  }
}