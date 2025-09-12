<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Button } from '@/components/ui/button';

// 1. Initialize vue-i18n
const { t, locale, setLocaleMessage, availableLocales } = useI18n();

// 2. Define English and German translations
const messages = {
  en: {
    privacyPolicy: {
      title: 'Privacy Policy',
      language: 'Switch to German',
      sections: {
        introduction: {
          title: '1. Introduction and Contact Details of the Controller',
          p1: 'We are pleased that you are visiting our website and thank you for your interest. Below, we inform you about how we handle your personal data when you use our website. Personal data is any data with which you can be personally identified.',
          p2: 'The controller for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is Michael Hömke, Hauptstrasse 11, 16269 Wriezen OT Haselberg, Germany, Tel.: +49 – (0) 33456 -150010, Fax: +49 – (0) 33456 – 150011, E-Mail: info@atelier-ferox.de. The controller responsible for the processing of personal data is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data.',
        },
        dataCollection: {
          title: '2. Data Collection When Visiting Our Website',
          p1: 'When you use our website for informational purposes only, i.e., if you do not register or otherwise provide us with information, we only collect data that your browser transmits to the page server (so-called "server log files"). When you visit our website, we collect the following data, which is technically necessary for us to display the website to you:',
          list: [
            'Our visited website',
            'Date and time of access',
            'Amount of data sent in bytes',
            'Source/reference from which you came to the page',
            'Browser used',
            'Operating system used',
            'IP address used (if applicable: in anonymized form)',
          ],
          p2: 'Processing is carried out in accordance with Art. 6 (1) (f) GDPR on the basis of our legitimate interest in improving the stability and functionality of our website. The data will not be passed on or used in any other way. However, we reserve the right to check the server log files subsequently if there are concrete indications of illegal use.',
          p3: 'For security reasons and to protect the transmission of personal data and other confidential content (e.g., orders or inquiries to the controller), this website uses SSL or TLS encryption. You can recognize an encrypted connection by the string "https://" and the lock symbol in your browser line.',
        },
        hosting: {
            title: '3. Hosting & Content Delivery Network',
            p1: 'For hosting our website and displaying the page content, we use a provider who provides its services either itself or through selected sub-contractors exclusively on servers within the European Union.',
            p2: 'All data collected on our website is processed on these servers.',
            p3: 'We have concluded a data processing agreement with the provider, which ensures the protection of our site visitors\' data and prohibits unauthorized disclosure to third parties.',
        },
        cookies: {
            title: '4. Cookies',
            p1: 'To make visiting our website attractive and to enable the use of certain functions, we use cookies, which are small text files that are stored on your device. Some of these cookies are automatically deleted after you close your browser (so-called "session cookies"), while others remain on your device for a longer period and allow page settings to be saved (so-called "persistent cookies"). In the latter case, you can find the storage duration in the overview of your web browser\'s cookie settings.',
            p2: 'If personal data is also processed by individual cookies we use, the processing is carried out in accordance with Art. 6 (1) (b) GDPR for the performance of a contract, in accordance with Art. 6 (1) (a) GDPR in the case of given consent, or in accordance with Art. 6 (1) (f) GDPR to protect our legitimate interests in the best possible functionality of the website and a customer-friendly and effective design of the site visit.',
            p3: 'You can set your browser to be informed about the setting of cookies and decide individually on their acceptance or exclude the acceptance of cookies for certain cases or in general.',
            p4: 'Please note that if you do not accept cookies, the functionality of our website may be limited.',
        },
        contact: {
          title: '5. Contacting Us',
          p1: 'Within the scope of contacting us (e.g., via contact form or email), personal data is collected. Which data is collected in the case of a contact form can be seen from the respective contact form. This data is stored and used exclusively for the purpose of answering your request or for establishing contact and the associated technical administration.',
          p2: 'The legal basis for processing this data is our legitimate interest in responding to your request in accordance with Art. 6 (1) (f) GDPR. If your contact is aimed at concluding a contract, the additional legal basis for the processing is Art. 6 (1) (b) GDPR. Your data will be deleted after the final processing of your request. This is the case if it can be inferred from the circumstances that the matter in question has been finally clarified and provided that there are no statutory retention obligations to the contrary.',
        },
        rights: {
          title: '11. Rights of the Data Subject',
          p1: 'The applicable data protection law grants you comprehensive rights as a data subject (rights of access and intervention) with regard to the processing of your personal data by the controller, about which we inform you below:',
          list: [
            'Right of access pursuant to Art. 15 GDPR;',
            'Right to rectification pursuant to Art. 16 GDPR;',
            'Right to erasure (“right to be forgotten”) pursuant to Art. 17 GDPR;',
            'Right to restriction of processing pursuant to Art. 18 GDPR;',
            'Right to notification pursuant to Art. 19 GDPR;',
            'Right to data portability pursuant to Art. 20 GDPR;',
            'Right to withdraw consent given pursuant to Art. 7 (3) GDPR;',
            'Right to lodge a complaint with a supervisory authority pursuant to Art. 77 GDPR.',
          ],
        },
        objection: {
          title: 'RIGHT TO OBJECT',
          p1: 'IF, WITHIN THE FRAMEWORK OF A BALANCING OF INTERESTS, WE PROCESS YOUR PERSONAL DATA ON THE BASIS OF OUR OVERRIDING LEGITIMATE INTEREST, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THIS PROCESSING WITH EFFECT FOR THE FUTURE FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION.',
          p2: 'IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP PROCESSING THE DATA CONCERNED. HOWEVER, WE RESERVE THE RIGHT TO CONTINUED PROCESSING IF WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, FUNDAMENTAL RIGHTS AND FREEDOMS, OR IF THE PROCESSING SERVES THE ESTABLISHMENT, EXERCISE OR DEFENSE OF LEGAL CLAIMS.',
          p3: 'IF YOUR PERSONAL DATA IS PROCESSED BY US FOR THE PURPOSE OF DIRECT MARKETING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH MARKETING. YOU MAY EXERCISE THE OBJECTION AS DESCRIBED ABOVE.',
          p4: 'IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP PROCESSING THE DATA CONCERNED FOR DIRECT MARKETING PURPOSES.',
        },
        duration: {
          title: '12. Duration of Storage of Personal Data',
          p1: 'The duration of the storage of personal data is determined by the respective legal basis, the purpose of processing and, if relevant, additionally by the respective statutory retention period (e.g., commercial and tax retention periods).',
        },
      },
    },
  },
};

availableLocales.forEach(lang => {
    if (messages[lang]) {
        setLocaleMessage(lang, messages[lang]);
    }
});

// 4. Function to toggle language
const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'de' : 'en';
};
</script>

<template>
  <div class="bg-background text-foreground p-4 md:p-8">
    <div class="max-w-4xl mx-auto container space-y-8">
      <header class="flex justify-between items-center border-b pb-4">
        <h1 class="text-3xl md:text-4xl font-bold text-primary">
          {{ t('privacyPolicy.title') }}
        </h1>
        <Button variant="outline" @click="toggleLanguage">
          {{ t('privacyPolicy.language') }}
        </Button>
      </header>

      <main class="space-y-6 prose dark:prose-invert max-w-none">
        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.introduction.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.introduction.p1') }}</p>
          <p>{{ t('privacyPolicy.sections.introduction.p2') }}</p>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.dataCollection.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.dataCollection.p1') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li v-for="item in t('privacyPolicy.sections.dataCollection.list').split(',')" :key="item">{{ item.trim() }}</li>
          </ul>
          <p>{{ t('privacyPolicy.sections.dataCollection.p2') }}</p>
          <p>{{ t('privacyPolicy.sections.dataCollection.p3') }}</p>
        </section>
        
        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.hosting.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.hosting.p1') }}</p>
          <p>{{ t('privacyPolicy.sections.hosting.p2') }}</p>
          <p>{{ t('privacyPolicy.sections.hosting.p3') }}</p>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.cookies.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.cookies.p1') }}</p>
          <p>{{ t('privacyPolicy.sections.cookies.p2') }}</p>
          <p>{{ t('privacyPolicy.sections.cookies.p3') }}</p>
          <p>{{ t('privacyPolicy.sections.cookies.p4') }}</p>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.contact.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.contact.p1') }}</p>
          <p>{{ t('privacyPolicy.sections.contact.p2') }}</p>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.rights.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.rights.p1') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li v-for="item in t('privacyPolicy.sections.rights.list').split(',')" :key="item">{{ item.trim() }}</li>
          </ul>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-destructive-foreground bg-destructive p-2 rounded-md uppercase">
            {{ t('privacyPolicy.sections.objection.title') }}
          </h2>
          <p class="font-bold">{{ t('privacyPolicy.sections.objection.p1') }}</p>
          <p>{{ t('privacyPolicy.sections.objection.p2') }}</p>
          <p class="font-bold">{{ t('privacyPolicy.sections.objection.p3') }}</p>
          <p>{{ t('privacyPolicy.sections.objection.p4') }}</p>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.duration.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.duration.p1') }}</p>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.prose h2 {
    margin-top: 1.5em;
    margin-bottom: 0.8em;
}
.prose p, .prose ul {
    margin-bottom: 1em;
}
</style>