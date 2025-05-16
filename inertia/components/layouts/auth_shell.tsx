import React from 'react'
import { MoveRight } from 'lucide-react'

const AuthShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="hidden xl:flex flex-1 bg-background relative lg:p-6">
        <img
          className="object-cover object-center h-full rounded-2xl"
          src="/images/space.webp"
          alt="login background"
        />
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex items-center justify-between w-full p-16">
            <img src="images/logo.png" alt="Logo" className="w-10 h-10" />
            <a href="/" className="flex items-center gap-x-2 text-sm group text-white">
              Back to website
              <span className="group-hover:translate-x-1 transition-transform">
                <MoveRight size={16} />
              </span>
            </a>
          </div>
          <div className="text-center pb-36 text-4xl font-extralight text-white">
            Join the experience
          </div>
        </div>
      </div>
      <div className="flex flex-1 p-6">{children}</div>
    </div>
  )
}

export default AuthShell
