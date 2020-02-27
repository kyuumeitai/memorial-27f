import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Container, StLogo } from './style.css'
import { LaterceraWhite } from '@labcon/copesa-logos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStaticQuery, graphql } from 'gatsby'
import MobileNav from './MobileNav'
import Switch from '@/components/Switch'

const Header = ({ sponsorLogo, isOn, handleToggle }) => {
	const res = [
		{
			slug: '/public',
			title: 'test'
		}
	]
	const [menu, updateMenu] = useState(false)
	return (
		<>
			<Container>
				<div className="col">
					<div className="menu-button" onClick={() => updateMenu(!menu)}>
						{
							menu ? (
								<FontAwesomeIcon icon={['fas', 'times']} />
							) : (
									<FontAwesomeIcon icon={['fas', 'bars']} />
								)
						}
					</div>
				</div>
				<div className="col">
					<Link to="/" className="slotSite">
						<StLogo>
							<LaterceraWhite />
						</StLogo>
					</Link>
				</div>
				<div className="col">
					{/* <Switch isOn={isOn} handleToggle={handleToggle} /> */}
				</div>
			</Container>
			<MobileNav posts={res} active={menu} handleToggleMenu={(val) => updateMenu(val)}  />
		</>
	)
}

export default Header
