import { c, cB, cM, cE } from '../../../_utils/cssr'

// vars:
// --n-border-color
// --n-color

export default c([
  cB('split', `
      display: flex;
      width: 100%;
      height: 100%;
`, [
    cM('horizontal', `
        flex-direction: row;
    `),
    cM('vertical', `
        flex-direction: column;
    `),
    cB('split-pane', `
        overflow: hidden;
    `),
    cB('split-second-pane', `
        flex: 1;
    `),
    cE('resize-trigger', `
        background-color: var(--n-border-color);
        transition: background-color .3s var(--n-bezier);
    `, [
      cM('hover', `
        background-color: var(--n-resize-trigger-color-hover);
      `),
      c('&:hover', `
        background-color: var(--n-resize-trigger-color-hover);
      `
      )
    ])
  ]
  )
])
