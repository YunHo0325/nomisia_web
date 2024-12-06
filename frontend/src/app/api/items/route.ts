import { NextResponse } from "next/server";

// FastAPI에서 데이터를 가져오는 서버 함수
export async function GET() {
  try {
    const response = await fetch("http://localhost:8000/api/items"); // FastAPI 백엔드 URL
    if (!response.ok) {
      throw new Error("Failed to fetch data from FastAPI");
    }
    const data = await response.json();
    return NextResponse.json(data); // 데이터를 JSON 형식으로 반환
  } catch (error) {
    console.error("Error fetching data from FastAPI:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
