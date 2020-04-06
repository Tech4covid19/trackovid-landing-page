import React from "react";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { useStaticQuery, graphql } from "gatsby";
import SectionContent from "../section-content/index";

import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        appSiteUrl
      }
    }
  }
`;

export default function CodigoConduta() {
  const data = useStaticQuery(query);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <SectionContent title="Pensar primeiro na privacidade e segurança de informação">
          <Typography variant="smallBody">
            Para que a missão da Covidografia seja cumprida, é essencial que
            tudo o que faças, desde software ao marketing, tenha sempre como
            prioridade número um a privacidade e segurança da informação
            fornecida pelos utilizadores. <br />
            Isso poderá trazer inconvenientes, que aceitarás, como por exemplo
            não teres acesso aos dados submetidos, ou a ter trabalho extra para
            implementar passos necessários no software que garantam anonimização
            da informação e/ou a remoção de dados não essenciais.
          </Typography>
          <Typography variant="smallBody">
            Irás sempre questionar se alguma informação que se esteja a recolher
            ou planeie recolher no futuro é realmente necessário para cumprir a
            missão, e se estão em conformidade com os{" "}
            <Button
              href={`${data.site.siteMetadata.appSiteUrl}/#/terms-conditions`}
              type="textLink"
            >
              termos do serviço
            </Button>{" "}
            e{" "}
            <Button
              href={`${data.site.siteMetadata.appSiteUrl}/#/privacy-policy`}
              type="textLink"
            >
              política de privacidade
            </Button>{" "}
            . Irás garantir que existe legitimidade e transparência nessa
            recolha.
          </Typography>
          <Typography variant="smallBody">
            Os dados recolhidos têm um único objectivo: ajudar a combater o
            COVID-19. Terás de garantir que o destino final dos dados serão
            sempre as entidades públicas e de investigação envolvidas neste
            combate, e que os usem exclusivamente para combater o COVID-19.
          </Typography>
          <Typography variant="smallBody">
            É essencial que compreendas estes conceitos e que garantas que estes
            são sempre cumpridos, por ti e pelos outros voluntários, pelo que
            servirás também de guardião da privacidade de todos.
          </Typography>
          <Typography variant="smallBody">
            Da perspectiva da Covidografia, o Regulamento Geral de Proteção de
            Dados Pessoais Europeu (RGPD) estabelece apenas o mínimo, e não
            máximo, das medidas para assegurar a confidencialidade, privacidade,
            segurança e direitos individuais de todos os cidadãos e utilizadores
            da plataforma. Isto significa que algumas das tuas ideias e/ou
            implementações poderão ter que ser ajustadas ou postas completamente
            de parte.
          </Typography>
        </SectionContent>

        <SectionContent title="Ser 100% transparente">
          <Typography variant="smallBody">
            E aceitar que isso vai abrir a porta às críticas, que nem sempre
            serão construtivas e que naturalmente irão surgir no processo. Todo
            o software desenvolvido desde o primeiro dia será como{" "}
            <Button href="https://github.com/Tech4covid19" type="textLink">
              código aberto
            </Button>
            , e vais disponibilizar informação sobre o desenvolvimento da
            aplicação de{" "}
            <Button
              href="https://github.com/orgs/Tech4covid19/projects/2"
              type="textLink"
            >
              forma aberta
            </Button>
            .
            <br />
            Crias processos e desenvolves software de maneira a permitir o
            escrutínio total, incluindo sobre como são recolhidos e tratados os
            dados dos utilizadores da plataforma.
          </Typography>
        </SectionContent>

        <SectionContent title="Só tens uma missão: combater a pandemia">
          <Typography variant="smallBody">
            Poderá haver alturas em que te será proposto outros usos ou
            aplicações para a plataforma. Vais rejeitar essa via e apenas
            aceitarás ou delegarás tarefas que contribuam para a luta contra a
            pandemia COVID-19, ajudando a:
          </Typography>
          <Typography variant="ul">
            <li>Salvar vidas</li>
            <li>Reduzir o impacto na economia</li>
            <li>Defender o estilo de vida dos portugueses</li>
          </Typography>
          <Typography variant="smallBody">
            Isso inclui, obrigatoriamente, não ter qualquer objectivo comercial,
            nem agora nem no futuro.
          </Typography>
        </SectionContent>

        <SectionContent title="Contribuir sem esperar contrapartidas">
          <Typography variant="smallBody">
            Se a colaboração para cumprir os objectivos acima não for por si só
            motivador, não esperando qualquer retorno material, imaterial,
            directa ou indirectamente, então este projecto não é para ti.
          </Typography>
          <Typography variant="smallBody">
            A atividade desenvolvida na Covidografia, e no movimento
            tech4COVID19 no geral, não pode ter fins lucrativos. O movimento é
            alicerçado em trabalho voluntário não sendo permitida a venda e/ou
            anúncio de produtos ou serviços.
          </Typography>
          <Typography variant="smallBody">
            A médio-longo prazo, a Covidografia poderá passar o projecto para a
            alçada de uma entidade governamental ou para outra entidade sem fins
            lucrativos que possa assegurar a sua continuidade, portanto poderás
            ter que deixar que outros continuem o teu trabalho.
          </Typography>
        </SectionContent>

        <SectionContent title="Garantir universalidade de acesso e não-discriminação">
          <Typography variant="smallBody">
            Por forma a garantir que todos os portugueses fazem parte dos
            objectivos da missão acima referida, o combate à infoexclusão e o
            aumento da literacia digital é essencial. Por isso segues as
            seguintes directrizes no desenho e desenvolvimento da Covidografia:
          </Typography>
          <Typography variant="ul">
            <li>
              Desenhas as interfaces de forma simples e fáceis de usar e optas
              por uma linguagem acessível para não amplificar os efeitos da
              infoexclusão e literacia digital
            </li>
            <li>
              Reduzes tanto quanto possível o número de passos necessários para
              realizar uma tarefa com a plataforma
            </li>
            <li>
              Garantes que a plataforma é compatível com o maior número de
              dispositivos, móveis e fixos, novos e antigos.
            </li>
          </Typography>
        </SectionContent>
      </div>
    </div>
  );
}
