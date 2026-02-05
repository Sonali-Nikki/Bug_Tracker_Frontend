# 🐛 Bug Tracker 

Frontend UI for a Jira-like Bug & Issue Tracking System.
Enables teams to manage projects, report bugs, and collaborate using a Kanban board.

---

## 🎯 Features

- User registration & login
- Protected dashboard layout
- Project creation & selection
- Bug / Issue creation & editing
- Kanban board with drag-and-drop
- Issue filtering & search
- Comment threads on issues
- Role-based UI actions
- Fully responsive design

---

## 🧰 Tech Stack

- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- react-beautiful-dnd
- JWT-based auth

---

## 📁 Folder Structure

```txt
client/
│── components/
│   ├── TicketForm.jsx
│   ├── KanbanBoard.jsx
│   ├── TicketFilters.jsx
│   ├── EditTicketModal.jsx
│   └── Comments.jsx
│
│── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Projects.jsx
│   └── Ticket.jsx
│
│── layouts/
│   └── DashboardLayout.jsx
│
│── App.jsx
│── main.jsx
│── index.css
````

---

## 🔐 Environment Variables

Create a `.env` file in `client/`:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## ▶️ Run Frontend Locally

```bash
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔁 API Usage

All API requests use:

```js
import.meta.env.VITE_API_URL
```

Example:

```js
axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
```

---

## 📱 Responsive Design

* Mobile & desktop friendly
* Tailwind responsive utilities
* Optimized Kanban UX

---

## 🌍 Deployment

* Frontend deployed on **Vercel / Netlify**
* Connected to live backend
* Environment variables secured

---

## 👩‍💻 Author

**Sonali Priyardarshini**

```

