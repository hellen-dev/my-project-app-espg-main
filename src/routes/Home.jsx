
export default function Home() {
  document.title = "Home";

  if (sessionStorage.getItem("token-user")) { 
    return (
    <div>
      <h1>Home</h1>
        <div>
          <h2>Produtos em Oferta...</h2>
          <figure>
            <img src="/img/supermarket-shelf-1094812_640.png" alt="Prateleira" />
            <figcaption>Nosso produtos</figcaption>
          </figure>
        </div>
    </div>
  )} else{
    window.location="/login";
  }
}
