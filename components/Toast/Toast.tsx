'use client'
import { useNotifications } from 'reapop'

export function useNotification() {
  const { notify } = useNotifications()
  const showSuccessNotification = (message: string) => {
    notify(message, 'success')
  }
  const showSuccessWithoutTitleNotification = (message: string) => {
    notify(message, 'success')
  }
  const showInfoNotification = (message: string) => {
    notify(message, 'info', { title: 'Info' })
  }
  const showWarningNotification = (message: string) => {
    notify(message, 'warning')
  }
  const showLoadingNotification = (message: string) => {
    notify(message, 'loading', { title: 'Loading' })
  }
  const showErrorNotification = (message: string) => {
    notify(message, 'error')
  }
  return {
    showSuccessNotification,
    showErrorNotification,
    showLoadingNotification,
    showWarningNotification,
    showInfoNotification,
    showSuccessWithoutTitleNotification
  }
}
