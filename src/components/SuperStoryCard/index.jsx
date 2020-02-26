import React, {useEffect, useReducer} from 'react'
import get from 'lodash/get'
import { Waypoint } from 'react-waypoint'
import StoryCard from '@/components/StoryCard'
import HeroPhoto from '@/components/VideoHero/HeroPhoto'
import { StSuperStoryCard } from './style.css'
import { StLink } from '@/components/StoryCard/style.css'
import {Sticky, ContainerPhotos, ContainerTitle} from '@/components/VideoHero/style.css'

const SuperStoryCard = ({ post }) => {
  return (
    <StLink to={`/${post.slug}`}>
      <StSuperStoryCard>
        <StoryCard post={post}></StoryCard>
      </StSuperStoryCard>
    </StLink>
  )
}

export default SuperStoryCard