# Aether Studio - Architecture & Engineering Guide

This document outlines the technical stack, design patterns, and engineering principles of the Aether Studio platform.

## Technology Stack
- **Core Engine**: HTML5 / CSS3 / ES6+ JavaScript
- **View Layer**: React 18 (Standalone Development Engine via CDN)
- **Compilation**: Babel Standalone (Live in-browser JSX parsing)
- **Styling Paradigm**: Fluid Glassmorphic Vanilla CSS (No bulky utility frameworks)

## Design Architecture
Aether Studio follows a component-driven micro-architecture. All interface segments are decomposed into modular React sub-components defined within pp.js and styled natively in style.css.
