import React, { Component } from "react";

export default class Content extends Component {
  render() {
    const { fio, born, education = [], hobbies = [], books = [], cityTitle, cityNote, linkHref, linkText } = this.props;

    return (
      <main className="content">
        <h2 className="title">{fio}</h2>

        <p><strong>Дата та місце народження:</strong> {born}</p>

        <p>
          <strong>Освіта:</strong> {education.join("; ")}
        </p>

        <section>
          <h3>Хобі</h3>
          <ul>
            {hobbies.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Улюблені книги</h3>
          <ol>
            {books.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ol>
        </section>

        <section>
          <h3>{cityTitle}</h3>
          <p>{cityNote}</p>

          <p className="muted">
            Пряма адреса сайту:{" "}
            <a href={linkHref} target="_blank" rel="noreferrer">
              {linkText}
            </a>
          </p>
        </section>
      </main>
    );
  }
}
