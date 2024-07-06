import deerParkBanner from '../assets/deer_park_banner.png';
import deerParkTablet from '../assets/tablet_deer_park.png';
import deerParkMap from '../assets/deer_park_map.png';

import sousaAdvocaciaBanner from '../assets/sousa_advocacia_banner.png';
import sousaAdvocaciaTablet from '../assets/tablet_sousa_advocacia.png';
import sousaAdvocaciaMap from '../assets/sousa_advocacia_map.png';

import polandSpringBanner from '../assets/poland_spring_banner.png';
import polandSpringTablet from '../assets/tablet_poland_spring.png';
import polandSpringMap from '../assets/poland_spring_map.png';

export const projects = [
  {
    id: 'deer-park',
    banner: deerParkBanner,
    breadcrumb: [
      { label: 'Home', link: '/' },
      { label: 'Deer Park', link: '' },
    ],
    title: "Deer Park That's Still Good Water",
    subtitle: 'CELEBRATING 150 YEARS OF GREAT TASTE',
    description: [
      'Deer Park® Brand 100% Natural Spring Water was founded over a century ago in 1873 with one spring in the Appalachian Mountains, a spot rich in beauty, history, and naturally refreshing spring water. Though times have changed, today we source Deer Park® Brand Natural Spring Water from carefully selected springs located in four states of the Mid-Atlantic region, one thing remains the same: our love of the region we still call home.',
    ],
    briefing: [
      'Our website is due for an update to align with the brand identity, enhance its visual appeal, and optimize overall functionality. We aim to transform our brand website into a comprehensive hub where visitors can easily access information about our products, sustainability initiatives, community engagement, brand history, partnerships, recent campaigns, contact details, and water/source-related details.',
    ],
    audience: [
      { label: 'Age', value: '36 median age' },
      { label: 'HHH', value: 'Over-indexed + $87' },
      {
        label: 'Design Target',
        value: 'Proactive Achievers and Health Oriented People.',
      },
    ],
    brandBeliefs: ['You must wonder to find yourself whole.'],
    brandPersonality: [
      'Sense of community;',
      'Quality water is important;',
      'DeerPark region: hiking trail, backbone of the region.',
    ],
    tabletImg: deerParkTablet,
    styleGuideDescription:
      "Aligned with the brand's visual identity, we created a comprehensive style guide for developers. Here’s a small preview of our work.",
    typography: [
      { name: 'Barlow', purpose: 'Headline', weight: ['bold'] },
      { name: 'Trade Gothic LT', purpose: 'Body', weight: ['bold'] },
    ],
    typographyDescription: [
      'These fonts were used by the brand and listed in their branding book. They perfectly capture the big, bold and elevated look that the company aims to communicate to its target audience.',
    ],
    colorPalette: [
      { name: 'primary', color: '#0F206C', letterColor: 'light' },
      { name: 'secondary', color: '#3A8DDE', letterColor: 'light' },
      { name: 'white', color: '#FFFFFF', letterColor: 'dark' },
      { name: 'light gray', color: '#F2F6FF', letterColor: 'dark' },
      { name: 'dark gray', color: '#3E3E3E', letterColor: 'light' },
    ],
    colorPaletteDescription: [
      {
        weight: 'regular',
        text: 'Our approach involved incorporating plenty of white for open spaces and introducing touches of both primary and secondary blues strategically across the site.',
      },
      {
        weight: 'bold',
        text: 'This was done to highlight crucial information and achieve a minimalistic yet refined appearance.',
      },
    ],
    uiComponentsImg: 'deer-park',
    uiComponentsDescription:
      "Drawing from the brand's visual identity, we've developed the foundational components of the library to encompass both the brand's essence and the visual direction we aim to convey on the new website.",
    designApproach: [
      {
        title: 'Inspire everyday',
        text: 'Utilize lifestyle photography to ignite a sense of adventure and encourage the pursuit of new experiences.',
      },
      {
        title: 'Proactive achievers',
        text: "Use images of people actively contributing to nature's well-being, inspiring a commitment to nature and sustainability.",
      },
      {
        title: 'Deer park region',
        text: "Incorporate Deer Park landscape imagery or visuals resembling the region to highlight the brand's natural essence.",
      },
    ],
    siteMapImg: deerParkMap,
    siteMapDescription:
      "The website's user flow had already been previously defined, but through card sorting activities, we were able to refine the flow to enhance user experience.",
  },
  {
    id: 'sousa-advocacia',
    banner: sousaAdvocaciaBanner,
    breadcrumb: [
      { label: 'Home', link: '/' },
      { label: 'Souza Advocacia', link: '' },
    ],
    title: "Transforming people's lives through law!",
    subtitle: '1º Digital Office of the North',
    description: [
      'We know that everyone deserves access to justice, and we are committed to providing the best possible service to make this a reality.',
      'We aim to provide legal support and advice that helps our clients overcome challenges and find solutions to complex problems.',
    ],
    briefing: [
      "The lack of professionalism in some aspects of our website undermines our authority. We need more elements that emphasize who we are, including the Best Digital Office Award we've earned. Additionally, the conversion points are not very user-friendly, and we need our user, who may be inexperienced and less educated, to easily identify their problem in our solutions.",
    ],
    audience: [
      { label: 'Age', value: 'Between 26 - 70 years.' },
      { label: 'HHH', value: 'From R$ 0.00 to three minimum wages.' },
      {
        label: 'Design Target',
        value: 'Anyone in need of legal support.',
      },
    ],
    brandBeliefs: [
      'We believe that we can Transform Lives through a service of the highest quality and personalized attention.',
    ],
    brandPersonality: [
      'Sense of community;',
      'Helping by delivering high-quality work to those in need;',
    ],
    tabletImg: sousaAdvocaciaTablet,
    styleGuideDescription:
      "Aligned with the brand's visual identity, we created a comprehensive style guide for developers. Here’s a small preview of our work.",
    typography: [
      {
        name: 'SF Pro Display',
        purpose: 'Headline',
        weight: ['regular', 'bold'],
      },
      { name: 'Noto Sans', purpose: 'Body', weight: ['regular'] },
    ],
    typographyDescription: [
      'Our target audience spans from 26 to 70 years old. Considering that the natural aging process leads to a decline in visual acuity, as stated by the Brazilian Public Ministry, the selected fonts for the redesign of the Souza Advogados website needed to achieve a delicate balance between readability for our older audience and modernity to engage with our younger demographic.',
    ],
    colorPalette: [
      { color: '#800F0F', name: 'primary', letterColor: 'light' },
      { color: '#2E2E2E', name: 'secondary', letterColor: 'light' },
      { color: '#FFFFFF', name: 'white', letterColor: 'dark' },
      { color: '#FACE7F', name: 'yellow', letterColor: 'dark' },
      { color: '#FAA773', name: 'orange', letterColor: 'dark' },
      { color: '#DF605A', name: 'coral', letterColor: 'light' },
    ],
    colorPaletteDescription: [
      {
        weight: 'regular',
        text: "To enhance the vibrancy of the brand's red hues, we've introduced yellow, as indicated by Usertesting.com, signifying happiness, and orange, representing confidence and success.",
      },
      {
        weight: 'bold',
        text: 'These are the sentiments Souza Advogados aims to evoke in its clients.',
      },
    ],
    uiComponentsImg: 'sousa-advocacia',
    uiComponentsDescription:
      'After defining the typography and colors to be used, we developed the initial components of the library, encompassing all the features we intend to incorporate into the website.',
    designApproach: [
      {
        title: 'CHANGE LIVES',
        text: 'Use images of "real" people. We should bring the community into the website so that the user can identify with the brand.',
      },
      {
        title: 'Humanized Services',
        text: "Incorporating images and/or icons while highlighting the distinctive aspects of Sousa Advocacia's customer service.",
      },
      {
        title: 'Team of Experts',
        text: 'Brief texts that acknowledge the importance of the award and the fact that the company has been recognized among many.',
      },
    ],
    siteMapImg: sousaAdvocaciaMap,
    siteMapDescription:
      "The website's user flow had already been previously defined, but through card sorting activities, we were able to refine the flow to enhance user experience.",
  },
  {
    id: 'poland-spring',
    banner: polandSpringBanner,
    breadcrumb: [
      { label: 'Home', link: '/' },
      { label: 'Poland Springs', link: '' },
    ],
    title: 'Connecting the Northeast’s communities.',
    subtitle: '',
    description: [
      'Poland Spring ® 100% Natural Spring Water is sustainably sourced from natural springs and served throughout the Northeast for more than 175 years. Available in a variety of sizes and bottles to match your needs.',
      'At the Poland Spring® brand, we maintain sustainable solutions for our springs and the land around them, keeping high standards for all our products. Every bottle of Poland Spring® Brand 100% Natural Spring Water contains the same high-quality water folks around the Northeast know and love.',
    ],
    briefing: [
      'Our website needs a refresh to reflect the 2023 new brand identity, look and feel, and improve overall functionality. The brand website should be the place where people can find information about products, sustainability initiatives, community initiatives, brand history/heritage, partnership information, recent campaign information, contact information, and water/source-related information.',
    ],
    audience: [
      { label: 'Age', value: 'Over-indexed +43yo.' },
      { label: 'HHH', value: 'Over-indexed +$100K.' },
      {
        label: 'Design Target',
        value: 'Productive peace seakers.',
      },
    ],
    brandBeliefs: [
      'Deep Roots don´t hold back you back, they push you foward.',
    ],
    brandPersonality: ['Trustworthy;', 'Peaceful;', 'Seasoned;', 'Reliable.'],
    tabletImg: polandSpringTablet,
    styleGuideDescription:
      "Aligned with the brand's visual identity, we created a comprehensive style guide for developers. Here’s a small preview of our work.",
    typography: [
      { name: 'Trade Gothic LH', purpose: 'Headline', weight: ['bold'] },
      {
        name: 'Trade Gothic Lt Std',
        purpose: 'Body',
        weight: ['regular', 'bold'],
      },
      {
        name: 'Monarcha',
        purpose: 'Subtitle alternative',
        weight: ['regular'],
      },
    ],
    typographyDescription: [
      "The Trade Gothic LH and Lt Std font families were already part of the company's new visual identity. To maintain consistency across all company materials, we used these fonts on the new website.",
      'Additionally, to give the site a more refined and crafted look, we incorporated the Monarcha font as an alternative for highlighting some subtitles.',
    ],
    colorPalette: [
      { color: '#00573F', name: 'primary', letterColor: 'light' },
      { color: '#D8ED99', name: 'secondary', letterColor: 'dark' },
      { color: '#FFFFFF', name: 'white', letterColor: 'dark' },
      { color: '#9BD3DD', name: 'blue', letterColor: 'dark' },
      { color: '#A85D2C', name: 'orange', letterColor: 'light' },
      { color: '#000000', name: 'black', letterColor: 'light' },
    ],
    colorPaletteDescription: [
      {
        weight: 'regular',
        text: 'Our approach to the color palette incorporates a heavier use of light colors to create significant empty space and breathing room. This will be complemented by our primary dark green as the base, resulting in a crafted and fresh look and feel.',
      },
      {
        weight: 'regular',
        text: 'Additionally, we incorporate our secondary colors to inject vitality and energy into the design.',
      },
    ],
    uiComponentsImg: 'poland-spring',
    uiComponentsDescription:
      "Based on the brand's visual identity, we created the other visual components of the library. We aimed for a clean and mature look to convey a sense of trustworthiness to the users.",
    designApproach: [
      {
        title: 'Northerner’s way',
        text: 'Using landscape and adventurous images contextualised with some text about the brand spirit to inspire users.',
      },
      {
        title: 'Kindred Connections',
        text: 'Using imagery of people and talking about our people, bringing the community into the site, so the user can relate to the brand.',
      },
      {
        title: 'Flowing Forward',
        text: 'Creating modules to talk about our values, our USP, and how Poland Spring is a reliable brand. ',
      },
    ],
    siteMapImg: polandSpringMap,
    siteMapDescription:
      "The website's user flow had already been previously defined, but through card sorting activities, we were able to refine the flow to enhance user experience.",
  },
];
