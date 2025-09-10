<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { shallowRef } from 'vue';

const faqs = shallowRef([
  {
    question: 'Wie ist der klassische Projektablauf bei einer Website oder einem Onlineshop?',
    answer: `
      <ul>
        <li>Erstes Kennenlernen und Beschreibung Ihres Vorhabens via Telefon oder Zoom, Bestimmung des Leistungsumfangs</li>
        <li>Sie erhalten ein schriftliches Angebot von mir</li>
        <li>Wenn nötig, Marken-Workshop</li>
        <li>Wenn nötig Brand / Logo Design</li>
        <li>Konzeption als Grundlage und Festlegung alles notwendigen Parameter</li>
        <li>Detailplanung von Design, Inhalten, Technik und zeitlichem Ablauf</li>
        <li>Technische Anpassung und Einrichtung des Content-Management-Systems (CMS) oder Onlineshops</li>
        <li>Gestaltung Screendesign u.a. nach Corporate Design, Vorgaben und Beispielen</li>
        <li>Abstimmung des Screendesigns</li>
        <li>Responsive Optimierung, damit die Ansicht auf allen Geräten optimal ist</li>
        <li>Anlegen / Datenmigration der Inhalte im CMS oder Onlineshop wie vereinbart</li>
        <li>Abnahme des Projekts</li>
        <li>Launch — Ihr Projekt geht online</li>
        <li>Support und Betreuung wie Pflege, Anpassungen, Updates und <a href="https://www.michael-hoemke.de/webdesign/angebote/lokales_marketing.php" target="_blank" rel="noopener noreferrer">werbliche Maßnahmen</a></li>
      </ul>
      <p>Welche Leistungen für Sie relevant sind skizzieren wir gemeinsam in unserem ersten Gespräch, das auch als Grundlage für ein ordentliches Angebot dient.</p>
    `,
  },
  {
    question: 'Können Sie Ihre Website oder Ihren Onlienshop selbstständig pflegen und erweitern?',
    answer: `
      <p>Sie können alle Inhalte selbstständig pflegen und erweitern. Im Vorwege erhalten Sie eine gründliche Einweisung von mir. Für Websites nutze ich je nach Aufgabenstellung Weblication © WordPress als CMS oder für Onlineshops Shopware, WooCoomerce oder Gambio als Shopsystem. Sollten Sie die Pflege nicht selbst durchführen wollen, kann ich dieses optional teilweise oder vollständig für Sie übernehmen.</p>
      <p>Für Backups und Updates kommt ein zusätzlicher technischer Aufwand dazu. Dieser benötigt bei den meisten Systemen ein gewisses Fachwissen und sollte daher möglichst nicht eigenständig durchgeführt werden. Auch diese Aufgabe übernehme ich gerne regelmäßig und zeitnah optional für Sie.</p>
    `,
  },
  {
    question: 'Was kostet eine Website oder ein Onlineshop',
    answer: `
      <p>Die Kosten für eine Website oder einen Onlineshop richten sich natürlich nach dem Umfang des Projektes. Um Ihnen dennoch eine sinnvolle Übersicht zu geben, können Sie sich an den folgenden Erfahrungswerten orientieren:</p>
      <ul>
        <li>Landingpage (Onepager) mit Weblication: 200 Euro - 2.800 Euro</li>
        <li>Website : 600 Euro bis 5.000 Euro</li>
        <li>Onlineshop : 2.200 Euro bis 4.000 Euro</li>
        <li>Onlineshop mit CMS: 2.200 Euro bis 4.000 Euro (inkl. Website und Blog)</li>
      </ul>
    `,
  },
  {
    question: 'Benötigen Sie eine neue Website oder einen neuen Onlineshop?',
    answer: `
      <p>Wenn Ihre Website oder Ihr Onlineshop technisch und/oder optisch nicht mehr dem aktuellen Stand entspricht, ist diese Frage meistens leicht zu beantworten. Aber auch eine neue Website oder Onlineshop kann an der »Aufgabe vorbei« realisiert worden sein. Die klassischen Schwachstellen sind veraltetes Design, eine Codierung, die auf unterschiedlichen Geräten nicht mehr funktioniert, fehlende Funktionalität oder Kompatibilität und überholte, unsichere Software. Wenn Ihr Business von Ihrem Onlineauftritt abhängig ist und Sie Ihren Lebensunterhalt damit bestreiten, steht es außer Frage, wirklich alles dafür zu tun, dass dieser wichtige Part optimal für Sie arbeitet!</p>
    `,
  },
  {
    question: 'Ist die Website oder der Onlineshop Ihr Eigentum?',
    answer: `
      <p>Von mir entwickelte Websites und Onlineshops gehören Ihnen. Wenn, warum auch immer nötig, können Sie problemlos zu einem anderen Anbieter umziehen. Bei anderen Anbietern oder unflexiblen Baukastensystemen sind Sie oft abhängig vom jeweiligen Anbieter und müssten im Falle eines Wechsels möglicherweise eine komplett neue Website oder Onlineshop erstellen lassen. Alle Grafiken werden Ihnen auf Wunsch zur Verfügung gestellt, sofern es die Rechte zulassen und eventuell notwendige Domains und Software werden in Ihrem Namen erworben.</p>
    `,
  },
  {
    question: 'Ist die erstellte Printwerbung Ihr Eigentum?',
    answer: `
      <p>Für alle von mir erstellen Reinzeichnungen / Druckvorlagen erhalten Sie von mir ein räumlich und zeitlich unbegrenztes Nutzungsrecht für Ihr Unternehmen.</p>
    `,
  },
  {
    question: 'Wie lange dauert es bis alles fertig ist?',
    answer: `
      <p>Sie können sich die Antwort vermutlich schon fast denken: Es hängt vom Umfang und meiner Auslastung ab. Um Ihnen trotzdem ein paar Meilensteine anzubieten, hier eine grobe Einschätzung:</p>
      <ul>
        <li>Kleine Website: ca. 1 Monat</li>
        <li>Klassische Website für ein Unternehmen: ca. 2 Monate</li>
        <li>Kleiner Onlineshop: ca. 2 Monate</li>
        <li>Umfangreicher Onlineshop: ca. 6 Monate</li>
        <li>Ein Branddesign / Logo: ca. 1 Monat</li>
      </ul>
      <p>Aus langjähriger Erfahrung kann ich sagen, dass fast immer Verzögerungen auftreten werden, und sehr oft liegt das an der verspäteten Lieferung von Inhalten oder späten Feedbacks. Als Ihr Projektleiter versuche ich, dieses zu vermeiden, und diene gerne als »Reminder«. Bei großen Projekten kann es helfen, weitere Dienstleister ins Boot zu holen wie zum Beispiel einen Texter.</p>
    `,
  },
  {
    question: 'Warum ist ein Marken-Workshop sinnvoll?',
    answer: `
      <p>Der Marken-Workshop ist für Kunden, die noch keine konkrete Auszeichnung ihrer Marke und oder Produkte haben oder ein bestehendes Brand Design optimieren möchten. Ihr Erfolg liegt in der Kommunikation Ihrer Vorteile, deswegen erarbeiten wir gemeinsam Ihr Markenkonzept als Basis für alle weiteren Lösungen.</p>
    `,
  },
  {
    question: 'Was zeichnet meine Arbeit aus?',
    answer: `
      <p>Es gibt viele Angebote am Markt — warum könnten Sie sich für mich entscheiden? Ich verfüge über mehr als 25 Jahren Erfahrung aus vielen unterschiedlichsten Projekten und biete meinen Kunden eine Auswahl von 2 CMS und 3 Onlineshops. Der Nutzen für Sie daraus ist ein umfassendes Wissen und eine hohe Problemlösungsfähigkeit. Ich habe alle erdenklichen Situationen in Projekten erlebt, habe viele Trends kommen und gehen gesehen und weiß was funktioniert und was nicht. Dadurch wird man sehr anpassungsfähig, auch für zukünftige Anforderungen.</p>
      <p>Um herauszufinden, ob wir zusammenpassen, können Sie sich über mein Angebot, meine Referenzen und meinen Blog ein erstes Bild machen, das wir gerne anschließend in einem persönlichen Gespräch verfeinern können – Ich würde mich freuen.</p>
    `,
  },
  {
    question: 'Was sollten Sie als Kunde leisten?',
    answer: `
      <p>Es ist in erster Linie Ihr Projekt, das einen großen Einfluss auf die Zukunft Ihres Unternehmens hat. Planen Sie also genügend Zeit dafür ein. Ihre Mitarbeit wird für Feedbacks, Inhalte und weitere Zusammenarbeit benötig und oft unterschätzt. Zum Beispiel kann bei Onlineshops mit Wawi/ERP ein erheblicher Zeitaufwand durch Abstimmung und Datenerhebung entstehen.</p>
    `,
  },
  {
    question: 'In welchen Formaten sollten Bilder für Website und Onlineshop geliefert werden?',
    answer: `
      <p>Fotomotive (Landschaften, Menschen etc.) bitte als .jpg, freigestellte Motive bitte als .png und Motive mit viel Schrift oder Linien bitte als .gif oder .png. Logos wenn möglich bitte als .svg oder .eps. Alle Bildmotive möglichst Breitformat mit einer Breite von ca. 1800px.</p>
    `,
  },
 {
    question: 'Wie finden Sie geigneten einen Hosting-Provider?',
    answer: `
      <p><a href="https://www.michael-hoemke.de/webdesign/aktuelles/meldungen/suche_hostingprovider.php" target="_blank" rel="noopener noreferrer">Hosting-Leistungen</a> biete ich für meine Kunden nicht an, das machen spezialisierte Anbieter besser und für Sie als Kunden ist es auch vorteilhafter, Hosting und Olinedienstleistung zu trennen. Aber ich berate Sie natürlich sehr gerne und wähle ein passendes Hosting-Angebot für Sie aus und unterstütze Sie, wenn nötig bei der Buchung.</p>
    `,
  },
  {
    question: 'Was sollten Sie für SEO tun?',
    answer: `
      <p>Websites und Onlineshops für meine Kunden sind grundsätzlich SEO optimiert. Mit ausreichend gut geschriebenen und strukturierten Inhalten können Sie Ihr SEO ständig weiter optimieren. Zu jeder Zeit erhalten Sie bei Bedarf von mir Hilfestellung und wertvolle Tipps oder können weitere Leistungen in Anspruch nehmen.</p>
    `,
  },
  {
    question: 'Muss ich <meta keywords> pflegen?',
    answer: `
      <p>Weil immer mal wieder gefragt wird: Nein! das Meta-Tag "kewords" ist seit 2009 für das Raking in der Google Suche nicht mehr relevat.</p>
    `,
  },
  {
    question: 'Was sollten Sie zu Thema Barrierefreiheit beachten?',
    answer: `
      <p>Der <a href="https://www.barrierefreiheit-dienstekonsolidierung.bund.de/Webs/PB/DE/gesetze-und-richtlinien/barrierefreiheitsstaerkungsgesetz/barrierefreiheitsstaerkungsgesetz-node.html" target="_blank" rel="noopener noreferrer">European Accessibility Act (EAA)</a> verlangt von vielen Unternehmen, dass sie bis 2025 digital zugänglich sind. Aber trifft das auch speziell für Ihr Unternehmen zu?</p>
      <p>*Die Gesetzgebung sagt, dass Unternehmen die Waren oder Dienstleistungen an Verbraucher und Endnutzer anbieten, einen Gesamtmsatz von mehr als 2 Mio. / Jahr und mind. 10 Mitarbeiter haben, ihre Websites definitiv auf Barrierefreiheit ab dem 28.06.2025 ausrichten müssen.</p>
      <p>*Der Umkehrschluss besagt also: Unternehmen, die Ihre Waren oder Dienstleistungen ausschließlich B2B anbieten oder einen maximalen Gesamtumsatz von 2 Mio. / Jahr und weniger als 10 Mitarbeiter haben, sind von den neuen Regelungen ausgenommen.</p>
      <p>Grundsätzlich sollten Websites und Onlineshops allerdings so barrierefrei bzw. barrierearm wie möglich gestaltet werden. Schon allein aufgrund des wirtschaftlichen Faktors macht dies Sinn. Denn eine barrierefreie Website geht mit einer besseren Nutzererfahrung einher und kann damit die Konversionsrate erhöhen. Gerne berate ich Sie zu diesem Thema ausführlicher.</p>
      <p><small>*Alle Aussagen ohne gesetzliche Gewähr.</small></p>
    `,
  },
  {
    question: 'Funktionieren meine Websites und Onlineshops auch auf mobilen Geräten (responsive)?',
    answer: `
      <p>Eigentlich ist es schon sehr lange selbstverständlich, dass Websites und Onlineshops auf mobilen Geräten genauso funktionieren wie auf stationären Geräten (Desktops) oder Laptops mit größeren Bildschirmen und natürlich ist diese auch bei den von mir betreuten Projekten der Fall.</p>
      <p>Auch her gibt es in der Qualität Unterschiede: Eine automatische Anpassung an das genutzte Gerät kann anhand von "Breakpoints" gestaltet werden, dann wird exakt ab diesem Punkt und für diese Geräteklasse auf eine andere Ansicht geschaltet oder sie kann "fließend" gestaltet werden. "Fließend" bedeutet hier, dass auch geräteunabhängige Anpassungen beachtet werden, etwas für unterschiedliche Fenstergrößen auf einem Desktop. Dies sorgt für weniger unschöne Darstellungsfehler auch auf größeren Screens, denn niemand weiß, wie groß oder wie klein das Browserfenster dort genutzt wird.</p>
    `,
  },
]);
</script>

<template>
       <section id="Faq" class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10">
        <div class="space-y-4 text-left">
          <h4 class="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Frequently Asked Questions</h4>
          <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions? We've got answers. Here are some of the most common things people ask.
          </p>
        </div>

        <Accordion type="single" collapsible class="w-full text-foreground">
            <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index}`">
              <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
           <AccordionContent class="prose max-w-none prose-a:text-blue-600 prose-a:underline prose-a:hover:text-blue-800 dark:prose-invert" v-html="faq.answer" />
            </AccordionItem>
          </Accordion>
      </div>
  </section>
</template>