"use client"

import { useState } from "react"
import { Toaster } from "@/components/ui/toaster"
import { toast } from "@/hooks/use-toast"
import { Column } from "@/app/kanban/Column"

type TodoItem = {
  id: string
  title: string
  description: string
  completed: boolean
}

type TodoColumn = {
  id: string
  title: string
  items: TodoItem[]
}

export default function KanbanPage() {
  const [columns, setColumns] = useState<TodoColumn[]>([
    {
      id: "todo-1",
      title: "TO DO 1",
      items: [
        {
          id: "item-1-1",
          title: "Card Header",
          description: "Card Description",
          completed: false
        },
        {
          id: "item-1-2",
          title: "Card Header",
          description: "Card Description",
          completed: false
        }
      ]
    },
    {
      id: "todo-2",
      title: "TO DO 2",
      items: [
        {
          id: "item-2-1",
          title: "Card Header",
          description: "Card Description",
          completed: false
        },
        {
          id: "item-2-2",
          title: "Card Header",
          description: "Card Description",
          completed: false
        },
        {
          id: "item-2-3",
          title: "Card Header",
          description: "Card Description",
          completed: false
        }
      ]
    },
    {
      id: "todo-3",
      title: "TO DO 3",
      items: [
        {
          id: "item-3-1",
          title: "Card Header",
          description: "Card Description",
          completed: false
        },
        {
          id: "item-3-2",
          title: "Card Header",
          description: "Card Description",
          completed: false
        },
        {
          id: "item-3-3",
          title: "Card Header",
          description: "Card Description",
          completed: false
        },
        {
          id: "item-3-4",
          title: "Card Header",
          description: "Card Description",
          completed: false
        }
      ]
    },
    {
      id: "todo-4",
      title: "TO DO 4",
      items: [
        {
          id: "item-4-1",
          title: "Card Header",
          description: "Card Description",
          completed: true
        },
        {
          id: "item-4-2",
          title: "Card Header",
          description: "Card Description",
          completed: false
        },
        {
          id: "item-4-3",
          title: "Card Header",
          description: "Card Description",
          completed: false
        },
        {
          id: "item-4-4",
          title: "Card Header",
          description: "Card Description",
          completed: false
        },
        {
          id: "item-4-5",
          title: "Card Header",
          description: "Card Description",
          completed: false
        }
      ]
    }
  ])

  const toggleItemCompletion = (columnId: string, itemId: string) => {
    setColumns(
      columns.map(column => {
        if (column.id === columnId) {
          return {
            ...column,
            items: column.items.map(item => {
              if (item.id === itemId) {
                return { ...item, completed: !item.completed }
              }
              return item
            })
          }
        }
        return column
      })
    )
  }

  const addNewItem = (columnId: string) => {
    setColumns(
      columns.map(column => {
        if (column.id === columnId) {
          return {
            ...column,
            items: [
              ...column.items,
              {
                id: `item-${columnId}-${Date.now()}`,
                title: "제목을 입력하세요",
                description: "내용을 입력하세요",
                completed: false
              }
            ]
          }
        }
        return column
      })
    )
    toast({
      title: "알림",
      description: "새 카드가 추가되었습니다."
    })
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-10">KANBAN</h1>
      
      <div className="flex gap-6 overflow-x-auto">
        {columns.map(column => (
          <Column 
            key={column.id}
            id={column.id}
            title={column.title}
            items={column.items}
            onToggleItem={(itemId) => toggleItemCompletion(column.id, itemId)}
            onAddItem={() => addNewItem(column.id)}
          />
        ))}
      </div>
      
      <Toaster />
    </div>
  )
}
