import prisma from "@/prisma"
import { Task } from "@/prisma/generated"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.json()
  const relatedTasks: Task[] = []

  await prisma.taskRelation.create({ data })

  const relations = await prisma.taskRelation.findMany({
    where: {
      taskId: data.taskId
    }
  })

  for (const rel of relations) {
    const task = await prisma.task.findFirst({ where: { id: rel.relatedId } })
    if (task)
      relatedTasks.push(task)
  }

  return NextResponse.json(relatedTasks)
}
