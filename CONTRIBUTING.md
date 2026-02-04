# Contributing to notedQu.id

First off, thank you for considering contributing to notedQu.id! 🎉

## How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Browser and OS** information

### Suggesting Features 💡

Feature suggestions are welcome! Please:

- **Check existing feature requests** first
- **Clearly describe** the feature and its benefits
- **Explain use cases** and how it fits the project vision
- **Consider alternatives** you've thought about

### Pull Requests 🔧

1. **Fork** the repository
2. **Create a branch** from `main` (e.g., `feature/amazing-feature`)
3. **Make your changes**:
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed
4. **Test thoroughly**:
   - Test on different browsers
   - Test responsive design
   - Ensure no console errors
5. **Commit** with clear messages (e.g., "Add dark mode toggle")
6. **Push** to your fork
7. **Open a Pull Request** with:
   - Description of changes
   - Screenshots/videos if UI changes
   - Related issue number (if any)

## Code Style Guidelines

### React/JavaScript
- Use **functional components** with hooks
- Use **const** for components and functions
- Follow **camelCase** naming convention
- Keep components **small and focused**
- Use **destructuring** for props

### CSS/Tailwind
- Use **Tailwind utilities** first
- Only add custom CSS when necessary
- Follow **iOS design principles** (clean, minimal)
- Maintain **consistent spacing**

### File Organization
- One component per file
- Group related utilities in `/lib`
- Keep components in `/components`

## Commit Message Format

```
<type>: <description>

[optional body]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat: Add dark mode toggle
fix: Resolve auto-save timing issue
docs: Update README with new features
```

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing Checklist

Before submitting a PR, ensure:

- [ ] Code runs without errors
- [ ] UI looks good on mobile, tablet, desktop
- [ ] Browser compatibility (Chrome, Firefox, Safari)
- [ ] Animations are smooth (60fps)
- [ ] No console warnings/errors
- [ ] Documentation updated if needed
- [ ] Follows iOS design principles

## Questions?

Feel free to open an issue for questions or discussions!

---

Thank you for contributing! 🙏
