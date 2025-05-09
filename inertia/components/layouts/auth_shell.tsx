import React from 'react'

const AuthShell = ({ children }: { children: React.ReactNode }) => {
  return (
    // design here a wrapper for all the auth pages:
    // login, register, forgot password, reset password
    <div className="flex h-screen">
      <div className="flex flex-1 bg-amber-500">image bg</div>
      <div className="flex flex-1 bg-green-400">{children}</div>
    </div>
  )
}

export default AuthShell
