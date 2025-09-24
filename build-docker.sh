#!/bin/bash

# Script para build do Docker
echo "🐳 Iniciando build da imagem Docker..."

# Voltar para o diretório raiz do projeto
cd "$(dirname "$0")"

# Build da imagem
echo "📦 Construindo imagem..."
docker build -t nivaldeir/steam-inclui:v1 -f deploy/Dockerfile .

if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo "🚀 Para executar: docker run -p 3000:3000 nivaldeir/steam-inclui:v1"
else
    echo "❌ Erro no build"
    exit 1
fi
