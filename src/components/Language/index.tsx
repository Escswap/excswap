
import i18next from 'i18next'
import React, { useRef } from 'react'
// import { Info, BookOpen, Code, PieChart, MessageCircle } from 'react-feather'
import styled from 'styled-components'
import { ReactComponent as LangIcon } from '../../assets/images/lang.svg'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import useToggle from '../../hooks/useToggle'

// import { ExternalLink } from '../../theme'

const StyledLangIcon = styled(LangIcon)`
  path {
    stroke: ${({ theme }) => theme.text1};
  }
`

const StyledLangButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledLang = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const LangFlyout = styled.span`
  min-width: 8.125rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;
`

// const LangItem = styled(ExternalLink)`
//   flex: 1;
//   padding: 0.5rem 0.5rem;
//   color: ${({ theme }) => theme.text2};
//   :hover {
//     color: ${({ theme }) => theme.text1};
//     cursor: pointer;
//     text-decoration: none;
//   }
//   > svg {
//     margin-right: 8px;
//   }
// `

const ToggleMenuItem = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
`


export default function Lang() {
  const node = useRef<HTMLDivElement>()
  const [open, toggle] = useToggle(false)

  useOnClickOutside(node, open ? toggle : undefined)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledLang ref={node as any}>
      <StyledLangButton onClick={toggle}>
        <StyledLangIcon />
      </StyledLangButton>
      {open && (
        <LangFlyout>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('de')}>
          Deutsch
          </ToggleMenuItem>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('en')}>
          English
          </ToggleMenuItem>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('esar')}>
          Spanish-ar
          </ToggleMenuItem>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('esus')}>
          Spanish-us
          </ToggleMenuItem>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('itit')}>
          Italian
          </ToggleMenuItem>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('iw')}>
          Hebrew
          </ToggleMenuItem>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('ro')}>
          Rom??n??
          </ToggleMenuItem>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('ru')}>
          ??????????????
          </ToggleMenuItem>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('vi')}>
          Ti???ng Vi???t
          </ToggleMenuItem>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('zhcn')}>
          ????????????
          </ToggleMenuItem>
          <ToggleMenuItem onClick={()=>i18next.changeLanguage('zhtw')}>
          ????????????
          </ToggleMenuItem>
        </LangFlyout>
      )}
    </StyledLang>
  )
}
