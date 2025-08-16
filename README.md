# UI Components Library

A modern React component library built with TypeScript and Storybook.

## 🌟 **Live Demo**
### 👉 **[View Components Library](https://68a095e666964889d14143db-fqhuflqkfh.chromatic.com/)** 👈

> **Explore all components, variants, and interactive features in our hosted Storybook!**

---

## 🏗️ Architecture Overview

```mermaid
graph TB
    A[UI Components Library] --> B[Components]
    A --> C[Storybook]
    A --> D[TypeScript]
    A --> E[Tailwind CSS]
    
    B --> F[InputField]
    B --> G[Future Components]
    
    F --> H[Variants]
    F --> I[Sizes]
    F --> J[States]
    F --> K[Features]
    
    H --> L[Filled]
    H --> M[Outlined]
    H --> N[Ghost]
    
    I --> O[Small]
    I --> P[Medium]
    I --> Q[Large]
    
    J --> R[Default]
    J --> S[Disabled]
    J --> T[Invalid]
    J --> U[Loading]
    
    K --> V[Password Toggle]
    K --> W[Clear Button]
    K --> X[Dark Theme]
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
git clone https://github.com/yourusername/UI-ForProjects.git
cd UI-ForProjects
npm install
```

### Development
```bash
# Start Storybook
npm run storybook

# Build components
npm run build

# Run tests
npm test
```

## 📦 Components

### InputField
A versatile input component with multiple variants and states.

**Features:**
- Multiple variants (filled, outlined, ghost)
- Size options (sm, md, lg)
- Interactive states (disabled, invalid, loading)
- Password toggle and clear functionality
- Dark theme support

## 🔄 Development Workflow

```mermaid
flowchart LR
    A[Design] --> B[Develop Component]
    B --> C[Create Stories]
    C --> D[Test Locally]
    D --> E[Deploy to Chromatic]
    E --> F[Review & Iterate]
    F --> B
    
    style A fill:#e1f5fe
    style E fill:#f3e5f5
    style F fill:#e8f5e8
```

## 🎨 Design System

```mermaid
mindmap
  root((Design System))
    Colors
      Primary
      Secondary
      Error
      Success
    Typography
      Font Family
      Font Sizes
      Font Weights
    Spacing
      Padding
      Margin
      Gap
    Components
      InputField
        Variants
        Sizes
        States
    Themes
      Light Mode
      Dark Mode
```

## 🏁 Component State Flow

```mermaid
stateDiagram-v2
    [*] --> Default
    Default --> Focused: User focuses
    Default --> Disabled: disabled prop
    
    Focused --> Typing: User types
    Focused --> Default: User blurs
    
    Typing --> Valid: Valid input
    Typing --> Invalid: Invalid input
    Typing --> Default: User blurs
    
    Valid --> Default: User blurs
    Invalid --> Default: User blurs
    Invalid --> Valid: User corrects
    
    Disabled --> [*]: Component unmounted
```

Built with accessibility and consistency in mind, following modern UI patterns.

## 📖 Documentation & Demo
- **Live Components**: [Chromatic Storybook](https://68a095e666964889d14143db-fqhuflqkfh.chromatic.com/)
- **Interactive Examples**: Try all variants and states
- **Design Tokens**: Consistent spacing, colors, and typography

## 🛠️ Development Approach
- Component-driven development
- TypeScript for type safety
- Accessibility-first design
- Customizable theming system
- Comprehensive testing with Storybook

## 📁 Project Structure

```mermaid
graph TD
    A[UI-ForProjects/] --> B[src/]
    A --> C[.storybook/]
    A --> D[public/]
    A --> E[package.json]
    A --> F[README.md]
    
    B --> G[components/]
    B --> H[styles/]
    B --> I[utils/]
    
    G --> J[InputField.tsx]
    G --> K[InputField.stories.tsx]
    G --> L[index.ts]
    
    C --> M[main.ts]
    C --> N[preview.ts]
    
    style A fill:#f9f9f9
    style G fill:#e3f2fd
    style C fill:#fff3e0
```