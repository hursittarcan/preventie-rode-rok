import {Box, chakra, ChakraProvider, Container, Divider, Text} from '@chakra-ui/react';
import Header from "../../components/Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";

function TermsAndConditions() {

    return (
        <ChakraProvider theme={customChakraTheme}>
            <>
                <Header style={{ boxShadow: "var(--chakra-shadows-sm)" }} />

                {/* Main Wrapper for Hero and Banner */}
                <Box position="relative" minH={`calc(100vh - 4.5rem)`}>
                    {/* Hero Section */}
                    <Box as="section" minH={`calc(100vh - 4.5rem)`} pt={{ base: '2rem', md: '3rem' }} pb={{ base: '0', md: '2rem' }} position="relative" style={{ overflow: "hidden" }}>
                        <Container position="relative" zIndex="1" maxW="container.lg">
                            <Box textAlign="left">
                                {/* Main Heading */}
                                <chakra.h1
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '2.5rem', lg: '4rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2"
                                >
                                    Onze algemene voorwaarden
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h1>

                                <Text
                                    mx='auto'
                                    color='gray.500'
                                    _dark={{color: 'gray.400'}}
                                    fontSize={{base: 'sm', lg: 'xl'}}
                                    mt='6'
                                >
                                    Laatst gewijzigd op: 14 december 2024, 17:37.
                                </Text>

                                <br/><br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    I.&nbsp;&nbsp;Identiteit van de onderneming en contact
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    Ondernemingsnaam: Codelab (Hursit Tarcan) <br/>
                                    Ondernemingsvorm: Natuurlijk persoon <br/>
                                    Handelsnaam: Codelab <br/>
                                    Adres van de zetel: Grote bameriklaan 28, 3511 Kuringen <br/>
                                    Ondernemingsnummer: 0798446986 <br/>
                                    Btw-nummer: BE0798446986 <br/>
                                </Text>

                                <br/>
                                <br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    II.&nbsp;&nbsp;Toepasselijkheid
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    <b>II.1</b> Deze algemene voorwaarden zijn van toepassing op alle diensten en
                                    activiteiten van, en alle overeenkomsten gesloten met, de natuurlijke persoon Hursit
                                    Tarcan, met ondernemingsnummer 0798446986, met zetel te Grote bameriklaan 28, 3511
                                    Kuringen, België en handelend onder de handelsnaam “Codelab” (hierna “Codelab”).

                                    <br/><br/>

                                    <b>II.2</b> Door gebruik te maken van onze diensten, ga je akkoord met deze algemene
                                    voorwaarden. Indien je niet akkoord gaat met deze algemene voorwaarden, dien je geen
                                    gebruik te maken van onze diensten.

                                    <br/><br/>

                                    <b>II.3</b> Indien tussen Codelab en de klant een afzonderlijke schriftelijke
                                    overeenkomst wordt gesloten, zullen de bepalingen van de afzonderlijke overeenkomst
                                    voorrang hebben op de algemene voorwaarden, voor zover hierin is toegestemd door
                                    Codelab. Deze algemene voorwaarden zullen dan dienen als aanvullend recht, voor
                                    zover van toepassing.

                                    <br/><br/>

                                    <b>II.4</b> Codelab behoudt zich het recht om deze algemene voorwaarden ten alle
                                    tijde te kunnen wijzigen, aanpassen of uitbreiden. Alle wijzigingen zullen worden
                                    gepubliceerd op de website (www.codelabgroup.com), samen met de datum van
                                    bijwerking.

                                    <br/><br/>

                                    <b>II.5</b> Eventuele nietigheid of ongeldigheid van een van deze voorwaarden brengt
                                    niet de nietigheid mee van de andere bedingen of van de overeenkomst. Partijen
                                    verbinden zich ertoe de nietige clausule(s) te vervangen door een rechtsgeldige
                                    clausule die zal overeenstemmen met de oorspronkelijke bedoeling van partijen en de
                                    geest van de overeenkomst en deze algemene voorwaarden, dan wel er zo dicht mogelijk
                                    bij zal aansluiten.
                                </Text>

                                <br/>
                                <br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    III.&nbsp;&nbsp;Diensten
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    <b>III.1</b> Codelab biedt diensten aan op het gebied van softwareontwikkeling en
                                    webontwikkeling, met name (maar niet gelimiteerd tot) het ontwikkelen van
                                    applicaties, het ontwikkelen van websites, het ontwikkelen van webshops, het
                                    ontwikkelen van software, het uitvoeren en ontwikkelen van bedrijfsautomatiseringen,
                                    en andere op maat gemaakte software oplossingen.

                                    <br/><br/>

                                    <b>III.2</b> Codelab biedt IT-consultancy en ondersteuningsdiensten aan. Met name
                                    (maar niet gelimiteerd tot) advies over de implementatie en optimalisatie van
                                    IT-systemen, begeleiding bij digitale transformatie, en ondersteuning bij technische
                                    problemen.
                                </Text>

                                <br/>
                                <br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    IV.&nbsp;&nbsp;Offerte, overeenkomst en uitvoering van de overeenkomst
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    <b>IV.1</b> Offerte en overeenkomst: voorafgaand aan het verlenen van onze diensten
                                    zal er een offerte worden opgesteld waarin de specifieke diensten en de kostprijs
                                    worden vastgelegd. Het bevestigen van de offerte, verbindt de klant en houdt een
                                    betalingsverplichting in.

                                    <br/><br/>

                                    <b>IV.2</b> Offertes gelden uitsluitend voor de in de offerte vermelde tijd. Tenzij
                                    uitdrukkelijk anders overeengekomen, is dit een termijn van veertien (14) dagen, te
                                    rekenen vanaf de dag van verzending.

                                    <br/><br/>

                                    <b>IV.3</b> De klant zal steeds vooraf op de hoogte worden gesteld van eventuele
                                    bijkomende kosten, voordat ze gemaakt worden.

                                    <br/><br/>

                                    <b>IV.4</b> Opleveringstermijnen worden enkel bij wijze van inlichting verstrekt en
                                    zijn derhalve niet bindend voor Codelab, tenzij uitdrukkelijk anders overeengekomen
                                    werd tussen partijen. Codelab doet er in ieder geval alles aan om steeds binnen een
                                    redelijk termijn (twee tot acht werkweken) de opdracht uit te voeren en op te
                                    leveren.

                                    <br/><br/>

                                    <b>IV.5</b> De klant is er zich van bewust dat hij of zij mee de
                                    verantwoordelijkheid draagt voor het behalen van de beoogde opleveringstermijn. De
                                    klant verbindt er zich toe om steeds, in de mate van het mogelijke, binnen een
                                    termijn van twee (2) werkdagen antwoord te verschaffen op de vragen van Codelab
                                    m.b.t. het aanleveren of verschaffen van informatie die nodig is om de opdracht te
                                    kunnen uitvoeren. Indien de klant geen antwoord verschaft binnen de gestelde
                                    termijn, is hij of zij zich ervan bewust dat de opleveringsdatum kan worden
                                    opgeschoven en dat dit kan leiden tot bijkomende kosten.

                                    <br/><br/>

                                    <b>IV.6</b> Vertraging in de oplevering en/of uitvoering kan evenwel nooit
                                    aanleiding geven tot boete, schadevergoeding, ontbinding van de overeenkomst of
                                    weigering om de gevraagde producten of diensten in ontvangst te nemen bij
                                    oplevering.
                                </Text>

                                <br/>
                                <br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    V.&nbsp;&nbsp;Tarieven en betalingen
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    <b>V.1 Tarieven:</b> De tarieven van onze diensten worden steeds duidelijk vermeld
                                    in de offerte, afzonderlijke overeenkomst (indien van toepassing) of op onze
                                    website. Betalingen dienen te worden voldaan volgens de afspraken en termijnen zoals
                                    vastgesteld in deze algemene voorwaarden, of indien anders overeengekomen, in de
                                    overeenkomst.

                                    <br/><br/>

                                    <b>V.2 Betalingsvoorwaarden:</b> Facturen dienen betaald te worden binnen een
                                    termijn van uiterlijk dertig (30) dagen na ontvangst ervan. Bij niet-tijdige
                                    betaling behouden we ons het recht om verdere dienstverlening op te schorten of te
                                    beëindigen.

                                    <br/><br/>

                                    <b>V.3</b> Bij niet-betaling van een factuur op de vervaldag, worden alle
                                    openstaande facturen onmiddellijk en volledig opeisbaar.

                                    <br/><br/>

                                    <b>V.4 Interesten bij laattijdige betaling:</b> Wanneer de factuur niet werd voldaan
                                    binnen de termijn van dertig (30) dagen te rekenen vanaf de dag na de dag van
                                    ontvangst van de factuur, wordt:
                                    <ul style={{padding: '20px'}}>
                                        <li>Het openstaande bedrag van rechtswege en zonder ingebrekestelling verhoogd
                                            met een intrest. Deze intrest is de intrest tegen de referentie-intrestvoet
                                            vermeerderd met acht procentpunten en afgerond tot het hogere halve
                                            procentpunt.
                                        </li>
                                        <li>Er van rechtswege en zonder voorafgaande ingebrekestelling bijkomend een
                                            bedrag van minimaal 40 euro aangerekend ter vergoeding van de
                                            invorderingskosten.
                                        </li>
                                    </ul>

                                    <br/><br/>

                                    <b>V.5</b> Bedragen worden steeds weergegeven exclusief btw (21%) en zijn steeds in
                                    euro’s.

                                    <br/><br/>

                                    <b>V.6</b> Codelab behoudt zich steeds het recht voor om voorschotten te vragen.
                                </Text>

                                <br/><br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    VI.&nbsp;&nbsp;Aansprakelijkheid
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    <b>VI.1</b> De aansprakelijkheid van Codelab is steeds beperkt tot directe schade en
                                    is enkel inroepbaar voor zover deze het gevolg zou zijn van opzettelijke, zware fout
                                    of bedrog door Codelab. Codelab is nooit aansprakelijk voor of gehouden tot
                                    vergoeding van immateriële, indirecte of gevolgschade, met inbegrip van (doch niet
                                    beperkt tot) winstderving, omzetverlies, inkomstenderving, productiebeperkingen,
                                    administratie- of personeelskosten, een verhoging van de algemene kosten, verlies
                                    van cliënteel of vorderingen van derden.

                                    <br/><br/>

                                    <b>VI.2</b> Geen garanties: De overeenkomst die tot stand komt tussen de cliënt en
                                    Codelab houdt een inspanningsverbintenis in van Codelab, en is nooit een
                                    resultaatsverbintenis. Hoewel we ons steeds inzetten om hoogwaardige en op maat
                                    gemaakte software- en weboplossingen te leveren, kunnen we geen garantie geven op
                                    specifieke resultaten of uitkomsten van de geleverde diensten.

                                    <br/><br/>

                                    <b>VI.3</b> Het totaal van de aansprakelijkheid van Codelab kan nooit hoger zijn dan
                                    het bedrag van de aan haar toekomende vergoeding.

                                    <br/><br/>

                                    <b>VI.4</b> In geval van overmacht mag Codelab de uitvoering van de opdracht geheel
                                    of gedeeltelijk opschorten, en dit voor de duur van de overmacht. Zij is niet
                                    aansprakelijk voor enige directe of indirecte schade in geval van overmacht.
                                    Overmacht is de situatie waarbij een onvoorziene en onvermijdbare gebeurtenis zich
                                    voordoet, buiten de wil van de schuldenaar, en die een onoverkomelijk beletsel
                                    uitmaakt voor de nakoming van de verplichting of verbintenis.

                                    <br/><br/>

                                    <b>VI.5</b> Indien Codelab, bij het ontstaan van de overmachtsituatie, al
                                    gedeeltelijk aan haar verplichtingen heeft voldaan, of slechts gedeeltelijk aan haar
                                    verplichtingen kan voldoen, is zij gerechtigd het reeds uitgevoerde werk of de reeds
                                    geleverde materialen, afzonderlijk te factureren en is de cliënt gehouden deze
                                    factuur te voldoen.

                                    <br/><br/>

                                    <b>VI.6</b> Indien de cliënt een toerekenbare tekortkoming vaststelt, moet hij of
                                    zij Codelab hiervan zo snel mogelijk per e-mail op de hoogte brengen. Dit kan de
                                    klant doen door een e-mail te sturen naar hello@codelabgroup.com, waarin hij of zij
                                    de tekortkomingen nauwkeurig en gedetailleerd beschrijft.

                                    <br/><br/>

                                    <b>VI.7</b> Volgend op de ingebrekestelling van de cliënt, heeft Codelab steeds het
                                    recht om de tekortkoming te herstellen.

                                    <br/><br/>

                                    <b>VI.8</b> Indien de cliënt door een contractuele of buitencontractuele
                                    tekortkoming uit zijn hoofde, de aansprakelijkheid van Codelab in het gedrang
                                    brengt, dient hij of wij alle nodige maatregelen te nemen om Codelab te vrijwaren
                                    van elke schade die wij hierdoor kan oplopen.
                                </Text>

                                <br/><br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    VII.&nbsp;&nbsp;Intellectuele eigendomsrechten
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    <b>VII.1</b> Alle intellectuele eigendomsrechten met betrekking tot de inhoud van
                                    onze website, waaronder teksten, afbeeldingen, logo’s en ontwerpen, zijn eigendom
                                    van Hursit Tarcan, handelend onder de commerciële naam Codelab, of haar
                                    licentiegevers. Dit omvat ook de door Codelab ontwikkelde software, applicaties en
                                    bedrijfsautomatiseringen.

                                    <br/><br/>

                                    <b>VII.2</b> Het is niet toegestaan om, zonder voorafgaande schriftelijke
                                    toestemming van de rechthebbende, materiaal van onze website te kopiëren,
                                    reproduceren, verspreiden of op enige andere wijze te gebruiken.

                                    <br/><br/>

                                    <b>VII.3</b> De cliënt verkrijgt, na betaling van de overeengekomen prijs, de
                                    intellectuele eigendomsrechten op datgene dat Codelab in zijn of haar opdracht heeft
                                    opgesteld, met dien verstande dat alle door Codelab opgestelde en/of ter beschikking
                                    gestelde materialen enkel mogen gebruikt worden voor de vooraf gecommuniceerde
                                    doeleinden en/of bestemmingen.

                                    <br/><br/>

                                    <b>VII.4</b> De cliënt aanvaardt dat Codelab te allen tijde een verwijzing mag maken
                                    naar zijn of haar handelsnaam en/of handelsketen bij wijze van referentie, tenzij
                                    uitdrukkelijk anders wordt overeengekomen.
                                </Text>

                                <br/><br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    VIII.&nbsp;&nbsp;Vertrouwelijkheid
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    <b>VIII.1</b> Alle informatie die tijdens onze gesprekken en consultaties wordt
                                    gedeeld, wordt vertrouwelijk behandeld. Codelab wal geen vertrouwelijke informatie
                                    delen met derden zonder uw toestemming, tenzij dit wettelijk verplicht is.
                                </Text>

                                <br/><br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    IX.&nbsp;&nbsp;Verwerking van persoonsgegevens
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    <b>IX.1</b> Codelab hecht veel waarde aan uw privacy. In ons privacybeleid leggen we
                                    uit welke persoonlijke gegevens we verzamelen, hoe we ze gebruiken, delen en
                                    beschermen.

                                    <br/><br/>

                                    <b>IX.2</b> U kunt ons privacybeleid steeds raadplegen op onze website
                                    (www.codelabgroup.com). We raden u aan om dit privacybeleid zorgvuldig door te
                                    lezen.
                                </Text>

                                <br/><br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    X.&nbsp;&nbsp;Toepasselijk recht en geschillenbeslechting
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    <b>X.1</b> Op deze algemene voorwaarden is het Belgische recht van toepassing. In
                                    geval van geschillen die voortvloeien uit of verband houden met deze voorwaarden of
                                    het gebruik van onze diensten, zullen partijen streven naar een minnelijke
                                    oplossing. Indien een minnelijke oplossing niet mogelijk is, worden geschillen
                                    voorgelegd aan de bevoegde rechtbanken van het gerechtelijk arrondissement Limburg,
                                    afdeling Hasselt.
                                </Text>

                                <br/><br/>

                                <chakra.h2
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '1.5rem', lg: '2.25rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2">
                                    XI.&nbsp;&nbsp;Contactgegevens
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h2>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    Als u vragen heeft over deze algemene voorwaarden of onze diensten, kunt u contact met ons opnemen via:

                                    <br/><br/>

                                    Codelab

                                    <br/><br/>

                                    Grote bameriklaan 28 <br/>
                                    3511 Kuringen <br/>
                                    België

                                    <br/><br/>

                                    E-mail: hello@codelabgroup.com <br/>
                                    Gsm: +32 (0) 4 88 02 98 30 / +32 (0) 4 56 69 09 10
                                </Text>

                                <br/><br/>
                                <br/><br/>
                            </Box>
                        </Container>
                    </Box>
                </Box>
                <Divider/>
                <Footer/>
                <Box display={{base: 'none', md: 'block'}}>
                    <Copyright/>
                </Box>
            </>
        </ChakraProvider>
    );
}

export default TermsAndConditions;
