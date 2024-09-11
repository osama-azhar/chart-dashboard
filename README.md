# Next.js and Django Fullstack Application

This project is a fullstack web application that integrates a Next.js frontend with a Django backend. The frontend displays various charts (Candlestick, Line, Bar, and Pie charts) using data fetched from Django API endpoints.

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment inside the backend directory:

```bash
python -m venv venv
```

Activate the virtual environment:

- On macOS/Linux:
  ```bash
  source venv/bin/activate
  ```
- On Windows:
  ```bash
  venv\Scripts\activate
  ```

Install the required Python dependencies:

```bash
pip install -r requirements.txt
```

Run the Django development server:

```bash
python manage.py runserver
```

This will start the Django backend server on http://localhost:8000/.

### 3. Frontend Setup

Open a new terminal and navigate to the root of the project directory.

Install the required frontend dependencies:

```bash
npm install
```

Run the Next.js development server:

```bash
npm run dev
```

This will start the frontend server on http://localhost:3000/.

### 4. Running the Application

- Backend: Open a terminal in the backend directory and run:
  ```bash
  python manage.py runserver
  ```
- Frontend: In another terminal, run the frontend from the root directory:
  ```bash
  npm run dev
  ```

Once both the frontend and backend are running, you can view the application by visiting http://localhost:3000/ in your browser. The frontend will fetch data from the Django API and display it in charts.

## Libraries and Tools Used

### Frontend (Next.js):
- Next.js: A React framework for server-side rendering and building web applications.
- Axios: A promise-based HTTP client used to fetch data from the Django backend.
- Recharts: A charting library used to render Candlestick, Line, Bar, and Pie charts.

### Backend (Django):
- Django: A Python web framework for building APIs and managing the backend.
- Django REST framework: A toolkit for building Web APIs.
- CORS Headers: A Django app that handles Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.

## Explanation of the Approach

This project follows a clean separation of concerns between the frontend and backend:

- **Frontend (Next.js)**: The frontend is responsible for displaying a dashboard with multiple charts. Each chart fetches its data from the backend via API calls using axios. The charts are implemented using the Recharts library to provide dynamic visualizations.

- **Backend (Django)**: The Django backend is responsible for serving API data to the frontend. Four endpoints are created to provide hardcoded data for each chart type (Candlestick, Line, Bar, and Pie). Django REST framework is used to structure the API, and django-cors-headers is included to allow cross-origin requests from the frontend.

- **Integration**: The frontend communicates with the backend by fetching data from the Django API endpoints, which are served at http://localhost:8000/. The Next.js frontend runs on http://localhost:3000/ and dynamically displays the data from the backend.

By separating the concerns of the frontend and backend, this approach ensures that both can be developed and maintained independently, while also enabling easy communication between them via REST APIs.
