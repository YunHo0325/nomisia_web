from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.models import Item
from app.database import get_db
from sqlalchemy import text


router = APIRouter()

@router.get("/api/items")
async def get_items(db: AsyncSession = Depends(get_db)):
    # SQL 실행
    result = await db.execute(text("SELECT * FROM items"))
    rows = result.fetchall()
    
    # Row 객체를 딕셔너리로 변환
    items = [dict(row._mapping) for row in rows]
    return items

# @router.post("/api/items")
# async def create_item(name: str, description: str, db: AsyncSession = Depends(get_db)):
#     new_item = Item(name=name, description=description)
#     db.add(new_item)
#     await db.commit()
#     return new_item
