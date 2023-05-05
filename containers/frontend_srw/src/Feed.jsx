/*eslint-disable*/
import React from "react";

export const Feed = ({ title, link, date, contentSnippet, categories }) => {
  const formatted = {
    date: "numeric",
    month: "long",
    year: "numeric",
  };

  const articleDate = new Date(date).toLocaleDateString("en-GB", formatted);

  return (
    <>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #CCCCCC",
          padding: "10px",
          margin: "10px 0",
        }}
      >
        <p>
          <strong>Título: </strong>
          {title}
        </p>
        <p>
          <strong>Categorías: </strong>
          {categories?.join(", ")}
        </p>
        <p>
          <strong>Contenido: </strong>
          {contentSnippet.replace("Leer", "")}{" "}
          <a
            href={link}
            style={{
              color: "red",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Leer más
          </a>
        </p>
        <p>
          <strong>Fecha: </strong>
          {articleDate}
        </p>
      </div>
    </>
  );
};
