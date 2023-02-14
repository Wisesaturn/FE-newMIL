import React from 'react';

type ToastTypes = 'error' | 'warn' | 'success';

export interface ToastStyleProps {
  type: ToastTypes;
}

export interface ToastProps extends ToastStyleProps {
  message: string;
  timeout?: number | 2000;
}

export type ToastPortalFunction = ({
  children,
}: {
  children: React.ReactNode;
}) => React.ReactPortal;
export type ToastFunction = (props: ToastProps) => React.ReactElement;
