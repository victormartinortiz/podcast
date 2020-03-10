/* eslint-disable react/react-in-jsx-scope */
export default class extends React.Component {
  render() {
    return (
      <>
        <article>
          <img src='/static/platzi-logo.png' alt='Logo Platzi' />

          <h1>CREADO POR VICTOR</h1>
          <p>FRONTEND REACT DEVELOPER</p>
        </article>

        {/* CSS */}
        <style jsx global>{`
          body {
            margin: 0;
            background: linear-gradient(90deg, #1c3643, #273b47 25%, #1e5372);
            background-repeat: no-repeat;
          }
        `}</style>

        <style jsx>{`
          article {
              width: 100vw;
              height: 100vh;
              user-select: none;

              display: flex;
              flex-direction: column;
              flex-wrap: nowrap;
              justify-content: center;
              align-content: center;
              align-items: center;
          }

          img {
              max-width: 250px;
              margin-bottom: 50px;
              pointer-events: none;
          }

          h1 {
              font-weight: bolder;
              font-family: Arial, Helvetica, sans-serif;
              opacity: .7;
              margin-bottom: 0px;
              color: white;
              transition: all .4s;
              cursor: pointer;
          }

          h1:hover{
              opacity: 1;
          }

          p {
              font-weight: bolder;
              font-family: Arial, Helvetica, sans-serif;
              opacity: .5;
              letter-spacing: 2px;
              font-size:14px;
              color: white;
              transition: all .4s;
              cursor: pointer;
          }

          p:hover{
              opacity: .8;
          }

        `}</style>
      </>
    );
  }
}
