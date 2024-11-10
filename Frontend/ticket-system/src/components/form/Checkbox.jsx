import { useState } from 'react'
import { Checkbox, Field } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Label from '../form/Label'

export default function CheckBox({
  label = 'Default Label',      
  checked: controlledChecked,    
  onChange,                      
  disabled = false,              
  className = ''                
}) {
  const [internalChecked, setInternalChecked] = useState(false)
  const isControlled = controlledChecked !== undefined
  const isChecked = isControlled ? controlledChecked : internalChecked

  const handleChange = (checked) => {
    if (!isControlled) setInternalChecked(checked)
    onChange?.(checked)
  }

  return (
    <Field className={`flex items-center gap-2 ${className}`}>
      <Checkbox
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className={`group block size-4 rounded border bg-white dark:bg-gray-700 ${
          isChecked ? 'bg-indigo-700' : ''
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <CheckIcon className={`transition-opacity ${
          isChecked ? 'opacity-100 stroke-white' : 'opacity-0'
        }`}
        />
      </Checkbox>
      <Label className={disabled ? 'text-gray-400 dark:text-gray-600' : ''}>
        {label}
        {disabled && <span className="text-xs">(Disabled)</span>}
      </Label>
    </Field>
  )
}


