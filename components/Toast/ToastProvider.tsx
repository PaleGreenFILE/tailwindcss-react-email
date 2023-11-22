'use client'
import React from 'react'
import NotificationsSystem, {
  atalhoTheme,
  NotificationsProvider,
  setUpNotifications,
  SlideTransition,
  useNotifications
} from 'reapop'

export function ATopLevelComponent() {
  // 1. Retrieve the notifications to display, and the function used to dismiss a notification.
  const { notifications, dismissNotification } = useNotifications()
  return (
    <div>
      <NotificationsSystem
        smallScreenBreakpoint={500}
        // 1. Replace the default `Transition` component.
        components={{ Transition: SlideTransition }}
        // 2. Pass the notifications you want Reapop to display.
        notifications={notifications}
        // 3. Pass the function used to dismiss a notification.
        dismissNotification={id => dismissNotification(id)}
        // 4. Pass a builtIn theme or a custom theme.
        theme={atalhoTheme}
      />
    </div>
  )
}

export function Provider({ children }: { children: React.ReactNode }) {
  return <NotificationsProvider>{children}</NotificationsProvider>
}

// run this function when your application starts before creating any notifications
setUpNotifications({
  defaultProps: {
    position: 'bottom-right',
    dismissible: false,
    dismissAfter: 5000
  },
  generateId: () => new Date().getTime().toString()
})
