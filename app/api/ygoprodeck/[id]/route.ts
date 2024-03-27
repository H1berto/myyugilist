import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params: {id} }: { params: { id: string } }
) => {
  try {
    const response =
      await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&id=${id}language=pt&num=20&offset=0`)
    const result  = await response.json();
    if(result.error){
      return NextResponse.json({ error: result.error }, { status: 404 })
    }
    return NextResponse.json({ data: result.data })
  } catch (error){
    return NextResponse.json({ error: error }, { status: 500 });
  }
}