import * as ToastSource from "@radix-ui/react-toast";

import { keyframes, styled } from "../../styles";

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 32px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 32px))` },
})

export const ToastContainer = styled(ToastSource.Root, {
  backgroundColor: '$gray700',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$4',
  display: 'grid',
  gridTemplateAreas: "'title action' 'description action'",
  gridTemplateColumns: 'auto max-content',
  columnGap: '$4',
  alignItems: 'center',
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },

  svg: {
    width: '$5',
    height: '$5',
    color: '$gray100',
    cursor: 'pointer',
    transition: 'color 200ms ease-out',
    lineHeight: 0,
    marginTop: '-$2',

    '&:hover': {
      color: '$gray200',
    },
  },
})

export const ToastTitle = styled(ToastSource.Title, {
  gridArea: 'title',
  marginBottom: '$1',
  fontWeight: '$medium',
  color: '$white',
  fontSize: '$md',
})

export const ToastDescription = styled(ToastSource.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$gray200',
  fontSize: '$xs',
  lineHeight: '$shorter',
})

export const ToastAction = styled(ToastSource.Action, {
  gridArea: 'action',
})

export const ToastViewport = styled(ToastSource.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: '$3',
  width: '$80',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: '$full',
  outline: 'none',
})

export const ToastButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  minWidth: 60,
  color: '$ignite300',
  border: '2px solid $ignite500',

  '&:not(:disabled):hover': {
    backgroundColor: '$ignite500',
    color: '$white',
  },

  '&:disabled': {
    color: '$gray200',
    borderColor: '$gray200',
  },
})
