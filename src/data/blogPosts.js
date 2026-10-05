const blogPosts = [
  {
    slug: 'boring-apis-are-good-apis',
    category: '.NET · API design',
    title: 'Boring APIs are good APIs',
    excerpt: 'Predictable endpoints leave more room for the product to do interesting things.',
    paragraphs: [
      'An API is a promise to the people and systems that depend on it. The best promises are easy to understand: names describe intent, responses have a consistent shape, and errors explain what a caller can do next.',
      'In ASP.NET Core, that often means keeping each endpoint focused, validating input at the boundary, and making the happy path easy to follow. Small, unsurprising pieces are easier to test and easier to change when the requirements move.',
      'Boring does not mean inflexible. It means the structure stays out of the way, so attention can go to the behavior that actually matters.'
    ]
  },
  {
    slug: 'components-as-boundaries',
    category: 'Vue · UI architecture',
    title: 'A component is a boundary, not just a file',
    excerpt: 'Good component APIs make reuse a consequence of clarity, not a goal on its own.',
    paragraphs: [
      'A component earns its place when it owns a coherent piece of interface and gives its callers a small, understandable contract. Props describe what it needs; events describe what happened; slots make room for content the caller should control.',
      'Extracting every small element creates indirection. Keeping a repeated interaction inside a large page creates duplication. The useful boundary sits between those extremes: reusable where the responsibility is real, local where it is not.',
      'That way of thinking applies beyond Vue. Clear boundaries make both interfaces and systems easier to reason about.'
    ]
  },
  {
    slug: 'small-steps-for-maintainable-systems',
    category: 'Engineering · Maintainability',
    title: 'Small steps toward maintainable systems',
    excerpt: 'A few practical habits make change less risky without turning every task into a redesign.',
    paragraphs: [
      'Maintainability is built in ordinary decisions: a name that explains intent, a function with one job, and a test around behavior that would be costly to break.',
      'When a feature touches an existing system, start by following the current path from user action to result. Then change the narrowest boundary that owns the behavior. This keeps the patch reviewable and gives a focused check a real chance to catch mistakes.',
      'Architecture should make likely changes easier. It does not need to predict every possible future.'
    ]
  }
]

export default blogPosts