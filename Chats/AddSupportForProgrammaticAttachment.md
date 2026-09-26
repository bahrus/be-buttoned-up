# Add Support For Programmatic Attachment

## Bruce's Ask

Can you please follow the example of [be-persistent](https://github.com/bahrus/be-persistent) and [the addendum](../types/ImportantEnhancementAddendum.md) to add demos and adjust folder-picker.js as needed and add def.js to support programmatic attachment of this enhancement?

Please add your implementation notes below.

## Implementation Notes

(The ask says "folder-picker.js"; I took that to mean [be-buttoned-up.js](../be-buttoned-up.js). The sibling `folder-picker` repo already had this done, so I used it as the template alongside the addendum.)

All three attachment patterns (attribute, `enh.set`, `enh.get()`) are covered by tests and pass locally (`CI=1 npx playwright test`: 4 passed).

### Changes, by addendum step

1. **`init()` awaits `roundabout(...)`, then sets `self.initialized = true`** ([be-buttoned-up.js](../be-buttoned-up.js)). The `hydrate` action now requires `['enhancedElement', 'eventName', 'initialized']` ([emc.mjs](../emc.mjs)). `hydrate` also returns `{resolved: true}`, which the tests poll for before clicking.
2. **`ctx.emc || ctx.config`** in `init()`. Previously the class did a static `import emc from './emc.json'` and read `customData` from that. That import is gone.
   - Because of this, [🧥.mjs](../🧥.mjs) now spreads `...myJSON` so [🧥.json](../🧥.json) carries `customData`. Before, `🧥.json` had no `customData` and only worked because of the static import. Without this fix the 🧥 attribute would have spawned with no `hydrate` action.
3. **[def.js](../def.js)** exports `defBeButtonedUp(ref)`, the same shape as `defFolderPicker`/`defBePersistent`.
   - [package.json](../package.json) `exports`: added `./def.js`, `./emc.json` and `./🧥.json`. I removed `./emc.js` and `./🗽.js`, because neither file exists.
   - `files`: added `emc.json` and `🧥.json`. The old list only had `*.js`, so the published package would have been missing `emc.json`, which `be-hive` loads. I removed `types.d.ts` because there's no such file at the root.
   - `assign-gingerly` is now a direct dependency, pinned to `0.0.97` (same as folder-picker and be-persistent). `def.js` imports it directly. It had only come in transitively at `0.0.87`.
4. **Reserved-name collisions.** None. The props are `eventName` and `closeOnSelect`. `eventName` is already monitored through `hydrate`'s `ifAllOf`, so `propagate` isn't needed. `closeOnSelect` isn't read anywhere yet, so there's nothing to protect.
5. **Tests**, named like be-persistent's and folder-picker's: `tests/ProgrammaticDeclarativeInSequence`, `…OutOfSequence` and `ProgrammaticImperative` (`.html` + `.spec.mjs`). Each attaches with no attribute, waits for `resolved`, opens the menu and picks a command button. It then checks that the menu closed, that the anchoring button's `value` was set, and that `change` fired. The shared steps are in [tests/selectAndVerify.mjs](../tests/selectAndVerify.mjs).

**Demos:** [demo/Programmatic/](../demo/Programmatic/) has `DeclarativeInSequence.html`, `DeclarativeOutOfSequence.html` and `Imperative.html`. **README:** new "Programmatic Attachment (No Attributes)" section.

### Things to be aware of

- **`enhKey` renamed from `BeButtonedUp` to `beButtonedUp`**, so the API reads `button.enh.set.beButtonedUp…`. This breaks anyone reading `el.enh.BeButtonedUp`. The emoji key `🧥` is unchanged.
- **The `types` submodule was modified.** In `types/be-buttoned-up/types.d.ts`, `resolved?` and `initialized?` were added to `AllProps`, and `Actions.init` now takes `ctx` and returns a `Promise`. That change needs committing and pushing in the `types` repo, and then the submodule pointer needs updating here.
- **The imperative path has nothing it has to set.** `eventName` defaults to `'click'` and isn't actually used by `hydrate`, so `button.enh.get(emc)` alone is enough. The demos set `eventName = 'click'` anyway, so the `.set` examples have a property to write.
- **`closeOnSelect` is declared but not implemented.** The menu always closes on select. If that becomes configurable, add `closeOnSelect` to `customData.propagate` (or to an action condition), so a value set before spawn isn't lost.
- **The 🧥 attribute path isn't tested**, and neither was it before. I checked that `🧥.json` now includes `customData`, but I didn't run it in a browser.
