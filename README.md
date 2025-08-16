# BitMEX WebSocket Data & State Management Presentation

An interactive presentation built with Reveal.js covering BitMEX WebSocket data types, operations, and state management strategies.

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

## How to Use

### Option 1: Open Directly in Browser
Simply open `index.html` in your web browser. The presentation uses CDN links for all dependencies.

### Option 2: Local Server (Recommended)
For better performance and to avoid CORS issues:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Navigation

- **Arrow Keys**: Navigate between slides
- **Space**: Next slide
- **ESC**: Overview mode
- **F**: Fullscreen mode
- **S**: Speaker notes (if available)

## Presentation Structure

The presentation is organized into the following sections:

1. **Title Slide**: Introduction
2. **WebSocket Overview**: Basic concepts and connection setup
3. **Data Operations**: Deep dive into PARTIAL, INSERT, UPDATE, DELETE
4. **Feed Types**: Different patterns of data streams
5. **Implementation Example**: Complete code example
6. **Best Practices**: Guidelines for production use
7. **Q&A**: Discussion section

## Key Features

- **Interactive Code Examples**: Syntax-highlighted JavaScript and JSON
- **Visual Data Flow**: Diagrams showing operation sequences
- **Practical Implementation**: Real-world code patterns
- **Responsive Design**: Works on desktop and mobile devices

## Customization

The presentation can be easily customized:

- **Themes**: Change the theme by modifying the CSS link in the `<head>` section
- **Transitions**: Modify the `transition` setting in the JavaScript initialization
- **Content**: Add or remove slides by editing the HTML structure
- **Styling**: Custom CSS is included in the `<style>` section

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- Mobile browsers: Responsive design included

## Additional Resources

- [Reveal.js Documentation](https://revealjs.com/)
- [BitMEX WebSocket API Documentation](https://www.bitmex.com/app/wsAPI)
- [BitMEX REST API Documentation](https://www.bitmex.com/api/explorer/)

## License

This presentation is provided as-is for educational purposes.
