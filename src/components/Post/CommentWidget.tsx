import styled from '@emotion/styled'
import React, { createRef, FunctionComponent, useEffect } from 'react'

const src = 'https://utteranc.es/client.js'
const repo = 'COYO-HM/COYO-HM.github.io' // 자신 계정의 레포지토리로 설정

interface IUtterancesAttributesType {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const UtterancesWrapper = styled.div`
  margin: 0 240px 0 50px;
  @media (max-width: 768px) {
    margin: 0 20px;
  }
`

const CommentWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: IUtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return <UtterancesWrapper ref={element} />
}

export default CommentWidget
