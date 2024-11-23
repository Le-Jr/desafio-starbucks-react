import { H1, H2, P, TitleStyle } from "./style";

const Home = () => {
  return (
    <main>
      <TitleStyle className="Title">
        <H2>Mais que Café</H2>
        <H1>
          Isso é <span className="starbucks">Starbucks</span>
        </H1>

        <P>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </P>

        <button>Saiba Mais</button>

        <div>
          <img src="copo_pequeno_amarelo.png" alt="" />
          <img src="copo_pequeno_vermelho.png" alt="" />
          <img src="copo_pequeno_laranja.png" alt="" />
        </div>
      </TitleStyle>

      <section className="BigCup">
        <img src="" alt="" />
        <div className="circle"></div>
      </section>
    </main>
  );
};
export default Home;
