import styles from "./Home.module.css";
import { colors } from "../theme/Colors";
import madamBolo from "../assets/madambolo.png";
import { FaWhatsapp } from "react-icons/fa";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  tag?: string;
  img: string;
};

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Nuvem de Baunilha",
    subtitle: "Macio e leve como uma nuvem.",
    price: "R$ 18,90",
    tag: "BEST",
    img: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Ouro Caramelizado",
    subtitle: "Recheio cremoso e doce de leite.",
    price: "R$ 22,90",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Dark Velvet",
    subtitle: "Puro cacau e textura perfeita.",
    price: "R$ 20,90",
    img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Bosque Vermelho",
    subtitle: "Doçura e fruta na medida.",
    price: "R$ 24,90",
    img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Top Bar */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <span className={styles.brandDot} />
            <span className={styles.brandName}>Essência</span>
          </div>

          <nav className={styles.nav}>
            <a className={styles.navLink} href="#inicio">
              Início
            </a>
            <a className={styles.navLink} href="#atelie">
              O Ateliê
            </a>
            <a className={styles.navLink} href="#mini">
              Mini Bolos
            </a>
            <a className={styles.navCta} href="#whatsapp" aria-label="WhatsApp">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.pill}>
                <span className={styles.pillDot} />
                Presentes únicos & artesanais
              </div>

              <h1 className={styles.heroTitle}>
                Um Doce Momento
                <span className={styles.heroTitleAccent}>
                  {" "}
                  Feito Só Para Você
                </span>
              </h1>

              <p className={styles.heroText}>
                Crie lembranças inesquecíveis com nossos mini bolos
                personalizados. O presente perfeito para quem você ama.
              </p>

              <div className={styles.heroActions}>
                <button className={styles.btnPrimary} type="button">
                  ✨ Criar Meu Mini Bolo
                </button>
                <button className={styles.btnGhost} type="button">
                  Ver Cardápio
                </button>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroCard}>
                <img
                  className={styles.heroImage}
                  src={madamBolo}
                  alt="Mini bolos"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Por que nos escolher?</h2>
          <p className={styles.sectionSubtitle}>
            Tornamos a sua experiência de presentear tão doce quanto o primeiro
            pedaço.
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div
                className={styles.featureIcon}
                style={{ background: colors.iconBg2 }}
              >
                ✎
              </div>
              <h3 className={styles.featureTitle}>100% Personalizável</h3>
              <p className={styles.featureText}>
                Escolha cores, toppings e mensagens para criar um mini bolo que
                é a sua cara.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div
                className={styles.featureIcon}
                style={{ background: colors.iconBg1 }}
              >
                🍃
              </div>
              <h3 className={styles.featureTitle}>Ingredientes Nobres</h3>
              <p className={styles.featureText}>
                Usamos apenas o melhor: chocolates belgas, frutas frescas e
                baunilha natural.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div
                className={styles.featureIcon}
                style={{ background: colors.iconBg3 }}
              >
                📦
              </div>
              <h3 className={styles.featureTitle}>Embalagem Especial</h3>
              <p className={styles.featureText}>
                Seu mini bolo chega em uma caixa linda, pronto para emocionar
                desde o primeiro olhar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="atelie" className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyMedia}>
              <div className={styles.storyMediaCard}>
                <img
                  className={styles.storyImg}
                  src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=1200&q=80"
                  alt="Confeitaria artesanal"
                />
                <div className={styles.storyBubble}>
                  Receitas feitas com amor
                </div>
              </div>
            </div>

            <div className={styles.storyContent}>
              <div className={styles.storyOverline}>ONDE A MAGIA ACONTECE</div>
              <h2 className={styles.storyTitle}>
                Criamos não apenas bolos, mas{" "}
                <span className={styles.storyAccent}>sorrisos embrulhados</span>
              </h2>
              <p className={styles.storyText}>
                Cada pedido na Essência da Casa é tratado como uma obra de arte
                única. Nossos mini bolos são feitos sob medida para celebrar as
                pequenas e grandes vitórias do seu dia a dia.
              </p>

              <div className={styles.bullets}>
                <div className={styles.bullet}>
                  <span className={styles.bulletIcon}>✓</span>
                  Receitas exclusivas de família
                </div>
                <div className={styles.bullet}>
                  <span className={styles.bulletIcon}>✓</span>
                  Decoração feita pedido por pedido
                </div>
              </div>

              <button className={styles.btnPrimary} type="button">
                Nossa História →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="mini" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeadRow}>
            <div>
              <h2 className={styles.sectionTitle}>Escolha sua Base</h2>
              <p className={styles.sectionSubtitle}>
                Comece a escolha com um de nossos sabores clássicos e depois
                personalize como quiser.
              </p>
            </div>

            <a
              className={styles.link}
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Explorar Customizações ✨
            </a>
          </div>

          <div className={styles.productsGrid}>
            {PRODUCTS.map((p) => (
              <article key={p.id} className={styles.productCard}>
                <div className={styles.productImgWrap}>
                  <img
                    className={styles.productImg}
                    src={p.img}
                    alt={p.title}
                  />
                  {p.tag ? (
                    <span className={styles.productTag}>{p.tag}</span>
                  ) : null}
                </div>

                <div className={styles.productBody}>
                  <h3 className={styles.productTitle}>{p.title}</h3>
                  <p className={styles.productSubtitle}>{p.subtitle}</p>

                  <div className={styles.productRow}>
                    <span className={styles.productPrice}>{p.price}</span>
                    <div className={styles.addBtn}>
                      <FaWhatsapp size={35} color="#7C3AED" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaTopPill}>VAMOS CONVERSAR?</div>
            <h2 className={styles.ctaTitle}>
              Quer um mini bolo com a sua cara? Manda um oi pra gente!
            </h2>
            <p className={styles.ctaText}>
              Adoramos criar presentes únicos. Se você tem uma ideia especial,
              estamos prontos para realizá-la via WhatsApp.
            </p>

            <div className={styles.ctaActions}>
              <button className={styles.btnMint} type="button">
                Chamar no WhatsApp
              </button>
              <button className={styles.btnGhostOnPurple} type="button">
                Ver Galeria
              </button>
            </div>

            <div className={styles.ctaFootNote}>
              Atendimento Humanizado & Especializado
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.brand}>
                <span className={styles.brandDot} />
                <span className={styles.brandName}>Essência</span>
              </div>
              <p className={styles.footerText}>
                Transformando momentos comuns em memórias doces através da
                confeitaria artesanal e personalizada.
              </p>

              <div className={styles.footerSocial}>
                <button
                  className={styles.socialBtn}
                  type="button"
                  aria-label="Instagram"
                >
                  ⌁
                </button>
                <button
                  className={styles.socialBtn}
                  type="button"
                  aria-label="TikTok"
                >
                  ♪
                </button>
                <button
                  className={styles.socialBtn}
                  type="button"
                  aria-label="WhatsApp"
                >
                  🟢
                </button>
              </div>
            </div>

            <div className={styles.footerCol}>
              <div className={styles.footerTitle}>Navegação</div>
              <a className={styles.footerLink} href="#mini">
                Cardápio
              </a>
              <a className={styles.footerLink} href="#atelie">
                O Ateliê
              </a>
              <a className={styles.footerLink} href="#inicio">
                Início
              </a>
              <a className={styles.footerLink} href="#whatsapp">
                Presentes
              </a>
            </div>

            <div className={styles.footerCol}>
              <div className={styles.footerTitle}>Onde Estamos</div>
              <div className={styles.footerLine}>📍 Belo Horizonte - MG</div>
              <div className={styles.footerLine}>
                🕒 Seg - Sex: 09:00 - 18:00
              </div>
              <div className={styles.footerLine}>
                📲 WhatsApp: (xx) xxxxx-xxxx
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>
              © {new Date().getFullYear()} Essência da Casa. Todos os direitos
              reservados.
            </span>
            <span className={styles.footerBottomLinks}>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Política de Privacidade
              </a>
              <span className={styles.sep}>•</span>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Termos
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
