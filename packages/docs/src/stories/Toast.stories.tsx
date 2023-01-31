import { Button, Toast, ToastProps } from "@sid-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";

export default {
  title: 'Data Display/Toast',
  component: ToastDemo,
  args: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Scheduled: Catch Up',
    description: 'Tuesday, February 7, 2023 at 6:34 PM',
    action: 'Undo',
  },
}

export const NoDescription: StoryObj<ToastProps> = {
  args: {
    title: 'Scheduled: Catch Up',
    action: 'exit',
  },
}

function ToastDemo(props: ToastProps) {
  const [isOpen, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </>
  )
}
