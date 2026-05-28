import { Framework } from './types';

export const FRAMEWORKS: Framework[] = [
  {
    id: '4ps',
    name: 'The 4 Ps of Marketing',
    description: 'A foundational model for businesses to define their marketing options: Product, Price, Place, and Promotion.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Product', name: 'Product', details: ['Features', 'Quality', 'Branding', 'Packaging', 'Services'], tips: 'What problem does your product solve?' },
      { id: 'Price', name: 'Price', details: ['List Price', 'Discounts', 'Allowances', 'Payment Period', 'Credit Terms'], tips: 'What is the perceived value to the buyer?' },
      { id: 'Place', name: 'Place', details: ['Channels', 'Coverage', 'Assortments', 'Locations', 'Inventory'], tips: 'Where do buyers look for your product?' },
      { id: 'Promotion', name: 'Promotion', details: ['Advertising', 'Personal Selling', 'Sales Promotion', 'Public Relations'], tips: 'How do customers learn about your product?' }
    ],
    interactiveHints: 'Adjusting Price often influences Promotion strategy and target Place.'
  },
  {
    id: '7ps',
    name: 'The 7 Ps of Marketing',
    description: 'An extension of the 4 Ps, adding People, Process, and Physical Evidence for service-based businesses.',
    category: 'Marketing & Sales',
    layout: 'radial',
    sections: [
      { id: 'Product', name: 'Product', details: ['Features', 'Benefits'] },
      { id: 'Price', name: 'Price', details: ['Strategy', 'Margins'] },
      { id: 'Place', name: 'Place', details: ['Distribution', 'Access'] },
      { id: 'Promotion', name: 'Promotion', details: ['Reach', 'Awareness'] },
      { id: 'People', name: 'People', details: ['Staff', 'Customer Service', 'Culture'], tips: 'The human side of your service.' },
      { id: 'Process', name: 'Process', details: ['Delivery', 'Efficiency', 'Standardization'], tips: 'How is the service delivered?' },
      { id: 'Physical Evidence', name: 'Physical Evidence', details: ['Environment', 'Receipts', 'Brochures'], tips: 'Tangible clues of the service quality.' }
    ]
  },
  {
    id: 'aida',
    name: 'AIDA Model',
    description: 'Describes the stages a consumer goes through: Awareness, Interest, Desire, and Action.',
    category: 'Marketing & Sales',
    layout: 'funnel',
    sections: [
      { id: 'Awareness', name: 'Awareness', details: ['Attention', 'Discovery'], tips: 'Capture the audience\'s attention.' },
      { id: 'Interest', name: 'Interest', details: ['Engagement', 'Features'], tips: 'Highlight product benefits.' },
      { id: 'Desire', name: 'Desire', details: ['Emotional connection', 'Want'], tips: 'Create a personal bond/need.' },
      { id: 'Action', name: 'Action', details: ['Purchase', 'Sign-up'], tips: 'Clear call to action.' }
    ],
    interactiveHints: 'Drag tactics like "Social Media Ads" from Awareness to Interest as campaigns evolve.'
  },
  {
    id: 'stp',
    name: 'STP Framework',
    description: 'Strategic process: Segmentation, Targeting, and Positioning.',
    category: 'Strategy & Innovation',
    layout: 'columns',
    sections: [
      { id: 'Segmentation', name: 'Segmentation', details: ['Demographic', 'Psychographic', 'Geographic', 'Behavioral'] },
      { id: 'Targeting', name: 'Targeting', details: ['Attractiveness', 'Competitiveness', 'Selection'] },
      { id: 'Positioning', name: 'Positioning', details: ['USP', 'Brand Image', 'Value Proposition'] }
    ]
  },
  {
    id: 'sostac',
    name: 'SOSTAC® Model',
    description: 'A planning model: Situation, Objectives, Strategy, Tactics, Action, and Control.',
    category: 'Strategy & Innovation',
    layout: 'linear',
    sections: [
      { id: 'Situation', name: 'Situation', details: ['Where are we now?', 'SWOT'] },
      { id: 'Objectives', name: 'Objectives', details: ['SMART Goals', 'KPIs'] },
      { id: 'Strategy', name: 'Strategy', details: ['How do we get there?'] },
      { id: 'Tactics', name: 'Tactics', details: ['Details of strategy'] },
      { id: 'Action', name: 'Action', details: ['Who does what?'] },
      { id: 'Control', name: 'Control', details: ['Measurement', 'Reporting'] }
    ]
  },
  {
    id: 'race',
    name: 'RACE Framework',
    description: 'Managing digital marketing lifecycle: Reach, Act, Convert, and Engage.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Reach', name: 'Reach', details: ['Build awareness', 'Drive traffic'] },
      { id: 'Act', name: 'Act', details: ['Engagement', 'Lead gen'] },
      { id: 'Convert', name: 'Convert', details: ['Sales', 'Profit'] },
      { id: 'Engage', name: 'Engage', details: ['Retention', 'Loyalty'] }
    ]
  },
  {
    id: 'golden-circle',
    name: 'The Golden Circle',
    description: 'Communicating from the inside out: Why, How, and What.',
    category: 'Marketing & Sales',
    layout: 'circles',
    sections: [
      { id: 'Why', name: 'Why', details: ['Purpose', 'Beliefs'], tips: 'Why does the organization exist?' },
      { id: 'How', name: 'How', details: ['Processes', 'Unique values'], tips: 'How do you do what you do?' },
      { id: 'What', name: 'What', details: ['Products', 'Services'], tips: 'What do you actually produce?' }
    ]
  },
  {
    id: 'brand-essence',
    name: 'Brand Essence Flower',
    description: 'Defining core identity from tangible attributes to intangible essence.',
    category: 'Marketing & Sales',
    layout: 'flower',
    sections: [
      { id: 'Attributes', name: 'Attributes', details: ['Tangible features'] },
      { id: 'Benefits', name: 'Benefits', details: ['Functional & Emotional'] },
      { id: 'Personality', name: 'Personality', details: ['Brand voice', 'Traits'] },
      { id: 'Values', name: 'Values', details: ['Core beliefs'] },
      { id: 'Essence', name: 'Essence', details: ['Single-word core'] }
    ]
  },
  {
    id: 'dagmar',
    name: 'DAGMAR Model',
    description: 'Setting measurable advertising goals: Awareness, Comprehension, Conviction, and Action.',
    category: 'Marketing & Sales',
    layout: 'staircase',
    sections: [
      { id: 'Awareness', name: 'Awareness', details: ['Know the brand'] },
      { id: 'Comprehension', name: 'Comprehension', details: ['Understand product'] },
      { id: 'Conviction', name: 'Conviction', details: ['Mental disposition'] },
      { id: 'Action', name: 'Action', details: ['Physical step'] }
    ]
  },
  {
    id: '4cs',
    name: 'The 4 Cs of Marketing',
    description: 'Customer-centric version: Customer Value, Cost, Convenience, and Communication.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Customer Value', name: 'Customer Value', details: ['Solution to problem', 'Value prop'] },
      { id: 'Cost', name: 'Cost', details: ['Price', 'Time', 'Opportunity Cost'] },
      { id: 'Convenience', name: 'Convenience', details: ['Ease of purchase', 'Availability'] },
      { id: 'Communication', name: 'Communication', details: ['Two-way dialogue', 'Engagement'] }
    ]
  },
  {
    id: 'keller-cbbe',
    name: 'Keller\'s Brand Equity (CBBE)',
    description: 'A pyramid model for building a strong brand based on progressive customer relationships.',
    category: 'Marketing & Sales',
    layout: 'pyramid',
    sections: [
      { id: 'Resonance', name: 'Resonance', details: ['Loyalty', 'Attachment', 'Community', 'Engagement'], tips: 'The pinnacle of brand-customer bonding.' },
      { id: 'Judgments', name: 'Judgments', details: ['Quality', 'Credibility', 'Consideration', 'Superiority'] },
      { id: 'Feelings', name: 'Feelings', details: ['Warmth', 'Fun', 'Excitement', 'Security', 'Social Approval'] },
      { id: 'Performance', name: 'Performance', details: ['Primary characteristics', 'Reliability', 'Durability', 'Serviceability', 'Efficiency', 'Style', 'Price'] },
      { id: 'Imagery', name: 'Imagery', details: ['User profiles', 'Purchase/Usage situations', 'Personality', 'History', 'Heritage'] },
      { id: 'Salience', name: 'Salience', details: ['Brand awareness', 'Recognition', 'Recall'], tips: 'Ensuring customers recognize and recall the brand.' }
    ]
  },
  {
    id: 'finks-lifecycle',
    name: 'Fink\'s Crisis Lifecycle',
    description: 'A model viewing crisis as a lifecycle with four distinct stages.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Prodromal', name: 'Prodromal', details: ['Warning signs', 'Prevention opportunity'], tips: 'Spotting the clues before the eruption.' },
      { id: 'Acute', name: 'Acute', details: ['Eruption', 'Point of no return', 'Public notification'], tips: 'Immediate damage control phase.' },
      { id: 'Chronic', name: 'Chronic', details: ['Recovery', 'Self-analysis', 'Clean-up', 'Investigations'] },
      { id: 'Resolution', name: 'Resolution', details: ['Closure', 'Lessons learned'] }
    ]
  },
  {
    id: 'coombs-scct',
    name: 'Coombs\' SCCT',
    description: 'Matching communication response to crisis responsibility levels.',
    category: 'Change & Communication',
    layout: 'columns',
    sections: [
      { id: 'Victim', name: 'Victim Cluster', details: ['Natural disaster', 'Rumor', 'Tampering'], tips: 'Low organizational responsibility.' },
      { id: 'Accidental', name: 'Accidental Cluster', details: ['Technical error', 'Recalls'], tips: 'Moderate attribution of blame.' },
      { id: 'Preventable', name: 'Preventable Cluster', details: ['Human error', 'Misconduct'], tips: 'Strongest reputational threat.' }
    ]
  },
  {
    id: 'renewal-theory',
    name: 'Renewal Theory',
    description: 'Shifting focus from defensive posturing to positive, forward-looking narratives.',
    category: 'Change & Communication',
    layout: 'columns',
    sections: [
      { id: 'Learning', name: 'Org Learning', details: ['Lessons learned', 'Concrete changes'], tips: 'Demonstrate growth through crisis.' },
      { id: 'Ethics', name: 'Ethical Comm', details: ['Transparency', 'Honesty', 'Value-driven'] },
      { id: 'Vision', name: 'Prospective Vision', details: ['Future state', 'Compelling narrative'] },
      { id: 'Rhetoric', name: 'Effective Rhetoric', details: ['Leadership voice', 'Mobilizing support'] }
    ]
  },
  {
    id: 'aarrr',
    name: 'Pirate Metrics (AARRR)',
    description: 'Five-stage startup growth funnel: Acquisition, Activation, Retention, Referral, Revenue.',
    category: 'Marketing & Sales',
    layout: 'funnel',
    sections: [
      { id: 'Acquisition', name: 'Acquisition', details: ['Where are users coming from?'] },
      { id: 'Activation', name: 'Activation', details: ['First good experience?'] },
      { id: 'Retention', name: 'Retention', details: ['Do they come back?'] },
      { id: 'Referral', name: 'Referral', details: ['Do they tell others?'] },
      { id: 'Revenue', name: 'Revenue', details: ['How do you make money?'] }
    ]
  },
  {
    id: 'bant',
    name: 'BANT Sales Qualification',
    description: 'A classic sales process to qualify leads based on Budget, Authority, Need, and Timeline.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Budget', name: 'Budget', details: ['Does the prospect have the funds?'], tips: 'Confirm availability of budget early.' },
      { id: 'Authority', name: 'Authority', details: ['Who is the decision maker?'], tips: 'Identify the person with the power to say yes.' },
      { id: 'Need', name: 'Need', details: ['Is there a business problem to solve?'], tips: 'Focus on the specific pain points.' },
      { id: 'Timeline', name: 'Timeline', details: ['How soon do they need a solution?'], tips: 'Understanding the urgency of the deal.' }
    ]
  },
  {
    id: 'content-matrix',
    name: 'Content Marketing Matrix',
    description: 'A grid to plan content types based on awareness vs purchase and emotional vs rational axes.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Entertain', name: 'Entertain (Emotional/Awareness)', details: ['Viral content', 'Games', 'Videos'] },
      { id: 'Inspire', name: 'Inspire (Emotional/Purchase)', details: ['Community forums', 'Reviews', 'Celebrity endorsements'] },
      { id: 'Educate', name: 'Educate (Rational/Awareness)', details: ['Infographics', 'White papers', 'Guides'] },
      { id: 'Convince', name: 'Convince (Rational/Purchase)', details: ['Case studies', 'Product demos', 'Pricing guides'] }
    ]
  },
  {
    id: 'swot',
    name: 'SWOT Analysis',
    description: 'A strategic planning tool to identify Strengths, Weaknesses, Opportunities, and Threats.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Strengths', name: 'Strengths (Internal)', details: ['Capabilities', 'Resources', 'Advantages'], tips: 'What do you do better than anyone else?' },
      { id: 'Weaknesses', name: 'Weaknesses (Internal)', details: ['Gaps', 'Resource limitations', 'Disadvantages'], tips: 'What could you improve?' },
      { id: 'Opportunities', name: 'Opportunities (External)', details: ['Market trends', 'Tech changes', 'Policy shifts'], tips: 'What interesting trends are you aware of?' },
      { id: 'Threats', name: 'Threats (External)', details: ['Competitors', 'Market obstacles', 'Economic downturns'], tips: 'What obstacles do you face?' }
    ]
  },
  {
    id: 'pestle',
    name: 'PESTLE Analysis',
    description: 'Scanning the external macro-environment across six key factors.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Political', name: 'Political', details: ['Government policy', 'Stability', 'Trade rules'] },
      { id: 'Economic', name: 'Economic', details: ['Growth', 'Interest rates', 'Inflation'] },
      { id: 'Social', name: 'Social', details: ['Demographics', 'Lifestyles', 'Values'] },
      { id: 'Technological', name: 'Technological', details: ['Innovation', 'R&D', 'Automation'] },
      { id: 'Legal', name: 'Legal', details: ['Employment law', 'Health & Safety', 'Regulations'] },
      { id: 'Environmental', name: 'Environmental', details: ['Climate', 'Sustainability', 'Green labels'] }
    ]
  },
  {
    id: 'porter-five',
    name: 'Porter\'s Five Forces',
    description: 'Analyzing the competitive intensity and attractiveness of an industry.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'NewEntrants', name: 'Threat of New Entrants', details: ['Barriers to entry', 'Economies of scale'] },
      { id: 'Buyers', name: 'Bargaining Power of Buyers', details: ['Number of customers', 'Price sensitivity'] },
      { id: 'Suppliers', name: 'Bargaining Power of Suppliers', details: ['Switching costs', 'Supplier concentration'] },
      { id: 'Substitutes', name: 'Threat of Substitutes', details: ['Price/Performance trade-off'] },
      { id: 'Rivalry', name: 'Competitive Rivalry', details: ['Number of competitors', 'Industry growth'], tips: 'The central force of competition.' }
    ]
  },
  {
    id: 'balanced-scorecard',
    name: 'Balanced Scorecard',
    description: 'Strategic performance management tool viewed from four perspectives.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Financial', name: 'Financial', details: ['ROI', 'Profit Margins', 'Revenue Growth'] },
      { id: 'Customer', name: 'Customer', details: ['Market Share', 'Satisfaction', 'Retention'] },
      { id: 'Internal', name: 'Internal Processes', details: ['Cycle time', 'Quality', 'Unit cost'] },
      { id: 'Learning', name: 'Learning & Growth', details: ['Employee skills', 'Culture', 'Systems'] }
    ]
  },
  {
    id: 'mckinsey-7s',
    name: 'McKinsey 7-S',
    description: 'Aligning seven internal elements for organizational success.',
    category: 'Operations & Supply Chain',
    layout: 'radial',
    sections: [
      { id: 'Strategy', name: 'Strategy', details: ['Plan to build competitive advantage'] },
      { id: 'Structure', name: 'Structure', details: ['Hierarchy', 'Coordination'] },
      { id: 'Systems', name: 'Systems', details: ['Daily activities', 'Procedures'] },
      { id: 'SharedValues', name: 'Shared Values', details: ['Core beliefs', 'Culture'], tips: 'The central "Hard S".' },
      { id: 'Skills', name: 'Skills', details: ['Core competencies'] },
      { id: 'Style', name: 'Style', details: ['Leadership approach'] },
      { id: 'Staff', name: 'Staff', details: ['Employees', 'Capabilities'] }
    ]
  },
  {
    id: 'bmc',
    name: 'Business Model Canvas',
    description: 'Strategic management template for documenting business models.',
    category: 'Strategy & Innovation',
    layout: 'bmc',
    sections: [
      { id: 'Partnerships', name: 'Key Partnerships', details: ['Suppliers', 'Strategic alliances'] },
      { id: 'Activities', name: 'Key Activities', details: ['Production', 'Problem solving', 'Platform'] },
      { id: 'Resources', name: 'Key Resources', details: ['Physical', 'Intellectual', 'Human', 'Financial'] },
      { id: 'ValueProp', name: 'Value Propositions', details: ['Products & Services', 'Pains/Gains addressed'] },
      { id: 'Relationships', name: 'Customer Relationships', details: ['Personal assistance', 'Automated', 'Self-service'] },
      { id: 'Channels', name: 'Channels', details: ['Marketing', 'Sales', 'Service'] },
      { id: 'Segments', name: 'Customer Segments', details: ['Mass market', 'Niche', 'Segmented'] },
      { id: 'CostStructure', name: 'Cost Structure', details: ['Fixed costs', 'Variable costs'] },
      { id: 'RevenueStreams', name: 'Revenue Streams', details: ['Asset sale', 'Usage fee', 'Subscription'] }
    ]
  },
  {
    id: 'wardley',
    name: 'Wardley Mapping',
    description: 'Visualizing value chain and evolution stage for situational awareness.',
    category: 'Strategy & Innovation',
    layout: 'map',
    sections: [
      { id: 'User', name: 'User Need', details: ['Anchor at the top'] },
      { id: 'ValueChain', name: 'Value Chain', details: ['Components required'] },
      { id: 'Evolution', name: 'Evolution Stages', details: ['Genesis to Commodity'] }
    ]
  },
  {
    id: 'six-sigma',
    name: 'Six Sigma (DMAIC)',
    description: 'Five-step methodology for process improvement.',
    category: 'Operations & Supply Chain',
    layout: 'linear',
    sections: [
      { id: 'Define', name: 'Define', details: ['Problem statement', 'Goal'] },
      { id: 'Measure', name: 'Measure', details: ['Data collection', 'Process mapping'] },
      { id: 'Analyze', name: 'Analyze', details: ['Root cause', 'Data analysis'] },
      { id: 'Improve', name: 'Improve', details: ['Solutions', 'Pilot'] },
      { id: 'Control', name: 'Control', details: ['Sustaining gains', 'Monitoring'] }
    ]
  },
  {
    id: 'kaizen-pdca',
    name: 'Kaizen (PDCA)',
    description: 'Continuous improvement cycle focusing on small, ongoing changes.',
    category: 'Operations & Supply Chain',
    layout: 'cycle',
    sections: [
      { id: 'Plan', name: 'Plan', details: ['Objectives', 'Process'] },
      { id: 'Do', name: 'Do', details: ['Implementation', 'Execution'] },
      { id: 'Check', name: 'Check', details: ['Measurement', 'Trial results'] },
      { id: 'Act', name: 'Act', details: ['Standardization', 'Adjustments'] }
    ]
  },
  {
    id: 'blue-ocean-canvas',
    name: 'Blue Ocean Strategy',
    description: 'Central diagnostic tool for creating uncontested market space.',
    category: 'Strategy & Innovation',
    layout: 'graph',
    sections: [
      { id: 'Eliminate', name: 'Eliminate', details: ['Factors industry takes for granted'] },
      { id: 'Reduce', name: 'Reduce', details: ['Factors well below industry standard'] },
      { id: 'Raise', name: 'Raise', details: ['Factors well above industry standard'] },
      { id: 'Create', name: 'Create', details: ['Factors industry never offered'] }
    ]
  },
  {
    id: 'hoshin-kanri',
    name: 'Hoshin Kanri (X-Matrix)',
    description: 'Connecting long-term vision with short-term actions and metrics.',
    category: 'Operations & Supply Chain',
    layout: 'x-matrix',
    sections: [
      { id: 'Breakthrough', name: 'Breakthrough Objectives', details: ['3-5 year strategic goals'] },
      { id: 'Annual', name: 'Annual Objectives', details: ['Current year specific goals'] },
      { id: 'Priorities', name: 'Top-Level Priorities', details: ['Key initiatives and projects'] },
      { id: 'Metrics', name: 'Metrics & Targets', details: ['KPIs and owners'] }
    ]
  },
  {
    id: 'mintzberg-5ps',
    name: 'Mintzberg\'s 5 Ps',
    description: 'Five perspectives to evaluate an existing strategy.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Plan', name: 'Plan', details: ['Intended course of action'] },
      { id: 'Ploy', name: 'Ploy', details: ['Maneuver to outwit competitors'] },
      { id: 'Pattern', name: 'Pattern', details: ['Consistency in behavior over time'] },
      { id: 'Position', name: 'Position', details: ['Niche in the marketplace'] },
      { id: 'Perspective', name: 'Perspective', details: ['Ingrained way of perceiving the world'] }
    ]
  },
  {
    id: 'value-disciplines',
    name: 'Value Disciplines',
    description: 'Excel in one discipline while maintaining competitive standards in others.',
    category: 'Strategy & Innovation',
    layout: 'columns',
    sections: [
      { id: 'OpExcel', name: 'Operational Excellence', details: ['Reliability', 'Competitive price', 'Best total cost'] },
      { id: 'CustomerIntimacy', name: 'Customer Intimacy', details: ['Tailored solutions', 'Deep relationships'] },
      { id: 'ProdLeadership', name: 'Product Leadership', details: ['Continuous innovation', 'Fast time-to-market'] }
    ]
  },
  {
    id: '5whys',
    name: 'The 5 Whys',
    description: 'Root cause analysis technique by repeatedly asking "Why?".',
    category: 'Problem Solving & Decision Making',
    layout: 'linear',
    sections: [
      { id: 'Problem', name: 'Problem Statement', details: ['The initial symptom'] },
      { id: 'Why1', name: 'Why? (Level 1)', details: ['First layer of cause'] },
      { id: 'Why2', name: 'Why? (Level 2)', details: ['Second layer of cause'] },
      { id: 'Why3', name: 'Why? (Level 3)', details: ['Third layer of cause'] },
      { id: 'Why4', name: 'Why? (Level 4)', details: ['Fourth layer of cause'] },
      { id: 'Why5', name: 'Why? (Root Cause)', details: ['The underlying issue'] }
    ]
  },
  {
    id: 'fishbone',
    name: 'Fishbone Diagram',
    description: 'Categorizing potential causes of a problem to identify root causes.',
    category: 'Problem Solving & Decision Making',
    layout: 'fishbone',
    sections: [
      { id: 'Manpower', name: 'Manpower', details: ['People', 'Skills', 'Training'] },
      { id: 'Methods', name: 'Methods', details: ['Processes', 'Rules', 'Regulations'] },
      { id: 'Machines', name: 'Machines', details: ['Tools', 'Equipment', 'Software'] },
      { id: 'Materials', name: 'Materials', details: ['Raw materials', 'Information', 'Parts'] },
      { id: 'Measurements', name: 'Measurements', details: ['Data', 'Standards'] },
      { id: 'Environment', name: 'Environment', details: ['Workplace', 'Culture', 'Market'] }
    ]
  },
  {
    id: 'issue-tree',
    name: 'Issue Tree',
    description: 'Breaking down complex problems into MECE components.',
    category: 'Problem Solving & Decision Making',
    layout: 'tree',
    sections: [
      { id: 'Core', name: 'Core Problem', details: ['Primary issue'] },
      { id: 'Branch1', name: 'Branch A', details: ['Sub-component 1'] },
      { id: 'Branch2', name: 'Branch B', details: ['Sub-component 2'] },
      { id: 'Sub1', name: 'Detail A1', details: ['Granular level'] }
    ]
  },
  {
    id: 'scqa',
    name: 'SCQA Framework',
    description: 'Storytelling structure: Situation, Complication, Question, Answer.',
    category: 'Change & Communication',
    layout: 'grid',
    sections: [
      { id: 'Situation', name: 'Situation', details: ['Context and status quo'] },
      { id: 'Complication', name: 'Complication', details: ['The change or problem'] },
      { id: 'Question', name: 'Question', details: ['The key issue arising'] },
      { id: 'Answer', name: 'Answer', details: ['The solution or strategy'] }
    ]
  },
  {
    id: 'ooda-loop',
    name: 'OODA Loop',
    description: 'Decision-making cycle for fast-paced environments.',
    category: 'Problem Solving & Decision Making',
    layout: 'cycle',
    sections: [
      { id: 'Observe', name: 'Observe', details: ['Gather info'] },
      { id: 'Orient', name: 'Orient', details: ['Mental models', 'Context'] },
      { id: 'Decide', name: 'Decide', details: ['Formulate plan'] },
      { id: 'Act', name: 'Act', details: ['Execute'] }
    ]
  },
  {
    id: 'kepner-tregoe',
    name: 'Kepner-Tregoe Method',
    description: 'Structured approach to problem solving and decision making.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Situation', name: 'Situation Appraisal', details: ['Identify and prioritize concerns'] },
      { id: 'Problem', name: 'Problem Analysis', details: ['Root cause identification'] },
      { id: 'Decision', name: 'Decision Analysis', details: ['Choosing the best path'] },
      { id: 'Potential', name: 'Potential Problem Analysis', details: ['Risk mitigation'] }
    ]
  },
  {
    id: 'stacey-matrix',
    name: 'Stacey Matrix',
    description: 'Navigating organizational complexity based on certainty and agreement.',
    category: 'Strategy & Innovation',
    layout: 'graph',
    sections: [
      { id: 'Simple', name: 'Simple', details: ['Known solutions', 'Best practices'] },
      { id: 'Complicated', name: 'Complicated', details: ['Expert analysis needed'] },
      { id: 'Complex', name: 'Complex', details: ['Emergent strategy', 'Experiments'] },
      { id: 'Chaotic', name: 'Chaotic', details: ['Crisis state', 'Act decisively'] }
    ]
  },
  {
    id: 'bow-tie',
    name: 'Bow-Tie Diagram',
    description: 'Visualizing pathways from causes of an event to its consequences.',
    category: 'Finance & Risk',
    layout: 'bow-tie',
    sections: [
      { id: 'Threats', name: 'Threats', details: ['Potential causes'] },
      { id: 'BarriersPrevent', name: 'Preventative Barriers', details: ['Safety controls'] },
      { id: 'TopEvent', name: 'Critical Event', details: ['The center of the bow-tie'] },
      { id: 'BarriersMitigate', name: 'Mitigating Barriers', details: ['Impact reduction'] },
      { id: 'Consequences', name: 'Consequences', details: ['Final outcomes'] }
    ]
  },
  {
    id: 'force-field',
    name: 'Force Field Analysis',
    description: 'Analyzing Driving Forces vs Restraining Forces for change.',
    category: 'Strategy & Innovation',
    layout: 'force-field',
    sections: [
      { id: 'Driving', name: 'Driving Forces', details: ['Positive forces for change'] },
      { id: 'Restraining', name: 'Restraining Forces', details: ['Obstacles to change'] }
    ]
  },
  {
    id: 'six-hats',
    name: 'Six Thinking Hats',
    description: 'De Bono\'s role-playing technique for group discussion.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'White', name: 'White Hat (Facts)', details: ['Data and information'] },
      { id: 'Red', name: 'Red Hat (Emotions)', details: ['Feelings and intuition'] },
      { id: 'Black', name: 'Black Hat (Cautions)', details: ['Risks and problems'] },
      { id: 'Yellow', name: 'Yellow Hat (Benefits)', details: ['Value and advantages'] },
      { id: 'Green', name: 'Green Hat (Creative)', details: ['Ideas and possibilities'] },
      { id: 'Blue', name: 'Blue Hat (Process)', details: ['Control and overview'] }
    ]
  },
  {
    id: 'grow',
    name: 'GROW Model',
    description: 'Coaching and problem-solving framework.',
    category: 'Leadership & Teams',
    layout: 'linear',
    sections: [
      { id: 'Goal', name: 'Goal', details: ['What do you want?'] },
      { id: 'Reality', name: 'Reality', details: ['What is happening now?'] },
      { id: 'Options', name: 'Options', details: ['What could you do?'] },
      { id: 'Will', name: 'Will', details: ['What will you do?'] }
    ]
  },
  {
    id: 'star',
    name: 'STAR Method',
    description: 'Structuring behavioral interview answers.',
    category: 'Leadership & Teams',
    layout: 'linear',
    sections: [
      { id: 'Situation', name: 'Situation', details: ['Set the context'] },
      { id: 'Task', name: 'Task', details: ['Required challenge'] },
      { id: 'Action', name: 'Action', details: ['What you did'] },
      { id: 'Result', name: 'Result', details: ['Outcome achieved'] }
    ]
  },
  {
    id: 'rapid',
    name: 'RAPID Model',
    description: 'Decision-making role assignment.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Recommend', name: 'Recommend', details: ['Propose action'] },
      { id: 'Agree', name: 'Agree', details: ['Sign-off required'] },
      { id: 'Perform', name: 'Perform', details: ['Execution'] },
      { id: 'Input', name: 'Input', details: ['Provide data'] },
      { id: 'Decide', name: 'Decide', details: ['Final authority'] }
    ]
  },
  {
    id: 'a3-problem-solving',
    name: 'A3 Problem Solving',
    description: 'Structured approach that fits on a single A3 sheet.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Background', name: 'Background', details: ['Context of the problem'] },
      { id: 'Current', name: 'Current State', details: ['Where we are now'] },
      { id: 'Goals', name: 'Goals', details: ['Target state'] },
      { id: 'RootCause', name: 'Root Cause Analysis', details: ['Why the gap exists'] },
      { id: 'Countermeasures', name: 'Countermeasures', details: ['Proposed solutions'] },
      { id: 'FollowUp', name: 'Follow-up', details: ['Plan to verify results'] }
    ]
  },
  {
    id: 'catwoe',
    name: 'CATWOE Analysis',
    description: 'Checklist for defining a problem from multiple perspectives.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Customers', name: 'Customers', details: ['Who are the victims/beneficiaries?'] },
      { id: 'Actors', name: 'Actors', details: ['Who will do the work?'] },
      { id: 'Transformation', name: 'Transformation', details: ['Inputs to outputs'] },
      { id: 'Worldview', name: 'Worldview', details: ['Bigger picture/impact'] },
      { id: 'Owner', name: 'Owner', details: ['Who can start/stop the process?'] },
      { id: 'Environment', name: 'Environment', details: ['Constraints and rules'] }
    ]
  },
  {
    id: 'cynefin',
    name: 'Cynefin Framework',
    description: 'Sense-making framework for identifying decision context.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Clear', name: 'Clear (Simple)', details: ['Sense-Categorize-Respond', 'Best practice'] },
      { id: 'Complicated', name: 'Complicated', details: ['Sense-Analyze-Respond', 'Good practice'] },
      { id: 'Complex', name: 'Complex', details: ['Probe-Sense-Respond', 'Emergent practice'] },
      { id: 'Chaotic', name: 'Chaotic', details: ['Act-Sense-Respond', 'Novel practice'] },
      { id: 'Disorder', name: 'Disorder', details: ['Unknown domain'] }
    ]
  },
  {
    id: 'fmea',
    name: 'FMEA',
    description: 'Failure Modes and Effects Analysis.',
    category: 'Finance & Risk',
    layout: 'grid',
    sections: [
      { id: 'Modes', name: 'Failure Modes', details: ['What could go wrong?'] },
      { id: 'Effects', name: 'Potential Effects', details: ['Consequences of failure'] },
      { id: 'Causes', name: 'Potential Causes', details: ['Why it might fail'] },
      { id: 'Controls', name: 'Current Controls', details: ['Detection methods'] }
    ]
  },
  {
    id: 'design-thinking',
    name: 'Design Thinking',
    description: 'Human-centered iterative process for creative problem-solving.',
    category: 'Strategy & Innovation',
    layout: 'linear',
    sections: [
      { id: 'Empathize', name: 'Empathize', details: ['User research', 'Interviews'] },
      { id: 'Define', name: 'Define', details: ['Problem statement', 'User needs'] },
      { id: 'Ideate', name: 'Ideate', details: ['Brainstorming', 'Solutions'] },
      { id: 'Prototype', name: 'Prototype', details: ['Mockups', 'Storyboards'] },
      { id: 'Test', name: 'Test', details: ['Feedback', 'Refinement'] }
    ]
  },
  {
    id: 'lean-startup',
    name: 'Lean Startup',
    description: 'Build-Measure-Learn feedback loop for validated learning.',
    category: 'Strategy & Innovation',
    layout: 'cycle',
    sections: [
      { id: 'Build', name: 'Build', details: ['MVP', 'Product'] },
      { id: 'Measure', name: 'Measure', details: ['Data', 'Metrics'] },
      { id: 'Learn', name: 'Learn', details: ['Pivot or Persevere'] }
    ]
  },
  {
    id: 'stage-gate',
    name: 'Stage-Gate Process',
    description: 'Managing projects through stages separated by decision points.',
    category: 'Strategy & Innovation',
    layout: 'stage-gate',
    sections: [
      { id: 'Scoping', name: 'Scoping', details: ['Market prospects'] },
      { id: 'BusinessCase', name: 'Build Business Case', details: ['Financials', 'Project plan'] },
      { id: 'Development', name: 'Development', details: ['Product design'] },
      { id: 'Testing', name: 'Testing & Validation', details: ['Field trials'] },
      { id: 'Launch', name: 'Launch', details: ['Full commercialization'] }
    ]
  },
  {
    id: 'kotter-change',
    name: 'Kotter\'s 8-Step Model',
    description: 'Leading successful organizational change.',
    category: 'Change & Communication',
    layout: 'staircase',
    sections: [
      { id: 'Urgency', name: 'Create Urgency', details: ['Market reality'] },
      { id: 'Coalition', name: 'Form Coalition', details: ['Powerful group'] },
      { id: 'Vision', name: 'Create Vision', details: ['Strategy for change'] },
      { id: 'Communicate', name: 'Communicate Vision', details: ['Engage stakeholders'] },
      { id: 'Empower', name: 'Remove Obstacles', details: ['Empower action'] },
      { id: 'Wins', name: 'Short-Term Wins', details: ['Visible successes'] },
      { id: 'Build', name: 'Build on Change', details: ['Consolidate gains'] },
      { id: 'Anchor', name: 'Anchor in Culture', details: ['Standardize'] }
    ]
  },
  {
    id: 'adkar',
    name: 'ADKAR Model',
    description: 'Individual and organizational change goals.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Awareness', name: 'Awareness', details: ['Of need for change'] },
      { id: 'Desire', name: 'Desire', details: ['To participate'] },
      { id: 'Knowledge', name: 'Knowledge', details: ['How to change'] },
      { id: 'Ability', name: 'Ability', details: ['To implement skills'] },
      { id: 'Reinforcement', name: 'Reinforcement', details: ['To sustain change'] }
    ]
  },
  {
    id: 'leavitt-diamond',
    name: 'Leavitt\'s Diamond',
    description: 'Interdependence of Tasks, People, Structure, and Technology.',
    category: 'Change & Communication',
    layout: 'diamond',
    sections: [
      { id: 'Tasks', name: 'Tasks', details: ['Work processes'] },
      { id: 'People', name: 'People', details: ['Skills', 'Roles'] },
      { id: 'Structure', name: 'Structure', details: ['Hierarchy', 'Teams'] },
      { id: 'Technology', name: 'Technology', details: ['Systems', 'Tools'] }
    ]
  },
  {
    id: 'double-diamond',
    name: 'Double Diamond',
    description: 'Problem and solution space exploration.',
    category: 'Strategy & Innovation',
    layout: 'double-diamond',
    sections: [
      { id: 'Discover', name: 'Discover', details: ['Insight into problem'] },
      { id: 'Define', name: 'Define', details: ['Area to focus on'] },
      { id: 'Develop', name: 'Develop', details: ['Potential solutions'] },
      { id: 'Deliver', name: 'Deliver', details: ['Final solution'] }
    ]
  },
  {
    id: 'hofstede',
    name: 'Hofstede\'s Dimensions',
    description: 'Framework for understanding national cultures.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'PDI', name: 'Power Distance', details: ['Acceptance of hierarchy'] },
      { id: 'IDV', name: 'Individualism', details: ['Personal vs group achievement'] },
      { id: 'MAS', name: 'Masculinity', details: ['Assertiveness vs cooperation'] },
      { id: 'UAI', name: 'Uncertainty Avoidance', details: ['Tolerance for ambiguity'] },
      { id: 'LTO', name: 'Long-Term Orientation', details: ['Future vs present rewards'] },
      { id: 'IVR', name: 'Indulgence', details: ['Gratification vs restraint'] }
    ]
  },
  {
    id: 'doblin-10',
    name: 'Doblin\'s 10 Types of Innovation',
    description: 'Categorizes innovation into configuration, offering, and experience.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'ProfitModel', name: 'Profit Model', details: ['How you make money'] },
      { id: 'Network', name: 'Network', details: ['Connections with others'] },
      { id: 'Structure', name: 'Structure', details: ['Alignment of assets'] },
      { id: 'Process', name: 'Process', details: ['Superior methods'] },
      { id: 'Performance', name: 'Product Performance', details: ['Distinguishing features'] },
      { id: 'System', name: 'Product System', details: ['Complementary products'] },
      { id: 'Service', name: 'Service', details: ['Support and enhancements'] },
      { id: 'Channel', name: 'Channel', details: ['How offerings are delivered'] },
      { id: 'Brand', name: 'Brand', details: ['Representation of offerings'] },
      { id: 'Engagement', name: 'Customer Engagement', details: ['Distinctive interactions'] }
    ]
  },
  {
    id: 'innovation-ambition',
    name: 'Innovation Ambition Matrix',
    description: '2x2 matrix for market vs capability strategy.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Core', name: 'Core', details: ['Existing products/markets'] },
      { id: 'Adjacent', name: 'Adjacent', details: ['New products or markets'] },
      { id: 'Transformational', name: 'Transformational', details: ['New products and markets'] }
    ]
  },
  {
    id: 'hype-cycle',
    name: 'Gartner Hype Cycle',
    description: 'Graphical representation of maturity and adoption of technologies.',
    category: 'Strategy & Innovation',
    layout: 'hype-cycle',
    sections: [
      { id: 'Trigger', name: 'Innovation Trigger', details: ['Potential breakthrough'] },
      { id: 'Peak', name: 'Peak of Inflated Expectations', details: ['Frenzy of publicity'] },
      { id: 'Trough', name: 'Trough of Disillusionment', details: ['Interest wanes'] },
      { id: 'Slope', name: 'Slope of Enlightenment', details: ['Concrete examples of benefits'] },
      { id: 'Plateau', name: 'Plateau of Productivity', details: ['Mainstream adoption'] }
    ]
  },
  {
    id: 'three-horizons',
    name: 'Three Horizons of Growth',
    description: 'Framework for managing current performance and future growth.',
    category: 'Strategy & Innovation',
    layout: 'graph',
    sections: [
      { id: 'H1', name: 'Horizon 1: Core', details: ['Maintain core business'] },
      { id: 'H2', name: 'Horizon 2: Emerging', details: ['Build emerging businesses'] },
      { id: 'H3', name: 'Horizon 3: Future', details: ['Create viable future options'] }
    ]
  },
  {
    id: 'jtbd-canvas',
    name: 'JTBD Canvas',
    description: 'Mapping the job a customer is trying to accomplish.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Job', name: 'The Job', details: ['Primary task'] },
      { id: 'Outcomes', name: 'Desired Outcomes', details: ['Success metrics'] },
      { id: 'Constraints', name: 'Constraints', details: ['Obstacles'] },
      { id: 'Tasks', name: 'Related Tasks', details: ['Supporting actions'] }
    ]
  },
  {
    id: 'scamper',
    name: 'SCAMPER',
    description: 'Creative thinking technique using seven verbs to spur ideas.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'S', name: 'Substitute', details: ['Replace part of the problem'] },
      { id: 'C', name: 'Combine', details: ['Merge components'] },
      { id: 'A', name: 'Adapt', details: ['Adjust to new context'] },
      { id: 'M', name: 'Modify', details: ['Magnify or minify'] },
      { id: 'P', name: 'Put to Use', details: ['Alternative applications'] },
      { id: 'E', name: 'Eliminate', details: ['Simplify or remove'] },
      { id: 'R', name: 'Reverse', details: ['Rearrange or invert'] }
    ]
  },
  {
    id: 'lewin-change',
    name: 'Lewin\'s Change Model',
    description: 'Simple three-step process for managing change.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Unfreeze', name: 'Unfreeze', details: ['Prepare for change'] },
      { id: 'Change', name: 'Change', details: ['Implement movement'] },
      { id: 'Refreeze', name: 'Refreeze', details: ['Stabilize new state'] }
    ]
  },
  {
    id: 'trl',
    name: 'Technology Readiness Level',
    description: 'Assessing technology maturity from conception to deployment.',
    category: 'Strategy & Innovation',
    layout: 'staircase',
    sections: [
      { id: 'TRL1-3', name: 'Research', details: ['Basic principles', 'Proof of concept'] },
      { id: 'TRL4-6', name: 'Development', details: ['Lab validation', 'Prototype'] },
      { id: 'TRL7-9', name: 'Deployment', details: ['System demo', 'Operational'] }
    ]
  },
  {
    id: 'change-curve',
    name: 'Change Curve',
    description: 'Tracking morale and performance through organizational change.',
    category: 'Change & Communication',
    layout: 'graph',
    sections: [
      { id: 'Shock', name: 'Shock & Denial', details: ['Initial reaction'] },
      { id: 'Anger', name: 'Anger & Frustration', details: ['Resistance'] },
      { id: 'Depression', name: 'Depression', details: ['Lowest morale point'] },
      { id: 'Experiment', name: 'Experiment', details: ['Engagement begins'] },
      { id: 'Decision', name: 'Decision', details: ['Learning to work in new way'] },
      { id: 'Integration', name: 'Integration', details: ['Change is accepted'] }
    ]
  },
  {
    id: 'nabc',
    name: 'NABC Method',
    description: 'Developing powerful value propositions.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Need', name: 'Need', details: ['Market requirement'] },
      { id: 'Approach', name: 'Approach', details: ['Unique solution'] },
      { id: 'Benefit', name: 'Benefit', details: ['Value per cost'] },
      { id: 'Competition', name: 'Competition', details: ['Alternatives'] }
    ]
  },
  {
    id: 'design-sprint',
    name: 'Design Sprint',
    description: 'Five-day process for answering critical business questions.',
    category: 'Strategy & Innovation',
    layout: 'linear',
    sections: [
      { id: 'Monday', name: 'Understand', details: ['Map out problem'] },
      { id: 'Tuesday', name: 'Sketch', details: ['Generate solutions'] },
      { id: 'Wednesday', name: 'Decide', details: ['Select best idea'] },
      { id: 'Thursday', name: 'Prototype', details: ['Build realistic facade'] },
      { id: 'Friday', name: 'Test', details: ['Get user feedback'] }
    ]
  },
  {
    id: 'innovation-funnel',
    name: 'Innovation Funnel',
    description: 'Filtering ideas from concept to commercialization.',
    category: 'Strategy & Innovation',
    layout: 'funnel',
    sections: [
      { id: 'Ideation', name: 'Ideation', details: ['Raw concepts'] },
      { id: 'Feasibility', name: 'Feasibility', details: ['Screening'] },
      { id: 'Development', name: 'Development', details: ['Execution'] },
      { id: 'Launch', name: 'Launch', details: ['Market entry'] }
    ]
  },
  {
    id: 's-curve',
    name: 'S-Curve of Innovation',
    description: 'Tracking technology performance over time.',
    category: 'Strategy & Innovation',
    layout: 's-curve',
    sections: [
      { id: 'Emerging', name: 'Emerging', details: ['Slow start'] },
      { id: 'Growth', name: 'Growth', details: ['Rapid progress'] },
      { id: 'Maturity', name: 'Maturity', details: ['Plateau'] }
    ]
  },
  {
    id: 'three-box',
    name: 'Three-Box Solution',
    description: 'Balancing the present, past, and future.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Present', name: 'Manage the Present', details: ['Core business efficiency'] },
      { id: 'Past', name: 'Forget the Past', details: ['Divest obsolete assets'] },
      { id: 'Future', name: 'Create the Future', details: ['Breakthrough innovation'] }
    ]
  },
  {
    id: 'rogers-adoption',
    name: 'Diffusion of Innovations',
    description: 'Bell curve showing adoption rates over time.',
    category: 'Strategy & Innovation',
    layout: 'bell-curve',
    sections: [
      { id: 'Innovators', name: 'Innovators', details: ['Risk takers'] },
      { id: 'EarlyAdopters', name: 'Early Adopters', details: ['Opinion leaders'] },
      { id: 'EarlyMajority', name: 'Early Majority', details: ['Pragmatists'] },
      { id: 'LateMajority', name: 'Late Majority', details: ['Skeptics'] },
      { id: 'Laggards', name: 'Laggards', details: ['Traditionalists'] }
    ]
  },
  {
    id: 'satir-model',
    name: 'Satir Change Model',
    description: 'Emotional journey through the change process.',
    category: 'Change & Communication',
    layout: 'satir',
    sections: [
      { id: 'StatusQuo', name: 'Old Status Quo', details: ['Late status quo'] },
      { id: 'Resistance', name: 'Resistance', details: ['Foreign element'] },
      { id: 'Chaos', name: 'Chaos', details: ['Lowest performance'] },
      { id: 'Integration', name: 'Integration', details: ['Practice and proficiency'] },
      { id: 'NewStatusQuo', name: 'New Status Quo', details: ['Stability'] }
    ]
  },
  {
    id: 'burke-litwin',
    name: 'Burke-Litwin Model',
    description: 'Causal diagram of organizational variables.',
    category: 'Change & Communication',
    layout: 'grid',
    sections: [
      { id: 'Strategy', name: 'Mission & Strategy', details: ['Organization purpose'] },
      { id: 'Leadership', name: 'Leadership', details: ['Executive behavior'] },
      { id: 'Culture', name: 'Culture', details: ['Values and norms'] },
      { id: 'Structure', name: 'Structure', details: ['Reporting lines'] },
      { id: 'Systems', name: 'Systems', details: ['Policies and procedures'] }
    ]
  },
  {
    id: 'waterfall',
    name: 'Waterfall Model',
    description: 'Traditional, linear project management methodology.',
    category: 'Operations & Supply Chain',
    layout: 'staircase',
    sections: [
      { id: 'Requirements', name: 'Requirements', details: ['Documentation', 'Stakeholder sign-off'] },
      { id: 'Design', name: 'Design', details: ['Architecture', 'Technical specs'] },
      { id: 'Implementation', name: 'Implementation', details: ['Coding', 'Unit testing'] },
      { id: 'Verification', name: 'Verification', details: ['System testing', 'QA'] },
      { id: 'Maintenance', name: 'Maintenance', details: ['Support', 'Updates'] }
    ]
  },
  {
    id: 'scrum',
    name: 'Agile & Scrum',
    description: 'Iterative approach focusing on sprints and feedback loops.',
    category: 'Operations & Supply Chain',
    layout: 'cycle',
    sections: [
      { id: 'ProductBacklog', name: 'Product Backlog', details: ['Master list of features'] },
      { id: 'SprintBacklog', name: 'Sprint Backlog', details: ['Selected for the sprint'] },
      { id: 'Sprint', name: 'Sprint Cycle', details: ['2-4 weeks of execution'] },
      { id: 'Increment', name: 'Increment', details: ['Potentially shippable product'] }
    ]
  },
  {
    id: 'kanban',
    name: 'Kanban Board',
    description: 'Visual method for managing workflow and limiting WIP.',
    category: 'Operations & Supply Chain',
    layout: 'kanban',
    sections: [
      { id: 'Backlog', name: 'Backlog', details: ['Upcoming tasks'] },
      { id: 'InProgress', name: 'In Progress (WIP)', details: ['Currently being worked on'] },
      { id: 'Review', name: 'In Review', details: ['Validation / QA'] },
      { id: 'Done', name: 'Done', details: ['Completed value'] }
    ]
  },
  {
    id: 'porter-value-chain',
    name: 'Porter\'s Value Chain',
    description: 'Activities required to create competitive advantage.',
    category: 'Operations & Supply Chain',
    layout: 'value-chain',
    sections: [
      { id: 'Inbound', name: 'Inbound Logistics', details: ['Receiving', 'Storage', 'Inv control'] },
      { id: 'Operations', name: 'Operations', details: ['Manufacturing', 'Assembly', 'Packaging'] },
      { id: 'Outbound', name: 'Outbound Logistics', details: ['Shipping', 'Warehousing', 'Distribution'] },
      { id: 'Marketing', name: 'Marketing & Sales', details: ['Pricing', 'Promotion', 'Advocacy'] },
      { id: 'Service', name: 'Service', details: ['Installation', 'Repair', 'Training'] },
      { id: 'Infrastructure', name: 'Firm Infrastructure', details: ['Finance', 'Legal', 'Quality'] },
      { id: 'HR', name: 'HR Management', details: ['Recruiting', 'Training', 'Retention'] },
      { id: 'Tech', name: 'Tech Development', details: ['R&D', 'Design', 'Process automation'] },
      { id: 'Procurement', name: 'Procurement', details: ['Vendor selection', 'Purchasing'] }
    ]
  },
  {
    id: 'scor-model',
    name: 'SCOR Model',
    description: 'Supply chain management diagnostic tool.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Plan', name: 'Plan', details: ['Demand/supply planning'] },
      { id: 'Source', name: 'Source', details: ['Inventory/purchasing'] },
      { id: 'Make', name: 'Make', details: ['Production', 'WIP'] },
      { id: 'Deliver', name: 'Deliver', details: ['Order management'] },
      { id: 'Return', name: 'Return', details: ['Defective/excess goods'] },
      { id: 'Enable', name: 'Enable', details: ['Data', 'Compliance'] }
    ]
  },
  {
    id: 'prince2',
    name: 'PRINCE2',
    description: 'Process-based project management methodology.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'SU', name: 'Starting Up', details: ['Project mandate'] },
      { id: 'DP', name: 'Directing', details: ['Project board oversight'] },
      { id: 'IP', name: 'Initiating', details: ['Project plan (PID)'] },
      { id: 'CS', name: 'Controlling', details: ['Work packages'] },
      { id: 'MP', name: 'Managing Delivery', details: ['Product creation'] },
      { id: 'SB', name: 'Stage Boundaries', details: ['End of stage check'] },
      { id: 'CP', name: 'Closing', details: ['Final evaluation'] }
    ]
  },
  {
    id: 'moscow',
    name: 'MoSCoW Prioritization',
    description: 'Reaching common understanding on requirement importance.',
    category: 'Operations & Supply Chain',
    layout: 'columns',
    sections: [
      { id: 'Must', name: 'Must Have', details: ['Non-negotiable criticals'] },
      { id: 'Should', name: 'Should Have', details: ['High priority value additions'] },
      { id: 'Could', name: 'Could Have', details: ['Nice to have if resources permit'] },
      { id: 'Wont', name: 'Won\'t Have (Now)', details: ['Explicitly out of scope'] }
    ]
  },
  {
    id: 'cpm',
    name: 'Critical Path Method',
    description: 'Identifying the sequence of activities that determines project duration.',
    category: 'Operations & Supply Chain',
    layout: 'graph',
    sections: [
      { id: 'Tasks', name: 'Activities', details: ['Durations', 'Dependencies'] },
      { id: 'Early', name: 'Early Start/Finish', details: ['Forward pass'] },
      { id: 'Late', name: 'Late Start/Finish', details: ['Backward pass'] },
      { id: 'Float', name: 'Slack/Float', details: ['Buffer time'] }
    ]
  },
  {
    id: 'wbs',
    name: 'Work Breakdown Structure',
    description: 'Hierarchical decomposition of project into deliverables.',
    category: 'Operations & Supply Chain',
    layout: 'tree',
    sections: [
      { id: 'Level1', name: 'Project Level', details: ['Main goal'] },
      { id: 'Level2', name: 'Major Deliverables', details: ['Main phases'] },
      { id: 'Level3', name: 'Work Packages', details: ['Smallest manageable units'] }
    ]
  },
  {
    id: 'dmaic',
    name: 'Lean Six Sigma (DMAIC)',
    description: 'Data-driven quality strategy for process improvement.',
    category: 'Operations & Supply Chain',
    layout: 'linear',
    sections: [
      { id: 'Define', name: 'Define', details: ['Problem and goals'] },
      { id: 'Measure', name: 'Measure', details: ['Current performance'] },
      { id: 'Analyze', name: 'Analyze', details: ['Root cause of defects'] },
      { id: 'Improve', name: 'Improve', details: ['Implement solutions'] },
      { id: 'Control', name: 'Control', details: ['Maintain gains'] }
    ]
  },
  {
    id: 'risk-matrix',
    name: 'Risk Management Matrix',
    description: 'Prioritizing risks based on likelihood and impact.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'HighHigh', name: 'Critical (High/High)', details: ['Immediate action required'] },
      { id: 'HighLow', name: 'Monitor (High Impact/Low Prob)', details: ['Contingency planning'] },
      { id: 'LowHigh', name: 'Manage (Low Impact/High Prob)', details: ['Improve controls'] },
      { id: 'LowLow', name: 'Accept (Low/Low)', details: ['Periodic review'] }
    ]
  },
  {
    id: 'srm',
    name: 'SRM (Kraljic Matrix)',
    description: 'Segmenting suppliers for strategic management.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Strategic', name: 'Strategic Items', details: ['High profit, high risk'] },
      { id: 'Leverage', name: 'Leverage Items', details: ['High profit, low risk'] },
      { id: 'Bottleneck', name: 'Bottleneck Items', details: ['Low profit, high risk'] },
      { id: 'NonCritical', name: 'Non-Critical Items', details: ['Low profit, low risk'] }
    ]
  },
  {
    id: 'spiral-model',
    name: 'Spiral Model',
    description: 'Risk-driven process model for software engineering.',
    category: 'Operations & Supply Chain',
    layout: 'spiral',
    sections: [
      { id: 'Objectives', name: 'Identify Objectives', details: ['Requirements', 'Constraints'] },
      { id: 'Risks', name: 'Resolve Risks', details: ['Prototyping', 'Evaluation'] },
      { id: 'Develop', name: 'Development', details: ['Build and test'] },
      { id: 'Plan', name: 'Plan Next Phase', details: ['Review and commitment'] }
    ]
  },
  {
    id: 'evm',
    name: 'Earned Value Management',
    description: 'Measuring project performance and progress.',
    category: 'Operations & Supply Chain',
    layout: 'graph',
    sections: [
      { id: 'PV', name: 'Planned Value', details: ['Budgeted cost of work'] },
      { id: 'EV', name: 'Earned Value', details: ['Actual work performed'] },
      { id: 'AC', name: 'Actual Cost', details: ['Cost incurred'] }
    ]
  },
  {
    id: 'logistics-map',
    name: 'Logistics Network Design',
    description: 'Mapping the flow from suppliers to customers.',
    category: 'Operations & Supply Chain',
    layout: 'map',
    sections: [
      { id: 'Suppliers', name: 'Suppliers', details: ['Raw material sources'] },
      { id: 'Plants', name: 'Manufacturing Plants', details: ['Production hubs'] },
      { id: 'Warehouses', name: 'Distribution Centers', details: ['Storage and sorting'] },
      { id: 'Customers', name: 'Customer Clusters', details: ['Final demand points'] }
    ]
  },
  {
    id: 'make-buy',
    name: 'Make-Buy Matrix',
    description: 'Evaluating in-house production vs outsourcing.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Strategic', name: 'Strategic (Make)', details: ['Core competence', 'High control'] },
      { id: 'Critical', name: 'Critical (Partner)', details: ['Specialized skills', 'Collaboration'] },
      { id: 'Commodity', name: 'Commodity (Buy)', details: ['Standard parts', 'Price focus'] },
      { id: 'LowValue', name: 'Low Value (Outsource)', details: ['Non-core', 'Efficiency focus'] }
    ]
  },
  {
    id: 'xp-practices',
    name: 'Extreme Programming (XP)',
    description: 'Core practices for high-quality software development.',
    category: 'Operations & Supply Chain',
    layout: 'flower',
    sections: [
      { id: 'Pair', name: 'Pair Programming', details: ['Two devs, one machine'] },
      { id: 'TDD', name: 'Test-Driven Development', details: ['Tests before code'] },
      { id: 'CI', name: 'Continuous Integration', details: ['Frequent merges'] },
      { id: 'Refactor', name: 'Refactoring', details: ['Clean code'] },
      { id: 'Simple', name: 'Simple Design', details: ['Avoid over-engineering'] },
      { id: 'Planning', name: 'Planning Game', details: ['Frequent small releases'] }
    ]
  },
  {
    id: 'tco-analysis',
    name: 'Total Cost of Ownership',
    description: 'Analyzing all direct and indirect costs over a lifecycle.',
    category: 'Operations & Supply Chain',
    layout: 'columns',
    sections: [
      { id: 'Acquisition', name: 'Acquisition Costs', details: ['Purchase price', 'Shipping'] },
      { id: 'Operate', name: 'Operating Costs', details: ['Power', 'Labor', 'Training'] },
      { id: 'Maintain', name: 'Maintenance Costs', details: ['Repairs', 'Spare parts'] },
      { id: 'Disposal', name: 'End-of-Life', details: ['Resale', 'Recycling', 'Scrap'] }
    ]
  },
  {
    id: 'dupont',
    name: 'DuPont Analysis',
    description: 'Decomposing ROE into profitability, efficiency, and leverage.',
    category: 'Finance & Risk',
    layout: 'tree',
    sections: [
      { id: 'ROE', name: 'Return on Equity', details: ['Net Income / Equity'] },
      { id: 'Profitability', name: 'Profitability', details: ['Net Profit Margin (NI/Sales)'] },
      { id: 'Efficiency', name: 'Asset Efficiency', details: ['Asset Turnover (Sales/Assets)'] },
      { id: 'Leverage', name: 'Financial Leverage', details: ['Equity Multiplier (Assets/Equity)'] }
    ]
  },
  {
    id: 'eva',
    name: 'Economic Value Added (EVA)',
    description: 'Measuring true profit by deducting cost of capital.',
    category: 'Finance & Risk',
    layout: 'columns',
    sections: [
      { id: 'NOPAT', name: 'NOPAT', details: ['Net Operating Profit After Tax'] },
      { id: 'Capital', name: 'Capital Invested', details: ['Total Assets - Non-interest liabilities'] },
      { id: 'WACC', name: 'WACC', details: ['Weighted Average Cost of Capital'] }
    ]
  },
  {
    id: 'capital-allocation',
    name: 'Capital Allocation',
    description: 'Framework for deploying financial capital to maximize value.',
    category: 'Finance & Risk',
    layout: 'tree',
    sections: [
      { id: 'Available', name: 'Available Capital', details: ['Operating cash flow', 'Asset sales'] },
      { id: 'Organic', name: 'Organic Growth', details: ['R&D', 'CapEx'] },
      { id: 'Inorganic', name: 'M&A', details: ['Strategic acquisitions'] },
      { id: 'Return', name: 'Return to Sh.', details: ['Dividends', 'Buybacks'] }
    ]
  },
  {
    id: 'altman-z',
    name: 'Altman Z-Score',
    description: 'Predicting the probability that a firm will go into bankruptcy.',
    category: 'Finance & Risk',
    layout: 'gauge',
    sections: [
      { id: 'Safe', name: 'Safe Zone (Z > 2.99)', details: ['Strong financial position'] },
      { id: 'Grey', name: 'Grey Zone (1.81 < Z < 2.99)', details: ['Cautious monitoring'] },
      { id: 'Distress', name: 'Distress Zone (Z < 1.81)', details: ['High bankruptcy risk'] }
    ]
  },
  {
    id: 'financial-scorecard',
    name: 'Financial Scorecard',
    description: 'Holistic view of company health across key ratios.',
    category: 'Finance & Risk',
    layout: 'grid',
    sections: [
      { id: 'Liquidity', name: 'Liquidity', details: ['Current Ratio', 'Quick Ratio'] },
      { id: 'Profitability', name: 'Profitability', details: ['Gross Margin', 'EBITDA Margin'] },
      { id: 'Leverage', name: 'Solvency', details: ['Debt-to-Equity', 'Interest Coverage'] },
      { id: 'Efficiency', name: 'Operating Efficiency', details: ['Inventory Turnover', 'DSO'] }
    ]
  },
  {
    id: 'sva',
    name: 'Shareholder Value Analysis',
    description: 'Decomposing value drivers that contribute to shareholder wealth.',
    category: 'Finance & Risk',
    layout: 'tree',
    sections: [
      { id: 'SValue', name: 'Shareholder Value', details: ['Total return to shareholders'] },
      { id: 'Drivers', name: 'Value Drivers', details: ['Sales growth', 'Operating margin', 'Tax rate'] },
      { id: 'Investments', name: 'Investments', details: ['Working capital', 'Fixed assets'] },
      { id: 'Cost', name: 'Cost of Capital', details: ['WACC baseline'] }
    ]
  },
  {
    id: 'cba',
    name: 'Cost-Benefit Analysis',
    description: 'Evaluating projects by comparing total costs vs total benefits.',
    category: 'Finance & Risk',
    layout: 't-chart',
    sections: [
      { id: 'Costs', name: 'Projected Costs', details: ['Initial outlay', 'Maintenance', 'Opportunity costs'] },
      { id: 'Benefits', name: 'Projected Benefits', details: ['Revenue increase', 'Cost savings', 'Intangibles'] }
    ]
  },
  {
    id: 'working-capital-cycle',
    name: 'Working Capital Cycle',
    description: 'Tracking the flow of cash through inventory and receivables.',
    category: 'Finance & Risk',
    layout: 'cycle',
    sections: [
      { id: 'Cash', name: 'Cash', details: ['Initial capital'] },
      { id: 'Inventory', name: 'Inventory', details: ['Raw materials & finished goods'] },
      { id: 'Receivables', name: 'Receivables', details: ['Credit sales to customers'] },
      { id: 'Payables', name: 'Payables', details: ['Settling with suppliers'] }
    ]
  },
  {
    id: 'capm',
    name: 'CAPM (Conceptual)',
    description: 'Relationship between expected return and systematic risk (beta).',
    category: 'Finance & Risk',
    layout: 'graph',
    sections: [
      { id: 'RiskFree', name: 'Risk-Free Rate', details: ['Government bonds baseline'] },
      { id: 'Beta', name: 'Beta (Systematic Risk)', details: ['Market sensitivity'] },
      { id: 'Premium', name: 'Market Risk Premium', details: ['Required return above risk-free'] }
    ]
  },
  {
    id: 'dividend-policy',
    name: 'Dividend Policy Framework',
    description: 'Factors influencing the decision to pay or retain earnings.',
    category: 'Finance & Risk',
    layout: 'tree',
    sections: [
      { id: 'Decision', name: 'Dividend Decision', details: ['Payout vs Retention'] },
      { id: 'Finance', name: 'Financial Position', details: ['Profits', 'Liquidity'] },
      { id: 'Growth', name: 'Growth Opps', details: ['Reinvestment needs'] },
      { id: 'Expectations', name: 'Sh. Expectations', details: ['Signaling', 'Tax effects'] }
    ]
  },
  {
    id: 'financial-analysis-flow',
    name: 'Financial Analysis Framework',
    description: 'Structured process for interpreting financial data.',
    category: 'Finance & Risk',
    layout: 'linear',
    sections: [
      { id: 'Objective', name: 'State Objective', details: ['Define scope and purpose'] },
      { id: 'Data', name: 'Gather Data', details: ['Statements', 'Market info'] },
      { id: 'Process', name: 'Process Data', details: ['Ratios', 'Adjustments'] },
      { id: 'Analyze', name: 'Analyze & Interpret', details: ['Trends', 'Comparisons'] },
      { id: 'Report', name: 'Report Conclusions', details: ['Insights', 'Recommendations'] }
    ]
  },
  {
    id: 'merger-analysis',
    name: 'M&A Accretion / Dilution',
    description: 'Comparing pro-forma EPS to standalone EPS post-merger.',
    category: 'Finance & Risk',
    layout: 'comparison',
    sections: [
      { id: 'Standalone', name: 'Acquirer Standalone', details: ['Current EPS', 'Current Earnings'] },
      { id: 'Adjustments', name: 'Synergies & Interest', details: ['Cost savings', 'New debt cost'] },
      { id: 'ProForma', name: 'Combined Pro-Forma', details: ['Projected EPS', 'Ownership dilution'] }
    ]
  },
  {
    id: 'payback-period',
    name: 'Payback Visualization',
    description: 'Tracking cumulative cash flow to recover initial investment.',
    category: 'Finance & Risk',
    layout: 'graph',
    sections: [
      { id: 'Initial', name: 'Initial Investment', details: ['Year 0 Outflow'] },
      { id: 'Inflows', name: 'Annual Inflows', details: ['Year 1-5 generation'] },
      { id: 'Payback', name: 'Payback Point', details: ['Cumulative break-even'] }
    ]
  },
  {
    id: 'vpec-t',
    name: 'VPEC-T',
    description: 'Analyzing complex systems and their alignment.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Values', name: 'Values', details: ['Ethical/cultural norms'] },
      { id: 'Policies', name: 'Policies', details: ['Rules and constraints'] },
      { id: 'Events', name: 'Events', details: ['Critical triggers and data'] },
      { id: 'Content', name: 'Content', details: ['Information and assets'] },
      { id: 'Trust', name: 'Trust', details: ['Relationship dependencies'] }
    ]
  },
  {
    id: 'cmm',
    name: 'Capability Maturity Model',
    description: 'Assessing process maturity across five levels.',
    category: 'Operations & Supply Chain',
    layout: 'staircase',
    sections: [
      { id: 'L1', name: 'Initial', details: ['Ad-hoc, chaotic'] },
      { id: 'L2', name: 'Repeatable', details: ['Basic project management'] },
      { id: 'L3', name: 'Defined', details: ['Process standardization'] },
      { id: 'L4', name: 'Managed', details: ['Quantitative management'] },
      { id: 'L5', name: 'Optimizing', details: ['Continuous improvement'] }
    ]
  },
  {
    id: 'service-profit-chain',
    name: 'Service-Profit Chain',
    description: 'Linking employee satisfaction to profitability.',
    category: 'Strategy & Innovation',
    layout: 'linear',
    sections: [
      { id: 'Internal', name: 'Internal Quality', details: ['Employee satisfaction'] },
      { id: 'Value', name: 'External Value', details: ['Service quality/Value'] },
      { id: 'Satisfaction', name: 'Customer Satisf.', details: ['Loyalty'] },
      { id: 'Profit', name: 'Growth & Profit', details: ['Revenue increase'] }
    ]
  },
  {
    id: 'hoq',
    name: 'House of Quality (QFD)',
    description: 'Translating customer requirements into engineering specs.',
    category: 'Operations & Supply Chain',
    layout: 'hoq',
    sections: [
      { id: 'Customer', name: 'Whats (Customer Needs)', details: ['Primary requirements'] },
      { id: 'Technical', name: 'Hows (Technical)', details: ['Measurable specs'] },
      { id: 'Relationship', name: 'Relationship Matrix', details: ['Co-relation grid'] },
      { id: 'Roof', name: 'The Roof', details: ['Technical trade-offs'] }
    ]
  },
  {
    id: 'harts-ladder',
    name: 'Hart\'s Ladder',
    description: 'Levels of citizen/user involvement in projects.',
    category: 'Problem Solving & Decision Making',
    layout: 'ladder',
    sections: [
      { id: 'Initiated', name: 'User-Led Decisions', details: ['Top of the ladder'] },
      { id: 'Consulted', name: 'Consulted & Informed', details: ['Middle ground'] },
      { id: 'Assigned', name: 'Assigned & Informed', details: ['Tokenism level'] },
      { id: 'Manipulation', name: 'Manipulation', details: ['Bottom rungs'] }
    ]
  },
  {
    id: 'iceberg-model',
    name: 'Iceberg Model',
    description: 'Understanding deeper causes of events and systems.',
    category: 'Problem Solving & Decision Making',
    layout: 'iceberg',
    sections: [
      { id: 'Events', name: 'Events', details: ['Visible outcomes'] },
      { id: 'Patterns', name: 'Patterns & Trends', details: ['History of events'] },
      { id: 'Structures', name: 'Systemic Structures', details: ['Policies, power'] },
      { id: 'Mental', name: 'Mental Models', details: ['Beliefs, assumptions'] }
    ]
  },
  {
    id: 'eisenhower-matrix',
    name: 'Eisenhower Matrix',
    description: 'Prioritizing tasks based on urgency and importance.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Do', name: 'Do (Urgent/Important)', details: ['Immediate action'] },
      { id: 'Decide', name: 'Decide (Important/Not Urgent)', details: ['Schedule time'] },
      { id: 'Delegate', name: 'Delegate (Urgent/Not Important)', details: ['Who can do this?'] },
      { id: 'Delete', name: 'Delete (Neither)', details: ['Eliminate waste'] }
    ]
  },
  {
    id: 'swot-tows',
    name: 'SWOT-TOWS Matrix',
    description: 'Strategic options derived from SWOT factors.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'SO', name: 'SO Strategies', details: ['Strengths to leverage Opps'] },
      { id: 'WO', name: 'WO Strategies', details: ['Overcome Weakness using Opps'] },
      { id: 'ST', name: 'ST Strategies', details: ['Use Strength to avoid Threats'] },
      { id: 'WT', name: 'WT Strategies', details: ['Minimizing W and T'] }
    ]
  },
  {
    id: 'efqm',
    name: 'EFQM Excellence Model',
    description: 'Framework for organizational excellence and self-assessment.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Purpose', name: 'Purpose, Strategy & Culture', details: ['The "Why"'] },
      { id: 'Leadership', name: 'Leadership & Stakeholders', details: ['Engagement'] },
      { id: 'Value', name: 'Creating Sustainable Value', details: ['Operations'] },
      { id: 'Performance', name: 'Performance & Transformation', details: ['Results'] }
    ]
  },
  {
    id: 'real-options',
    name: 'Real Options Analysis',
    description: 'Investment choices as strategic options.',
    category: 'Finance & Risk',
    layout: 'tree',
    sections: [
      { id: 'Option', name: 'Wait to Invest', details: ['Flexibility value'] },
      { id: 'Expand', name: 'Option to Expand', details: ['Staged investment'] },
      { id: 'Abandon', name: 'Option to Abandon', details: ['Stop loss'] },
      { id: 'Switch', name: 'Option to Switch', details: ['Product/Process pivot'] }
    ]
  },
  {
    id: 'rbv',
    name: 'Resource-Based View (RBV)',
    description: 'Internal resources as the source of competitive advantage.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Value', name: 'Valuable', details: ['Neutralize threats/exploits opps'] },
      { id: 'Rare', name: 'Rare', details: ['Difficult for competitors to find'] },
      { id: 'Inimitable', name: 'Inimitable', details: ['Costly to imitate'] },
      { id: 'Organized', name: 'Organized', details: ['Ability to capture value'] }
    ]
  },
  {
    id: 'gemba-walk',
    name: 'Gemba Walk',
    description: 'Observation of the actual place where work happens.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Prepare', name: 'Theme & Purpose', details: ['What are we looking for?'] },
      { id: 'Observe', name: 'Go and See', details: ['Direct observation'] },
      { id: 'Ask', name: 'Ask Why', details: ['Understand the process'] },
      { id: 'Respect', name: 'Show Respect', details: ['Collaborate with workers'] }
    ]
  },
  {
    id: 'nominal-group',
    name: 'Nominal Group Technique',
    description: 'Structured brainstorming for group decision-making.',
    category: 'Problem Solving & Decision Making',
    layout: 'linear',
    sections: [
      { id: 'Silent', name: 'Silent Generation', details: ['Write down ideas'] },
      { id: 'Round', name: 'Round Robin', details: ['Share ideas without debate'] },
      { id: 'Clarify', name: 'Clarification', details: ['Discuss and group'] },
      { id: 'Vote', name: 'Voting', details: ['Rank and prioritize'] }
    ]
  },
  {
    id: 'paired-comparison',
    name: 'Paired Comparison Analysis',
    description: 'Comparing options against each other to find the best choice.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'OptionA', name: 'A vs B', details: ['Weighting preference'] },
      { id: 'OptionB', name: 'A vs C', details: ['Score comparison'] },
      { id: 'OptionC', name: 'B vs C', details: ['Final ranking'] }
    ]
  },
  {
    id: 'pre-mortem',
    name: 'Pre-mortem Analysis',
    description: 'Identifying potential failure points before they happen.',
    category: 'Problem Solving & Decision Making',
    layout: 'linear',
    sections: [
      { id: 'Imagine', name: 'Imagine Failure', details: ['Total disaster scenario'] },
      { id: 'Reasons', name: 'Generate Reasons', details: ['Why did it happen?'] },
      { id: 'Solutions', name: 'Identify Fixes', details: ['Mitigation strategies'] }
    ]
  },
  {
    id: 'reframing',
    name: 'Reframing Matrix',
    description: 'Looking at a problem from multiple perspectives.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Business', name: 'Product View', details: ['Technical features'] },
      { id: 'Sales', name: 'Sales View', details: ['Customer benefits'] },
      { id: 'Technical', name: 'Legal View', details: ['Compliance and risk'] },
      { id: 'Admin', name: 'User View', details: ['Ease of use'] }
    ]
  },
  {
    id: 'cps-process',
    name: 'Osborne-Parnes CPS',
    description: 'Six-step process for creative problem solving.',
    category: 'Problem Solving & Decision Making',
    layout: 'cycle',
    sections: [
      { id: 'Objective', name: 'Identify Objectives', details: ['Goal setting'] },
      { id: 'Fact', name: 'Gather Facts', details: ['Data and information'] },
      { id: 'Problem', name: 'Identify Problems', details: ['Core issue'] },
      { id: 'Idea', name: 'Idea Generation', details: ['Divergent thinking'] },
      { id: 'Solution', name: 'Identify Solutions', details: ['Targeted fixing'] },
      { id: 'Acceptance', name: 'Plan for Action', details: ['Implementation'] }
    ]
  },
  {
    id: 'heilmeier',
    name: 'Heilmeier Catechism',
    description: 'A set of questions for evaluating research and development projects.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Objective', name: 'Objective', details: ['What are you trying to do?'] },
      { id: 'Current', name: 'Status Quo', details: ['How is it done today?'] },
      { id: 'New', name: 'What is New?', details: ['Why will it succeed?'] },
      { id: 'Importance', name: 'Importance', details: ['Who cares?'] },
      { id: 'Risks', name: 'Risks', details: ['What are the pitfalls?'] },
      { id: 'Cost', name: 'Cost/Time', details: ['How much? How long?'] },
      { id: 'Checks', name: 'Checks', details: ['Midterm and final exams'] }
    ]
  },
  {
    id: 'ashby',
    name: 'Ashby\'s Law',
    description: 'Principle of requisite variety: only variety can destroy variety.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Variety', name: 'System Variety', details: ['Internal states'] },
      { id: 'Environment', name: 'Env. Variety', details: ['External complexity'] },
      { id: 'Regulator', name: 'Regulator', details: ['Control variety'] }
    ]
  },
  {
    id: 'change-equation',
    name: 'Change Equation',
    description: 'Formula for overcoming resistance to change.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Dissatisfaction', name: 'Dissatisfaction', details: ['Current state pain'] },
      { id: 'Vision', name: 'Vision', details: ['Desirable future state'] },
      { id: 'FirstSteps', name: 'First Steps', details: ['Practical moving forward'] },
      { id: 'Resistance', name: 'Resistance', details: ['Obstacles to overcome'] }
    ]
  },
  {
    id: 'smcr-model',
    name: 'SMCR Communication',
    description: 'Source, Message, Channel, and Receiver model.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Source', name: 'Source', details: ['Skills', 'Attitude', 'Knowledge'] },
      { id: 'Message', name: 'Message', details: ['Content', 'Elements', 'Structure'] },
      { id: 'Channel', name: 'Channel', details: ['Seeing', 'Hearing', 'Touching'] },
      { id: 'Receiver', name: 'Receiver', details: ['Decoder of message'] }
    ]
  },
  {
    id: 'bridges-transition',
    name: 'Bridges Transition',
    description: 'Managing the emotional side of change.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Ending', name: 'Ending', details: ['Letting go of the old'] },
      { id: 'Neutral', name: 'Neutral Zone', details: ['Core of transition'] },
      { id: 'Beginning', name: 'New Beginning', details: ['Acceptance and energy'] }
    ]
  },
  {
    id: 'congruence-model',
    name: 'Nadler-Tushman Congruence',
    description: 'Organizational analysis focused on alignment.',
    category: 'Strategy & Innovation',
    layout: 'congruence',
    sections: [
      { id: 'Inputs', name: 'Inputs', details: ['Strategy', 'Environment', 'Resources'] },
      { id: 'Work', name: 'Work', details: ['Tasks', 'Processes'] },
      { id: 'People', name: 'People', details: ['Skills', 'Needs'] },
      { id: 'Structure', name: 'Formal Org', details: ['Hierarchy', 'Systems'] },
      { id: 'Culture', name: 'Informal Org', details: ['Values', 'Norms'] },
      { id: 'Outputs', name: 'Outputs', details: ['Individual', 'Unit', 'Org performance'] }
    ]
  },
  {
    id: 'cultural-web',
    name: 'Cultural Web',
    description: 'Analyzing the paradigm and elements of organizational culture.',
    category: 'Leadership & Teams',
    layout: 'cultural-web',
    sections: [
      { id: 'Paradigm', name: 'The Paradigm', details: ['Core assumptions'] },
      { id: 'Stories', name: 'Stories', details: ['Company myths'] },
      { id: 'Symbols', name: 'Symbols', details: ['Logos', 'Status'] },
      { id: 'Power', name: 'Power Structures', details: ['Core influence'] },
      { id: 'Org', name: 'Org Structure', details: ['Hierarchy'] },
      { id: 'Control', name: 'Control Systems', details: ['Rewards', 'Measures'] },
      { id: 'Rituals', name: 'Rituals & Routines', details: ['Daily habits'] }
    ]
  },
  {
    id: 'six-value-medals',
    name: 'Six Value Medals',
    description: 'De Bono\'s framework for assessing types of value.',
    category: 'Problem Solving & Decision Making',
    layout: 'flower',
    sections: [
      { id: 'Gold', name: 'Gold Medal', details: ['Human value'] },
      { id: 'Silver', name: 'Silver Medal', details: ['Org value'] },
      { id: 'Steel', name: 'Steel Medal', details: ['Quality value'] },
      { id: 'Glass', name: 'Glass Medal', details: ['Innovation value'] },
      { id: 'Wood', name: 'Wood Medal', details: ['Environmental value'] },
      { id: 'Brass', name: 'Brass Medal', details: ['Perceived value'] }
    ]
  },
  {
    id: 'situational-leadership',
    name: 'Situational Leadership',
    description: 'Adapting leadership style to follower development.',
    category: 'Leadership & Teams',
    layout: 'matrix',
    sections: [
      { id: 'S1', name: 'S1: Directing', details: ['High task, low relationship'] },
      { id: 'S2', name: 'S2: Coaching', details: ['High task, high relationship'] },
      { id: 'S3', name: 'S3: Supporting', details: ['Low task, high relationship'] },
      { id: 'S4', name: 'S4: Delegating', details: ['Low task, low relationship'] }
    ]
  },
  {
    id: 'lencioni',
    name: 'Five Dysfunctions of a Team',
    description: 'Identifying and overcoming common team dysfunctions.',
    category: 'Leadership & Teams',
    layout: 'pyramid',
    sections: [
      { id: 'Results', name: 'Inattention to Results', details: ['Focus on collective goals'] },
      { id: 'Accountability', name: 'Avoidance of Accountability', details: ['Call out peers'] },
      { id: 'Commitment', name: 'Lack of Commitment', details: ['Ensure buy-in'] },
      { id: 'Conflict', name: 'Fear of Conflict', details: ['Healthy debate'] },
      { id: 'Trust', name: 'Absence of Trust', details: ['Be vulnerable'] }
    ]
  },
  {
    id: 'portfolio-map',
    name: 'Business Portfolio Map',
    description: 'Managing existing business models and new ventures.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Exploit', name: 'Exploit (Existing)', details: ['Search for efficiency'] },
      { id: 'Explore', name: 'Explore (New)', details: ['Search for new value'] }
    ]
  },
  {
    id: 'pest',
    name: 'PEST Analysis',
    description: 'Analyzing political, economic, social, and technological factors.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Political', name: 'Political', details: ['Regulations', 'Stability'] },
      { id: 'Economic', name: 'Economic', details: ['Interest rates', 'Inflation'] },
      { id: 'Social', name: 'Social', details: ['Demographics', 'Culture'] },
      { id: 'Technological', name: 'Technological', details: ['Innovation', 'R&D'] }
    ]
  },
  {
    id: 'product-lifecycle',
    name: 'Product Life Cycle',
    description: 'Stages of a product\'s life from introduction to decline.',
    category: 'Strategy & Innovation',
    layout: 'bell-curve',
    sections: [
      { id: 'Intro', name: 'Introduction', details: ['Market entry'] },
      { id: 'Growth', name: 'Growth', details: ['Scaling sales'] },
      { id: 'Maturity', name: 'Maturity', details: ['Peak market share'] },
      { id: 'Decline', name: 'Decline', details: ['Market exit'] }
    ]
  },
  {
    id: 'shell-matrix',
    name: 'Shell Directional Policy',
    description: '3x3 matrix for analyzing business prospects.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Leader', name: 'Leader', details: ['Strong sector / High attractiveness'] },
      { id: 'Growth', name: 'Growth', details: ['Strong sector / Medium attractiveness'] },
      { id: 'Custodial', name: 'Custodial', details: ['Weak sector / Low attractiveness'] }
    ]
  },
  {
    id: 'tuckman',
    name: 'Tuckman\'s Stages',
    description: 'Phases of group development: Forming to Adjourning.',
    category: 'Leadership & Teams',
    layout: 'linear',
    sections: [
      { id: 'Forming', name: 'Forming', details: ['Polite, uncertain'] },
      { id: 'Storming', name: 'Storming', details: ['Conflict, styles clash'] },
      { id: 'Norming', name: 'Norming', details: ['Cohesion, shared leadership'] },
      { id: 'Performing', name: 'Performing', details: ['Autonomy, goal focus'] },
      { id: 'Adjourning', name: 'Adjourning', details: ['Closing down'] }
    ]
  },
  {
    id: 'weisbord',
    name: 'Weisbord\'s Six-Box',
    description: 'Diagnosing organizational problems across six areas.',
    category: 'Leadership & Teams',
    layout: 'flower',
    sections: [
      { id: 'Purposes', name: 'Purposes', details: ['Goal clarity'] },
      { id: 'Structure', name: 'Structure', details: ['Work distribution'] },
      { id: 'Relationships', name: 'Relationships', details: ['Conflict management'] },
      { id: 'Rewards', name: 'Rewards', details: ['Equity and incentives'] },
      { id: 'Leadership', name: 'Leadership', details: ['System control'] },
      { id: 'Mechanisms', name: 'Helpful Mechanisms', details: ['Policies, tools'] }
    ]
  },
  {
    id: 'strategy-diamond',
    name: 'Strategy Diamond',
    description: 'Five integrated elements of a strategy.',
    category: 'Strategy & Innovation',
    layout: 'strategy-diamond',
    sections: [
      { id: 'Arenas', name: 'Arenas', details: ['Where will we be active?'] },
      { id: 'Vehicles', name: 'Vehicles', details: ['How will we get there?'] },
      { id: 'Differentiators', name: 'Differentiators', details: ['How will we win?'] },
      { id: 'Staging', name: 'Staging', details: ['Speed and sequence'] },
      { id: 'Logic', name: 'Economic Logic', details: ['How will we obtain returns?'] }
    ]
  },
  {
    id: 'pmbok',
    name: 'PMBOK Guide',
    description: 'The Project Management Body of Knowledge framework.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Initiating', name: 'Initiating', details: ['Project charter'] },
      { id: 'Planning', name: 'Planning', details: ['Scope and schedule'] },
      { id: 'Executing', name: 'Executing', details: ['Deliverables'] },
      { id: 'Monitoring', name: 'Monitoring', details: ['Quality and risk'] },
      { id: 'Closing', name: 'Closing', details: ['Project finalization'] }
    ]
  },
  {
    id: 'bcg-matrix',
    name: 'BCG Matrix',
    description: 'Growth-Share Matrix for portfolio analysis.',
    category: 'Strategy & Innovation',
    layout: 'matrix',
    matrixLabels: {
      x: { low: 'High Share', high: 'Low Share' },
      y: { low: 'Low Growth', high: 'High Growth' }
    },
    sections: [
      { id: 'Stars', name: 'Stars', details: ['High growth, High share', 'Invest for growth'] },
      { id: 'QuestionMarks', name: 'Question Marks', details: ['High growth, Low share', 'Analyze potential'] },
      { id: 'CashCows', name: 'Cash Cows', details: ['Low growth, High share', 'Milk for cash'] },
      { id: 'Dogs', name: 'Dogs', details: ['Low growth, Low share', 'Divest or liquidate'] }
    ]
  },
  {
    id: 'ansoff-matrix',
    name: 'Ansoff Matrix',
    description: 'Product/Market expansion grid for growth strategy.',
    category: 'Strategy & Innovation',
    layout: 'matrix',
    matrixLabels: {
      x: { low: 'Existing Products', high: 'New Products' },
      y: { low: 'Existing Markets', high: 'New Markets' }
    },
    sections: [
      { id: 'MarketDevelopment', name: 'Market Development', details: ['Existing product, New market'] },
      { id: 'Diversification', name: 'Diversification', details: ['New product, New market'] },
      { id: 'MarketPenetration', name: 'Market Penetration', details: ['Existing product, Existing market'] },
      { id: 'ProductDevelopment', name: 'Product Development', details: ['New product, Existing market'] }
    ]
  }
];

export const COLORS = [
  'bg-yellow-100',
  'bg-blue-100',
  'bg-green-100',
  'bg-pink-100',
  'bg-purple-100',
  'bg-orange-100'
];
