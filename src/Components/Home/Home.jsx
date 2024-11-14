import { TitleStyle } from "./style";

const Home = () => {
  return (
    <main>
      <TitleStyle className="Title">
        <h1>
          Mais que Café Isso é <span className="starbucks">Starbucks</span>
        </h1>

        <p>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </p>

        <button>Saiba Mais</button>
      </TitleStyle>

      <section className="BigCup">
        <img src="" alt="" />
        <div className="circle"></div>
      </section>
    </main>
  );
};
export default Home;
