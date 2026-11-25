
import "./App.css";

import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { JobList } from "./components/JobList";
import { SearchBar } from "./components/SearchBar";

export default function App() {
  return (
    <>
      <Header />

      <main className="page-container">
        <section className="top-row">
          <div className="title-wrapper">
            <h1 className="title-main">
              Список вакансий
            </h1>

            <p className="title-sub">
              по профессии Frontend-разработчик
            </p>
          </div>

          <SearchBar />
        </section>

        <section className="main-row">
          <aside className="left-column">
            <Filters />
          </aside>

          <div className="right-column">
            <JobList />
          </div>
        </section>
      </main>
    </>
  );
}
