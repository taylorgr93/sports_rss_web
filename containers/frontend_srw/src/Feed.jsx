import React, { useEffect } from "react";

export const Feed = ({ title, link, date, contentSnippet, categories }) => {
  const formatted = {
    date: "numeric",
    month: "long",
    year: "numeric",
  };

  const articleDate = new Date(date).toLocaleDateString("en-GB", formatted);

  useEffect(() => {
    console.log(categories);
  }, []);

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
          {contentSnippet} <a href={link}>Leer más</a>
        </p>
        <p>
          <strong>Fecha: </strong>
          {date}
        </p>
      </div>
    </>
  );
};
