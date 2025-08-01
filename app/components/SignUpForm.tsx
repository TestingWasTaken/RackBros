"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff } from "lucide-react"

interface SignUpFormProps {
  onBack: () => void
}

export default function SignUpForm({ onBack }: SignUpFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    console.log("Signup attempt:", { name, email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl w-full max-w-md"
        >
          <div className="flex items-center mb-8">
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5 text-white" />
            </button>
            <h2 className="text-2xl font-bold text-white ml-4">Join RackMate</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60"
                  aria-hidden="true"
                />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-white font-semibold mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60"
                  aria-hidden="true"
                />
                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-white font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60"
                  aria-hidden="true"
                />
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-white font-semibold mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60"
                  aria-hidden="true"
                />
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-purple-600 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 border-2 border-transparent hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/80">
              Already have an account?{" "}
              <button
                onClick={onBack}
                className="text-white font-semibold hover:underline focus:outline-none focus:underline"
              >
                Sign in here
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
