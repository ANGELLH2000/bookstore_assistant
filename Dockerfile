FROM ubuntu:20.04

# Instalar dependencias necesarias
RUN apt-get update && apt-get install -y \
    curl \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Instalar Ollama CLI
RUN curl -fsSL https://ollama.ai/install.sh | bash

# Exponer el puerto si es necesario
EXPOSE 8080

CMD ["ollama"]
