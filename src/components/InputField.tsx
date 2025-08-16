import React, { useState } from 'react'

export interface InputFieldProps {
  id?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  placeholder?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  invalid?: boolean
  variant?: 'filled' | 'outlined' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  showClear?: boolean
  showPasswordToggle?: boolean
  type?: 'text' | 'password'
  className?: string
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md',
  showClear = false,
  showPasswordToggle = false,
  type = 'text',
  className = '',
}) => {
  const reactId = (React as any).useId ? (React as any).useId() : undefined
  const [internalValue, setInternalValue] = useState(value ?? '')
  const [showPassword, setShowPassword] = useState(false)

  // keep internal state in sync if controlled
  React.useEffect(() => {
    if (value !== undefined) setInternalValue(value)
  }, [value])

  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    if (onChange) onChange(e)
    if (value === undefined) setInternalValue(e.target.value)
  }

  const clear = () => {
    if (disabled) return
    if (onChange) {
      // create a fake event
      const ev = { target: { value: '' } } as unknown as React.ChangeEvent<HTMLInputElement>
      onChange(ev)
    }
    if (value === undefined) setInternalValue('')
  }

  const sizeClasses = {
  sm: 'text-sm py-1.5 px-2 rounded-md',
  md: 'text-base py-2 px-3 rounded-lg',
  lg: 'text-lg py-3 px-4 rounded-xl',
  }

  const variantClasses: Record<string, string> = {
  filled: 'bg-[var(--surface)] border border-transparent',
  outlined: 'bg-[var(--surface)] border border-[var(--border)]',
  ghost: 'bg-transparent border-transparent',
  }

  const invalidClasses = invalid || errorMessage ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' : ''
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : ''

  const idToUse = id || reactId || undefined

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label htmlFor={idToUse} className="mb-2 text-sm font-semibold text-[var(--text)]">{label}</label>}
      <div className={`relative flex items-center ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${invalidClasses} rounded-lg px-3 input-base`}>
        <input
          id={idToUse}
          aria-label={label}
          aria-invalid={invalid || Boolean(errorMessage)}
          aria-describedby={helperText || errorMessage ? `${idToUse}-desc` : undefined}
          className={`flex-1 outline-none bg-transparent w-full text-[var(--text)] placeholder-[var(--muted)] ${disabled ? 'pointer-events-none' : ''}`}
          type={inputType}
          placeholder={placeholder}
          value={internalValue}
          onChange={handleChange}
          disabled={disabled}
        />

        {showClear && internalValue && !disabled && (
          <button onClick={clear} aria-label="Clear" className="ml-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors" type="button">✕</button>
        )}

        {isPassword && showPasswordToggle && !disabled && (
          <button onClick={() => setShowPassword(s => !s)} aria-label="Toggle password" className="ml-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors" type="button">
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}

        {/* loading spinner example: if helperText === 'loading' */}
        {helperText === 'loading' && (
          <div className="ml-2 text-gray-500 dark:text-gray-400 spinner w-4 h-4" />
        )}
      </div>

      {helperText && helperText !== 'loading' && !errorMessage && (
        <div id={`${idToUse}-desc`} className="mt-2 text-xs text-[var(--muted)]">{helperText}</div>
      )}

      {errorMessage && (
        <div id={`${idToUse}-desc`} className="mt-2 text-xs text-red-400">{errorMessage}</div>
      )}
    </div>
  )
}

export default InputField
