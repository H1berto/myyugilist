import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const response =
    await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&language=pt&num=12&offset=0`)
  if (!response.ok)
    throw new Error(`Request failed with status ${response.status}`);

  const result  = await response.json();

  return NextResponse.json(result.data)
}