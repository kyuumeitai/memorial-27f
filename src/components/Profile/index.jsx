import React from 'react'
import { StProfile } from './style.css'

const Profile = ({person}) => {
  const { nombres, apellidos, edad, comuna, causadefallecimiento, region, testimonio, nombredelfamiliar } = person
  return (
    <StProfile>
      <h1>{nombres} {apellidos}</h1>
      <h3>{edad}</h3>
      <h3>{comuna}, {region}</h3>
      <h3>{causadefallecimiento}</h3>
      {testimonio && (
        <>
          <p>{testimonio}</p>
          {
            nombredelfamiliar && (
              <p>{nombredelfamiliar}</p>
            )
          }
        </>
      )}
    </StProfile>
  )
}

export default Profile