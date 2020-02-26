import React from "react"
import GetByWPID from '@/queries/GetByWPID'
import {StRelatedBg, StRelatedWrap, StRelatedHeader} from './style.css'
import RelatedPost from './RelatedPost'

const Related = ({ relacionados }) => {
  return (
    <StRelatedBg>
      <StRelatedHeader>
        <h3>Temas relacionados:</h3>
      </StRelatedHeader>
      <StRelatedWrap>
        {
          relacionados.map((wpid, index) => {
            const subpost = GetByWPID(wpid)

            return (
              <RelatedPost key={index} subpost={subpost} />
            )
          })
        }
      </StRelatedWrap>
    </StRelatedBg>
  )
}

export default Related