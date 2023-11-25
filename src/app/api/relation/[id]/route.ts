import prisma from "@/prisma"
import { Task } from "@/prisma/generated"
import { NextRequest, NextResponse } from "next/server"

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const taskId = +params.id
  const relatedTasks: Task[] = []

  const relations = await prisma.taskRelation.findMany({
    where: {
      taskId
    }
  })

  for (const rel of relations) {
    const task = await prisma.task.findFirst({ where: { id: rel.relatedId } })
    if (task)
      relatedTasks.push(task)
  }

  return NextResponse.json(relatedTasks)
}

