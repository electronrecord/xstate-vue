import { Machine } from 'xstate';
const isBadEmailFormat = (ctx, event) => ctx.email.length === 3

// This machine is completely decoupled from Vue
export const toggleMachine = Machine({
  id: 'toggle',
  context: {
    /* some data */
    email: '',
    password: '',
  },
  initial: 'dataEntry',
  states: {
    dataEntry: {
      on: {
        EMAIL_BLUR: {
          target: 'emailErr.badFormat',
          cond: isBadEmailFormat
        },
      }
    },
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    },
    emailErr: {
      onEntry: 'focusEmailInput',
      on: {
        ENTER_EMAIL: {
          // target: 'dataEntry',
          actions: 'cacheEmail'
        }
      },
      initial: 'badFormat',
      states: {
        badFormat: {},
        noAccount: {}
      }
    },
  }
});
