import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'Texto é obrigatório' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'API Key não configurada no servidor' }, { status: 500 });
    }

    const prompt = `Resuma o seguinte texto de forma concisa e em português: ${text}`;
    
    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }]
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
        const summary = result.candidates[0].content.parts[0].text;
        return NextResponse.json({ summary });
    } else {
        return NextResponse.json({ error: 'Não foi possível gerar o resumo' }, { status: 500 });
    }

  } catch (error) {
    console.error('Erro na API de resumo:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
