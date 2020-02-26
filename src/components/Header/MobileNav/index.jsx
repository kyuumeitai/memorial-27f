import React from 'react'
import { StMobileNav, StLink, StLine } from './style.css'

const MobileNav = ({posts, active, handleToggleMenu }) => {

  const MenuItem = ({ post, delay }) => {
    const { slug, title } = post

    return (
      <>
        <StLink to={`/${slug}/`} delay={delay}>
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </StLink>
        <StLine />
      </>
    )
  }

  const handleClick = () => {
    handleToggleMenu(false)
  }

  const ArrPosts = () => (
    <>
      {
        posts.map((post, index) => {
          return (
            <MenuItem post={post} key={index} delay={`${index * 0.1}s`} onClick={() => handleClick()} />
          )
        })
      }
    </>
  )

  return (
    <StMobileNav opened={active}>
      {
        <ArrPosts />
      }
    </StMobileNav>
  )
}

export default MobileNav
