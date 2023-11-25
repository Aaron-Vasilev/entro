import prisma from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const task = req.nextUrl.searchParams.get('task')
  const query = req.nextUrl.searchParams.get('query')

  if (task && query) {
    const relations = await prisma.taskRelation.findMany({
      where: {
        taskId: +task
      }
    })

    const tasks = await prisma.task.findMany({
      where: { 
        title: { 
          contains: query
        },
        id: {
          not: +task,
        },  
        NOT: {
          id: {
            in: relations.map(r => r.relatedId)
          }
        }
      } 
    })

    return NextResponse.json(tasks)
  }

  return NextResponse.json([])
}
