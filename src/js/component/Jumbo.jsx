import React from 'react'

export const Jumbo = () => {
  return (
    <div className="container my-5">
      <div className="p-5 bg-light rounded-3">
        <h1 className="text-body-emphasis">Jumbotron </h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4" type="button">
            Call to action
          </button>
        </div>
      </div>
    </div>
  )
}
