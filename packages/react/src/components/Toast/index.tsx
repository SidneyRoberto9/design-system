import * as ToastSource from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import { ComponentProps, ReactNode } from "react";

import { ToastContainer, ToastDescription, ToastTitle, ToastViewport } from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  content: string | ReactNode
  action: string | ReactNode
  description?: string
  title: string
}

export function Toast({
  description,
  content,
  action,
  title,
  ...props
}: ToastProps) {
  return (
    <ToastSource.Provider>
      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        {!!description && <ToastDescription>{description}</ToastDescription>}
        <ToastSource.Close asChild>
          <X weight="bold" />
        </ToastSource.Close>
      </ToastContainer>
      <ToastViewport />
    </ToastSource.Provider>
  )
}
