---
name: front-developper
description: "Use when building or refactoring frontend features with Vue.js, Vue 3, Composition API, reusable components, component-first architecture, BEM CSS/SCSS, responsive UI, or accessible interfaces."
---

# Frontend Development with Vue

Build maintainable frontend features with a component-first, reuse-conscious mindset. Prefer modern Vue 3 patterns, clear component APIs, and BEM naming for CSS and SCSS.

## Workflow

1. Inspect the target view, nearby components, styles, and package configuration before editing. Follow the repository's framework version, naming, routing, and styling conventions; do not introduce a new library or architecture without a concrete need.
2. Identify the user-facing responsibility and data flow. Split the feature into components when a piece has a distinct responsibility, repeated use, or a useful independent interface. Keep one-off presentation local when extracting it would add indirection without reuse or clarity.
3. Design component boundaries and APIs before implementing markup. Pass data down through props, communicate user actions with emitted events, and use slots when callers should provide variable content. Keep business or shared state out of purely presentational components.
4. Implement the smallest cohesive change. Keep markup semantic, styles scoped to the component where appropriate, and shared styles in the project's established style layer.
5. Check keyboard use, accessible names and alternatives, loading/empty/error states where relevant, and narrow viewport behavior. Run the most focused available checks, then the project build or tests when appropriate.

## Vue Practices

- For new Vue 3 components, prefer `<script setup>` and the Composition API. Use `defineProps`, `defineEmits`, and slots to make the component contract explicit. Preserve an existing Options API component unless the task calls for changing it.
- Keep components focused. Views compose page-level sections; reusable components own coherent pieces of interface; composables extract genuinely shared stateful behavior. Avoid both oversized components and one-component-per-element fragmentation.
- Make components reusable through meaningful inputs and events, not through many boolean flags or knowledge of a specific parent. Prefer a small, named API over implicit parent access or duplicated markup.
- Derive display values from props/state rather than storing duplicate state. Use computed values for derived data and watchers only for side effects that must react to changes.
- Use stable keys for rendered lists. Avoid mutating props and avoid direct DOM manipulation when Vue state or template features can express the behavior.
- Keep TypeScript optional and consistent with the project; do not introduce it into a JavaScript codebase just for one component.

Example of a small, reusable component contract:

```vue
<script setup>
defineProps({
	title: { type: String, required: true },
})

defineEmits(['select'])
</script>

<template>
	<article class="project-card">
		<h2 class="project-card__title">{{ title }}</h2>
		<button class="project-card__action" type="button" @click="$emit('select')">
			View project
		</button>
	</article>
</template>
```

## BEM Styling

- Name each independent component or style unit as a block: `.project-card`.
- Name parts of that block as elements: `.project-card__title`, `.project-card__action`.
- Represent a state or variation with a modifier: `.project-card--featured` or `.project-card__action--disabled`.
- Keep element names tied to the block, not nested BEM chains such as `.project-card__body__title`. Use a new block for an independently reusable child.
- In SCSS, nesting may shorten the source while preserving the emitted BEM names, for example `.project-card { &__title { ... } }`. Do not let Sass nesting create selector specificity or names that contradict BEM.
- Use classes for styling and state-specific modifier classes for visual states. Avoid styling through element names, IDs, or long descendant selectors when a BEM class is clear.
- Follow the existing choice of scoped component styles versus shared SCSS. Do not move unrelated styles or rename existing classes as part of a feature change.

## Quality Bar

- Use semantic HTML and native controls. Every interactive control must be keyboard-operable, have an accessible name, and show a visible focus state.
- Provide useful image alternatives; use empty alt text for decorative images. Do not rely on color alone to communicate state.
- Make layouts work at small and large widths without clipped text or horizontal overflow. Prefer flexible layout constraints over fixed dimensions for content.
- Keep visual states consistent and explicit, including hover, focus, disabled, selected, and loading states when applicable.
- Add or update focused tests when behavior changes and run the relevant lint, test, or build command available in the repository. Report any check that could not be run.

## Avoid

- Duplicating a repeated UI pattern instead of extracting a coherent reusable component.
- Extracting trivial markup solely to increase the component count.
- Components coupled to a particular route, global store, or parent when props, events, or slots provide a simpler boundary.
- Generic catch-all components with many unrelated modes and configuration flags.
- Replacing established project conventions or adding dependencies without a task-driven reason.