import type { Preview } from '@storybook/nextjs-vite'

// @ts-expect-error: CSS side-effect import for Storybook preview
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
