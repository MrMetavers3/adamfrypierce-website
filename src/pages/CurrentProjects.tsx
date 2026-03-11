import { useState } from 'react'

const PASSWORD = 'ShowMeThePort55%'

export default function CurrentProjects() {
  const [input, setInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input === PASSWORD) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setInput('')
    }
  }

  if (unlocked) {
    return (
      <div className="min-h-screen px-8 md:px-16 lg:px-24 py-40">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-12">
          Current Projects
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          Coming soon — content goes here.
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8">
      <div className="w-full max-w-sm">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-8 text-center">
          Current Projects
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false) }}
            placeholder="Password"
            autoFocus
            className={`w-full px-4 py-3 rounded-lg bg-transparent border text-sm outline-none transition-colors ${
              error ? 'border-red-500/60' : 'border-border focus:border-primary/60'
            }`}
          />
          {error && (
            <p className="text-xs text-red-400">Incorrect password.</p>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}
