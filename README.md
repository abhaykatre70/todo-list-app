<div align="center">

# 📝 Smart To-Do List Application

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&pause=1000&color=667EEA&center=true&vCenter=true&width=500&lines=Organize+Your+Tasks;Smart+%26+Efficient;Beautiful+Design" alt="Typing SVG" />

<p>
  <img src="https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Version-2.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
</p>

<h3>A modern task management app with priorities, categories, and smart filtering</h3>

🚀<a href="https://abhaykatre70.github.io/todo-list-app/"><strong>Live Demo</strong></a>

</div>

---

## ✨ Features

- ➕ **Add/Edit/Delete Tasks** - Full CRUD operations
- ✅ **Mark Complete** - Track progress with checkbox
- 🎯 **Priority Levels** - High (Red), Medium (Orange), Low (Green)
- 📁 **Categories** - Personal, Work, Shopping, Health, Study, Other
- 📅 **Smart Dates** - Due dates with "Today", "Tomorrow", "Overdue" display
- 🔍 **6 Filters** - All, Pending, Completed, Today, This Week, High Priority
- 📊 **Live Statistics** - Real-time task counters
- 🎨 **Beautiful UI** - Gradient design with smooth animations
- 📱 **Responsive** - Works perfectly on mobile and desktop
- 💾 **Data Persistence** - Tasks saved with localStorage
- 🔒 **Secure** - XSS protection with input sanitization

---

## 🔄 Version 2.0 Release

### 🆕 What's New

**Frontend Improvements (Abhay):**
- ✅ **Mobile Responsive Design** - Optimized for all devices
  - Desktop (default)
  - Tablet (768px breakpoint)
  - Mobile (600px breakpoint)
  - Small Mobile (400px breakpoint)
- ✅ **Improved Typography** - Increased font sizes (16-17px base)
- ✅ **Semantic HTML5** - Better structure with ARIA labels
- ✅ **Accessibility** - Enhanced for screen readers and keyboard navigation

**Backend Improvements (Keshav):**
- ✅ **LocalStorage Support** - Tasks persist across browser sessions
- ✅ **Smart Task Sorting** - Auto-sort by priority and due date
- ✅ **Delete Confirmations** - Prevents accidental deletions
- ✅ **XSS Protection** - Secure HTML escaping for user input
- ✅ **Auto-save** - Automatic saving every 30 seconds
- ✅ **Keyboard Shortcuts** - Enter to add, Escape to cancel edit

**UI/UX Improvements (Keshav):**
- ✅ **Design Documentation** - Complete UI/UX specifications in PDF
- ✅ **Color Scheme** - Professional purple gradient theme
- ✅ **Smooth Animations** - Enhanced user interactions
- ✅ **Visual Feedback** - Clear hover states and transitions

**Workflow Improvements:**
- 🌳 Clean branch structure (frontend, backend, ui-ux, testing)
- 📝 Standardized commit messages (feat:/fix:/style:/docs:)
- 🔀 Pull Request workflow with mandatory code reviews
- 👥 Clear role separation between team members
- 📊 Complete documentation and analysis

### 📊 Git Workflow Demonstration

This project demonstrates professional Git collaboration:

**Branches Maintained:**
- `main` - Production-ready code (protected)
- `frontend` - Abhay's HTML/CSS work
- `backend` - Keshav's JavaScript work
- `ui-ux` - Keshav's design work
- `testing` - QA and testing (both members)

**No branches deleted** - All role-based branches preserved for portfolio demonstration.

**Pull Requests:** 3+ merged with code reviews

**Total Commits:** 15+ with proper formatting

### 🎯 Version 2 Goals Achieved

- [x] Mobile-first responsive design
- [x] Data persistence with localStorage
- [x] Improved font sizes and readability
- [x] Better accessibility (WCAG compliant)
- [x] Proper Git branching strategy
- [x] Pull Request workflow
- [x] Code review process
- [x] Clear documentation
- [x] No branch deletion policy
- [x] Professional commit messages

---

## 🎨 Design Documentation

### UI/UX Design Process

The application's visual design was created by Keshav following modern web design principles.

**Design Resources:**
- 📄 `UI-UX-Design.pdf` - Complete design mockups and screenshots
- 📝 `DESIGN.md` - Design specifications and guidelines

**View Design Work:**
```bash
# See the design PDF
open UI-UX-Design.pdf  # Mac
start UI-UX-Design.pdf  # Windows
```

The designs showcase:
- Desktop layout mockups
- Mobile responsive designs
- Color palette specifications
- Typography guidelines
- Component designs
- Output screenshots

All designs have been implemented in the final application.

---

## 🛠️ Technologies

<div align="center">

| HTML5 | CSS3 | JavaScript |
|:-----:|:----:|:----------:|
| Semantic Structure | Styling & Animations | Logic & Functionality |

</div>

**Key Concepts:** Flexbox, Grid Layout, ES6+, DOM Manipulation, Event Handling, Responsive Design, localStorage API, Accessibility

---

## 👥 Team

<div align="center">

| <img src="https://github.com/abhaykatre70.png" width="100" style="border-radius:50%"><br>**Abhay Katre**<br><sub>Frontend Developer & Project Manager</sub><br>[GitHub](https://github.com/abhaykatre70) | <img src="https://ui-avatars.com/api/?name=Keshav&size=100&background=764ba2&color=fff" width="100" style="border-radius:50%"><br>**Keshav**<br><sub>UI/UX Designer & Backend Developer</sub><br>[GitHub](https://github.com/Keshavcs23046) |
|:---:|:---:|

</div>

**Version 2 Contributions:**

**Abhay (Frontend Branch):**
- HTML5 semantic structure with ARIA labels
- Mobile responsive CSS (3 breakpoints)
- Font size optimization for readability
- Cross-browser compatibility
- Project documentation and coordination
- README and workflow documentation

**Keshav (Backend + UI-UX Branches):**
- JavaScript functionality and logic
- LocalStorage implementation
- Task sorting algorithms
- Delete confirmations and validations
- XSS protection and security
- UI/UX design documentation (PDF)
- CSS animations and transitions
- Code review and testing

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/abhaykatre70/todo-list-app.git

# Navigate to folder
cd todo-list-app

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**No dependencies required!** Just open `index.html` in your browser.

---

## 📖 Usage

### Adding a Task
1. Type task name (max 200 characters)
2. Select priority (Low/Medium/High)
3. Choose category
4. Pick due date (optional)
5. Click "Add Task" or press `Enter`

### Managing Tasks
- **Complete:** Click checkbox
- **Edit:** Click Edit button (or double-click task)
- **Delete:** Click Delete button (confirmation required)
- **Filter:** Use filter buttons at top
- **Cancel Edit:** Press `Escape` key

### Data Persistence
- Tasks automatically save to localStorage
- Auto-save every 30 seconds
- Data persists across browser sessions
- Close and reopen browser - tasks remain!

---

## 📂 Project Structure

```
todo-list-app/
├── index.html           # HTML structure
├── style.css            # All styling & responsive design
├── script.js            # JavaScript logic & localStorage
├── README.md            # Documentation
├── LICENSE              # MIT License
├── analysis             # Project analysis (Version 2)
├── WORKFLOW.md          # Git workflow documentation
├── DESIGN.md            # UI/UX design specifications
└── UI-UX-Design.pdf     # Design mockups & screenshots
```

---

## 🔄 Git Workflow (Version 2)

### Branch Structure

```
main (protected)
├── frontend (Abhay - HTML & CSS)
├── backend (Keshav - JavaScript)
├── ui-ux (Keshav - Design)
└── testing (Both - QA)
```

### Workflow Process

1. **Feature Development** - Work in respective branches
2. **Commit Standards** - Use conventional commit messages
3. **Pull Requests** - Create PR to main branch
4. **Code Review** - Team member reviews and approves
5. **Merge** - Merge to main after approval
6. **Sync Branches** - Update all branches with main

### Collaboration Highlights

✅ **15+ Commits** with proper formatting  
✅ **3+ Pull Requests** with code reviews  
✅ **5 Active Branches** (no deletion)  
✅ **Role-based Development** with clear separation  
✅ **Proper Documentation** throughout process  
✅ **Version Tagging** (v1-backup, v2.0)  

### Commit Message Format

```
<type>: <description>

Types:
- feat: New feature
- fix: Bug fix
- style: CSS/design changes
- docs: Documentation
- refactor: Code refactoring
- test: Testing
```

**Examples:**
```bash
feat: implement localStorage for task persistence
fix: resolve mobile layout overflow issue
style: increase font sizes for readability
docs: update README with Version 2 features
```

---

## 🎓 Skills Demonstrated

**Web Development:**
- HTML5 semantic structure
- CSS3 advanced features (Grid, Flexbox, Animations)
- JavaScript ES6+ (Arrow functions, Destructuring, Template literals)
- Responsive design (Mobile-first approach)
- localStorage API
- DOM manipulation
- Event handling
- Accessibility (ARIA labels, keyboard navigation)

**Git & GitHub:**
- Branch management strategy
- Pull Request workflow
- Code review process
- Merge conflict resolution
- Conventional commits
- Team collaboration
- Version tagging
- Documentation

**Project Management:**
- Role assignment
- Task distribution
- Timeline management
- Documentation maintenance
- Quality assurance

---

## 🧪 Testing

### Testing Branch Workflow

All features are thoroughly tested on the `testing` branch before merging to `main`.

**Test Coverage:**
- ✅ Add/Edit/Delete operations
- ✅ Task completion toggle
- ✅ All 6 filter options
- ✅ LocalStorage persistence
- ✅ Mobile responsiveness (375px, 768px, 1024px)
- ✅ Cross-browser compatibility (Chrome, Firefox, Safari)
- ✅ Keyboard shortcuts (Enter, Escape)
- ✅ Input validation and security
- ✅ Delete confirmations
- ✅ Auto-save functionality

**How to Test:**
```bash
# Switch to testing branch
git checkout testing

# Open application
open index.html

# Run through all features
# Test on different screen sizes
# Test in different browsers
```

---

## 🔮 Future Enhancements

- 🌙 Dark mode toggle
- 🔍 Search functionality
- 📤 Export tasks to CSV/JSON
- 🏷️ Custom tags and labels
- 🔄 Drag-and-drop reordering
- ☁️ Cloud sync (Firebase)
- 👤 User accounts
- 📝 Task notes/descriptions
- 🔔 Task notifications
- 📊 Progress analytics

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) file for details.

---

## 📞 Contact

<div align="center">

**Abhay Katre** - [GitHub](https://github.com/abhaykatre70) | **Keshav** - [GitHub](https://github.com/Keshavcs23046)

**Repository:** [https://github.com/abhaykatre70/todo-list-app](https://github.com/abhaykatre70/todo-list-app)

⭐ **Star this repo if you like it!**

---

<sub>Built with ❤️ by Abhay & Keshav | October 2025 | Version 2.0</sub>

</div>