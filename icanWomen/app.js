/** ICAN Women Foundation — vanilla JS per PRD (two-file site). Zero deps; CONFIG at top — replace placeholders before production. */

(() => {
  'use strict';

  /* ================================================================
     CONFIG — client-editable values  (PRD §11.2)
     Replace placeholder values before going live.
     ================================================================ */
  const CONFIG = {
    wayforpay: {
      paymentPageUrl: 'https://secure.wayforpay.com/page?vkh=6a042d1d-3cdc-4c40-bee4-0acd22d1dba8'
    },
    telegramBot: 'https://t.me/bo_bf_ican',
    defaultLang: 'ua'
  };

  /* ================================================================
     TRANSLATIONS  (PRD §6.1.1)
     ================================================================ */
  const translations = {
    ua: {
      a11y: { skip_main: 'Перейти до основного вмісту' },
      nav: {
        our_projects: 'Наші проекти',
        impact:       'Вплив',
        programs:     'Програми',
        reports:      'Звіти',
        stories:      'Історії',
        team:         'Команда',
        projects:     'Ініціативи',
        partners:     'Партнери',
        history_nav:  'Хронологія',
        contact:      'Контакти',
        donate_outline: 'Підтримати місію'
      },
      hero: {
        brand_lockup: 'I CAN',
        headline:    'Я зможу — ти зможеш',
        subheading:  'Фонд поруч із жінками й дітьми в прифронтових громадах Харківщини: психологічна підтримка, право й гуманітарна допомога — людяно й без зайвого шуму.',
        mission:     'Допомагати людям у складних обставинах подолати наслідки втрат і насильства та підсилювати жіноче лідерство через психосоціальну, освітню й гуманітарну підтримку.',
        impact_line: 'Разом ми вже підтримали понад 2&nbsp;300 родин лише через польові команди й хаби в 32 громадах.',
        cta_support: 'Підтримати місію',
        cta_get_help:'Отримати допомогу',
        cta_learn:   'Дізнатися більше про програми',
        cta_community:'До спільноти волонтерів',
        quote:       '«Ця спільнота допомогла мені почуватися менш самотньою» — учасниця групи підтримки.',
        trust1:      'Офіційна реєстрація в Україні й публічна звітність',
        trust2:      'Команди поруч із людьми, а не лише в чаті'
      },
      impact: {
        section_tag:   'У цифрах',
        title:         'Наш вплив',
        subtitle:      'Показуємо коротко, куди саме йде зусилля команди та партнерів щоквартально.',
        pillar_women:       'Жінок і родин із комплексною підтримкою',
        pillar_consults:    'Індивідуальних консультацій психологів і юристів',
        pillar_programs:    'Подій освіти, профілактики насильства та груп підтримки',
        pillar_volunteers:  'Активних волонтерів щомісяця',
        pillar_partners:    'Партнерських організацій у спільних програмах'
      },
      ourProjects: {
        section_tag: 'Наші проекти',
        headline:   'Ми там, де найскладніше — поруч із громадами на межі',
        body1:      'Благодійна організація ICAN заснована у 2023 році в Харкові; ми допомагаємо тим, хто найбільше постраждав від війни — через психосоціальну, освітню й гуманітарну підтримку жінок і дітей у Харківській області.',
        body2:      'Ми будуємо стійкість там, де вона потрібна найбільше — у невеликих містах і селах, куди рідко доходить системна допомога.',
        cta_report: 'Звіти про діяльність',
        cta_donate: 'Підтримати місію'
      },
      reports: {
        section_tag: 'Документи',
        headline:   'Звіт про діяльність',
        subtitle:   'Офіційні матеріали для партнерів, донорів і громади. Файли-плейсхолдери — замініть посилання на реальні PDF перед публікацією.',
        r2025:       'Річний звіт 2025',
        r2024:       'Річний звіт 2024',
        r_finance:   'Фінансовий звіт',
        download:    'Завантажити PDF'
      },
      programs: {
        section_tag: 'Напрямки діяльності',
        headline:   'Як ми допомагаємо',
        subheading: 'Три ключові напрями комплексної підтримки',
        pillar_support: {
          title: 'Комплексна підтримка й захист',
          body: 'Професійна психосоціальна допомога, зокрема конфіденційна підтримка для переживших насильство на ґрунті статі (ГЗН), а також правовий захист.'
        },
        pillar_women: {
          title: 'Посилення жінок',
          body: 'Розвиток лідерства, економічних можливостей і спеціалізованого простору «Хаб» для безпечної комунікації та навчання.'
        },
        pillar_child: {
          title: 'Підтримка й розвиток дітей',
          body: 'Психологічна адаптація, соціалізація та особлива увага до дітей з особливими освітніми потребами.'
        }
      },
      stories: {
        tag: 'Реальні історії',
        headline: 'Історії людей, не кейси для сайту',
        philosophy: 'Люди, а не кейси — це не слоган, а наш спосіб працювати з підтримкою й розповідями.',
        subtitle: 'Ми змінюємо імена й деталі, але зберігаємо форму допомоги — так чесно перед донором і безопасно для людини.',
        read_more: 'Читати далі',
        read_less: 'Згорнути',
        p1_name: 'Олена, учасниця програми',
        p1_a: 'Я приїхала всередині війни без «своїх стін» й без порадника. Спочатку було соромно навіть питати дорогу до лікаря.',
        p1_b: 'У хабі мені без черги підказали, як записатися до психолога державної лінії, а паралельно запросили до кола жінок, що збирається щотижня.',
        p1_help: 'Фонд дав три речі: живий простір без оцінювання, два юридичні супроводи щодо аліментів і пакунок гігієни, бо гроші пішли на оренду.',
        p2_name: 'Марія, кураторка волонтерів',
        p2_a: 'Наші активістки вигорають через постійний «режим тривожності» — хотілося місце, де можна просто перевести подих.',
        p2_b: 'ICAN дав ноутбук бухгалтеру, аптечку і шаблон графіка чергування. Мобільний психолог приїхав із нами тричі — це було видно очима громади.',
        p2_help: 'Ми тримаємо волонтерський чат уже 14 місяців без «вігоньок»: фонд платить символічну доплату локальній координаторці через прозору угоду.',
        p3_name: 'Юлія, партнерка-юристка',
        p3_a: 'На консультаціях ми бачимо: жінку лякає не закон — а відсутність супроводу. Одна фраза «ми запишемо разом» вже заспокоює.',
        p3_help: 'Спільно зібрали 12 модулів простою мовою про захист від насильства під час переїзду — і роздали партнерам у п’яти містах уздовж нашого маршруту.'
      },
      mission: {
        tag: 'Про ICAN',
        title: 'Історія, місія й цінності',
        body1: 'ICAN засновано у 2023 році в Харкові. Наша мета — допомагати тим, хто найбільше постраждав від війни.',
        mission_heading: 'Місія',
        body_mission: 'Допомагати людям у складних обставинах подолати наслідки втрат і насильства; сприяти жіночому лідерству через психосоціальну, освітню та гуманітарну підтримку.',
        values_heading: 'Цінності',
        val_trust: 'Довіра — надійність і підтримка без засудження.',
        val_safety: 'Безпека — право жити без насильства й турбота про добробут команди, щоб запобігти вигоранню.',
        val_respect: 'Повага — вислуховувати різні думки й шанувати межі.',
        val_solidarity: 'Солідарність і сестринство — взаємна підтримка й мережування без конкуренції.',
        val_responsibility: 'Відповідальність — підзвітність перед командою та людьми, яким ми допомагаємо.',
        quote: '«Коли поруч є люди без засудження, легше дихати навіть у найважчі тижні» — зворотний зв’язок учасниць програм ICAN.',
        cta_donate: 'Підтримати місію',
        cta_history: 'Подивитися історію фонду'
      },
      team: {
        tag: 'Про команду',
        headline: 'Кого ви фактично чекаєте в громадах',
        subtitle: 'Керівництво невелике навмисно — ми інвестуємо в локальну мережу більше, ніж у ряд широких чиновних посад.',
        p1_name: 'Ірина Сергеєнко',
        p1_role: 'Співзасновниця · керуюча партнерка',
        p1_bio: 'Тримає стратегію впливу, міжнародні грантові узгоди й ескалації, коли на кону безпека сімей у прифронтових селах.',
        p2_name: 'Кирило Пономарьов',
        p2_role: 'Координатор польових операцій',
        p2_bio: 'Будує маршрути мобільних бригад, синхронізує лікарню, школу й волонтерів там, де немає зайвої адмінструктури.',
        p3_name: 'Хмара волонтерів ICAN',
        p3_role: 'Фасилітатори на місцях і дистанційно',
        p3_bio: 'Юристи-про-боно, студентські логісти, пекарі домових кооперацій — ми даємо їм методички й ментора в штаті фонду.'
      },
      history: {
        tag: 'Короткий шлях',
        headline: 'Що встигло змінитися між хвилями',
        subtitle: 'Не повна біографія — дороговказ, як ми дорослішаємо поруч із громадами.',
        y1: '2023 — заснування ICAN у Харкові',
        d1: 'Старт роботи фонду з фокусом на людей, які найбільше постраждали від війни.',
        y2: '2024 — масштабування програм',
        d2: 'Розгортання психосоціальної підтримки, захисту та гуманітарної допомоги разом із партнерами.',
        y3: '2025 — звітність і партнерства',
        d3: 'Прозорі KPI, міжнародні гранти та сталі локальні точки доступу до допомоги в регіоні.',
        y4: 'Далі — стійкість громад',
        d4: 'Довгострокові програми для жінок і дітей, peer-мережі та економічне зміцнення родин.'
      },
      how: {
        section_tag: 'Методологія',
        headline: 'Як ми працюємо',
        step1: { title: 'Виявлення потреб',       body: 'Оцінюємо реальну ситуацію в кожній громаді через виїзди та партнерські організації.' },
        step2: { title: 'Комплексна відповідь',   body: 'Поєднуємо психологічну, юридичну та матеріальну підтримку в єдиний пакет допомоги.' },
        step3: { title: 'Залучення місцевих',     body: 'Навчаємо місцевих активісток та волонтерів, щоб підтримка тривала після нашого відходу.' },
        step4: { title: 'Моніторинг та звітність', body: 'Відстежуємо результати і публічно звітуємо перед донорами та громадою.' }
      },
      projects: {
        section_tag: 'Ініціативи',
        headline:  'Ключові проєкти',
        subheading: 'Чотири ініціативи підтримки громад',
        p1_tag:   'Інтегрована допомога',
        p1_title: '«Добрі руки»',
        p1_desc:  'Інтегрована психосоціальна та адресна соціальна допомога в Харківській області.',
        p2_tag:   'Стійкість і згуртованість',
        p2_title: 'Психологічна підтримка та соціальна згуртованість',
        p2_desc:  'Відновлення емоційної стійкості й зменшення соціальної ізоляції в постраждалих регіонах.',
        p3_tag:   'Пряма солідарність',
        p3_title: '«Від людини до людини»',
        p3_desc:  'Ініціатива збору коштів на основі прямої солідарності — підтримка дітей через події й подарунки.',
        p4_tag:   'Економіка й психологія',
        p4_title: 'P.E.A.C.E III',
        p4_desc:  'Підтримка жінок і дітей через розбудову економічних можливостей і професійну психологічну допомогу.'
      },
      donate: {
        headline:          'Ваша підтримка відкриває жінкам доступ до турботи й спільноти',
        subheading:        'Не «донат як кнопка» — а їжа, терапія, право на тишу для тих, хто тягне родину в прифронтових селах Харківщини.',
        emotional:         'Жодна гривня не йде на маркетинг — тільки виїзди, хаби й супровід волонтерів, яким теж потрібне пальне та страховки.',
        impact_200:       '200 ₴ — один шанс поговорити з психологом без черги',
        impact_500:       '500 ₴ — гідний гігієнічний набір для жінки й дитини',
        impact_1000:      '1000 ₴ — юридичний супровід + оформлення заяви',
        card_title:        'Підтримати',
        module_title:      'Підтримати',
        freq_monthly:      'Щомісячно',
        freq_once:         'Одноразово',
        freq_group_sr:     'Тип платежу',
        currency_label:    'Оберіть валюту',
        currency_group_sr: 'Валюта платежу',
        amount_label:      'Оберіть суму',
        other_amount:      'інша сума',
        custom_placeholder:'Введіть суму',
        custom_placeholder_uah: 'Сума в гривнях',
        custom_placeholder_usd: 'Сума в доларах США',
        custom_placeholder_eur: 'Сума в євро',
        cta:               'Продовжити до оплати',
        section_tag:       'Допомога',
        trust:             '🔒 Безпечна оплата WayForPay · Офіційний благодійний фонд України',
        error_amount:      'Мінімальна сума — 10 (у вибраній валюті)',
        error_amount_max:  'Максимум 999 999 за операцію',
        preset_sr:         'Готові суми лише в обраній валюті (за замовчуванням ₴)',
        impact_list_sr:    'Приклади, що може профінансувати ваш внесок',
        custom_sr_label:   'Сума платежу',
        cta_aria_label:    'Перейти на сторінку оплати WayForPay',
        amt250_aria:       'Пожертва у розмірі 250',
        amt500_aria:       'Пожертва у розмірі 500',
        amt1000_aria:      'Пожертва у розмірі 1000',
        amt5000_aria:      'Пожертва у розмірі 5000',
        bank_title:        'Реквізити для переказу',
        iban_uah_hint:     'UAH · IBAN',
        iban_usd_hint:     'USD · IBAN',
        iban_eur_hint:     'EUR · IBAN',
        copy_iban:         'Скопіювати',
        copied:            'Скопійовано!',
        gateway_label:     ''
      },
      partners: {
        section_tag: 'Партнери й разом із нами',
        headline:   'Партнери та громади, що нас підтримують',
        subheading: 'Міжнародні фонди, державні партнери та місцеві активні групи — усі на рівних у наших звітах.',
        community_note: 'Ми дякуємо релігійним общинам, школам і мікрогрантодавцям із діаспори — вони часто лишаються за кадром маркетингових фото, але тримають нашу логістику.'
      },
      volunteer: {
        section_tag: 'Волонтерство',
        headline:    'Долучайтесь як волонтери',
        subheading:  'Ваша година на тиждень у хабі або дистанційна перекладна сесія інколи важливіші за один великий чек.',
        ben1_title:  'Живий графік',
        ben1_body:   'Можемо синхронізувати з роботою; більшість задач сумісні із дистанцією або короткими змінами в хабі.',
        ben2_title:  'Наставництво',
        ben2_body:   'Кожному волонтеру призначаємо члена координ-команди, щоб ви не зависали в «невидимій» задачі.',
        ben3_title:  'Спільний розвиток',
        ben3_body:   'Раз на місяць — відкриті тренінги з польової етики без зайвого «корпоративного глянцю».',
        field_name:    'Повне ім\'я',
        field_email:   'Email',
        field_phone:   'Телефон',
        field_city:    'Місто / Регіон',
        field_message: 'Як ви можете допомогти?',
        field_consent_before: 'Я даю згоду на обробку персональних даних відповідно до',
        field_consent_link:   'Політики конфіденційності',
        cta:           'Долучитися до спільноти',
        success:       'Дякуємо! Ми зв\'яжемося з вами найближчим часом',
        success_detail:'Вашу заявку отримано успішно.',
        error:         'Щось пішло не так. Спробуйте ще раз.',
        err_name:      'Введіть ім\'я лише літерами (мінімум 2 символи)',
        err_email:     'Введіть коректну email-адресу',
        err_phone:     'Телефон: +380 і 9 цифр, або залиште порожнім',
        err_city:      'Вкажіть місто або регіон (літери, мінімум 2 символи)',
        err_message:   'Мінімум 20 символів',
        err_consent:   'Потрібна згода на обробку даних'
      },
      contact: {
        section_tag:        'Контакти',
        headline:           'Зв\'яжіться з нами',
        field_name:         'Ваше ім\'я',
        field_email:        'Email',
        field_subject:      'Тема',
        field_message:      'Повідомлення',
        select_placeholder: 'Оберіть тему...',
        subject_general:    'Загальне питання',
        subject_media:      'ЗМІ та Медіа',
        subject_partnership:'Партнерство',
        subject_help:       'Запит на допомогу',
        cta:                'Надіслати повідомлення',
        success:            'Повідомлення надіслано!',
        success_detail:     'Ми відповімо вам найближчим часом.',
        error:              'Щось пішло не так. Спробуйте ще раз.',
        err_name:           'Введіть ім\'я лише літерами (мінімум 2 символи)',
        err_email:          'Введіть коректну email-адресу',
        err_subject:        'Оберіть тему зі списку',
        err_message:        'Мінімум 10 символів'
      },
      form: {
        send_another_volunteer: 'Надіслати ще раз',
        send_another_contact:   'Написати ще раз'
      },
      footer: {
        mission:           'Ми створюємо відчуття опори там, де війна виснажує родини: поєднуємо психосоціальну допомогу, юридичну підтримку та гуманітарну логістику без маркетингового шуму.',
        tagline:           'З вами поруч для жінок і дітей у громадах Харківщини — чесно й по-людськи.',
        col1_title:        'Швидкі посилання',
        col_contact_title: 'Контакти',
        col2_title:        'Дії',
        col3_title:        'Юридичне',
        volunteer_link:    'До спільноти волонтерів',
        get_help:          'Отримати допомогу',
        reports_link:      'Фінзвіти',
        privacy:           'Політика конфіденційності',
        terms:             'Умови сайту',
        registration_link: 'Реєстраційні документи',
        registration:      'БФ «ICAN Women Foundation» · Код ЄДРПОУ: XXXXXXXX · Зареєстровано в Україні',
        rights:            '© 2024–2026 ICAN Women Foundation. Всі права захищені.'
      }
    },

    en: {
      a11y: { skip_main: 'Skip to main content' },
      nav: {
        our_projects: 'Our Projects',
        impact:       'Impact',
        programs:     'Programs',
        reports:      'Reports',
        stories:      'Stories',
        team:         'Team',
        projects:     'Initiatives',
        partners:     'Partners',
        history_nav:  'Timeline',
        contact:      'Contact',
        donate_outline: 'Support our mission'
      },
      hero: {
        brand_lockup: 'I CAN',
        headline:    'I can — so can you',
        subheading:  'Standing with women and children in Kharkiv’s frontline communities—psychological care, legal support and humanitarian relief, grounded in dignity and clarity.',
        mission:     'We help people in difficult circumstances overcome the consequences of loss and violence, and promote women’s leadership through psychosocial, educational and humanitarian support.',
        impact_line: 'Together we have already accompanied 2,300+ families through outreach teams and hubs spanning 32 municipalities.',
        cta_support: 'Support our mission',
        cta_get_help:'Get help',
        cta_learn:   'Learn more about our programmes',
        cta_community:'Join our community',
        quote:       '“This community helped me feel less alone” — participant in a support circle.',
        trust1:      'Registered Ukrainian foundation with public reporting',
        trust2:      'Field teams rooted in communities, not dashboards'
      },
      impact: {
        section_tag:   'Impact by numbers',
        title:         'Our impact',
        subtitle:      'Quarterly KPIs shared with municipalities, donors and the women steering local hubs.',
        pillar_women:       'Families receiving holistic accompaniment',
        pillar_consults:    'Individual psycholegal counselling sessions delivered',
        pillar_programs:    'Community trainings, resilience circles & prevention clinics',
        pillar_volunteers:  'Active volunteers each month maintaining logistics',
        pillar_partners:    'Partner organisations in joint programming'
      },
      ourProjects: {
        section_tag: 'Our projects',
        headline:   'We are where it\'s hardest — beside frontline communities',
        body1:      'ICAN is a charitable organisation founded in Kharkiv in 2023. We support those most affected by war—through psychosocial, educational and humanitarian assistance to women and children across Kharkiv region.',
        body2:      'We build resilience where it is needed most — in small towns and villages that rarely receive systematic aid.',
        cta_report: 'Activity reports',
        cta_donate: 'Support our mission'
      },
      reports: {
        section_tag: 'Documents',
        headline:   'Activity reports',
        subtitle:   'Official materials for partners, donors and communities. Placeholder links — replace with real PDF URLs before launch.',
        r2025:       'Annual report 2025',
        r2024:       'Annual report 2024',
        r_finance:   'Financial report',
        download:    'Download PDF'
      },
      programs: {
        section_tag: 'Areas of work',
        headline:   'How We Help',
        subheading: 'Three pillars of comprehensive support',
        pillar_support: {
          title: 'Comprehensive Support & Protection',
          body: 'Professional psychosocial support, including confidential assistance for survivors of gender-based violence (GBV), alongside legal protection.'
        },
        pillar_women: {
          title: 'Women’s Empowerment',
          body: 'Developing leadership, economic capacity and a specialised Hub space for secure communication and training.'
        },
        pillar_child: {
          title: 'Child Support & Development',
          body: 'Psychological adaptation and socialisation, with particular attention to children with special educational needs.'
        }
      },
      stories: {
        tag: 'Real voices',
        headline: 'People, not portfolio testimonials',
        philosophy: 'People, not cases — this is how we hold stories, data and dignity together.',
        subtitle: 'We change names and trim details to protect privacy while showing what shifts after support lands.',
        read_more: 'Read more',
        read_less: 'Show less',
        p1_name: 'Olena, programme participant',
        p1_a: 'Displacement takes more than a roof — it quietly erases your circle. I was ashamed to even ask how to find a therapist.',
        p1_b: 'The hub invited me to a listening circle, then walked me through two legal consults about child support while kids played in the corner.',
        p1_help: 'ICAN gave three grounded gifts: a shame-free room, paperwork help and dignity kits during the emptiest paycheck week.',
        p2_name: 'Mariya, volunteer lead',
        p2_a: 'Local activists were burning out from constant alert mode yet still feeding entire streets.',
        p2_b: 'ICAN financed the first rent month, coached us on safeguarding and brought mobile therapy teams three times alongside us.',
        p2_help: 'Our volunteer roster stayed above 40 people thanks to stipends routed transparently through the foundation.',
        p3_name: 'Yuliia, partner jurist',
        p3_a: 'People fear stigma more than statutes. Saying «we\'ll draft this together» calms quicker than brochures.',
        p3_help: 'We packaged 12 plain-language protections for women on the move and shipped them via ICAN vans to five county seats.'
      },
      mission: {
        tag: 'About ICAN',
        title: 'Our history, mission and values',
        body1: 'ICAN was founded in Kharkiv in 2023. Our aim is to support those most affected by war.',
        mission_heading: 'Mission',
        body_mission: 'We help people in difficult circumstances overcome the consequences of loss and violence; we promote women’s leadership through psychosocial, educational and humanitarian support.',
        values_heading: 'Values',
        val_trust: 'Trust — reliability and judgment-free support.',
        val_safety: 'Safety — the right to live free from violence and care for team wellbeing to prevent burnout.',
        val_respect: 'Respect — listening to diverse perspectives and honouring boundaries.',
        val_solidarity: 'Solidarity / sisterhood — mutual support and networking without competition.',
        val_responsibility: 'Responsibility — accountability to our team and to the people we serve.',
        quote: '“When someone stands beside you without judgment, it becomes easier to breathe—even in the hardest weeks.” — feedback from ICAN programme participants.',
        cta_donate: 'Support our mission',
        cta_history: 'See our timeline'
      },
      team: {
        tag: 'Meet the scaffolding',
        headline: 'Who actually answers your knock at the hub',
        subtitle: 'We keep HQ lean deliberately so municipalities and volunteers absorb the daylight budget.',
        p1_name: 'Iryna Serheienko',
        p1_role: 'Co-founder · managing partner',
        p1_bio: 'Keeps fiduciary relationships honest, translates donor intent into safeguarding rules and hops on night calls during escalations.',
        p2_name: 'Kyrylo Ponomarov',
        p2_role: 'Field mobilisation coordinator',
        p2_bio: 'Sequences mobile jurist buses, aligns schools and pharmacies on shared calendars when infrastructure is fractured.',
        p3_name: 'ICAN Volunteer Cloud',
        p3_role: 'Neighbour volunteers & remote pals',
        p3_bio: 'Pack parcels, babysit registrations, whisper-translate trauma stories — guided by mentors on payroll.'
      },
      history: {
        tag: 'Short arc',
        headline: 'Moments between waves',
        subtitle: 'Not a full biography—a compass for how we grow alongside communities.',
        y1: '2023 · ICAN founded in Kharkiv',
        d1: 'The foundation launches with a focus on people most affected by war.',
        y2: '2024 · Scaling programmes',
        d2: 'Expansion of psychosocial support, protection and humanitarian aid with partners.',
        y3: '2025 · Reporting & partnerships',
        d3: 'Transparent KPIs, international grants and sustained local access points for assistance.',
        y4: 'Ahead · Community resilience',
        d4: 'Long-term programmes for women and children, peer networks and household economic strengthening.'
      },
      how: {
        section_tag: 'Method',
        headline: 'How We Work',
        step1: { title: 'Needs Assessment',       body: 'We assess the real situation in each community through field visits and partner organisations.' },
        step2: { title: 'Comprehensive Response', body: 'We combine psychological, legal and material support into a single assistance package.' },
        step3: { title: 'Local Empowerment',      body: 'We train local activists and volunteers so support continues after our engagement ends.' },
        step4: { title: 'Monitoring & Reporting', body: 'We track outcomes and report transparently to donors and the community.' }
      },
      projects: {
        section_tag: 'Initiatives',
        headline:  'Key Projects',
        subheading: 'Four initiatives standing with communities',
        p1_tag:   'Integrated assistance',
        p1_title: 'Good Hands',
        p1_desc:  'Integrated psychosocial and targeted social assistance in Kharkiv region.',
        p2_tag:   'Resilience & cohesion',
        p2_title: 'Psychological Support & Social Cohesion',
        p2_desc:  'Restoring emotional resilience and reducing social isolation in affected regions.',
        p3_tag:   'Direct solidarity',
        p3_title: 'From Person to Person',
        p3_desc:  'A fundraising initiative rooted in direct solidarity—supporting children through events and gifts.',
        p4_tag:   'Economy & psychology',
        p4_title: 'P.E.A.C.E III',
        p4_desc:  'Supporting women and children through economic capacity-building and professional psychological care.'
      },
      donate: {
        headline:          'Your support helps women access care and community',
        subheading:        'No lifestyle-brand gloss — fuel for counsellors, vans and quiet rooms in Kharkiv border communities.',
        emotional:         'Every hryvnia skips billboards; it pays stipends, fuel and insurance for humans carrying boxes and stories.',
        impact_200:       '200 UAH — one counseling hour when public queues fail',
        impact_500:       '500 UAH — hygiene + warmth bundle for a mother and child',
        impact_1000:      '1,000 UAH — legal drafting with follow-up texting',
        card_title:        'Support us',
        module_title:      'Support',
        freq_monthly:       'Monthly',
        freq_once:          'One-time',
        freq_group_sr:     'Payment type',
        currency_label:    'Choose currency',
        currency_group_sr: 'Currency',
        amount_label:      'Choose amount',
        other_amount:      'Other amount',
        custom_placeholder:'Enter amount',
        custom_placeholder_uah: 'Amount in UAH',
        custom_placeholder_usd: 'Amount in USD',
        custom_placeholder_eur: 'Amount in EUR',
        cta:               'Continue to payment',
        section_tag:       'Support',
        trust:             '🔒 Secure WayForPay checkout · Registered charitable foundation',
        error_amount:      'Minimum amount is 10 (in selected currency)',
        error_amount_max:  'Maximum 999,999 per transaction',
        preset_sr:         'Suggested amounts match the currency you chose (defaults to ₴)',
        impact_list_sr:    'Examples of what your donation can fund',
        custom_sr_label:   'Payment amount',
        cta_aria_label:    'Open WayForPay payment page',
        amt250_aria:       'Donate 250',
        amt500_aria:       'Donate 500',
        amt1000_aria:      'Donate 1000',
        amt5000_aria:      'Donate 5000',
        bank_title:        'Bank transfer details',
        iban_uah_hint:     'UAH · IBAN',
        iban_usd_hint:     'USD · IBAN',
        iban_eur_hint:     'EUR · IBAN',
        copy_iban:        'Copy',
        copied:            'Copied!',
        gateway_label:     ''
      },
      partners: {
        section_tag: 'Partners standing with us',
        headline:   'Partners strengthening legitimacy',
        subheading: 'International agencies, state actors and fearless micro-grant circles — credited equally inside our PDF reports.',
        community_note: 'Churches hosting storerooms, school principals lending buses and diaspora fundraisers rarely show up in hero photos yet keep pallets moving.'
      },
      volunteer: {
        section_tag: 'Volunteering',
        headline:    'Volunteer with us',
        subheading:  'Sometimes your Saturday shift unloading vans matters more than a one-off flashy donation.',
        ben1_title:  'Flexible cadence',
        ben1_body:   'Hybrid-friendly roles: remote translation shifts or two-hour onsite welcoming desks.',
        ben2_title:  'Buddy system',
        ben2_body:   'Matched with a coordinator so you never feel ghosted halfway through onboarding.',
        ben3_title:  'Practice-based learning',
        ben3_body:   'Monthly open trainings on safeguarding and trauma-informed presence — zero startup theatrics.',
        field_name:    'Full name',
        field_email:   'Email',
        field_phone:   'Phone',
        field_city:    'City / Region',
        field_message: 'How can you help?',
        field_consent_before: 'I consent to the processing of personal data in accordance with the',
        field_consent_link:   'Privacy Policy',
        cta:           'Join our community',
        success:       'Thank you! We will contact you shortly',
        success_detail:'Your submission was received.',
        error:         'Something went wrong. Please try again.',
        err_name:      'Enter a name using letters only (min. 2 characters)',
        err_email:     'Enter a valid email address',
        err_phone:     'Use +380 and 9 digits, or leave empty',
        err_city:      'Enter city or region (letters, min. 2 characters)',
        err_message:   'At least 20 characters required',
        err_consent:   'Consent is required'
      },
      contact: {
        section_tag:        'Contact',
        headline:           'Contact Us',
        field_name:         'Your name',
        field_email:        'Email',
        field_subject:      'Subject',
        field_message:      'Message',
        select_placeholder: 'Select a topic...',
        subject_general:    'General enquiry',
        subject_media:      'Media & Press',
        subject_partnership:'Partnership',
        subject_help:       'Help request',
        cta:                'Send message',
        success:            'Message sent!',
        success_detail:     'We will get back to you soon.',
        error:              'Something went wrong. Please try again.',
        err_name:           'Enter a name using letters only (min. 2 characters)',
        err_email:          'Enter a valid email address',
        err_subject:        'Choose a topic from the list',
        err_message:        'At least 10 characters required'
      },
      form: {
        send_another_volunteer: 'Send another',
        send_another_contact:   'Write again'
      },
      footer: {
        mission:           'We knit psychosocial support, juridical accompaniment and dusty-road logistics together so wartime burnout does not have to fight alone.',
        tagline:           'Staying humane for women & children rebuilding life along Kharkiv frontline towns.',
        col1_title:        'Navigate',
        col_contact_title: 'Contact',
        col2_title:        'Take action',
        col3_title:        'Legal',
        volunteer_link:    'Volunteer pathways',
        get_help:          'Get help',
        reports_link:      'Annual reports',
        privacy:           'Privacy policy',
        terms:             'Site terms',
        registration_link: 'Registration files',
        registration:      'CF "ICAN Women Foundation" · EDRPOU: XXXXXXXX · Registered in Ukraine',
        rights:            '© 2024–2026 ICAN Women Foundation. All rights reserved.'
      }
    }
  };

  /* ================================================================
     PARTNER DATA  (PRD §6.3.1)
     Edit this array to add / remove partner logos.
     ================================================================ */
  const partners = [
    {
      id: 'usaid',
      name: 'USAID Ukraine',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/USAID-Identity.svg/330px-USAID-Identity.svg.png',
      url: 'https://www.usaid.gov/ukraine',
      category: 'international'
    },
    {
      id: 'unwomen',
      name: 'UN Women Ukraine',
      logo: '',
      url: 'https://ukraine.unwomen.org/',
      category: 'international'
    },
    {
      id: 'unicef',
      name: 'UNICEF Ukraine',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/UNICEF_logo.svg/440px-UNICEF_logo.svg.png',
      url: 'https://www.unicef.org/ukraine/',
      category: 'international'
    },
    {
      id: 'unhcr',
      name: 'UNHCR Ukraine',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/United_Nations_High_Commissioner_for_Refugees_logo.svg/440px-United_Nations_High_Commissioner_for_Refugees_logo.svg.png',
      url: 'https://www.unhcr.org/ua/en',
      category: 'international'
    },
    {
      id: 'kharkiv-reg',
      name: 'Харківська ОДА',
      logo: '',
      url: 'https://kharkivoda.gov.ua/',
      category: 'national'
    },
    {
      id: 'savelife',
      name: 'Come Back Alive Foundation',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Come_Back_Alive_logo_square.jpg/440px-Come_Back_Alive_logo_square.jpg',
      url: 'https://savelife.in.ua/en/',
      category: 'national'
    }
  ];

  /* ================================================================
     IMPACT STATS  (PRD §8.3)
     Update values quarterly.
     ================================================================ */
  const impactStats = [
    { value: 2300, suffix: '+', key: 'pillar_women' },
    { value: 840, suffix: '+', key: 'pillar_consults' },
    { value: 140, suffix: '+', key: 'pillar_programs' },
    { value: 55, suffix: '+', key: 'pillar_volunteers' },
    { value: 6, suffix: '', key: 'pillar_partners' }
  ];

  /* ================================================================
     UTILITIES
     ================================================================ */
  /** Internal `ua` → document `lang="uk"` (PRD §10, BCP 47) */
  function documentLang(internalCode) {
    return internalCode === 'ua' ? 'uk' : internalCode;
  }

  function numberLocale(internalCode) {
    return internalCode === 'ua' ? 'uk-UA' : 'en-US';
  }

  /* ================================================================
     I18N ENGINE  (PRD §6.1.2)
     ================================================================ */
  let currentLang = localStorage.getItem('ican_lang') || CONFIG.defaultLang;

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('ican_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const text = getNestedValue(translations[lang], el.getAttribute('data-i18n'));
      if (text !== null) el.textContent = text;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const text = getNestedValue(translations[lang], el.getAttribute('data-i18n-placeholder'));
      if (text !== null) el.placeholder = text;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const t = getNestedValue(translations[lang], el.getAttribute('data-i18n-aria-label'));
      if (t !== null) el.setAttribute('aria-label', t);
    });

    document.documentElement.lang = documentLang(lang);

    refreshFinalizedCounters();
    refreshStoryExpandButtons();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    updateDonateCustomPlaceholder();
  }

  function refreshStoryExpandButtons() {
    document.querySelectorAll('[data-story-expand]').forEach(btn => {
      const expanded = btn.closest('.story-card')?.classList.contains('is-expanded');
      const bundle = translations[currentLang]?.stories;
      const text = expanded ? bundle?.read_less : bundle?.read_more;
      if (text) btn.textContent = text;
      btn.setAttribute('aria-expanded', String(!!expanded));
    });
  }

  function initStoryExpandButtons() {
    document.querySelectorAll('[data-story-expand]').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.story-card')?.classList.toggle('is-expanded');
        refreshStoryExpandButtons();
      });
    });
    refreshStoryExpandButtons();
  }

  /** Update already-finished animated counters after language switch */
  function refreshFinalizedCounters() {
    document.querySelectorAll('[data-counter][data-count-done="1"]').forEach(el => {
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      el.textContent = target.toLocaleString(numberLocale(currentLang)) + suffix;
    });
  }

  /* ================================================================
     RENDER PARTNERS  (PRD §6.3.2)
     ================================================================ */
  function renderPartners() {
    const grid = document.getElementById('partners-grid');
    if (!grid) return;

    grid.replaceChildren();

    partners.forEach(p => {
      const a = document.createElement('a');
      a.href = p.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'partner-card';
      a.setAttribute('aria-label', p.name);
      a.dataset.category = p.category;

      if (p.logo) {
        const img = document.createElement('img');
        img.src = p.logo;
        img.alt = '';
        img.setAttribute('aria-hidden', 'true');
        img.loading = 'lazy';
        a.append(img);
      } else {
        const span = document.createElement('span');
        span.style.cssText =
          'font-family:Onest,sans-serif;font-size:0.875rem;font-weight:600;color:var(--color-muted);text-align:center;line-height:1.3;display:block;padding:0.35rem';
        span.textContent = p.name;
        a.append(span);
      }

      grid.append(a);
    });
  }

  /** Apply quantitative stats from JS config to impact pillars (single source of truth) */
  function syncImpactCountersFromConfig() {
    const nodes = document.querySelectorAll('#our-impact .impact-pillar__num[data-counter]');
    impactStats.forEach((stat, i) => {
      const el = nodes[i];
      if (!el) return;
      el.dataset.counter = String(stat.value);
      el.dataset.suffix = stat.suffix;
      delete el.dataset.countDone;
      el.textContent = '0';
    });
  }

  /* ================================================================
     DONATION MODULE  (WayForPay hosted page + bank transfer block)
     ================================================================ */
  const donationState = {
    selectedAmount: null,
    customAmount: '',
    otherMode: false,
    currency: 'UAH',
    recurring: true
  };

  function getActiveDonatePresetPanel() {
    return document.querySelector(`.donate-amt-grid[data-donate-presets-for="${donationState.currency}"]`);
  }

  function updateDonateCustomPlaceholder() {
    const input = document.getElementById('donate-custom-input');
    if (!input) return;
    const bundle = translations[currentLang]?.donate;
    const key =
      donationState.currency === 'UAH'
        ? 'custom_placeholder_uah'
        : donationState.currency === 'USD'
          ? 'custom_placeholder_usd'
          : 'custom_placeholder_eur';
    let text =
      bundle && bundle[key] !== undefined ? bundle[key] : bundle?.custom_placeholder;
    if (!text && bundle) text = bundle.custom_placeholder || '';
    if (text) input.placeholder = text;
  }

  function sanitizeNumericInput(el) {
    const v = el.value.replace(/\D/g, '').slice(0, 9);
    if (el.value !== v) el.value = v;
    donationState.customAmount = v;
    donationState.selectedAmount = null;
    donationState.otherMode = true;
    document.querySelectorAll('.donate__amount-btn').forEach(b => b.classList.remove('selected'));
    const panel = getActiveDonatePresetPanel();
    panel?.querySelector('[data-other="1"]')?.classList.add('selected');
    clearDonationError();
  }

  /** WayForPay donation page: preset amount + currency (+ optional monthly regular). */
  function buildWayForPayPageUrl(amount, currency, recurring) {
    const u = new URL(CONFIG.wayforpay.paymentPageUrl);
    u.searchParams.set('amount', String(amount));
    u.searchParams.set('currency', currency);
    if (recurring) {
      u.searchParams.set('regularOn', '1');
      u.searchParams.set('regularMode', 'monthly');
      u.searchParams.set('regularAmount', String(amount));
    } else {
      u.searchParams.set('regularMode', 'none');
    }
    return u.toString();
  }

  function navigateToWayForPay(amount, currency, recurring) {
    const url = buildWayForPayPageUrl(amount, currency, recurring);
    window.location.href = url;
  }

  function toggleDonatePanels(currency) {
    document.querySelectorAll('[data-donate-presets-for]').forEach(panel => {
      const on = panel.getAttribute('data-donate-presets-for') === currency;
      panel.hidden = !on;
      panel.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
  }

  function setFrequencyUI(recurring) {
    donationState.recurring = recurring;
    document.querySelectorAll('[data-donate-freq]').forEach(btn => {
      const r = btn.getAttribute('data-donate-freq') === 'recurring';
      btn.classList.toggle('is-active', r === recurring);
      btn.setAttribute('aria-pressed', String(r === recurring));
    });
  }

  function setCurrencyUI(code) {
    donationState.currency = code;
    toggleDonatePanels(code);
    document.querySelectorAll('[data-donate-currency]').forEach(btn => {
      const on = btn.getAttribute('data-donate-currency') === code;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', String(on));
    });
    donationState.selectedAmount = null;
    donationState.otherMode = false;
    document.querySelectorAll('.donate__amount-btn').forEach(b => {
      b.classList.remove('selected');
    });
    const input = document.getElementById('donate-custom-input');
    if (input) {
      input.value = '';
      donationState.customAmount = '';
    }
    const wrap = document.getElementById('donate-custom-wrap');
    wrap?.classList.remove('is-visible');
    clearDonationError();
    updateDonateCustomPlaceholder();
  }

  function resolveDonationAmountInput() {
    if (donationState.selectedAmount != null) return donationState.selectedAmount;
    const digits = (donationState.customAmount || '').replace(/\D/g, '');
    return digits ? parseInt(digits, 10) : NaN;
  }

  function initBankIbanCopyButtons() {
    document.querySelectorAll('[data-copy-target]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-copy-target');
        const el = id ? document.getElementById(id) : null;
        const text = el?.textContent?.trim() || '';
        if (!text || !navigator.clipboard?.writeText) return;
        const bundle = translations[currentLang]?.donate;
        const defLabel = bundle?.copy_iban || '';
        const okLabel = bundle?.copied || '';
        try {
          await navigator.clipboard.writeText(text);
          const label = btn.querySelector('.donate-iban-copy-text');
          if (label) {
            label.textContent = okLabel;
            window.setTimeout(() => {
              label.textContent = defLabel;
            }, 2000);
          }
        } catch {
          /* ignore */
        }
      });
    });
  }

  function initDonationModule() {
    const customInput = document.getElementById('donate-custom-input');
    const customWrap = document.getElementById('donate-custom-wrap');

    toggleDonatePanels(donationState.currency);
    setFrequencyUI(donationState.recurring);
    setCurrencyUI(donationState.currency);

    document.querySelectorAll('[data-donate-freq]').forEach(btn => {
      btn.addEventListener('click', () => {
        setFrequencyUI(btn.getAttribute('data-donate-freq') === 'recurring');
      });
    });

    document.querySelectorAll('[data-donate-currency]').forEach(btn => {
      btn.addEventListener('click', () => {
        setCurrencyUI(btn.getAttribute('data-donate-currency'));
      });
    });

    document.querySelectorAll('.donate__amount-btn[data-amount]').forEach(btn => {
      btn.addEventListener('click', () => {
        const amt = parseInt(btn.dataset.amount, 10);
        if (!Number.isFinite(amt)) return;
        donationState.otherMode = false;
        donationState.customAmount = '';
        if (customInput) customInput.value = '';
        customWrap?.classList.remove('is-visible');

        document.querySelectorAll('.donate__amount-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        donationState.selectedAmount = amt;
        clearDonationError();
        navigateToWayForPay(amt, donationState.currency, donationState.recurring);
      });
    });

    document.querySelectorAll('.donate__amount-btn[data-other="1"]').forEach(otherBtn => {
      otherBtn.addEventListener('click', () => {
        donationState.selectedAmount = null;
        donationState.otherMode = true;
        document.querySelectorAll('.donate__amount-btn').forEach(b => b.classList.remove('selected'));
        otherBtn.classList.add('selected');
        customWrap?.classList.add('is-visible');
        clearDonationError();
        updateDonateCustomPlaceholder();
        window.requestAnimationFrame(() => customInput?.focus());
      });
    });

    if (customInput) {
      customInput.addEventListener('input', () => sanitizeNumericInput(customInput));
      customInput.addEventListener('paste', () => queueMicrotask(() => sanitizeNumericInput(customInput)));
      customInput.addEventListener('keydown', e => {
        if (['.', ',', 'e', 'E', '+', '-'].includes(e.key)) e.preventDefault();
        if (e.key === 'Enter') {
          e.preventDefault();
          handleDonate();
        }
      });
    }

    document.getElementById('donate-btn')?.addEventListener('click', handleDonate);
    initBankIbanCopyButtons();

    if (customInput) donationState.customAmount = customInput.value.replace(/\D/g, '');
  }

  function setDonateError(kind) {
    const input = document.getElementById('donate-custom-input');
    const msg = document.getElementById('donate-error-msg');
    const bundle = translations[currentLang]?.donate;
    let text = bundle?.error_amount;
    if (kind === 'max') text = bundle?.error_amount_max;
    if (msg && text) msg.textContent = text;
    msg?.classList.add('visible');
    input?.classList.add('error');
    if (input) input.setAttribute('aria-invalid', 'true');
    input?.focus();
  }

  function handleDonate() {
    if (!donationState.otherMode && donationState.selectedAmount != null) {
      return;
    }
    const amount = resolveDonationAmountInput();
    const btn = document.getElementById('donate-btn');

    if (!Number.isFinite(amount) || amount < 10) {
      setDonateError('min');
      return;
    }
    if (amount > 999999) {
      setDonateError('max');
      return;
    }

    clearDonationError();
    btn?.classList.add('loading');
    if (btn) btn.disabled = true;

    window.setTimeout(() => {
      navigateToWayForPay(amount, donationState.currency, donationState.recurring);
    }, 200);
  }

  function clearDonationError() {
    const bundle = translations[currentLang]?.donate;
    document.getElementById('donate-custom-input')?.classList.remove('error');
    const msg = document.getElementById('donate-error-msg');
    if (msg) {
      msg.classList.remove('visible');
      const def = bundle?.error_amount;
      if (def) msg.textContent = def;
    }
    document.getElementById('donate-custom-input')?.setAttribute('aria-invalid', 'false');
  }

  /* ================================================================
     HEADER SCROLL BEHAVIOUR  (PRD §5.2)
     ================================================================ */
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    const scrollInd = document.getElementById('scroll-indicator');
    if (!header) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 80;
      header.classList.toggle('scrolled', scrolled);
      if (scrollInd) scrollInd.classList.toggle('hidden', scrolled);
    }, { passive: true });
  }

  /* ================================================================
     ACTIVE NAV LINK TRACKING  (PRD §5.2)
     ================================================================ */
  function initActiveNavTracking() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(sec => observer.observe(sec));
  }

  /* ================================================================
     MOBILE MENU  (PRD §5.2)
     ================================================================ */
  function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const backdrop = mobileMenu?.querySelector('.mobile-menu__backdrop');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('.mobile-menu__panel a[href]') : [];
    let menuPrevFocus = null;

    function openMenu() {
      menuPrevFocus = document.activeElement;
      mobileMenu.classList.add('is-open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      hamburgerBtn.classList.add('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() =>
        mobileMenu
          .querySelector('.mobile-menu__panel')
          ?.querySelector('a[href], button:not([disabled])')
          ?.focus()
      );
    }

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburgerBtn.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (menuPrevFocus && typeof menuPrevFocus.focus === 'function') menuPrevFocus.focus();
      menuPrevFocus = null;
    }

    if (!mobileMenu || !hamburgerBtn) return;

    hamburgerBtn.addEventListener('click', openMenu);
    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) closeMenu();
    });
  }

  /* ================================================================
     SCROLL ENTRANCE ANIMATIONS  (PRD §6.6)
     ================================================================ */
  function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate], [data-animate-stagger]');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
  }

  /* ================================================================
     ANIMATED IMPACT COUNTERS  (PRD §6.5)
     ================================================================ */
  function animateCounter(el, target, suffix, duration = 1800) {
    const start = performance.now();
    const loc = () => numberLocale(currentLang);

    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(eased * target);

      el.textContent = current.toLocaleString(loc()) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString(loc()) + suffix;
        el.dataset.countDone = '1';
      }
    }

    requestAnimationFrame(update);
  }

  function initCounterAnimations() {
    const counterEls = document.querySelectorAll('[data-counter]');
    if (!counterEls.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      counterEls.forEach(el => {
        const target = parseInt(el.dataset.counter, 10);
        const suffix = el.dataset.suffix || '';
        el.textContent = target.toLocaleString(numberLocale(currentLang)) + suffix;
        el.dataset.countDone = '1';
      });
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.counter, 10);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.35 });

    counterEls.forEach(el => observer.observe(el));
  }

  /* ================================================================
     LANGUAGE TOGGLE WIRING
     ================================================================ */
  function initLanguageToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
  }

  /* ================================================================
     INITIALISATION SEQUENCE  (PRD §13.C)
     ================================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    syncImpactCountersFromConfig();

    renderPartners();

    setLanguage(localStorage.getItem('ican_lang') || CONFIG.defaultLang);

    initScrollAnimations();
    initCounterAnimations();
    initActiveNavTracking();

    initMobileMenu();
    initDonationModule();
    initLanguageToggle();
    initStoryExpandButtons();

    initHeaderScroll();
  });

})();
