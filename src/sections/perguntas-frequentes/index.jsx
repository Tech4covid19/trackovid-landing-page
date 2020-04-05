import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Collapse from "@/components/collapse";
import Button from "@/components/button";
import Typography from "@/components/typography";

import styles from "./index.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        appSiteUrl
        authorUrl
      }
    }
  }
`;

export default function PerguntasFrequentes() {
  const data = useStaticQuery(query);
  const [isWantToHelpOpen, setIsWantToHelpOpen] = useState(false);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Collapse title="Quem criou a Covidografia?">
          <Typography variant="smallBody">
            A Covidografia resulta do esforço de um grupo de mais 100
            voluntários e é um dos projectos{" "}
            <Button href={data.site.siteMetadata.authorUrl} type="textLink">
              Tech4Covid19
            </Button>
            , uma associação sem fins lucrativos. Este movimento inclui mais de
            4800 voluntários a contribuir para diversos projetos de cariz
            tecnológico para lutar contra o COVID-19. Queres juntar-te a nós? Vê{" "}
            <Button
              href="/perguntas-frequentes/#quero-ajudar"
              type="textLink"
              onClick={() => setIsWantToHelpOpen(true)}
            >
              aqui
            </Button>{" "}
            como.
          </Typography>
        </Collapse>
        <Collapse title="Qual é o objectivo da Covidografia?">
          <Typography variant="smallBody">
            A nossa missão é reduzir o impacto da pandemia COVID-19,
            contribuindo para salvar vidas, reduzir o impacto na economia e
            proteger o estilo de vida da nossa sociedade, em particular a nossa
            liberdade. A recolha e análise do actualizações diárias do estado
            sintomático e do estado de confinamento da população tem como
            objectivos:
          </Typography>
          <Typography variant="ul">
            <li>
              Melhorar o conhecimento sobre os sintomas associados ao COVID-19 e
              a sua evolução;
            </li>
            <li>Avaliar o ritmo de propagação do vírus na sua área;</li>
            <li>Identificar zonas de risco de contágio elevado no país;</li>
            <li>Medir o impacto de medidas tomadas pelas autoridades.</li>
          </Typography>
          <Typography variant="smallBody">
            <br />
            Tendo por base a informação recolhida, estamos a trabalhar parcerias
            com equipas de especialistas de saúde e investigadores, nacionais e
            internacionais, de forma a que se possa correlacionar dados e
            trabalhar modelos de previsão que se mostrem eficazes na ajuda ao
            combate à pandemia.
            <br />
            <br />A Covidografia não é uma ferramenta de diagnóstico. Para obter
            aconselhamento oficial, por favor visite a página da Direção Geral
            de Saúde.
          </Typography>
        </Collapse>
        <Collapse title="Quem irá utilizar os meus dados?">
          <Typography variant="smallBody">
            Todos os detalhes podem ser encontrados na nossa politica de
            privacidade. Para uma leitura menos densa, veja Como os seus dados
            são protegidos. Abaixo, pode encontrar um resumo:
          </Typography>
          <Typography variant="ul">
            <li>
              Os seus dados estão protegidos pelo Regime Geral de Protecção de
              Dados (RGPD), e a sua utilização está restringida à investigação
              científica e em ajudar o Sistema Nacional de Saúde;
            </li>
            <li>
              A Covidografia é uma iniciativa sem fins lucrativos, e os dados
              recolhidos, não serão usados para efeitos comerciais;
            </li>
            <li>
              Os dados de saúde armazenados não são identificáveis e não são
              correlacionáveis com dados de contacto ou de identidade;
            </li>
            <li>
              Os dados recolhidos não são partilhados com terceiros, excepto com
              as autoridades oficiais de saúde e comunidade científica, sendo
              que neste último caso a partilha será sempre feita de forma
              agregada e anónima.
            </li>
          </Typography>
        </Collapse>
        <Collapse title="Como é que os meus dados serão protegidos?">
          <Typography variant="smallBody">
            Levamos a segurança dos dados que recolhemos de forma muito séria e
            aplicamos as melhores práticas para minimizar todos os riscos e
            garantir que os seus dados estão protegidos.
            <br />
            <br />A Covidografia respeita na integra a legislação Europeia,
            incluindo o Regime Geral de Proteção de Dados (RGPD). Pode ler mais
            sobre os seus direitos de acordo com este regime na nossa{" "}
            <Button
              href={`${data.site.siteMetadata.appSiteUrl}/#/privacy-policy`}
              type="textLink"
            >
              politica de privacidade
            </Button>{" "}
            .
            <br />
            <br />
            Quando partilharmos dados com as autoridades oficiais de saúde ou
            com a comunidade cientifica, os dados serão agregados e anonimizaos,
            de forma a preservar a sua privacidade.
          </Typography>
        </Collapse>
        <Collapse title="Irá alguém lucrar com os meus dados?">
          <Typography variant="smallBody">
            Não. A Covidografia é uma iniciativa sem fins lucrativos. A
            plataforma é e sempre será gratuíta, e nenhum dos dados recolhidos
            serão utilizados para fins comerciais.
            <br />
            <br />O movimento Tech4Covid19 poderá vir a procurar bolsas e
            donativos para a Covidografia, de forma a suportar os custos do
            serviço.
          </Typography>
        </Collapse>
        <Collapse title="Porque é que só me é possível registar com conta Facebook ou Google?">
          <Typography variant="smallBody">
            Sendo um movimento de voluntários, e tendo em conta a urgência do
            momento em que vivemos, optamos por soluções que nos permitam
            avançar mais rapidamente. Estes fornecedores de identidade servem
            apenas para a autenticação na Covidografia, não tendo acesso a
            nenhum dos dados reportados na Covidografia. Nas próximas versões da
            Covidografia, iremos incluir novos métodos de autenticação.
          </Typography>
        </Collapse>
        <Collapse title="Porque é necessário introduzir o meu código postal e ano de nascimento?">
          <Typography variant="smallBody">
            O código postal é utilizado para permitir detetar zonas de maior
            risco e possivelmente conter mais rapidamente redes de contágio
            activas. Por sua vez, a idade é um dos factores de risco associados
            ao COVID-19.
          </Typography>
        </Collapse>
        <Collapse title="Os valores apresentados no quadro principal são dados oficiais?">
          <Typography variant="smallBody">
            Não. Os valores apresentados são o resultado agregado das respostas
            dos utilizadores na Covidografia e o facto de se tratarem de
            auto-avaliações por parte dos utilizadores deve ter sido em conta em
            qualquer análise.
          </Typography>
        </Collapse>
        <Collapse title="Devo indicar os meus sintomas diariamente, mesmo que não haja alterações?">
          <Typography variant="smallBody">
            Sim. Quanto maior for a frequência com que os utilizadores
            actualizem o seu estado, maior será o valor do conjunto de dados
            recolhidos para que as entidades e comunidade cientifica possam
            melhor compreender a evolução da pandemia.
          </Typography>
        </Collapse>
        <Collapse title="O meu sintoma não está listado - posso adicioná-lo?">
          <Typography variant="smallBody">
            Estamos constantemente a rever o estado da arte e a recolher
            sugestões da comunidade cientifíca. Estamos a ponderar para versões
            futuras a possibilidade de ter um campo adicional para os
            utilizadores poderem reportar qualquer outro sintoma que não está
            actualmente listado.
          </Typography>
        </Collapse>
        <Collapse title="Posso introduzir sintomas em nome de outra pessoa (ex.: um familiar)?">
          <Typography variant="smallBody">
            Na versão actual não é possível. Esperamos conseguir lançar em breve
            novas funcionalidades que permitam introduzir os sintomas de um
            familiar.
          </Typography>
        </Collapse>
        <Collapse title="Gostava de partilhar os meus sintomas com os meus familiares - posso fazê-lo?">
          <Typography variant="smallBody">
            Não é possível partilhar os seus sintomas com outros utilizadores.
          </Typography>
        </Collapse>
        <Collapse title="Tenho menos de 18 anos, posso usar a Covidografia?">
          <Typography variant="smallBody">
            Não. Para utilizar a Covidografia, é necessário dar consentimento
            para o tratamento dos dados e, como tal, é necessário maioridade.
            Para mais detalhes, consulte os nossos{" "}
            <Button
              href={`${data.site.siteMetadata.appSiteUrl}/#/terms-conditions`}
              type="textLink"
            >
              termos de utilização
            </Button>
            .
          </Typography>
        </Collapse>
        <Collapse title="Encontrei um erro na Covidografia - o que devo fazer?">
          <Typography variant="smallBody">
            Agradecemos todo e qualquer feedback sobre a Covidografia. Pedimos
            que entre em contacto connosco através do endereço{" "}
            <Button href="mailto:info@covidografia.pt" type="textLink">
              info@covidografia.pt
            </Button>
            .
          </Typography>
        </Collapse>
        <Collapse title="O que é o Código Covidografia?">
          <Typography variant="smallBody">
            Não necessita de um Código Covidografia para utilizar a plataforma.
            O Código Covidografia serve uma funcionalidade ainda em fase de
            testes, a qual permitirá a equipas médicas acompanhar os sintomas
            dos pacientes em isolamento domiciliário de forma automática.
          </Typography>
        </Collapse>
        <Collapse
          id="quero-ajudar"
          startOpen={isWantToHelpOpen}
          title="Quero ajudar no desenvolvimento da Covidografia - como devo fazer?"
        >
          <Typography variant="smallBody">
            Obrigado pelo teu interesse em ajudar-nos! Procuramos developers (vê{" "}
            <Button
              href="https://github.com/Tech4covid19/covidografia-onboarding"
              type="textLink"
            >
              aqui
            </Button>{" "}
            a nossa stack), marketeers e qualquer outro perfil que nos possa
            ajudar a ajudar! Lê primeiro o nosso{" "}
            <Button href="/codigo-conduta" type="textLink">
              Código de Conduta
            </Button>
            . Se achas que isto é para ti,{" "}
            <Button
              href="https://humaniaks.typeform.com/to/Yg5CS9"
              type="textLink"
            >
              regista-te aqui
            </Button>{" "}
            para poderes ter acesso ao nosso Slack, e procura-nos no canal
            #project_covidografia_public.
          </Typography>
        </Collapse>
      </div>
    </div>
  );
}
