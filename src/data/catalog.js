export const venues = [
  {
    id: 'surya',
    name: 'Surya Palace Courtyard',
    city: 'Bengaluru',
    type: 'Heritage',
    guests: 500,
    image: 'palace',
    description:
      'An open courtyard, carved arches and a ceremonial setting for a celebration rooted in tradition.',
    features: ['Outdoor ceremony', 'Guest changing rooms', 'Covered dining'],
  },
  {
    id: 'ananda',
    name: 'Ananda Garden Retreat',
    city: 'Mysuru',
    type: 'Resort',
    guests: 200,
    image: 'garden',
    description:
      'A relaxed garden setting for a wedding weekend with your closest people.',
    features: ['Garden lawn', 'Poolside reception', 'Guest accommodation'],
  },
  {
    id: 'kamala',
    name: 'Kamala Celebration Hall',
    city: 'Bengaluru',
    type: 'Banquet',
    guests: 350,
    image: 'details',
    description:
      'An intimate reception concept with warm lighting and thoughtful tablescapes.',
    features: ['Indoor reception', 'Seated dining', 'Flexible décor'],
  },
  {
    id: 'nandana',
    name: 'Nandana Heritage House',
    city: 'Mysuru',
    type: 'Heritage',
    guests: 120,
    image: 'palace',
    description:
      'A smaller heritage celebration for meaningful rituals and unhurried moments.',
    features: [
      'Courtyard ceremony',
      'Intimate gatherings',
      'Photography spaces',
    ],
  },
  {
    id: 'sagara',
    name: 'Sagara Palm Resort',
    city: 'Mangaluru',
    type: 'Resort',
    guests: 300,
    image: 'garden',
    description:
      'A tropical celebration concept with open-air dining and a relaxed coastal mood.',
    features: ['Outdoor reception', 'Accommodation', 'Welcome dinner'],
  },
  {
    id: 'padma',
    name: 'Padma Dining Pavilion',
    city: 'Mangaluru',
    type: 'Banquet',
    guests: 180,
    image: 'details',
    description:
      'An elegant dining-led setting for engagements, anniversaries and family celebrations.',
    features: ['Seated dining', 'Indoor gathering', 'Custom tablescapes'],
  },
]
export const packages = [
  {
    name: 'Intimate',
    subtitle: 'Small gathering. Lasting memories.',
    image: 'details',
    guests: 'Up to 100 guests',
    items: [
      'Venue discovery brief',
      'Ceremony décor concept',
      'Catering requirements checklist',
      'Photography brief',
      'Event-day timeline',
    ],
  },
  {
    name: 'Signature',
    subtitle: 'Every detail, beautifully connected.',
    image: 'palace',
    guests: '100–300 guests',
    items: [
      'Everything in Intimate',
      'Multi-service planning brief',
      'Guest accommodation checklist',
      'Reception styling concept',
      'Vendor coordination schedule',
    ],
  },
  {
    name: 'Destination',
    subtitle: 'A celebration that becomes a getaway.',
    image: 'garden',
    guests: 'A multi-day celebration',
    items: [
      'Everything in Signature',
      'Resort and accommodation brief',
      'Welcome event concept',
      'Travel and transfer checklist',
      'Multi-day celebration itinerary',
    ],
  },
]
export const articles = [
  {
    id: 'venue-checklist',
    title: 'Before you fall in love with a venue',
    category: 'Venues',
    image: 'palace',
    time: '4 min read',
    intro:
      'A beautiful setting is only the beginning. These questions help you choose a space that works for your celebration.',
    sections: [
      [
        'Start with your guest list',
        'Write down a realistic guest range before shortlisting. Ask about seated dining capacity as well as the maximum standing capacity; the two are not interchangeable.',
      ],
      [
        'Walk through the whole day',
        'Follow the route your guests will take from arrival to the ceremony, dining and departure. Check step-free access, toilets, parking and a quiet space for older guests.',
      ],
      [
        'Ask about the less visible details',
        'Discuss power backup, sound restrictions, vendor access, setup time and the plan for rain. Confirm which spaces are included and which attract additional charges.',
      ],
      [
        'Get the details in writing',
        'Request an itemised proposal listing inclusions, exclusions and payment dates. Review the cancellation terms before committing.',
      ],
    ],
  },
  {
    id: 'celebration-budget',
    title: 'A celebration budget with room to breathe',
    category: 'Planning',
    image: 'details',
    time: '3 min read',
    intro:
      'Build your plan around what matters to you, and leave space for the details you have not thought of yet.',
    sections: [
      [
        'Choose your priorities together',
        'List the three things that matter most: perhaps the food, a meaningful ceremony and photographs. Use those priorities to guide trade-offs.',
      ],
      [
        'Compare like with like',
        'Ask each supplier for the same scope and guest count. Separate the core price from taxes, transport, overtime and optional upgrades.',
      ],
      [
        'Keep a contingency',
        'Set aside a portion of your budget for changes. Track estimated, quoted and paid amounts separately so you always know where you stand.',
      ],
    ],
  },
  {
    id: 'wedding-weekend',
    title: 'Make a wedding weekend feel effortless',
    category: 'Inspiration',
    image: 'garden',
    time: '3 min read',
    intro:
      'Give your guests time to settle in, connect and enjoy the celebration without rushing between events.',
    sections: [
      [
        'Make arrival simple',
        'Share one clear note with the address, check-in details, transport options and a contact person. Ask about accessibility and dietary needs ahead of time.',
      ],
      [
        'Create breathing room',
        'Allow time between events for travel, rest and outfit changes. A short welcome gathering can be more enjoyable than a tightly packed first evening.',
      ],
      [
        'Keep everyone informed',
        'Prepare a concise itinerary with locations and realistic start times. Assign a point of contact so the couple does not have to answer every logistical question.',
      ],
    ],
  },
]
