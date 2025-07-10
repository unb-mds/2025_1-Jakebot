from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import logging
from typing import Optional
import uvicorn

# Configuração básica de logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Modelos Pydantic para validação
class MessageRequest(BaseModel):
    text: str
    user_id: Optional[int] = None

class CSVProcessRequest(BaseModel):
    file_path: str
    delimiter: str = ","

# Inicialização do app
app = FastAPI(
    title="JakeBot API",
    description="API para o projeto JakeBot - UnB MDS 2025",
    version="2.0.0",
    docs_url="/docs",
    redoc_url=None
)

# CORS (ajuste conforme necessário)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas principais
@app.get("/")
async def root():
    """Rota de boas-vindas"""
    return {
        "message": "JakeBot API Online",
        "endpoints": {
            "docs": "/docs",
            "health": "/health",
            "process_message": "/process-message (POST)"
        }
    }

@app.post("/process-message")
async def process_message(request: MessageRequest):
    """Processa mensagens do bot"""
    try:
        logger.info(f"Mensagem recebida de user {request.user_id}: {request.text}")
        
        # Lógica de processamento (exemplo)
        processed_text = request.text.upper()
        
        return {
            "original": request.text,
            "processed": processed_text,
            "status": "success"
        }
        
    except Exception as e:
        logger.error(f"Erro ao processar mensagem: {str(e)}")
        raise HTTPException(status_code=500, detail="Erro interno no processamento")

@app.post("/process-csv")
async def process_csv(request: CSVProcessRequest):
    """Processa arquivos CSV (integra com ler_csv.py)"""
    try:
        # Adicione aqui a integração com seu ler_csv.py
        # from .ler_csv import processar_arquivo
        # result = processar_arquivo(request.file_path, request.delimiter)
        
        return {
            "file": request.file_path,
            "status": "processing",
            "note": "Implementar integração com ler_csv.py"
        }
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Arquivo não encontrado")

@app.get("/health")
async def health_check():
    """Health check para monitoramento"""
    return {"status": "healthy", "version": "2.0.0"}

# Tratamento global de erros
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.exception(f"Erro não tratado: {str(exc)}")
    return JSONResponse(
        status_code=500,
        content={"message": "Erro interno no servidor"}
    )

# Configuração para execução local
if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)