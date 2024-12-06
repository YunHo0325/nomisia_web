## 1. 환경 셋팅
```bash
git clone https://github.com/YunHo0325/nomisia_web.git

cd frontend
npm i
npm link
npm run build

cd ..
cd backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn sqlalchemy asyncpg
```

## 2. docker 빌드 및 실행
```bash
# Docker 빌드
docker-compose build

# Docker 실행
docker-compose up
```

## 3. 서비스 확인
- 프론트엔드: [http://localhost:3000](http://localhost:3000/)
- 백엔드: http://localhost:8000/docs
- PostgreSQL: `localhost:5432`
