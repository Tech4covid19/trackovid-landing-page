import React from "react";
import Img from "gatsby-image";
import Typography from "@/components/typography";
import { useStaticQuery, graphql } from "gatsby";

import heart from "@/assets/heart.svg";

import styles from "./index.module.css";

const query = graphql`
  query {
    ruiCosta: file(relativePath: { eq: "team/avatar-rui-costa.png" }) {
      ...AvatarData
    }
    pedroFortuna: file(relativePath: { eq: "team/avatar-pedro-fortuna.png" }) {
      ...AvatarData
    }
    luisBorges: file(relativePath: { eq: "team/avatar-luis-borges.png" }) {
      ...AvatarData
    }
    ricardoFernandes: file(
      relativePath: { eq: "team/avatar-ricardo-fernandes.png" }
    ) {
      ...AvatarData
    }
    pauloCunha: file(relativePath: { eq: "team/avatar-paulo-cunha.png" }) {
      ...AvatarData
    }
    orlandoRocha: file(relativePath: { eq: "team/avatar-orlando-rocha.png" }) {
      ...AvatarData
    }
    geiras: file(relativePath: { eq: "team/avatar-geiras.png" }) {
      ...AvatarData
    }
    joaoQuartilho: file(
      relativePath: { eq: "team/avatar-joao-quartilho.png" }
    ) {
      ...AvatarData
    }
    carmenLima: file(relativePath: { eq: "team/avatar-carmen-lima.png" }) {
      ...AvatarData
    }
    teresaPenetra: file(
      relativePath: { eq: "team/avatar-teresa-penetra.png" }
    ) {
      ...AvatarData
    }
    pedroDias: file(relativePath: { eq: "team/avatar-pedro-dias.png" }) {
      ...AvatarData
    }
    joaoEsteves: file(relativePath: { eq: "team/avatar-joao-esteves.png" }) {
      ...AvatarData
    }
    brunoPiao: file(relativePath: { eq: "team/avatar-bruno-piao.png" }) {
      ...AvatarData
    }
    martaTorre: file(relativePath: { eq: "team/avatar-marta-torre.png" }) {
      ...AvatarData
    }
    martaCarrilho: file(
      relativePath: { eq: "team/avatar-marta-carrilho.png" }
    ) {
      ...AvatarData
    }
    brunoBarbosa: file(relativePath: { eq: "team/avatar-bruno-barbosa.png" }) {
      ...AvatarData
    }
    pedroRoque: file(relativePath: { eq: "team/avatar-pedro-roque.png" }) {
      ...AvatarData
    }
    joaoDias: file(relativePath: { eq: "team/avatar-joao-dias.png" }) {
      ...AvatarData
    }
    brunoSalomao: file(relativePath: { eq: "team/avatar-bruno-salomao.png" }) {
      ...AvatarData
    }
    margaridaSilva: file(
      relativePath: { eq: "team/avatar-margarida-silva.png" }
    ) {
      ...AvatarData
    }
    nelsonPatricio: file(
      relativePath: { eq: "team/avatar-nelson-patricio.png" }
    ) {
      ...AvatarData
    }
    fabioSilva: file(relativePath: { eq: "team/avatar-fabio-silva.png" }) {
      ...AvatarData
    }
    diogoTeixeira: file(
      relativePath: { eq: "team/avatar-diogo-teixeira.png" }
    ) {
      ...AvatarData
    }
    nunoMota: file(relativePath: { eq: "team/avatar-nuno-mota.png" }) {
      ...AvatarData
    }
    ruiMendes: file(relativePath: { eq: "team/avatar-rui-mendes.png" }) {
      ...AvatarData
    }
    ruiSaraiva: file(relativePath: { eq: "team/avatar-rui-saraiva.png" }) {
      ...AvatarData
    }
    carlosPombeiro: file(
      relativePath: { eq: "team/avatar-carlos-pombeiro.png" }
    ) {
      ...AvatarData
    }
    joaoDuarte: file(relativePath: { eq: "team/avatar-joao-duarte.png" }) {
      ...AvatarData
    }
    miguelPinto: file(relativePath: { eq: "team/avatar-miguel-pinto.png" }) {
      ...AvatarData
    }
    ricardoVallejo: file(
      relativePath: { eq: "team/avatar-ricardo-vallejo.png" }
    ) {
      ...AvatarData
    }
    taniaRocha: file(relativePath: { eq: "team/avatar-tania-rocha.png" }) {
      ...AvatarData
    }
  }
  fragment AvatarData on File {
    childImageSharp {
      fixed(width: 110, quality: 80) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

const QuemSomosTeam = () => {
  const data = useStaticQuery(query);
  return (
    <div className={styles.root} id="equipa">
      <div className={styles.container}>
        <div className={styles.teams}>
          <div className={styles.teamContainer}>
            <Typography variant="h3" weight="bold" color="purple">
              Produto e Estratégia
            </Typography>
            <div className={styles.team}>
              <div className={styles.person}>
                <Img
                  fixed={data.ruiCosta.childImageSharp.fixed}
                  alt="Rui Costa"
                />
                <Typography weight="bold" className={styles.personText}>
                  Rui Costa
                </Typography>
                <Typography className={styles.personText}>
                  Produto e Estratégia
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.pedroFortuna.childImageSharp.fixed}
                  alt="Pedro Fortuna"
                />
                <Typography weight="bold" className={styles.personText}>
                  Pedro Fortuna
                </Typography>
                <Typography className={styles.personText}>
                  Produto e Estratégia
                </Typography>
              </div>
            </div>
          </div>

          <div className={styles.teamContainer}>
            <Typography variant="h3" weight="bold" color="purple">
              Infraestrutura
            </Typography>
            <div className={styles.team}>
              <div className={styles.person}>
                <Img
                  fixed={data.pauloCunha.childImageSharp.fixed}
                  alt="Paulo Cunha"
                />
                <Typography weight="bold" className={styles.personText}>
                  Paulo Cunha
                </Typography>
                <Typography className={styles.personText}>
                  Infraestrutura e legal
                </Typography>
              </div>
            </div>
          </div>

          <div className={styles.teamContainer}>
            <Typography variant="h3" weight="bold" color="purple">
              Engenharia
            </Typography>
            <div className={styles.team}>
              <div className={styles.person}>
                <Img
                  fixed={data.luisBorges.childImageSharp.fixed}
                  alt="Luís Borges"
                />
                <Typography weight="bold" className={styles.personText}>
                  Luís Borges
                </Typography>
                <Typography className={styles.personText}>
                  Desenvolvimento
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.ricardoFernandes.childImageSharp.fixed}
                  alt="Ricardo Fernandes"
                />
                <Typography weight="bold" className={styles.personText}>
                  Ricardo Fernandes
                </Typography>
                <Typography className={styles.personText}>
                  Desenvolvimento
                </Typography>
              </div>
            </div>
          </div>

          <div className={styles.teamContainer}>
            <Typography variant="h3" weight="bold" color="purple">
              UX/UI
            </Typography>
            <div className={styles.team}>
              <div className={styles.person}>
                <Img
                  fixed={data.orlandoRocha.childImageSharp.fixed}
                  alt="Orlando Rocha"
                />
                <Typography weight="bold" className={styles.personText}>
                  Orlando Rocha
                </Typography>
                <Typography className={styles.personText}>UX e UI</Typography>
              </div>
              <div className={styles.person}>
                <Img fixed={data.geiras.childImageSharp.fixed} alt="Geiras" />
                <Typography weight="bold" className={styles.personText}>
                  Geiras
                </Typography>
                <Typography className={styles.personText}>UX e UI</Typography>
              </div>
            </div>
          </div>

          <div className={styles.teamContainer}>
            <Typography variant="h3" weight="bold" color="purple">
              Legal
            </Typography>
            <div className={styles.team}>
              <div className={styles.person}>
                <Img
                  fixed={data.joaoQuartilho.childImageSharp.fixed}
                  alt="João Quartilho"
                />
                <Typography weight="bold" className={styles.personText}>
                  João Quartilho
                </Typography>
                <Typography className={styles.personText}>Legal</Typography>
              </div>
            </div>
          </div>

          <div className={styles.teamContainer}>
            <Typography variant="h3" weight="bold" color="purple">
              Marketing e Comunicação
            </Typography>
            <div className={styles.team}>
              <div className={styles.person}>
                <Img
                  fixed={data.carmenLima.childImageSharp.fixed}
                  alt="Carmen Lima"
                />
                <Typography weight="bold" className={styles.personText}>
                  Carmen Lima
                </Typography>
                <Typography className={styles.personText}>
                  Marketing Coord.
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.teresaPenetra.childImageSharp.fixed}
                  alt="Teresa Penetra"
                />
                <Typography weight="bold" className={styles.personText}>
                  Teresa Penetra
                </Typography>
                <Typography className={styles.personText}>
                  Social Media, VIP’s
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.pedroDias.childImageSharp.fixed}
                  alt="Pedro Dias"
                />
                <Typography weight="bold" className={styles.personText}>
                  Pedro Dias
                </Typography>
                <Typography className={styles.personText}>
                  Social Media
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.joaoEsteves.childImageSharp.fixed}
                  alt="Joao Esteves"
                />
                <Typography weight="bold" className={styles.personText}>
                  Joao Esteves
                </Typography>
                <Typography className={styles.personText}>
                  Design e Prod.
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.brunoPiao.childImageSharp.fixed}
                  alt="Bruno Pião"
                />
                <Typography weight="bold" className={styles.personText}>
                  Bruno Pião
                </Typography>
                <Typography className={styles.personText}>
                  Estratégia e Prod.
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.martaTorre.childImageSharp.fixed}
                  alt="Marta Torre"
                />
                <Typography weight="bold" className={styles.personText}>
                  Marta Torre
                </Typography>
                <Typography className={styles.personText}>
                  Estratégia e copy
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.martaCarrilho.childImageSharp.fixed}
                  alt="Marta Carrilho"
                />
                <Typography weight="bold" className={styles.personText}>
                  Marta Carrilho
                </Typography>
                <Typography className={styles.personText}>
                  Copywriter
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.brunoBarbosa.childImageSharp.fixed}
                  alt="Bruno Barbosa"
                />
                <Typography weight="bold" className={styles.personText}>
                  Bruno Barbosa
                </Typography>
                <Typography className={styles.personText}>Consultor</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.pedroRoque.childImageSharp.fixed}
                  alt="Pedro Roque"
                />
                <Typography weight="bold" className={styles.personText}>
                  Pedro Roque
                </Typography>
                <Typography className={styles.personText}>Consultor</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.joaoDias.childImageSharp.fixed}
                  alt="João Dias"
                />
                <Typography weight="bold" className={styles.personText}>
                  João Dias
                </Typography>
                <Typography className={styles.personText}>
                  Videos e Media
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.brunoSalomao.childImageSharp.fixed}
                  alt="Bruno Salomão"
                />
                <Typography weight="bold" className={styles.personText}>
                  Bruno Salomão
                </Typography>
                <Typography className={styles.personText}>
                  Influencers
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.margaridaSilva.childImageSharp.fixed}
                  alt="Margarida Silva"
                />
                <Typography weight="bold" className={styles.personText}>
                  Margarida Silva
                </Typography>
                <Typography className={styles.personText}>
                  Influencers
                </Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.nelsonPatricio.childImageSharp.fixed}
                  alt="Nélson Patrício"
                />
                <Typography weight="bold" className={styles.personText}>
                  Nélson Patrício
                </Typography>
                <Typography className={styles.personText}>
                  Influencers
                </Typography>
              </div>
            </div>
          </div>

          <div className={styles.teamContainer}>
            <Typography variant="h3" weight="bold" color="purple">
              Desenvolvimento
            </Typography>
            <div className={styles.team}>
              <div className={styles.person}>
                <Img
                  fixed={data.fabioSilva.childImageSharp.fixed}
                  alt="Fábio Silva"
                />
                <Typography weight="bold" className={styles.personText}>
                  Fábio Silva
                </Typography>
                <Typography className={styles.personText}>FrontEnd</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.diogoTeixeira.childImageSharp.fixed}
                  alt="Diogo Teixeira"
                />
                <Typography weight="bold" className={styles.personText}>
                  Diogo Teixeira
                </Typography>
                <Typography className={styles.personText}>FrontEnd</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.nunoMota.childImageSharp.fixed}
                  alt="Nuno Mota"
                />
                <Typography weight="bold" className={styles.personText}>
                  Nuno Mota
                </Typography>
                <Typography className={styles.personText}>FrontEnd</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.ruiMendes.childImageSharp.fixed}
                  alt="Rui Mendes"
                />
                <Typography weight="bold" className={styles.personText}>
                  Rui Mendes
                </Typography>
                <Typography className={styles.personText}>FrontEnd</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.ruiSaraiva.childImageSharp.fixed}
                  alt="Rui Saraiva"
                />
                <Typography weight="bold" className={styles.personText}>
                  Rui Saraiva
                </Typography>
                <Typography className={styles.personText}>FrontEnd</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.taniaRocha.childImageSharp.fixed}
                  alt="Tânia Rocha"
                />
                <Typography weight="bold" className={styles.personText}>
                  Tânia Rocha
                </Typography>
                <Typography className={styles.personText}>FrontEnd</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.carlosPombeiro.childImageSharp.fixed}
                  alt="Carlos Pombeiro"
                />
                <Typography weight="bold" className={styles.personText}>
                  Carlos Pombeiro
                </Typography>
                <Typography className={styles.personText}>BackEnd</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.joaoDuarte.childImageSharp.fixed}
                  alt="João Duarte"
                />
                <Typography weight="bold" className={styles.personText}>
                  João Duarte
                </Typography>
                <Typography className={styles.personText}>BackEnd</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.miguelPinto.childImageSharp.fixed}
                  alt="Miguel Pinto"
                />
                <Typography weight="bold" className={styles.personText}>
                  Miguel Pinto
                </Typography>
                <Typography className={styles.personText}>BackEnd</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.ricardoVallejo.childImageSharp.fixed}
                  alt="Ricardo Vallejo"
                />
                <Typography weight="bold" className={styles.personText}>
                  Ricardo Vallejo
                </Typography>
                <Typography className={styles.personText}>Mobile</Typography>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <img className={styles.heart} src={heart} alt="Heart" />
          <Typography
            variant="smallBody"
            weight="bold"
            className={styles.footerText}
          >
            A todos os outros voluntários que já contribuíram para o projeto, o
            nosso muito obrigado.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default QuemSomosTeam;
