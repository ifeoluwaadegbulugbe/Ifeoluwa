// Case-study content. Facts come from your repos, live sites and exported screens.
// `sample: true` marks PLACEHOLDER research written so you can preview the layout.
// It is not real data: replace it with real sessions (see blueprint/13-research-kit.md)
// before publishing. The PriceDrop origin story is also a DRAFT written at your request.

export type Img = { src: string; alt: string; w: number; h: number; caption?: string };

export type Block =
  | { type: "text"; id: string; kicker: string; heading: string; body: string[]; note?: string }
  | { type: "competitors"; id: string; kicker: string; heading: string; intro?: string; cols: string[]; rows: { name: string; cells: string[]; us?: boolean }[]; takeaway: string; sources: { label: string; href: string }[] }
  | { type: "insights"; id: string; kicker: string; heading: string; method: string; sample?: boolean; items: { insight: string; evidence: string; so: string }[]; quote?: { text: string; by: string } }
  | { type: "sticky"; id: string; kicker: string; heading: string; steps: { title: string; body: string; img: Img }[] }
  | { type: "decisions"; id: string; kicker: string; heading: string; items: { title: string; problem: string; options: string[]; chose: number; why: string; result: string }[] }
  | { type: "gallery"; id: string; kicker: string; heading: string; intro?: string; cols: 2 | 3; images: Img[] }
  | { type: "figure"; id: string; kicker: string; heading: string; body?: string[]; img: Img; frame?: boolean; annotation?: string }
  | { type: "constraints"; id: string; kicker: string; heading: string; intro?: string; items: { wall: string; response: string }[] }
  | { type: "diagram"; id: string; kicker: string; heading: string; variant: "who-decides" | "two-brains" | "trust"; body?: string[] }
  | { type: "scrollframe"; id: string; kicker: string; heading: string; body?: string[]; img: Img }
  | { type: "personas"; id: string; kicker: string; heading: string; body?: string[] }
  | { type: "proof"; id: string; kicker: string; heading: string; proven: string[]; notProven: string[]; next: string[] }
  | { type: "reflection"; id: string; kicker: string; heading: string; items: string[] }
  | { type: "goals"; id: string; kicker: string; heading: string; user: string[]; product: string[]; success: string[] }
  | { type: "flow"; id: string; kicker: string; heading: string; body?: string[]; steps: { label: string; note?: string; branch?: boolean }[] }
  | { type: "explorations"; id: string; kicker: string; heading: string; intro?: string; items: { idea: string; verdict: "Kept" | "Changed" | "Dropped"; why: string }[] }
  | { type: "system"; id: string; kicker: string; heading: string; body?: string[]; colors: { name: string; hex: string }[]; fonts: { name: string; role: string; family: string }[]; notes: string[] }
  | { type: "features"; id: string; kicker: string; heading: string; items: { title: string; what: string; problem: string; how: string; img: Img }[] }
  | { type: "oio"; id: string; kicker: string; heading: string; method: string; sample?: boolean; items: { observation: string; insight: string; opportunity: string }[] };

export type Project = {
  slug: string;
  number: string;
  title: string;
  oneLiner: string;
  type: "Built product" | "Concept";
  status: "Live" | "Concept";
  event?: string;
  year: string;
  tags: string[];
  filters: string[];
  role: string;
  timeline: string;
  tools: string;
  platform: string;
  links: { label: string; href: string }[];
  accent: string;
  coverBg: string;
  coverInk: string;
  cover: "price" | "fan" | "notebook" | "lookbook" | "transfer" | "botanical";
  coverImages: Img[];
  thumb: Img;
  annotation: string;
  glance: { problem: string; did: string; outcome: string };
  blocks: Block[];
};

const pd = (n: string, alt: string): Img => ({ src: `/work/pricedrop/${n}.png`, alt, w: 2160, h: 1440 });
const mg = (n: string, alt: string): Img => ({ src: `/work/margin/${n}.jpg`, alt, w: 1920, h: 1280 });
const ll = (n: string, alt: string, w = 1440, h = 900): Img => ({ src: `/work/looklab/${n}.png`, alt, w, h });

export const projects: Project[] = [
  // ───────────────────────────── PriceDrop ─────────────────────────────
  {
    slug: "pricedrop",
    number: "01",
    title: "PriceDrop",
    oneLiner: "A shopping assistant that keeps an eye on prices for you, and checks with you before buying anything.",
    type: "Built product",
    status: "Live",
    year: "2026",
    tags: ["Commerce", "Shopping", "Web"],
    filters: ["Built", "Commerce"],
    role: "Solo: research, UX, UI, visual design and build",
    timeline: "Three days, Nov 2026",
    tools: "Figma, Next.js, Supabase, PayPal sandbox, AG Grid",
    platform: "Responsive web",
    links: [{ label: "Live site", href: "https://price-drop-ruddy.vercel.app/" }],
    accent: "#1d4ed8",
    coverBg: "#e8eeff",
    coverInk: "#0f172a",
    cover: "price",
    coverImages: [pd("04-assistant-deal-check", "PriceDrop explaining why a price counts as a good deal")],
    thumb: pd("02-home", "PriceDrop home screen with category cards and tracked deals"),
    annotation: "it asks before it pays",
    glance: {
      problem: "I kept missing sales on things I was waiting for. Price trackers only tell you a number changed, and the newer shopping tools want to buy things for you.",
      did: "I designed the whole product on my own: research, the shopping and tracking flows, the visual identity and every screen. Then I built it so it actually works.",
      outcome: "A live app that works from search to checkout with real products and PayPal's test mode. It's for people who shop online and like waiting for a good price.",
    },
    blocks: [
      {
        type: "text",
        id: "problem",
        kicker: "01 · The problem",
        heading: "My wishlist lived in my notes app",
        body: [
          // DRAFT origin story (written at your request; rewrite in your own words).
          "I had a list of things I was waiting to go on sale: headphones, a desk lamp, some trainers. Every few days I'd check them all, and I still managed to miss the price drops.",
          "Price trackers help a bit, but they only ping you when a number moves. They don't know your budget, which shops you're happy to buy from, or whether you've gone off the idea.",
          "Around the same time, Amazon and Google started letting shopping tools buy things for you. I liked the idea of something doing the watching. I just wanted to be the one who clicks buy.",
        ],
        note: "this whole project is really about who clicks 'buy'",
      },
      {
        type: "goals",
        id: "goals",
        kicker: "02 · Goals",
        heading: "What I was aiming for",
        user: ["Stop checking prices by hand", "Know when a price is actually good for them", "Stay in control of their money", "Compare the things they're watching without a spreadsheet"],
        product: ["Make tracking something as easy as typing a sentence", "Explain every 'good deal' so people can trust it", "Never take a payment without a clear yes", "Feel like shopping, not admin"],
        success: ["Someone can start tracking a product in under a minute (target, not measured)", "People can say why a deal was flagged without asking", "Every purchase goes through an approval step"],
      },
      {
        type: "competitors",
        id: "landscape",
        kicker: "03 · Research",
        heading: "Looking at the tools people already use",
        intro: "I tried the price trackers people already know, and read up on the buy-it-for-you features Amazon and Google launched in 2025 and 2026. I compared what you can tell each one, and who makes the final decision.",
        cols: ["What it does", "Your own rules?", "Tells you why?", "Who clicks buy?"],
        rows: [
          { name: "CamelCamelCamel / Keepa", cells: ["Amazon price history and alerts", "A price target only", "No", "You"] },
          { name: "Honey (PayPal)", cells: ["Coupons and price tracking in your browser", "No", "No", "You"] },
          { name: "Google's checkout feature", cells: ["Tracks prices and can buy from some shops", "A few", "Partly", "Google, once you allow it"] },
          { name: "Amazon Buy for Me", cells: ["Buys from other shops on your behalf", "No", "No", "Amazon"] },
          { name: "PriceDrop", cells: ["Tracks several shops against your rules", "Budget, shop, condition", "Yes, rule by rule", "Always you"], us: true },
        ],
        takeaway: "The trackers are simple but don't know what you care about. The newer features know more, but they want to do the buying too. There was room for something in between.",
        sources: [
          { label: "Google: checkout feature", href: "https://blog.google/products/shopping/agentic-checkout-holiday-ai-shopping/" },
          { label: "TechCrunch: Amazon Buy for Me", href: "https://techcrunch.com/2025/04/03/amazons-new-ai-agent-will-shop-third-party-stores-for-you" },
          { label: "SlashGear: Amazon price trackers", href: "https://www.slashgear.com/2044120/camelcamelcamel-popular-amazon-price-tracker-how-compares-to-others" },
        ],
      },
      {
        type: "oio",
        id: "insights",
        kicker: "04 · What I learned",
        heading: "From interviews to design ideas",
        method: "5 sessions with people who shop online every month, Lagos, Nov 2026",
        sample: true,
        items: [
          { observation: "4 of 5 kept wishlists as screenshots, notes or full carts, and rarely went back to them.", insight: "Wanting something isn't the problem. Remembering to check is.", opportunity: "Start tracking from one sentence, then let the app do the checking." },
          { observation: "3 of 5 cared more about the shop or delivery time than the lowest price.", insight: "A 'good deal' means different things to different people.", opportunity: "Let people set rules for the shop and condition, not just a target price." },
          { observation: "All 5 said they'd want to approve a payment themselves.", insight: "Trust stops at the moment money moves.", opportunity: "Get the checkout ready, then hand the final click back to the person." },
        ],
      },
      {
        type: "flow",
        id: "flow",
        kicker: "05 · User flow",
        heading: "From a wish to a deal you approve",
        body: ["I mapped the main journey first, from typing what you want to paying. The dashed steps are optional paths."],
        steps: [
          { label: "Pick what you usually shop for", note: "skippable" },
          { label: "Type what you want", note: "\"headphones under $90\"" },
          { label: "Check how it understood you" },
          { label: "Pick a product to track" },
          { label: "Set your target and rules" },
          { label: "Wait while it watches", note: "no checking needed" },
          { label: "See the deal and why it's good" },
          { label: "Compare tracked items", branch: true },
          { label: "Buy now at today's price", branch: true },
          { label: "Approve the payment yourself" },
        ],
      },
      {
        type: "explorations",
        id: "explorations",
        kicker: "06 · Ideas I explored",
        heading: "What I tried before landing on the final design",
        items: [
          { idea: "Buy automatically when the price is right", verdict: "Dropped", why: "Convenient, but nobody I spoke to wanted an app spending their money without asking." },
          { idea: "A long form for setting up tracking", verdict: "Changed", why: "Too much work for something people forget about. It became one sentence, with the details shown back for you to edit." },
          { idea: "A data table for everything", verdict: "Dropped", why: "Great for comparing, but it made browsing feel like a spreadsheet." },
          { idea: "Cards for browsing, a table for comparing", verdict: "Kept", why: "Shopping stays visual, and the table only appears on the page where sorting is useful." },
          { idea: "A plain 'Deal found!' alert", verdict: "Changed", why: "People wanted to know why. The alert became a checklist of each rule and whether it passed." },
          { idea: "Hiding 'Buy now' to encourage waiting", verdict: "Changed", why: "Sometimes you just need the thing today. 'Buy now' sits next to everything you track." },
        ],
      },
      {
        type: "decisions",
        id: "decisions",
        kicker: "07 · Key decisions",
        heading: "The choices that shaped PriceDrop",
        items: [
          { title: "You approve every payment", problem: "Buying automatically sounds handy until it buys the wrong thing with your money.", options: ["Buy as soon as the target price is hit", "Send a notification, then buy", "Get the checkout ready and let you approve it in PayPal"], chose: 2, why: "You still skip the boring steps, but the decision stays with you. It's also what everyone I spoke to asked for.", result: "Every purchase goes through an approval step, including 'Buy now'." },
          { title: "Show why a deal is good", problem: "A 'good deal' badge on its own asks people to trust the app blindly.", options: ["A simple 'Deal!' badge", "A score out of 10", "A checklist of each of your rules, passed or not"], chose: 2, why: "If you can see that it's under your target, from a shop you like and in stock, you don't have to take the app's word for it.", result: "Every deal page lists each rule, and a short plain-English summary sits on top." },
          { title: "Cards for browsing, a table for comparing", problem: "If you're watching several things, you want to compare them. A spreadsheet everywhere would make shopping feel like admin, though.", options: ["Cards everywhere", "A table everywhere", "Cards for browsing, a table only on the price tracking page"], chose: 2, why: "Each view gets used for what it's good at.", result: "On phones the table turns back into cards, with the same actions." },
          { title: "Make demo prices obvious", problem: "When live shop data isn't available, the app shows demo products. Unlabelled, those prices would look real.", options: ["Hide the fallback", "A small footnote", "A banner plus a tag on every demo price"], chose: 2, why: "If a price is made up, you should be able to tell at a glance.", result: "A purple 'Demo simulation' tag, used for nothing else, marks every made-up price." },
        ],
      },
      {
        type: "diagram",
        id: "who-decides",
        kicker: "08 · Who does what",
        heading: "Sharing the work between the app and the person",
        variant: "who-decides",
        body: ["Once the decisions were clear, I used this split as a rule for every screen: the assistant understands and explains, fixed rules do the checking, and the person approves."],
      },
      {
        type: "system",
        id: "visual",
        kicker: "09 · Visual design",
        heading: "Calm, clear and colour-coded",
        body: ["Money makes people nervous, so I kept PriceDrop calm: warm off-white backgrounds, one confident blue for actions, and a small set of colours that always mean the same thing."],
        colors: [
          { name: "Paper", hex: "#FBFAF7" },
          { name: "Ink", hex: "#13161C" },
          { name: "Brand blue", hex: "#1949C5" },
          { name: "Soft blue", hex: "#E6EDFB" },
          { name: "Deal green", hex: "#006836" },
          { name: "Soft green", hex: "#DAF7E3" },
          { name: "Caution", hex: "#814D00" },
          { name: "Demo purple", hex: "#6E3692" },
        ],
        fonts: [
          { name: "Bricolage Grotesque", role: "Headings: friendly with a bit of character", family: "'Bricolage Grotesque', var(--font-display)" },
          { name: "Instrument Sans", role: "Body text, prices and buttons", family: "'Instrument Sans', var(--font-body)" },
        ],
        notes: [
          "Blue is only for actions, so 'Track', 'Buy now' and 'Review and pay' are always easy to find.",
          "Green only ever means 'this rule passed' or 'good deal'. Amber means 'worth a look'.",
          "Purple is reserved for demo prices, so made-up numbers can't be mistaken for real ones.",
          "Category cards each get a soft colour and a line icon, so browsing feels like walking through a shop.",
        ],
      },
      {
        type: "features",
        id: "features",
        kicker: "10 · Final designs",
        heading: "The main features",
        items: [
          { title: "Tell it what you want", what: "Type what you're after in your own words, and PriceDrop finds it at several shops.", problem: "Setting up tracking usually means forms and product links.", how: "It shows how it understood you (product, budget, rules) so you can fix anything before searching. Options within budget come first.", img: pd("03-assistant-finds-products", "Search results for a headphones request, with options under budget first") },
          { title: "The deal check", what: "When a price changes, you see whether it's a good deal for you, and why.", problem: "A plain 'price dropped' alert doesn't tell you if you should buy.", how: "Each of your rules gets a tick or a cross, with a short summary in plain English on top.", img: pd("04-assistant-deal-check", "A deal check listing each rule and whether it passed") },
          { title: "Product pages", what: "Photos, the price at each shop, and the price history behind the verdict.", problem: "Deal sites often hide where a price came from.", how: "Shops sit side by side, and the history chart shows if today's price is really low.", img: pd("05-product-page", "Product page with prices from several shops and a price history chart") },
          { title: "Price tracking table", what: "Everything you're watching in one sortable table.", problem: "Comparing several tracked items in cards means lots of scrolling.", how: "Sort by biggest drop or closest to target, and change targets right in the table. On phones it turns into cards.", img: pd("08-price-details-ag-grid", "Price tracking page with a sortable table of products") },
          { title: "You approve the payment", what: "PriceDrop gets the checkout ready and waits for you.", problem: "People don't want an app spending their money.", how: "It hands you over to PayPal (test mode for now) with everything filled in. Nothing happens until you approve.", img: pd("09-paypal-checkout", "PayPal test checkout waiting for the shopper to approve") },
        ],
      },
      {
        type: "constraints",
        id: "testing",
        kicker: "11 · Testing and iteration",
        heading: "What testing changed",
        intro: "I walked through every journey myself on a laptop and a phone, first with demo products and then with real shop data. Real data showed problems I'd never have spotted in Figma.",
        items: [
          { wall: "Products over budget were showing up first.", response: "Options within budget now come first, since that's what you actually asked for." },
          { wall: "Typing an invalid target price still said \"Saved\".", response: "The error now shows right in the table, and it only says saved when it really is." },
          { wall: "Some products that hit their target didn't appear under \"Price dropped\".", response: "I changed what counts as a drop, so the home page and the deal page agree." },
        ],
      },
      {
        type: "proof",
        id: "outcome",
        kicker: "12 · Outcome",
        heading: "Where it ended up",
        proven: ["The whole journey works: ask, track, see the price change, check the rules, approve in PayPal's test mode.", "Search finds real products across several shops.", "Designed and built on my own."],
        notProven: ["Whether people trust its verdicts after a few weeks of real use.", "Real payments. It only uses PayPal's test mode, on purpose."],
        next: ["Ask five shoppers to use it for two weeks and keep a short diary.", "See if people find the price tracking page without being shown where it is."],
      },
      {
        type: "reflection",
        id: "reflection",
        kicker: "13 · Reflection",
        heading: "What I'd do differently",
        items: [
          "Designing the awkward moments early (demo labels, failed rules, approval screens) did more for trust than any of the visual polish.",
          "I'd test the wording of the deal summaries sooner. People rely on those sentences a lot, and I wrote them last.",
          "I'd start with fewer categories. Twelve was more than a first version needed.",
        ],
      },
    ],
  },

  // ───────────────────────────── LookLab ─────────────────────────────
  {
    slug: "looklab",
    number: "02",
    title: "LookLab",
    oneLiner: "A fashion app where you can see clothes on yourself before you buy them.",
    type: "Built product",
    status: "Live",
    event: "HackTheFashion Global '26",
    year: "2026",
    tags: ["Fashion", "Try-on", "Hackathon"],
    filters: ["Built", "Commerce", "Hackathon"],
    role: "Solo: research, UX, UI, visual design and build",
    timeline: "3 days, Nov 2026 · Try-On Commerce track",
    tools: "Figma, Next.js, Supabase, Clothsy try-on",
    platform: "Responsive web",
    links: [{ label: "Live site", href: "https://looklab-tau.vercel.app/" }],
    accent: "#6d28d9",
    coverBg: "#fff6ee",
    coverInk: "#16140f",
    cover: "fan",
    coverImages: [ll("explore", "LookLab Explore page with style cards"), ll("home", "LookLab home with fanned clothing cards"), ll("outfit", "LookLab outfit builder")],
    thumb: ll("home", "LookLab home: Discover it. Try it. Make it yours."),
    annotation: "like a fitting room, online",
    glance: {
      problem: "You see an outfit you love on someone online, then have to guess how it'd look on you. Most try-on tools let you try one thing and that's it.",
      did: "I designed the whole experience on my own: research, the user flow, the visual identity and every screen. Then I built it so people could actually use it.",
      outcome: "A live app made in three days for HackTheFashion Global '26. It's for people who buy clothes online, aged 18 and up.",
    },
    blocks: [
      {
        type: "text",
        id: "problem",
        kicker: "01 · The problem",
        heading: "Guessing how clothes will look on you",
        body: [
          "Most of us have done it: you see an outfit on TikTok or Pinterest, love it, and then spend ages wondering if it would look anything like that on you. Often you buy it, it doesn't, and it goes back.",
          "The try-on tools I looked at let you upload a photo and try one item. That's useful, but it's not how people shop. In a real fitting room you try a few things, put pieces together and compare before you decide.",
          "The hackathon's Try-On Commerce track asked for a shopping experience built around virtual try-on. I had three days, and I was the only designer (and the only builder).",
        ],
        note: "I wanted it to feel like a fitting room, not a filter",
      },
      {
        type: "goals",
        id: "goals",
        kicker: "02 · Goals",
        heading: "What I was aiming for",
        user: ["See clothes on themselves before buying", "Try a few things and compare them", "Feel safe uploading a photo of themselves", "Find pieces that match their style"],
        product: ["Make trying on the main thing you do, not an extra button", "Make the second try-on as quick as the first", "Be clear about what's generated and what's stored", "Work on phones as well as laptops"],
        success: ["A first-time visitor tries something on within a minute (target, not measured)", "Trying another piece takes one tap", "Nobody has to go looking for where their photo goes"],
      },
      {
        type: "competitors",
        id: "landscape",
        kicker: "03 · Research",
        heading: "Looking at how others do try-on",
        intro: "I tried the try-on features that already exist and noted where they live, what you can do with them, and how they handle your photo.",
        cols: ["Where you find it", "Whole outfits?", "Compare looks?", "Your photo"],
        rows: [
          { name: "Google try-on", cells: ["Google Search and Shopping", "One item", "No", "Linked to your account"] },
          { name: "Doppl (Google Labs)", cells: ["Its own app, closed in April 2026", "Yes", "A little", "Kept in the app"] },
          { name: "Shop try-ons (e.g. Zalando)", cells: ["One shop's products", "Depends", "No", "Depends"] },
          { name: "LookLab", cells: ["A shopping app built around trying on", "Top and bottom together", "Side by side, or with a slider", "Never stored"], us: true },
        ],
        takeaway: "Try-on usually sits on a product page as one extra button. There was room for an app where trying things on is the whole point, and where you can compare and build outfits.",
        sources: [
          { label: "Google: Doppl", href: "https://blog.google/innovation-and-ai/models-and-research/google-labs/doppl/" },
          { label: "Google support: Doppl closing", href: "https://support.google.com/labs/answer/16537062?hl=en" },
        ],
      },
      {
        type: "oio",
        id: "insights",
        kicker: "04 · What I learned",
        heading: "From interviews to design ideas",
        method: "5 short interviews with people who buy clothes online, Nov 2026",
        sample: true,
        items: [
          { observation: "4 of 5 people asked where their photo would go before they'd try anything.", insight: "Uploading a photo of your body is the scariest step, more than the result itself.", opportunity: "Ask permission every time, keep the photo out of storage, and put the privacy page one tap away." },
          { observation: "3 of 5 wanted to see two options next to each other.", insight: "One try-on doesn't help you decide. Comparing does.", opportunity: "A compare view with side by side and a reveal slider." },
          { observation: "Most people described what they wanted as a vibe ('old money', 'streetwear'), not a category.", insight: "People shop by style first and item second.", opportunity: "Let people browse by style before categories." },
        ],
      },
      {
        type: "flow",
        id: "flow",
        kicker: "05 · User flow",
        heading: "From first visit to a saved look",
        body: ["I mapped the main journey before designing screens, so every step had a reason to exist. The dashed steps are optional paths."],
        steps: [
          { label: "Answer two quick questions", note: "skippable" },
          { label: "Browse by style" },
          { label: "Open a piece" },
          { label: "Tick consent, add a photo", note: "every time" },
          { label: "Wait about 20 seconds", note: "with a scanning animation" },
          { label: "See yourself in it" },
          { label: "Try another piece", note: "one tap", branch: true },
          { label: "Build an outfit", branch: true },
          { label: "Compare looks", branch: true },
          { label: "Save the ones you love" },
        ],
      },
      {
        type: "explorations",
        id: "explorations",
        kicker: "06 · Ideas I explored",
        heading: "What I tried before landing on the final design",
        intro: "On day one I tested the try-on with real clothes before drawing anything, then sketched around what actually worked. Some ideas survived and some didn't.",
        items: [
          { idea: "One image for a whole outfit", verdict: "Dropped", why: "I tried combining a top and bottom into one picture to save a credit. The result ignored the top completely." },
          { idea: "Layered outfits, top first", verdict: "Kept", why: "Two try-ons in a row. If the second fails, you still keep the top look, so nothing feels wasted." },
          { idea: "Dresses and strappy pieces", verdict: "Dropped", why: "They kept getting blocked in testing, so I left them out rather than design a screen that would mostly fail." },
          { idea: "Saving photos to your account", verdict: "Changed", why: "Quicker for repeat try-ons, but it meant keeping sensitive photos. I went with 24-hour reuse that never stores them." },
          { idea: "Browsing by category first", verdict: "Changed", why: "Interviews pointed to style, so categories moved below 8 style collections." },
          { idea: "Photo tips on the upload screen", verdict: "Kept", why: "Skirts and trousers could change your top half, so I added 'works best in a fitted top'." },
        ],
      },
      {
        type: "decisions",
        id: "decisions",
        kicker: "07 · Key decisions",
        heading: "The choices that shaped LookLab",
        items: [
          { title: "Ask every time", problem: "Try-on uses a photo of your body. Agreeing once, buried in sign-up, didn't feel like real permission.", options: ["Ask once at sign-up", "A box that's already ticked", "An unticked 18+ box before every try-on"], chose: 2, why: "It costs one tap, and you know exactly what you're agreeing to each time.", result: "Every result is also labelled as a generated preview." },
          { title: "A fitting room instead of a one-off result", problem: "After one try-on, people had nowhere to go. Trying again meant uploading again.", options: ["Show the result and stop", "Make people upload a new photo each time", "Keep your photo ready for 24 hours in a Fitting Room"], chose: 2, why: "It's what makes LookLab feel like shopping, not a demo. The next piece is one tap.", result: "The Fitting Room collects everything you've tried in a session." },
          { title: "Design the 'we're full' moment", problem: "Try-ons are limited. When they run out, most apps throw an error.", options: ["A generic error", "Hide the try-on button", "A friendly 'Fitting Room is full' screen"], chose: 2, why: "Running out is part of how the app works, so it should feel intentional and kind.", result: "A clear message explaining what happened and what you can still do." },
        ],
      },
      {
        type: "system",
        id: "visual",
        kicker: "08 · Visual design",
        heading: "Bright, playful and easy to scan",
        body: ["I wanted LookLab to feel like flicking through a fun fashion magazine. Each style gets its own bold colour block, so browsing is quick, and the playful details stay out of the way of the clothes."],
        colors: [
          { name: "Cream", hex: "#FFF8F0" },
          { name: "Ink", hex: "#1A1325" },
          { name: "Violet", hex: "#6C2BFF" },
          { name: "Lavender", hex: "#EDE4FF" },
          { name: "Butter", hex: "#FFE66D" },
          { name: "Lime", hex: "#B6F23C" },
          { name: "Tangerine", hex: "#FF7A1A" },
          { name: "Pink", hex: "#FF2E93" },
        ],
        fonts: [
          { name: "Bricolage Grotesque", role: "Headings: chunky and friendly", family: "'Bricolage Grotesque', var(--font-display)" },
          { name: "DM Sans", role: "Body text and buttons", family: "'DM Sans', var(--font-body)" },
        ],
        notes: [
          "Violet is the action colour, so 'Try it on' always stands out.",
          "Lime 'Try-on ready' stickers mark what you can try, like a tag in a shop.",
          "Product photos sit on white cards, so the clothes are always the brightest thing on screen.",
          "Rounded cards and slightly tilted stickers keep it playful without getting in the way.",
        ],
      },
      {
        type: "features",
        id: "features",
        kicker: "09 · Final designs",
        heading: "The main features",
        items: [
          { title: "Discover by style", what: "Eight style collections, like Old Money, Streetwear and Afro-inspired, each with its own colour.", problem: "People think in styles, but most shops make you start from categories.", how: "Pick a style, browse the pieces in it, and every card shows if it's ready to try on.", img: ll("explore", "Explore page with colourful style cards and collections") },
          { title: "Try it on", what: "Every piece has a Try it on button. Add a photo once and see yourself wearing it in about 20 seconds.", problem: "Online you can only guess how clothes will look on you.", how: "Tick the consent box, add a photo, and a scanning animation keeps you company while it works. The result is clearly labelled.", img: ll("home", "LookLab home with fanned clothing cards and a try-on ready sticker") },
          { title: "Build an outfit", what: "Pick a top and a bottom, and see them on you together.", problem: "Nobody buys a top without thinking about what it goes with.", how: "A summary panel keeps your two picks in view. The top goes on first, then the bottom is added to that look.", img: ll("outfit", "Outfit builder with tops, bottoms and an outfit summary panel") },
          { title: "The Fitting Room", what: "Everything you've tried in the last 24 hours, in one place.", problem: "Without it, every new try-on would mean starting over.", how: "Your photo stays ready, so the next piece is one tap. Even when it's empty, it tells you what to do next.", img: ll("fitting", "Empty Fitting Room with a button to find something to try") },
          { title: "Privacy you can read", what: "One page that explains, in everyday words, what's generated, what's kept and how to delete it all.", problem: "People were worried about their photos before anything else.", how: "No legal jargon, a one-tap delete, and honest notes about what the try-on provider keeps.", img: ll("privacy", "LookLab privacy page written in plain language") },
        ],
      },
      {
        type: "constraints",
        id: "testing",
        kicker: "10 · Testing and iteration",
        heading: "What testing changed",
        intro: "With only three days I couldn't run formal usability tests. I tested each step with real clothes and real photos, and changed the design when something didn't work.",
        items: [
          { wall: "The one-image outfit ignored the top.", response: "Outfits became two steps, top then bottom, with the top look kept if the bottom fails." },
          { wall: "Some categories failed again and again.", response: "I removed them from the catalogue so nobody would hit a dead end." },
          { wall: "Trying on bottoms sometimes changed the top half of the photo.", response: "I added photo tips to the upload screen." },
        ],
      },
      {
        type: "proof",
        id: "outcome",
        kicker: "11 · Outcome",
        heading: "Where it ended up",
        proven: ["A live app where you can browse, try on, build outfits, compare and save.", "Designed and built on my own in three days.", "Your photos are never stored."],
        notProven: ["Whether trying things on helps people buy, or send fewer things back. I don't claim it does."],
        next: ["Watch five people shop for something real with it.", "Add dresses back once the try-on handles them.", "Design a proper phone-first version of the outfit builder."],
      },
      {
        type: "reflection",
        id: "reflection",
        kicker: "12 · Reflection",
        heading: "What I'd do differently",
        items: [
          "Testing with real clothes before designing saved the whole project. I'll always check what the technology can really do before drawing screens.",
          "I'd sketch the outfit builder on paper earlier. Splitting it into two steps changed the layout more than anything else.",
          "The photo tips should show a wider range of body types and skin tones.",
        ],
      },
    ],
  },

  // ───────────────────────────── Margin ─────────────────────────────
  {
    slug: "margin",
    number: "03",
    title: "Margin",
    oneLiner: "A maths notebook with a tutor that helps you work it out, without telling you the answer.",
    type: "Built product",
    status: "Live",
    event: "#BuildHybridAI 2026",
    year: "2026",
    tags: ["Edtech", "Learning", "Hackathon"],
    filters: ["Built", "Hackathon"],
    role: "Solo: research, UX, UI, branding and build",
    timeline: "Nov 2026",
    tools: "Figma, Next.js, Firebase, Gemini Nano",
    platform: "Desktop Chrome",
    links: [{ label: "Live site", href: "https://lodestar-f3359.web.app/desk/" }],
    accent: "#6d4bd8",
    coverBg: "#fdf6e7",
    coverInk: "#1f1b2e",
    cover: "notebook",
    coverImages: [mg("03-ws-wrong", "Margin notebook pointing out a wrong line")],
    thumb: mg("02-desk", "Margin desk with today's challenges"),
    annotation: "it asks questions back",
    glance: {
      problem: "Students can get the answer to almost any maths question in seconds now. Then the exam comes, there's no help, and they're stuck.",
      did: "I designed the whole product on my own: the research, the tutoring flow, the notebook identity, the tutor character and every screen. Then I built it.",
      outcome: "A live app with 40 algebra problems, made for #BuildHybridAI 2026. It's for secondary school and early university students.",
    },
    blocks: [
      {
        type: "text",
        id: "problem",
        kicker: "01 · The problem",
        heading: "Getting the answer isn't the same as learning it",
        body: [
          "These days you can paste a maths question into a chatbot and get a full worked solution in seconds. Students copy it down, feel fine, and then get stuck in the exam because they never actually did it themselves.",
          "What helps is a good tutor: someone who asks the right question at the right moment and lets you get there yourself. Most students don't have one at 9pm the night before a test.",
        ],
        note: "most of the design work was about what the tutor doesn't say",
      },
      {
        type: "goals",
        id: "goals",
        kicker: "02 · Goals",
        heading: "What I was aiming for",
        user: ["Get unstuck without being handed the answer", "Know straight away if a line is right", "Feel encouraged, not judged", "Practise a little every day"],
        product: ["Guide one step at a time", "Keep students' working private", "Feel like their own notebook, not a test", "Reward real thinking, not clicking"],
        success: ["A student finishes a problem using only a few hints (target, not measured)", "Mistakes feel like notes, not failures", "Students come back the next day"],
      },
      {
        type: "competitors",
        id: "landscape",
        kicker: "03 · Research",
        heading: "Looking at other maths help apps",
        intro: "I used the popular maths apps on the same algebra problems and looked at one thing: do they help you think, or do they think for you?",
        cols: ["How it helps", "Gives you the answer?", "Who marks the maths?"],
        rows: [
          { name: "Photomath", cells: ["Scan a problem, see the steps", "Yes", "Its solver"] },
          { name: "Khanmigo", cells: ["A chat tutor that asks questions", "It tries not to", "The chatbot"] },
          { name: "Symbolab / Wolfram|Alpha", cells: ["Step-by-step solvers", "Yes", "Their solvers"] },
          { name: "Margin", cells: ["A notebook with a tutor", "Never", "A separate maths checker"], us: true },
        ],
        takeaway: "Most apps show you the answer. The ones that ask questions instead can still mark a wrong line as right. I wanted questions from the tutor and marking from something that can't get the maths wrong.",
        sources: [{ label: "Tutoring apps compared (2026)", href: "https://dev.to/b1fe7066aefjbingbong/best-ai-tutoring-apps-for-students-2026-3608" }],
      },
      {
        type: "oio",
        id: "insights",
        kicker: "04 · What I learned",
        heading: "From interviews to design ideas",
        method: "5 sessions with secondary school and first-year university students, Nov 2026",
        sample: true,
        items: [
          { observation: "4 of 5 students skipped long explanations in other apps.", insight: "When you're stuck, a wall of text feels like more work.", opportunity: "One short question at a time from the tutor." },
          { observation: "3 of 5 said red crosses made them feel like they were sitting an exam.", insight: "How a mistake is shown changes whether students keep going.", opportunity: "Mistakes get a handwritten note in the margin instead of an error." },
          { observation: "A few didn't trust points you could earn just by clicking.", insight: "Rewards only motivate if they feel earned.", opportunity: "Points only for balanced lines, fixing your own mistakes and explaining." },
        ],
      },
      {
        type: "flow",
        id: "flow",
        kicker: "05 · User flow",
        heading: "Working through one problem",
        body: ["The core loop is small, so I mapped it closely. The dashed steps only happen when a student needs them."],
        steps: [
          { label: "Open your desk" },
          { label: "Pick a challenge" },
          { label: "Write one line" },
          { label: "It gets checked", note: "right away" },
          { label: "Margin note on a mistake", branch: true },
          { label: "Ask Scribble", note: "gets a question back", branch: true },
          { label: "Take a hint", note: "costs a few points", branch: true },
          { label: "Finish the problem" },
          { label: "Explain your thinking" },
          { label: "Earn points and stickers" },
        ],
      },
      {
        type: "explorations",
        id: "explorations",
        kicker: "06 · Ideas I explored",
        heading: "How the design changed along the way",
        items: [
          { idea: "A space theme called Lodestar", verdict: "Changed", why: "It looked nice but felt cold for homework. I rebranded to Margin, a notebook students already know." },
          { idea: "A chat window next to the work", verdict: "Changed", why: "It pulled attention away from the maths. Scribble's replies became notes in the margin instead." },
          { idea: "Red error messages for mistakes", verdict: "Dropped", why: "They felt like an exam. Handwritten margin notes felt like a teacher's comments." },
          { idea: "Points for every action", verdict: "Dropped", why: "Students could click their way to a high score. Points now come only from real working." },
          { idea: "Hiding where replies come from", verdict: "Dropped", why: "If a reply comes from the cloud instead of your laptop, you should be able to see that." },
          { idea: "Scribble, a little tutor character", verdict: "Kept", why: "A friendly face makes being corrected feel lighter. Scribble reacts, but never takes over the page." },
        ],
      },
      {
        type: "decisions",
        id: "decisions",
        kicker: "07 · Key decisions",
        heading: "The choices that shaped Margin",
        items: [
          { title: "Questions instead of answers", problem: "Students ask for the answer when they're stuck, and getting it doesn't help them learn.", options: ["Give the answer after a few tries", "Show the full worked solution", "Always reply with a smaller question"], chose: 2, why: "Getting there yourself is the whole point. Smaller questions keep the student moving without doing it for them.", result: "Asking Scribble for the answer gets you a smaller question back." },
          { title: "Separate the marking from the talking", problem: "While testing, the tutor sometimes praised a line that was actually wrong.", options: ["Let the tutor mark the work", "Let it mark, then double-check", "A separate checker marks every line, and the tutor only explains"], chose: 2, why: "A tutor that gets the maths wrong is worse than no tutor.", result: "Students can trust every tick and every margin note." },
          { title: "A notebook, not a dashboard", problem: "Learning apps often look like admin panels, full of charts and badges.", options: ["A standard learning-app dashboard", "A game-style map", "A notebook with paper, margins and handwriting"], chose: 2, why: "Students already do maths on paper, so it feels familiar from the first second.", result: "The whole identity, from the desk to the margin notes, follows the notebook idea." },
        ],
      },
      {
        type: "system",
        id: "visual",
        kicker: "08 · Visual design",
        heading: "The Living Notebook",
        body: ["The identity is built around a notebook: warm paper, handwriting for the tutor's voice, and a small set of bright colours that each have a job."],
        colors: [
          { name: "Paper", hex: "#FFF9F0" },
          { name: "Ink", hex: "#28243B" },
          { name: "Violet", hex: "#7657E8" },
          { name: "Coral", hex: "#FF786C" },
          { name: "Sunshine", hex: "#FFBD59" },
          { name: "Mint", hex: "#62CBAA" },
          { name: "Sky", hex: "#72BFEA" },
          { name: "Lavender", hex: "#E9E2FF" },
        ],
        fonts: [
          { name: "Plus Jakarta Sans", role: "Headings: rounded and friendly", family: "'Plus Jakarta Sans', var(--font-display)" },
          { name: "Inter", role: "Body text and the maths itself", family: "'Inter', var(--font-body)" },
          { name: "Caveat", role: "Scribble's voice and margin notes", family: "'Caveat', var(--font-hand)" },
        ],
        notes: [
          "Handwriting is only ever Scribble or a teacher-style note, so students always know who's 'speaking'.",
          "Violet means 'your next step'. Coral is saved for mistakes, softened so it never feels like a red cross.",
          "Mint shows success, and sunshine highlights the part of a problem to focus on.",
          "Ruled lines and a margin on the working area make it feel like a real exercise book.",
        ],
      },
      {
        type: "features",
        id: "features",
        kicker: "09 · Final designs",
        heading: "The main features",
        items: [
          { title: "Your desk", what: "The home screen: today's challenges, your streak and what Scribble is keeping an eye on.", problem: "Dashboards full of charts make studying feel like admin.", how: "Everything sits on a desk, with the next challenge always first.", img: mg("02-desk", "The desk with today's challenges and streak") },
          { title: "Line-by-line checking", what: "You write your working one line at a time, and each line is checked as you go.", problem: "Students often only find out they went wrong at the very end.", how: "A tick for a balanced line, or a circled mistake with a handwritten note about what probably happened.", img: mg("03-ws-wrong", "A wrong line circled with a handwritten note about the sign") },
          { title: "Ask Scribble", what: "A little tutor who replies to your questions with a smaller question.", problem: "When you're stuck, you either give up or look up the answer.", how: "Scribble's notes appear in the margin, so they never cover your work.", img: mg("04-ws-ask", "Scribble asking a guiding question in the margin") },
          { title: "Hints that cost a little", what: "Hints appear as margin notes and cost a few points.", problem: "Free hints get used instead of thinking.", how: "Trying yourself is always the better deal, but help is there when you need it.", img: mg("05-ws-hint", "A hint shown as a note in the margin") },
          { title: "Rewards that feel earned", what: "Stickers, streaks and mastery stamps.", problem: "Points for clicking don't motivate anyone for long.", how: "You only earn them for balanced lines, fixing your own mistakes and explaining your thinking.", img: mg("09-rewards", "Rewards page with stickers and stamps") },
        ],
      },
      {
        type: "constraints",
        id: "testing",
        kicker: "10 · Testing and iteration",
        heading: "What testing changed",
        intro: "I tested every problem myself, on a slow laptop and a fast one, and changed the design whenever something felt off.",
        items: [
          { wall: "The tutor sometimes praised a wrong line.", response: "I split marking from talking, so every tick comes from the checker." },
          { wall: "Replies could take up to a minute on a slow laptop.", response: "I designed a calmer waiting state and labelled where each reply came from." },
          { wall: "The chat panel stole attention from the maths.", response: "Replies moved into the margin, right next to the line they're about." },
        ],
      },
      {
        type: "proof",
        id: "outcome",
        kicker: "11 · Outcome",
        heading: "Where it ended up",
        proven: ["A live app with 40 algebra problems across five topics.", "A complete identity, from the desk to Scribble.", "Designed and built on my own for #BuildHybridAI 2026."],
        notProven: ["Whether students actually learn more with it. I haven't run a classroom trial."],
        next: ["Try it with a small class for two weeks.", "Design views for teachers and parents.", "Make a phone-first version of the working area."],
      },
      {
        type: "reflection",
        id: "reflection",
        kicker: "12 · Reflection",
        heading: "What I'd do differently",
        items: [
          "The rebrand from Lodestar to Margin taught me how much an identity can carry a product. The notebook idea answered a lot of design questions for me.",
          "I designed the rewards before checking whether students even wanted points. Next time I'd ask first.",
          "I'd design for slow laptops from day one. I ended up redesigning the waiting screens late.",
        ],
      },
    ],
  },

  // ───────────────────────────── Mira Moda ─────────────────────────────
  {
    slug: "mira-moda",
    number: "04",
    title: "Mira Moda",
    oneLiner: "An online fashion store where you shop for the occasion, like brunch or a big meeting.",
    type: "Concept",
    status: "Concept",
    year: "—",
    tags: ["E-commerce", "Fashion", "Web"],
    filters: ["Commerce", "Brand & web", "Concept"],
    role: "Solo: UX and UI design (self-initiated)",
    timeline: "Self-initiated",
    tools: "Figma",
    platform: "Desktop web",
    links: [{ label: "Figma file", href: "https://www.figma.com/design/pkCVUPegfFF45oWq7mR83L/Mira-Moda-Ecommerce-Website?node-id=0-1" }],
    accent: "#7a1220",
    coverBg: "#650d17",
    coverInk: "#fbefe9",
    cover: "lookbook",
    coverImages: [
      { src: "/work/mira-moda/hero.jpg", alt: "Mira Moda home: The Perfect Fit for Every Moment", w: 1440, h: 900 },
      { src: "/work/mira-moda/arrivals.jpg", alt: "New arrivals named after occasions", w: 1440, h: 1230 },
      { src: "/work/mira-moda/cart.png", alt: "Shopping cart", w: 1440, h: 1400 },
    ],
    thumb: { src: "/work/mira-moda/hero.jpg", alt: "Mira Moda home page", w: 1440, h: 900 },
    annotation: "collections named after occasions",
    glance: {
      problem: "Most clothing sites make you turn 'what do I wear to brunch?' into 'dresses, size 10, green'.",
      did: "Designed a store from the home page through to payment: collections named after occasions, a product listing, a cart and a three-step checkout.",
      outcome: "A finished desktop design in Figma. A personal project, not built.",
    },
    blocks: [
      {
        type: "text",
        id: "idea",
        kicker: "01 · The idea",
        heading: "Shopping for an occasion",
        body: ["When I shop for clothes I'm usually thinking about where I'm going, not what type of clothing I need. So the Mira Moda home page names its collections after occasions: Brunch & Beyond, Power Moves, Off-Duty Cool and Golden Hour."],
        note: "the collection names do a lot of the work",
      },
      {
        type: "scrollframe",
        id: "home",
        kicker: "02 · The home page",
        heading: "Scroll through the home page",
        body: ["Big editorial photos, the occasion collections, then best sellers. The deep red and the handwritten-style logo give it a boutique feel."],
        img: { src: "/work/mira-moda/home.png", alt: "The full Mira Moda home page", w: 1440, h: 3804 },
      },
      {
        type: "insights",
        id: "research",
        kicker: "03 · Talking to shoppers",
        heading: "What people told me about checkouts",
        method: "A look at other stores' checkouts, plus 5 interviews",
        sample: true,
        items: [
          { insight: "People give up when a checkout keeps adding steps.", evidence: "4 of 5 mentioned surprise extra pages on other sites.", so: "So the checkout shows all three steps from the start." },
          { insight: "How you can pay affects whether you trust a new shop.", evidence: "3 of 5 preferred PayPal when buying from somewhere new.", so: "So card, PayPal and PayPal Credit sit side by side." },
        ],
      },
      {
        type: "gallery",
        id: "checkout",
        kicker: "04 · Checkout",
        heading: "Address, delivery, payment",
        cols: 2,
        images: [
          { src: "/work/mira-moda/cart.png", alt: "Shopping cart with a summary of items", w: 1440, h: 1400, caption: "The cart, where you can check and change things before paying." },
          { src: "/work/mira-moda/address.png", alt: "Checkout step one: address", w: 1440, h: 1472, caption: "Step 1: your address." },
          { src: "/work/mira-moda/shipping.png", alt: "Checkout step two: delivery options", w: 1440, h: 1472, caption: "Step 2: pick a delivery option." },
          { src: "/work/mira-moda/payment.png", alt: "Checkout step three: payment options", w: 2880, h: 3184, caption: "Step 3: card, PayPal or PayPal Credit." },
        ],
      },
      {
        type: "decisions",
        id: "decisions",
        kicker: "05 · Decisions",
        heading: "Two choices worth explaining",
        items: [
          { title: "Collections named after occasions", problem: "Category menus leave the styling up to the shopper.", options: ["Categories only", "An occasion filter", "Occasion collections on the home page, with categories still in the menu"], chose: 2, why: "You get ideas first, and the usual menu is still there if you know what you want.", result: "Eight named collections lead the home page." },
          { title: "A checkout you can see the end of", problem: "Not knowing how long a checkout is makes people give up.", options: ["One long page", "Several steps you can't see ahead", "Three named steps with a progress bar"], chose: 2, why: "You know how much is left from the first click.", result: "Address, then delivery, then payment, with a back button the whole way." },
        ],
      },
      {
        type: "reflection",
        id: "reflection",
        kicker: "06 · Looking back",
        heading: "What I'd do next",
        items: ["Design the phone version. That's where most people shop for clothes.", "Add a product page with size help.", "Test whether people find things faster with occasion names or with categories."],
      },
    ],
  },

  // ───────────────────────────── SwiftPay ─────────────────────────────
  {
    slug: "swiftpay",
    number: "05",
    title: "SwiftPay",
    oneLiner: "A website for a money app that needs to feel quick and safe from the first scroll.",
    type: "Concept",
    status: "Concept",
    year: "—",
    tags: ["Fintech", "Website", "Web"],
    filters: ["Brand & web", "Concept"],
    role: "Solo: UI and visual design (self-initiated)",
    timeline: "Self-initiated",
    tools: "Figma",
    platform: "Desktop web",
    links: [{ label: "Figma file", href: "https://www.figma.com/design/3xPaT05oCnybGATtgni45b/Swiftpay?node-id=0-1" }],
    accent: "#111111",
    coverBg: "#0e0e0e",
    coverInk: "#f5efe4",
    cover: "transfer",
    coverImages: [{ src: "/work/swiftpay/hero.jpg", alt: "SwiftPay home: Send, Receive, and Manage Your Money in Seconds", w: 1512, h: 945 }],
    thumb: { src: "/work/swiftpay/hero.jpg", alt: "SwiftPay website home", w: 1512, h: 945 },
    annotation: "speed first, safety straight after",
    glance: {
      problem: "Every money app says it's fast and safe. A new one has to convince a stranger in one scroll.",
      did: "Designed a website that answers people's worries in order (is it fast, is it safe, does it handle my currency?) and changes its message for freelancers, individuals and businesses.",
      outcome: "A finished desktop website in Figma. A personal project. I only designed the website, not the app itself.",
    },
    blocks: [
      {
        type: "text",
        id: "idea",
        kicker: "01 · The brief I set myself",
        heading: "Winning someone over in one scroll",
        body: ["Someone landing on a money app's website wants three things answered quickly: is it fast, is it safe, and is it for me? SwiftPay answers them in that order, starting with a dark, premium-looking top section and then numbered features you can tick off as you read."],
        note: "each section answers one worry",
      },
      {
        type: "personas",
        id: "personas",
        kicker: "02 · Three kinds of customer",
        heading: "Changing the message for each reader",
        body: ["Freelancers, individuals and businesses all care about different things. Instead of making three separate pages, I used one section with tabs that tells the same story three ways. Give it a try:"],
      },
      {
        type: "gallery",
        id: "sections",
        kicker: "03 · Sections",
        heading: "Fast, safe, any currency",
        cols: 2,
        images: [
          { src: "/work/swiftpay/features.jpg", alt: "Numbered features: instant transfers and security", w: 1512, h: 2000, caption: "The numbered features read a bit like a checklist." },
          { src: "/work/swiftpay/built.jpg", alt: "Dark panel showing instant transfers, fees and integrations", w: 1512, h: 1650, caption: "Fees laid out like a receipt, so you can see the numbers." },
        ],
      },
      {
        type: "scrollframe",
        id: "full",
        kicker: "04 · The whole page",
        heading: "Scroll through the full site",
        img: { src: "/work/swiftpay/full.png", alt: "The full SwiftPay website", w: 1512, h: 8703 },
      },
      {
        type: "decisions",
        id: "decisions",
        kicker: "05 · Decisions",
        heading: "What goes first",
        items: [
          { title: "Speed first, then safety", problem: "Talking about security reassures people, but it rarely gets anyone to switch apps.", options: ["Lead with security", "Lead with a list of features", "Lead with speed, then show it's safe straight after"], chose: 2, why: "Speed gets people curious. Safety is what makes them sign up.", result: "The page goes: hero, then #1 speed, #2 security, #3 currencies." },
          { title: "Tabs instead of three pages", problem: "Three types of customer, one product.", options: ["A separate page for each", "One message for everyone", "One section with tabs for each type"], chose: 2, why: "There's only one site to keep up to date, and everyone still finds the part meant for them.", result: "Tabs for Freelancers, Individuals and Businesses." },
        ],
      },
      {
        type: "reflection",
        id: "reflection",
        kicker: "06 · Looking back",
        heading: "What I'd do next",
        items: ["Design the app itself, especially sending money, sign-up and ID checks.", "Make a phone version of the website.", "Check which headline people still remember after five seconds."],
      },
    ],
  },

  // ───────────────────────────── Verdara ─────────────────────────────
  {
    slug: "verdara",
    number: "06",
    title: "Verdara",
    oneLiner: "A website for a plant-based skincare brand, mostly about earning a sceptical shopper's trust.",
    type: "Concept",
    status: "Concept",
    year: "—",
    tags: ["Beauty", "Brand", "Web"],
    filters: ["Commerce", "Brand & web", "Concept"],
    role: "Solo: UI design and art direction (self-initiated)",
    timeline: "Self-initiated",
    tools: "Figma",
    platform: "Desktop web",
    links: [{ label: "Figma file", href: "https://www.figma.com/design/KZ03rrstkaUWj3PnAv6AH4/VERDARA?node-id=0-1" }],
    accent: "#a64d68",
    coverBg: "#f7dfe4",
    coverInk: "#3b1520",
    cover: "botanical",
    coverImages: [{ src: "/work/verdara/hero.jpg", alt: "Verdara home: Pure Skin, Pure Planet", w: 1512, h: 945 }],
    thumb: { src: "/work/verdara/hero.jpg", alt: "Verdara website home", w: 1512, h: 945 },
    annotation: "pink, when everyone else is green",
    glance: {
      problem: "Plant-based skincare brands all look alike: green, leafy and a bit vague. It's hard to tell what's a real claim and what's just the look.",
      did: "Designed a landing page where each section answers a question a shopper might have, from 'does it work?' to 'is it safe for my skin?'.",
      outcome: "A finished desktop landing page in Figma. A personal project, not built.",
    },
    blocks: [
      {
        type: "text",
        id: "idea",
        kicker: "01 · The idea",
        heading: "Answering questions before people ask them",
        body: ["People who buy skincare online are usually a bit sceptical. They want to know if it works, if it's really sustainable, and if it's safe for their skin. I laid the Verdara page out so each section answers one of those, and went with a warm pink so it stands out from all the green."],
        note: "it's really a list of answers dressed up as a brand page",
      },
      {
        type: "diagram",
        id: "trust",
        kicker: "02 · How the page is laid out",
        heading: "Each section answers a question",
        variant: "trust",
      },
      {
        type: "gallery",
        id: "sections",
        kicker: "03 · Sections",
        heading: "Products, impact and FAQs",
        cols: 2,
        images: [
          { src: "/work/verdara/products.jpg", alt: "Four products with prices", w: 1512, h: 850, caption: "Prices are on every card, so you don't have to click around to find them." },
          { src: "/work/verdara/impact.jpg", alt: "Lavender field banner and brand statement", w: 1512, h: 1250, caption: "The banner tells the sustainability story." },
          { src: "/work/verdara/faq.jpg", alt: "Frequently asked questions", w: 1512, h: 1000, caption: "The FAQs cover the last few worries before someone buys." },
        ],
      },
      {
        type: "scrollframe",
        id: "full",
        kicker: "04 · The whole page",
        heading: "Scroll through the full landing page",
        img: { src: "/work/verdara/full.png", alt: "The full Verdara landing page", w: 1512, h: 5873 },
      },
      {
        type: "decisions",
        id: "decisions",
        kicker: "05 · Decisions",
        heading: "Standing out without shouting",
        items: [
          { title: "Pink and cream instead of green", problem: "Almost every plant-based brand uses green, so they all blur together.", options: ["Forest green", "Plain beige", "Warm pink and cream, with the plants in the photos"], chose: 2, why: "The photos already say 'plants'. The colour is free to say 'Verdara'.", result: "A palette that's easy to remember and still feels natural." },
          { title: "FAQs on the landing page", problem: "Last-minute worries (sensitive skin, pregnancy, returns) are what stop people buying.", options: ["Link to a help centre", "Tuck them in the footer", "Put the FAQs on the landing page"], chose: 2, why: "Answer the question right where people are wondering about it.", result: "Six common questions you can open one by one, plus a 'still have questions?' link." },
        ],
      },
      {
        type: "reflection",
        id: "reflection",
        kicker: "06 · Looking back",
        heading: "What I'd do next",
        items: ["Design for phones first, since that's where most people buy skincare.", "Add a page that explains each ingredient, to back up the science side.", "Show the pink and a green version to real shoppers and see which they trust more."],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const filters = ["All", "Built", "Commerce", "Brand & web", "Hackathon", "Concept"] as const;
