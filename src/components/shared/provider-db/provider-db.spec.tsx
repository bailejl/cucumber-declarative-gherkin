import React from 'react'
import { render } from '@testing-library/react'

import ProviderDb from './provider-db'

describe('ProviderDb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProviderDb>
        <div>Test</div>
      </ProviderDb>
    )
    expect(baseElement).toBeTruthy()
  })
})
