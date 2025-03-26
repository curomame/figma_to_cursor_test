import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

interface TodoItemProps {
  id: string
  title: string
  description: string
  completed: boolean
  onToggle: () => void
}

export function TodoItem({ id, title, description, completed, onToggle }: TodoItemProps) {
  return (
    <div 
      className={`p-6 border rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors ${
        completed ? "opacity-30" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <Checkbox 
          checked={completed}
          onCheckedChange={onToggle}
          className="mt-1"
        />
        <div>
          <h3 className="font-semibold text-base mb-1">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

interface NewTodoButtonProps {
  onClick: () => void
}

export function NewTodoButton({ onClick }: NewTodoButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-6 border rounded-lg text-gray-500 hover:bg-gray-50 transition-colors text-center"
    >
      + New
    </button>
  )
} 