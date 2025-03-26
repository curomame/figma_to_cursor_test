import React, { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { TodoItem, NewTodoButton } from "@/app/components/Todo"

interface TodoItem {
  id: string
  title: string
  description: string
  completed: boolean
}

interface ColumnProps {
  id: string
  title: string
  items: TodoItem[]
  onToggleItem: (itemId: string) => void
  onAddItem: () => void
}

export function Column({ id, title, items, onToggleItem, onAddItem }: ColumnProps) {
  const [isHovering, setIsHovering] = useState(false)
  
  const getColumnProgress = () => {
    const totalItems = items.length
    if (totalItems === 0) return 0
    
    const completedItems = items.filter(item => item.completed).length
    return Math.round((completedItems / totalItems) * 100)
  }
  
  return (
    <div className="min-w-[350px] max-w-[432px] flex flex-col gap-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      
      <div 
        className="mb-2 relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Progress value={getColumnProgress()} className="h-2 w-full bg-gray-200" />
        {getColumnProgress() > 0 && isHovering && (
          <div 
            className="absolute" 
            style={{ 
              right: `${100 - getColumnProgress()}%`, 
              transform: 'translateX(50%)',
              bottom: '100%',
              marginBottom: '4px'
            }}
          >
            <span className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-white">
              {getColumnProgress()}%
            </span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col gap-3">
        {items.map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            completed={item.completed}
            onToggle={() => onToggleItem(item.id)}
          />
        ))}
        
        <NewTodoButton onClick={onAddItem} />
      </div>
    </div>
  )
} 