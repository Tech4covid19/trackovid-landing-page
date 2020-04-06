import React from "react";
import Img from "gatsby-image";
import Typography from "@/components/typography";
import { useStaticQuery, graphql } from "gatsby";

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
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography
            variant="smallBody"
            weight="medium"
            className={styles.text}
          >
            A nossa equipa conta com voluntários que trazem a sua experiência de
            várias empresas, entre as quais:
            <br />
            <br />
          </Typography>
          <Typography variant="smallBody" weight="bold" className={styles.text}>
            Adclick, Bitmaker, Blip, Buildtoo, Cerealis , Cinemax Penafiel,
            Codavel, Country Manager Portuga, Facebook, GoWithFlow, Homeless,
            Indra, Jscrambler, Lookatitude LOQR, Miew, Mystic Tua, Oko,
            Pixelmatters, Tecnibite, Velocidi, Zaask.
          </Typography>
        </div>

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
                <Typography>Rui Costa</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.pedroFortuna.childImageSharp.fixed}
                  alt="Pedro Fortuna"
                />
                <Typography>Pedro Fortuna</Typography>
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
                <Typography>Luís Borges</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.ricardoFernandes.childImageSharp.fixed}
                  alt="Ricardo Fernandes"
                />
                <Typography>Ricardo Fernandes</Typography>
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
                <Typography>Paulo Cunha</Typography>
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
                <Typography>Orlando Rocha</Typography>
              </div>
              <div className={styles.person}>
                <Img fixed={data.geiras.childImageSharp.fixed} alt="Geiras" />
                <Typography>Geiras</Typography>
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
                <Typography>João Quartilho</Typography>
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
                <Typography>Carmen Lima</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.teresaPenetra.childImageSharp.fixed}
                  alt="Teresa Penetra"
                />
                <Typography>Teresa Penetra</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.pedroDias.childImageSharp.fixed}
                  alt="Pedro Dias"
                />
                <Typography>Pedro Dias</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.joaoEsteves.childImageSharp.fixed}
                  alt="Joao Esteves"
                />
                <Typography>Joao Esteves</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.brunoPiao.childImageSharp.fixed}
                  alt="Bruno Pião"
                />
                <Typography>Bruno Pião</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.martaTorre.childImageSharp.fixed}
                  alt="Marta Torre"
                />
                <Typography>Marta Torre</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.martaCarrilho.childImageSharp.fixed}
                  alt="Marta Carrilho"
                />
                <Typography>Marta Carrilho</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.brunoBarbosa.childImageSharp.fixed}
                  alt="Bruno Barbosa"
                />
                <Typography>Bruno Barbosa</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.pedroRoque.childImageSharp.fixed}
                  alt="Pedro Roque"
                />
                <Typography>Pedro Roque</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.joaoDias.childImageSharp.fixed}
                  alt="João Dias"
                />
                <Typography>João Dias</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.brunoSalomao.childImageSharp.fixed}
                  alt="Bruno Salomão"
                />
                <Typography>Bruno Salomão</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.margaridaSilva.childImageSharp.fixed}
                  alt="Margarida Silva"
                />
                <Typography>Margarida Silva</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.nelsonPatricio.childImageSharp.fixed}
                  alt="Nélson Patrício"
                />
                <Typography>Nélson Patrício</Typography>
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
                <Typography>Fábio Silva</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.diogoTeixeira.childImageSharp.fixed}
                  alt="Diogo Teixeira"
                />
                <Typography>Diogo Teixeira</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.nunoMota.childImageSharp.fixed}
                  alt="Nuno Mota"
                />
                <Typography>Nuno Mota</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.ruiMendes.childImageSharp.fixed}
                  alt="Rui Mendes"
                />
                <Typography>Rui Mendes</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.ruiSaraiva.childImageSharp.fixed}
                  alt="Rui Saraiva"
                />
                <Typography>Rui Saraiva</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.carlosPombeiro.childImageSharp.fixed}
                  alt="Carlos Pombeiro"
                />
                <Typography>Carlos Pombeiro</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.joaoDuarte.childImageSharp.fixed}
                  alt="João Duarte"
                />
                <Typography>João Duarte</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.miguelPinto.childImageSharp.fixed}
                  alt="Miguel Pinto"
                />
                <Typography>Miguel Pinto</Typography>
              </div>
              <div className={styles.person}>
                <Img
                  fixed={data.ricardoVallejo.childImageSharp.fixed}
                  alt="Ricardo Vallejo"
                />
                <Typography>Ricardo Vallejo</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomosTeam;
