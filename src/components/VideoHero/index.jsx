import React, {useEffect, useReducer} from 'react'
import get from 'lodash/get'
import { Container, ContainerSticky, ContainerPhotos, ContainerTitle, ContainerPhrases, ContainerPhrase, Sticky, Title, Credits, IconScroll} from './style.css'
import { Waypoint } from 'react-waypoint'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import HeroTitle from './HeroTitle'
import HeroPhoto from './HeroPhoto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = ({post, home}) => {
	const frases = get(post, 'acf.frases')
	const imagenes = get(post, 'acf.imagenes_inicio')
	const author = get(post, 'acf.autor')

	const reducer = (state, action) => {
		switch (action.type) {
			case 'ADD_IMAGE':
				return {
					...state,
					images: [...state.images, action.image]
				}
			case 'CHANGE_ACTIVEPHRASE':
				return {
					...state,
					activePhrase: action.index
				}
			case 'CHANGE_AMOUNT':
				return {
					...state,
					changeAmount: action.amount
				}
			case 'CHANGE_ALL_IMAGES':
				return {
					...state,
					images: state.images.map(image => {
						return {
							...image,
							hidden: action.hide
						}
					})
				}
			case 'CHANGE_VISIBILITY':
				return {
					...state,
					images: [
						...state.images.map(item =>
							item.id === action.image.id
								? {...item, hidden: action.hide}
								: item
						)
					]
				}
			case 'SHOW_TITLE':
				return {
					...state,
					showTitle: action.showTitle
				}
			default:
				return state
		}
	}

	const initialState = {
		activePhrase: 0,
		changeAmount: 0,
		showTitle: false,
		images: []
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	const addImage = (image) => {
		dispatch({ type: 'ADD_IMAGE', image })
	}

	const changeVisibility = (image, hide) => {
		dispatch({ type: 'CHANGE_VISIBILITY', image, hide })
	}

	const showTitle = (showTitle) => {
		dispatch({ type: 'SHOW_TITLE', showTitle })
	}

	const setImageToChange = (hide) => {
		const posibleImages = state.images.filter((image) => image.hidden !== hide)
		const item = state.images[Math.floor(Math.random() * posibleImages.length)]
		changeVisibility(item, true)
	}

	const changeGroupVisibility = (hide) => {
		Array(state.changeAmount).fill().forEach((_, i) => {
			setImageToChange(hide)
		})
	}

	const changeActivePhrase = (index) => {
		dispatch({ type: 'CHANGE_ACTIVEPHRASE', index })
		try{
			trackCustomEvent({
				category: 'interaction',
				action: 'scroll',
			})
		} catch(err){
			console.log(err)
		}

		changeGroupVisibility(true)
	}

	const changeAmount = (amount) => {
		dispatch({ type: 'CHANGE_AMOUNT', amount })
	}

	const changeAllImages = (hide) => {
		dispatch({ type: 'CHANGE_ALL_IMAGES', hide })
	}

	useEffect(() => {
		imagenes.map((imageurl, index) =>
			addImage({
				url: imageurl,
				id: index,
				hidden: true,
				order: 0
			})
		)
		changeAmount(Math.round(imagenes.length / (frases.length - 1)))
		changeAllImages(false)
	}, [])

	return (
		<Container>
			{
				frases && (
					<ContainerPhrases>
						{
							frases.map((frase, fraseindex) => {
								return (
									<ContainerPhrase key={fraseindex}>
										<Waypoint onEnter={() => fraseindex === 0 ? changeAllImages(false) : changeActivePhrase(fraseindex)} onLeave={() => frases.length === fraseindex + 1 ? showTitle(true) : null}>
											<div>
												<HeroTitle frase={frase.frase} delayed={ fraseindex === 0 ? true : false }></HeroTitle>
											</div>
										</Waypoint>
									</ContainerPhrase>
								)
							})
						}
						<Waypoint onEnter={() => changeAllImages(true)}>
							<ContainerPhrase></ContainerPhrase>
						</Waypoint>
					</ContainerPhrases>
				)
			}

			{
				frases && (
					<ContainerSticky phraseLength={frases.length}>
						<Sticky>
							{
								state.images && (
									<ContainerPhotos>
										{
											state.images.map((item, index) => {
												return (
													<HeroPhoto image={item.url} key={index} photoid={item.id} hiddenPhoto={item.hidden} />
												)
											})
										}
									</ContainerPhotos>
								)
							}

							<ContainerTitle>
								<div className="ContainerTitle">
									<Title showTitle={state.showTitle} home={home}>
										<h2>{post.title}</h2>
										{
											author && (
												<Credits>
													<p className="author">por: <strong>{ author }</strong></p>
												</Credits>
											)
										}
									</Title>
								</div>
							</ContainerTitle>
						</Sticky>
					</ContainerSticky>
				)
			}
			<IconScroll>
				<span>scroll</span>
				<FontAwesomeIcon className="icon" icon={['fas', 'chevron-down']} />
			</IconScroll>

		</Container>
	)
}

export default Hero
