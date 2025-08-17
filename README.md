# BitMEX WebSocket Data & State Management Presentation

An interactive presentation built with React and Spectacle covering BitMEX WebSocket data types, operations, and state management strategies.

## 🚀 Live Demo

**View the presentation at:** https://byshing.github.io/bitmex-websocket-presentation


## 📋 Deployment to GitHub Pages

### Quick Setup:

1. **Deploy**
   - Push to the `main` branch - GitHub Actions will automatically build and deploy
   - Or run `npm run deploy` for manual deployment

### Manual Deployment
```bash
# Build and deploy manually
npm run build
npm run deploy
```

## Overview

This presentation covers:

1. **Introduction to BitMEX WebSocket**
   - Real-time data streaming concepts
   - Connection setup and basic usage

2. **WebSocket Data Operation Types**
   - PARTIAL: Initial data snapshots
   - INSERT: Adding new records
   - UPDATE: Modifying existing data
   - DELETE: Removing records
   - Detailed explanation of PARTIAL message fields

3. **Different Types of Data Feeds**
   - Infinite Insert Feeds (executions, trades)
   - State Update Feeds (positions, margins)
   - Order Book Feeds (mixed operations)

## Technology Stack

- **React 19**: Modern React with latest features
- **Vite**: Fast build tool and development server
- **Spectacle**: React-based presentation framework
- **Styled Components**: CSS-in-JS for styling
- **Prism.js**: Syntax highlighting for code examples

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build
npm run preview
```

The presentation will be available at `http://localhost:5173`

## Features

### Interactive Presentation
- **Spectacle-powered slides**: Professional presentation framework
- **Keyboard navigation**: Arrow keys, space bar for navigation
- **Responsive design**: Works on desktop and mobile devices
- **Syntax-highlighted code**: JavaScript and JSON examples
- **Visual diagrams**: Operation flow and feed type illustrations

### Live Demo
- **Simulated WebSocket connection**: See concepts in action
- **Real-time logging**: Watch message flow
- **Sample messages**: Examples of all operation types
- **Statistics tracking**: Message counts and timing

## Navigation

### Presentation Mode
- **Arrow Keys**: Navigate between slides
- **Space**: Next slide
- **Escape**: Exit fullscreen (browser dependent)

### Demo Mode
- Click "Live Demo" button to switch to interactive demo
- Click "Back to Presentation" to return to slides

## Presentation Structure

The presentation includes these sections:

1. **Title Slide**: Introduction and overview
2. **WebSocket Basics**: Connection setup and concepts
3. **Operation Types**: Deep dive into PARTIAL, INSERT, UPDATE, DELETE
4. **PARTIAL Fields**: Understanding message structure
5. **Feed Patterns**: Different data stream types
6. **Implementation**: Practical code examples
7. **Best Practices**: Production guidelines
8. **Conclusion**: Q&A and wrap-up

## Customization

### Adding New Slides
Edit `src/App.jsx` and add new `<Slide>` components within the `<Deck>`:

```jsx
<Slide backgroundColor="tertiary">
  <Heading color="primary" size={3}>Your Title</Heading>
  <Text color="secondary">Your content</Text>
</Slide>
```

### Styling
- Theme colors are defined in the `theme` object in `src/App.jsx`
- Custom styling can be added using Spectacle's built-in components
- Styled Components are used for the Demo section

### Code Examples
Use Spectacle's `<CodePane>` component for syntax-highlighted code:

```jsx
<CodePane language="javascript" theme="dark" fontSize="14px">
{`your code here`}
</CodePane>
```

## File Structure

```
src/
├── App.jsx              # Main application with Spectacle presentation
├── App.css              # Global styles
├── main.jsx             # React entry point
└── components/
    └── Demo.jsx          # Interactive demo component
```

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- Mobile browsers: Responsive design included

## Development

### Adding Dependencies
```bash
npm install package-name
```

### Linting
```bash
npm run lint
```

### Building
```bash
npm run build
```

## Resources

- [Spectacle Documentation](https://formidable.com/open-source/spectacle/)
- [Vite Documentation](https://vitejs.dev/)
- [BitMEX WebSocket API Documentation](https://www.bitmex.com/app/wsAPI)
- [React Documentation](https://react.dev/)

## License

This presentation is provided as-is for educational purposes.
