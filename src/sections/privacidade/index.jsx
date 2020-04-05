import React from "react";
import Typography from "@/components/typography";
import Button from "@/components/button";
import privacidadeEsquema from "@/assets/privacidade-esquema.png";
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

export default function Privacidade() {
  const data = useStaticQuery(query);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <SectionContent title="Segurança e Privacidade de Dados">
          <Typography variant="smallBody">
            Os dados de sintomas armazenados não são identificáveis e não são
            correlacionáveis com dados de contacto. Isto foi possível graças à
            forma especial como os dados são tratados e armazenados. Veja mais
            em{" "}
            <Typography
              variant="smallBody"
              weight="bold"
              color="purple"
              className={styles.inlineText}
            >
              Como tratamos os seus dados.
            </Typography>
          </Typography>
          <Typography variant="smallBody">
            Os dados recolhidos não são partilhados com terceiros, exceto com as
            autoridades oficiais de saúde e comunidade científica, sendo que
            neste caso a partilha é feita de forma agregada e anónima. Os
            fornecedores de identidade, como o Facebook ou a Google, que são
            usados para o login, não recebem informação de contacto nem de
            relatórios de sintomas. Os fornecedores de identidade têm apenas o
            papel de autenticar o utilizador, garantido a segurança dos mesmos e
            garantindo que a duplicação de contas de utilizadores é minimizada,
            melhorando as estatísticas produzidas pela Covidografia. A
            Covidografia apenas recebe um identificador destes fornecedores.
          </Typography>
          <Typography variant="smallBody">
            Toda a operação da Covidografia respeita na íntegra o Regulamento
            Geral de Proteção de Dados pessoais (RGPD), desde o desenho dos
            processos com princípios fundamentais como “Privacy by Design” e
            “Data Minimization” (ver{" "}
            <Typography
              variant="smallBody"
              weight="bold"
              color="purple"
              className={styles.inlineText}
            >
              Como tratamos os seus dados.
            </Typography>
            ) até à obtenção do consentimento explícito para tratamento de dados
            pessoais e todos os direitos salvaguardados no RGPD:
          </Typography>
          <Typography variant="ul">
            <li>
              Ao esquecimento, limitação e oposição, por uso da funcionalidade
              disponível na aplicação para eliminar a conta;
            </li>
            <li>De acesso e de retificação, por uso direto da aplicação;</li>
            <li>À portabilidade.</li>
          </Typography>
          <Typography variant="smallBody">
            A Política de Privacidade completa da Covidografia.pt pode ser
            encontrada{" "}
            <Button
              href={`${data.site.siteMetadata.appSiteUrl}/#/privacy-policy`}
              type="sectionLink"
            >
              aqui.
            </Button>
          </Typography>
        </SectionContent>
        <SectionContent title="Escrutínio">
          <Typography variant="smallBody">
            Código aberto: todo o software por detrás da Covidografia está
            inteiramente disponível no repositório da associação Tech4Covid19 em{" "}
            <Button href="https://github.com/tech4covid19" type="sectionLink">
              https://github.com/tech4covid19.
            </Button>{" "}
            A decisão de atuar desde o primeiro dia com código aberto era a
            única que fazia sentido, tanto pelo nível de transparência que uma
            aplicação deste género obriga como pelo sentido de permitir ser
            utilizado e reaproveitado sem barreiras de tempo, de coordenação,
            económicas ou mesmo as linguísticas, por outras organizações noutros
            países.
          </Typography>
          <Typography variant="smallBody">
            Tratamento de dados pessoais: associaram-se à Tech4Covid19
            especialistas no regulamento geral de proteção de dados pessoais dos
            melhores gabinetes jurídicos em Portugal, que acompanham, reveem,
            validam e orientam toda a forma como a Covidografia opera
          </Typography>
        </SectionContent>
        <SectionContent title="Governance">
          <Typography variant="smallBody">
            Embora a Covidografia tenha centenas de contribuidores voluntários,
            o acesso à infraestrutura que serve a Covidografia.pt está limitado
            a um número restrito de pessoas, e qualquer alteração ao software
            requer a autorização de pelo menos duas dessas pessoas.
          </Typography>
          <Typography variant="smallBody">
            A Tech4Covid19 é a associação por detrás da Covidografia. A
            Tech4Covid19 é uma associação formalmente constituída como APCT -
            Associação de Apoio à Comunidade Tech4Covid19, com sede na Rua da
            Constituição, Nº 352, 4200-192 Porto, pessoa coletiva número
            515961620. É uma associação sem fins lucrativos, nascida
            recentemente pelas mãos de dezenas de fundadores das startups
            tecnológicas nacionais para juntar e coordenar esforços das suas
            equipas e todos os cidadãos interessados em combater o COVID-19 e as
            suas consequências sociais, económicas e saúde pública. Mais
            informação em{" "}
            <Button href="https://tech4covid19.org" type="sectionLink">
              tech4covid19.org.
            </Button>
          </Typography>
          <Typography variant="smallBody">
            A equipa do projeto Covidografia conta com mais de 100 voluntários
            especialistas em diversas áreas desde saúde pública e medicina
            intensiva e infecciosa a marketing, engenharia de produto e
            software, segurança aplicacional e legislação de segurança e
            privacidade de dados, unidos na missão de reduzir o número de
            afetados com COVID-19 e consequentemente reduzir o tempo da situação
            socioeconómica que Portugal enfrenta neste momento.
          </Typography>
        </SectionContent>
        <SectionContent title="Como tratamos os seus dados">
          <Typography variant="mediumBody" weight="bold">
            Proteção de Dados por Defeito
          </Typography>
          <Typography variant="smallBody">
            Para que seja assegurada a proteção de dados por defeito, a recolha
            de dados segue as seguintes regras fundamentais:
          </Typography>
          <Typography variant="smallBody">
            Dados pessoais, como endereço de email, são segregados e
            descorrelacionados com informação de saúde mais sensível, como a
            avaliação sintomática submetida pelo utilizador. A correlação só é
            temporariamente possível enquanto o utilizador tem uma sessão
            aberta. Este descorrelacionamento é obtido através da utilização de
            duas funções de encriptação diferentes aplicadas ao Identificador
            Único do Facebook. Isto resulta em dois novos Identificadores
            descorrelacionados, que são utilizados para guardar separadamente as
            duas classes de dados: dados pessoais e informação de saúde.
          </Typography>
          <Typography variant="smallBody">
            Eventos pessoais não são guardados com a mesma precisão que eventos
            relacionados com os dados de saúde, garantindo assim uma baixa
            correlação entre eles (por exemplo, apenas guarda o dia em que o
            utilizador submete a sua última atualização de estado sintomático,
            não guardando hora, minuto ou segundo).
          </Typography>
          <Typography variant="smallBody">
            O diagrama abaixo descreve com maior detalhe a forma como os dados
            são guardados.
          </Typography>
          <img
            className={styles.image}
            alt="diagrama privacidade"
            src={privacidadeEsquema}
          />
        </SectionContent>
        <SectionContent title="Conformidade com RGPD">
          <Typography variant="smallBody">
            As principais preocupações de conformidade com Regime Geral de
            Proteção de Dados (RGPD) incidem na base legal para o processamento
            dos dados e na garantia que os dados do utilizador são mantidos de
            forma segura e com mecanismos que assegurem uma proteção adequada no
            caso de possíveis vazamentos de dados. Para cumprir estes
            requisitos, os seguintes processos foram implementados, após a
            revisão por parte de várias equipas de apoio legal:
          </Typography>
          <Typography variant="smallBody">
            1. Formulários de consentimento explícito formam a base legal para o
            processamento dos dados. É requerido ao utilizador que
            explicitamente aceita que os seus dados sintomáticos sejam
            processados, assim como os seus dados pessoais, para efeitos de
            notificações. Métodos claros e fáceis para o utilizador poder
            requerer o acesso aos seus dados (Portabilidade de Dados) ou para
            requerer a eliminação de todos os seus dados (Direito ao
            Esquecimento).
          </Typography>
          <Typography variant="smallBody">
            2. Toda a informação pessoal associada com informação de saúde é
            pseudo-anonimizada com funções criptográficas antes de ser guardada,
            garantido um nível elevado de anonimato em caso de haver um
            vazamento de dados.
          </Typography>
          <Typography variant="smallBody">
            3. Todo o fluxo de dados de e para os dispositivos dos utilizadores
            são encriptadas (SSL).
          </Typography>
          <Typography variant="smallBody">
            4. O serviço está implementado de forma a manter todos os dados dos
            utilizadores dentro da União Europeia através da infraestrutura da
            Amazon AWS, um fornecedor de infraestrutura com elevadíssima
            reputação e várias certificações relevantes (ISO27001, SOC2 e 3).
          </Typography>
        </SectionContent>
        <SectionContent title="Medidas de Segurança">
          <Typography variant="smallBody">
            APIs privadas, como as de acesso a dados, são protegidas através de
            firewall que só permitem o acesso aos dados através de endereços de
            IP dedicados da Covidografia.pt e pelos endereços de IP dos
            utilizadores da plataforma.
          </Typography>
          <Typography variant="smallBody">
            As interfaces públicas com acesso restrito, como quadros
            operacionais, são acedidos via conexões encriptadas (HTTPS), e estão
            restringidos via uma combinação de nome de utilizador e palavra
            passe, ou então via serviços de autenticação escolhidos pelo
            utilizador (exemplo: Facebook). Adicionalmente, a utilização destes
            acessos é monitorizada e gravada para permitir auditorias.
          </Typography>
          <Typography variant="smallBody">
            A infraestrutura e o acesso à gestão do software estão protegidos
            por firewall, só permitindo acesso nos escritórios da equipa da
            Covidografia ou via VPNs privadas. Adicionalmente, estes acessos
            requerem também um conjunto de chaves privadas e passwords,
            garantindo que o acesso é limitado a membros ativos da equipa.
          </Typography>
          <Typography variant="smallBody">
            O armazenamento de dados na infraestrutura é encriptado (Amazon’sS3
            e RDS).
          </Typography>
        </SectionContent>
      </div>
    </div>
  );
}
