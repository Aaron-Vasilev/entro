import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.json()

  await prisma.taskRelation.createMany({ data: [
    { relatedId: data.relatedId, taskId: data.taskId },
    { relatedId: data.taskId, taskId: data.relatedId },
  ] })

  const relatedTasks = await prisma.$queryRaw`select * from "Task" join "TaskRelation" 
                                     on "TaskRelation"."relatedId"="Task"."id"
                                     where "TaskRelation"."taskId"=${data.taskId};`
  return NextResponse.json(relatedTasks)
}
